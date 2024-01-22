import { runOperation } from "@/lib/database";
import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (res: NextApiResponse) => {
  return Response.json({ message: "Hello world!" });
};

export const POST = async (req: Request) => {
  try {
    const data = await req.json();
    const id = Math.round(Math.random() * 10000000);
    const params = [id, data.firstName, data.lastName, data.email];
    const query =
      "insert into parents (userid, first_name , last_name , email) values (?,?,?,?)";
    const sql = await runOperation(query, params);
    return Response.json({message: 'Success', status: 200})
  } catch (err: any) {
    return Response.json({ message: err.message }, { status: 400})
  }
};
