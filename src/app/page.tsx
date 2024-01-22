"use client";
import { Input } from "@/components/ui/input";
import { useSignupContext } from "@/contexts/SignupContext";
import Link from "next/link";

export default function Home() {
  const { data, changeFunction } = useSignupContext();
  // const submitStudent =async () => {
  //   const data = await fetch('http://localhost:3000/api/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(student)
  //   })
  //   const result = await data.json()
  //   if(result.success) {
  //     router.push(`/parents?key=${result.id}`, {})
  //   }
  // }

  return (
    <main>
      <div>
        <Input
          onChange={changeFunction}
          value={data.firstName}
          name="firstName"
          placeholder="First Name"
          className="my-2"
        />
        <Input
          onChange={changeFunction}
          placeholder="Last Name"
          name="lastName"
          value={data.lastName}
          className="my-2"
        />
        <Input
          onChange={changeFunction}
          placeholder="Email"
          type="email"
          name="email"
          value={data.email}
          className="my-2"
        />
        <Input
          onChange={changeFunction}
          placeholder="Username"
          type="text"
          name="username"
          value={data.username}
          className="my-2"
        />
        <Input
          onChange={changeFunction}
          placeholder="Password"
          type="password"
          name="password"
          value={data.password}
          className="my-2"
        />
        <Input
          onChange={changeFunction}
          placeholder="Confirm Password"
          type="password"
          name="confirmPassword"
          value={data.confirmPassword}
          className="my-2"
        />
        <div className="w-full justify-end flex">

          <Link className="btn-primary" href={"parents"}>Next</Link>
        </div>
      </div>
    </main>
  );
}
