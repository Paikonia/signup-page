"use client";
import {
  ChangeEvent,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

type SignupType = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  parentsFirstName: string;
  parentsLastName: string;
  parentsEmail: string;
  courseName: string;
  sessionTime: string;
  sessionStart: string;
};

type SignupValidityType = {
  usernameValidity: "valid" | "invalid" | "untouched";
  firstNameValidity: "valid" | "invalid" | "untouched";
  lastNameValidity: "valid" | "invalid" | "untouched";
  emailValidity: "valid" | "invalid" | "untouched";
  passwordValidity: "valid" | "invalid" | "untouched";
  confirmPasswordValidity: "valid" | "invalid" | "untouched";
  parentsFirstNameValidity: "valid" | "invalid" | "untouched";
  parentsLastNameValidity: "valid" | "invalid" | "untouched";
  parentsEmailValidity: "valid" | "invalid" | "untouched";
  courseNameValidity: "valid" | "invalid" | "untouched";
  sessionTimeValidity: "valid" | "invalid" | "untouched";
  sessionStartValidity: "valid" | "invalid" | "untouched";
  userFormValidity: "valid" | "invalid" | "untouched";
  parentsFormValidity: "valid" | "invalid" | "untouched";
  courseFormValidity: "valid" | "invalid" | "untouched";
};

const SignupContext = createContext<{
  data: SignupType;
  dataValidity: SignupValidityType;
  changeFunction: (event: ChangeEvent<HTMLInputElement>) => void;
}>({
  data: {
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    parentsFirstName: "",
    parentsLastName: "",
    parentsEmail: "",
    courseName: "",
    sessionTime: "",
    sessionStart: "",
  },
  changeFunction: (event: ChangeEvent<HTMLInputElement>) => {},
  dataValidity: {
    usernameValidity: "untouched",
    firstNameValidity: "untouched",
    lastNameValidity: "untouched",
    emailValidity: "untouched",
    passwordValidity: "untouched",
    confirmPasswordValidity: "untouched",
    parentsFirstNameValidity: "untouched",
    parentsLastNameValidity: "untouched",
    parentsEmailValidity: "untouched",
    courseNameValidity: "untouched",
    sessionTimeValidity: "untouched",
    sessionStartValidity: "untouched",
    userFormValidity: "untouched",
    parentsFormValidity: "untouched",
    courseFormValidity: "untouched",
  },
});

export const SignupContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [signupData, setSignupData] = useState<SignupType>({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    parentsFirstName: "",
    parentsLastName: "",
    parentsEmail: "",
    courseName: "",
    sessionTime: "",
    sessionStart: "",
  });
  const [signupValidity, setSignupValidity] = useState<SignupValidityType>({
    usernameValidity: "untouched",
    firstNameValidity: "untouched",
    lastNameValidity: "untouched",
    emailValidity: "untouched",
    passwordValidity: "untouched",
    confirmPasswordValidity: "untouched",
    parentsFirstNameValidity: "untouched",
    parentsLastNameValidity: "untouched",
    parentsEmailValidity: "untouched",
    courseNameValidity: "untouched",
    sessionTimeValidity: "untouched",
    sessionStartValidity: "untouched",
    userFormValidity: "untouched",
    parentsFormValidity: "untouched",
    courseFormValidity: "untouched",
  });
  const changer = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };
  return (
    <SignupContext.Provider
      value={{ data: signupData, changeFunction: changer, dataValidity: signupValidity }}
    >
      {children}
    </SignupContext.Provider>
  );
};

export const useSignupContext = () => useContext(SignupContext);
