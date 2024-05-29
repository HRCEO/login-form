"use server"

import db from "@/lib/db";
import { z } from "zod";
import bcrypt from 'bcrypt'
import { redirect } from "next/navigation";

const checkUsername = (username: string) => !username.includes("potato");
const checkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;


const checkUniqueUsername = async (username: string) => {
    const user = await db.user.findUnique({
      where: {
        username,
      },
      select: {
        id: true,
      },
    });
    return !Boolean(user);
  };

const checkUniqueEmail = async (email: string) => {
    const user = await db.user.findUnique({
      where: {
        email,
      },
      select: {
        id: true,
      },
    });
    return Boolean(user) === false;
};

const PASSWORD_MIN_LENGTH = {
    minLength: 10,
    message:"Password must be at least 10 characters long"
}


const loginSchema = z.object({
    email:z.string().email({message:'You need input Email form'}).refine(
        checkUniqueEmail,
        "There is an account already registered with that email."
      ),
    username: z.string().min(5,{ message: "Username must be at least 5 characters long" }).refine(checkUniqueUsername, "This username is already taken"),
    password:z.string().min(PASSWORD_MIN_LENGTH.minLength,PASSWORD_MIN_LENGTH.message)
    .regex(/\d/, { message: "Password must contain at least one number" }),
    confirmPassword:z.string().min(4)
  }).superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Two passwords should be equal",
        path: ["confirmPassword"],
      });
    }
  });

export const handleCreateAccountForm = async (prevState:any,formData:FormData) => {
    const userInsertData = {
        email:formData.get('email'),
        username:formData.get('username'),
        password:formData.get('password'),
        confirmPassword:formData.get('confirmPassword')
    }
    const result = await loginSchema.safeParseAsync(userInsertData);

    if(!result.success){
        return result.error.flatten()
    }else{
        const hashedPassword = await bcrypt.hash(result.data.password,12)

        await db.user.create({
            data:{
                username:result.data.username,
                email:result.data.email,
                password:hashedPassword
            }
        })

        redirect('log-in')

    }
}