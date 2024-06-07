"use server";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constant";
import db from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcrypt";

import { redirect } from "next/navigation";

import { saveUserIdToSession } from "@/util/function";

const checkPasswords = ({
  password,
  confirmPassword,
}: {
  password: string;
  confirmPassword: string;
}) => password === confirmPassword;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username???",
      })
      .min(3)
      .max(10)
      .trim()
      .toLowerCase(),
    email: z.string().email().toLowerCase(),
    password: z.string(),
    // .min(PASSWORD_MIN_LENGTH)
    // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
    confirmPassword: z.string(),
    // .min(PASSWORD_MIN_LENGTH),
  })
  .superRefine(async (data, ctx) => {
    const user = await db.user.findUnique({
      where: {
        username: data.username,
      },
      select: {
        id: true,
      },
    });

    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "This username is already taken",
        path: ["username"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .superRefine(async (data, ctx) => {
    const user = await db.user.findUnique({
      where: {
        email: data.email,
      },
      select: {
        id: true,
      },
    });

    if (user) {
      ctx.addIssue({
        code: "custom",
        message: "This email is already taken",
        path: ["email"],
        fatal: true,
      });
      return z.NEVER;
    }
  })
  .refine(checkPasswords, {
    message: "Both passwords should be the same!",
    path: ["confirmPassword"],
  });

export const handleCreateAccountForm = async (
  prevState: any,
  formData: FormData,
) => {
  const userInsertData = {
    email: formData.get("email"),
    username: formData.get("username"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const result = await formSchema.safeParseAsync(userInsertData);

  if (!result.success) {
    return result.error.flatten();
  } else {
    const hashedPassword = await bcrypt.hash(result.data.password, 12);

    const user = await db.user.create({
      data: {
        username: result.data.username,
        email: result.data.email,
        password: hashedPassword,
      },
      select: {
        id: true,
      },
    });

    await saveUserIdToSession(user.id);

    redirect("/profile");
  }
};
