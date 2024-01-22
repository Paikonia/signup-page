"use client";
import { useSignupContext } from "@/contexts/SignupContext";
import { usePathname } from "next/navigation";

const SignupHeader = () => {
  const pathName = usePathname();
  const {dataValidity} = useSignupContext()
  return (
    <div className="grid grid-cols-3 border-collapse border-2 p-0 ">
      <div className={`py-4 items-center border-none ${pathName === '/' && dataValidity.userFormValidity !== 'invalid'? 'bg-green-400':(pathName==='/parents' || pathName==='/parents/courses') && dataValidity.userFormValidity !== 'invalid' ?'bg-slate-300':''}`}>
        <h1 className={`${pathName === "/" && dataValidity.userFormValidity !== 'invalid'? "text-white" : ""}`}>
          Students Data
        </h1>
      </div>
      <div className={`py-4 items-center border-none ${pathName==='/parents' && dataValidity.parentsFormValidity !== 'invalid'? 'bg-green-400':pathName==='/parents/courses' && dataValidity.parentsFormValidity !== 'invalid'?'bg-slate-300':''}`}>
        <h1 className={`${pathName === "/parents" ? "text-white" : ""}`}>Parents Data</h1>
      </div>
      <div className={`py-4 items-center border-none ${pathName==='/parents/courses' && dataValidity.courseFormValidity !== 'invalid' ? 'bg-green-400':''}`}>
        <h1 className={`${pathName === "/parents/courses" ? "text-white" : ""}`}>Course Data</h1>
      </div>
    </div>
  );
};

export default SignupHeader;
