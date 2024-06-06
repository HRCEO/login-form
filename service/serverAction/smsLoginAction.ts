"use server";

import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong phone format",
  );
const tokenSchema = z.coerce.number().min(100000).max(999999);

interface smsVerificationPrevState {
  token: boolean;
}
export async function smsVerification(
  prevState: smsVerificationPrevState,
  formData: FormData,
) {
  const phoneData = formData.get("phone");
  const tokenData = formData.get("token");

  if (!prevState.token) {
    const result = phoneSchema.safeParse(phoneData);
    if (!result.success) {
      return {
        token: false,
        error: result.error.flatten(),
      };
    } else {
      return {
        token: true,
      };
    }
  } else {
    const result = tokenSchema.safeParse(tokenData);
    if (!result.success) {
      return {
        token: true,
        error: result.error.flatten(),
      };
    } else {
      redirect("/");
    }
  }
}
