'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignupContext } from "@/contexts/SignupContext";
import Link from "next/link";

const Page = () => {
  const {data, changeFunction} = useSignupContext();
    const submitFunction = () => {
        console.log(data)
    };

  return (
    <div>
        <Input placeholder="Course Name" value={data.courseName} name="courseName" className="my-2" onChange={changeFunction} />
        <Input placeholder="How long are your Sessions" value={data.sessionTime} type="time" name="sessionTime" className="my-2" onChange={changeFunction} />
        <Input placeholder="What time does your session start" value={data.sessionStart} type="time" name="sessionStart" className="my-2" onChange={changeFunction} />
      <div className="w-full justify-between flex">
        <Link className="btn-primary" href="/parents">Back</Link>
        <Button onClick={submitFunction}>Submit</Button>
      </div>
    </div>
  );
};

export default Page;
