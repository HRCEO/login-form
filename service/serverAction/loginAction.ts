"use server"

import { redirect } from "next/navigation";
import { z } from "zod";

const loginSchema = z.object({
    email:z.string().email({message:'You need input Email form'}),
    username: z.string().min(5,{ message: "Username must be at least 5 characters long" }),
    password:z.string()
    .min(10, { message: "Password must be at least 10 characters long" })
    .regex(/\d/, { message: "Password must contain at least one number" })
  });

export const handleLoginForm = async (prevState:any,formData:FormData) => {
    const userInsertData = {
        email:formData.get('email'),
        username:formData.get('username'),
        password:formData.get('password')
    }
    const checkValidation = loginSchema.safeParse(userInsertData);

    if(!checkValidation.success){
        return checkValidation.error.flatten()
    }else{
        redirect("/profile");
    }
}