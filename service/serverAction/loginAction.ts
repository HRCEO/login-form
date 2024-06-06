"use server";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR,
} from "@/lib/constant";
import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string()
    .min(PASSWORD_MIN_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR),
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
    redirect("/profile");
  }
};
