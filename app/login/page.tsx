"use client";
import Button from "@/components/Button";
import React from "react";
import { useFormState } from "react-dom";
import Input from "@/components/Input";
import { handleLoginForm } from "@/service/serverAction/loginAction";
import SocialLogin from "@/components/SocialLogin";

const LoginPage = () => {
  const [state, action] = useFormState(handleLoginForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Log in with email and password.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="email"
          type="email"
          placeholder="Email"
          required
          errors={state?.fieldErrors.email}
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          required
          errors={state?.fieldErrors.password}
        />
        <Button text="Log in" />
      </form>
      <SocialLogin />
    </div>
  );
};

export default LoginPage;
