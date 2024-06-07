"use client";
import React from "react";
import { useFormStatus } from "react-dom";

interface ButtonProps {
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      className="disabled:bg-neutral-400 disabled:text-neutral-300 disabled:cursor-not-allowed  primary-btn h-10"
    >
      {pending ? "로딩 중" : text}
    </button>
  );
};

export default Button;
