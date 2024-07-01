"use client";
import Button from "@/components/Button";
import Input from "@/components/Input";
import SocialLogin from "@/components/SocialLogin";
import { PASSWORD_MIN_LENGTH } from "@/lib/constant";
import { handleCreateAccountForm } from "@/service/serverAction/createAccountAction";
import React from "react";
import { useFormState } from "react-dom";

const CreateAccountPage = () => {
  const [state, action] = useFormState(handleCreateAccountForm, null);

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          required
          name="username"
          type={"text"}
          placeholder={"Username"}
          errors={state?.fieldErrors.username}
        />
        <Input
          required
          name="email"
          type={"email"}
          placeholder={"Email"}
          errors={state?.fieldErrors.email}
        />
        <Input
          required
          name="password"
          type={"password"}
          placeholder={"Password"}
          errors={state?.fieldErrors.password}
          min={PASSWORD_MIN_LENGTH}
        />
        <Input
          required
          name="confirmPassword"
          type={"password"}
          placeholder={"Confirm Password"}
          errors={state?.fieldErrors.confirmPassword}
          min={PASSWORD_MIN_LENGTH}
        />
        <Button text={"Create account"} />
      </form>
      <SocialLogin />
    </div>
  );
};

export default CreateAccountPage;
