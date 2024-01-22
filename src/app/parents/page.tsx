"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignupContext } from "@/contexts/SignupContext";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Home() {
  const { data, changeFunction } = useSignupContext();

  return (
    <div>
      <Input
        onChange={changeFunction}
        value={data.parentsFirstName}
        name="parentsFirstName"
        placeholder="First Name"
        className="my-2"
      />
      <Input
        onChange={changeFunction}
        placeholder="Last Name"
        name="parentsLastName"
        value={data.parentsLastName}
        className="my-2"
      />
      <Input
        onChange={changeFunction}
        placeholder="Email"
        type="email"
        name="parentsEmail"
        value={data.parentsEmail}
        className="my-2"
      />
      <div className="w-full justify-between flex">
        <Link className="btn-primary" href="/">Back</Link>
        <Link className="btn-primary" href="/parents/courses">Next</Link>
      </div>
    </div>
  );
}
