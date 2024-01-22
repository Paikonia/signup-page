import { runOperation } from "@/lib/database";
import { v4 as uuid } from "uuid";
export const GET = async (req: Request) => {
  const data = await runOperation("select * from students", []);
  return Response.json({ data });
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    if (body.password !== body.confirmPassword) {
      return Response.json(
        { message: "The password you have entered are not matching" },
        {
          status: 400,
        }
      );
    }
    const id = uuid();
    const params = [
      id,
      body.username,
      body.password,
      body.firstName,
      body.lastName,
      body.email,
    ];
    const res = await runOperation(
      "insert into students (userid, username, password, first_name, last_name, email) values (?,?,?,?,?,?)",
      params
    );
    console.log(res);
    return Response.json({ message: "Success move on", success: true, id });
  } catch (error: any) {
    return Response.json(
      { message: error.message, success: false },
      {
        status: 400,
      }
    );
  }
};
