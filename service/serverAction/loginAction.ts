"use server";
import bcrypt from "bcrypt";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constant";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { z } from "zod";

import { saveUserIdToSession } from "@/util/function";

const checkEmailExists = async (email: string) => {
  const user = await db.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
    },
  });

  return Boolean(user);
};

const loginSchema = z.object({
  email: z
    .string()
    .email()
    .toLowerCase()
    .refine(checkEmailExists, "An account with this email does not exist."),
  password: z.string(),
  // .min(PASSWORD_MIN_LENGTH)
  // .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
});

export const handleLoginForm = async (prevState: any, formData: FormData) => {
  const userInsertData = {
    email: formData.get("email"),
    password: formData.get("password"),
  };
  const checkValidation = await loginSchema.safeParseAsync(userInsertData);

  if (!checkValidation.success) {
    return checkValidation.error.flatten();
  } else {
    const user = await db.user.findUnique({
      where: {
        email: checkValidation.data.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    const checkPasswordHash = await bcrypt.compare(
      checkValidation.data.password,
      user!.password ?? "",
    );

    if (checkPasswordHash) {
      await saveUserIdToSession(user!.id);
      redirect("/profile");
    } else {
      return {
        fieldErrors: {
          password: ["Wrong password"],
          email: [],
        },
      };
    }
  }
};
