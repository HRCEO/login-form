"use client";
import Button from "@/components/Button";
import React from "react";
import { useFormState } from "react-dom";
import Input from "@/components/Input";
import { smsVerification } from "@/service/serverAction/smsLoginAction";

const smsVerificationInitialState = {
  token: false,
  error: undefined,
};

const SMSLogin = () => {
  const [state, action] = useFormState(
    smsVerification,
    smsVerificationInitialState,
  );

  return (
    <div className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">SMS Log in</h1>
        <h2 className="text-xl">Verify your phone number.</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="phone"
          type="text"
          placeholder="Phone number"
          required
          errors={state.error?.formErrors}
        />
        {state?.token ? (
          <Input
            name="token"
            type="number"
            placeholder="Verification code"
            required
            min={100000}
            max={999999}
          />
        ) : null}
        <Button text={state.token ? "Verify Token" : "Send Verification SMS"} />
      </form>
    </div>
  );
};

export default SMSLogin;
