import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const login_user = async (req: Request, res: Response) => {
  const { name, password } = req.body;
  const reqUrl = req.body;
  console.log(reqUrl);
  const validUser = await prisma.user.findFirst({
    where: {
      name,
      password,
    },
  });
  if (validUser) {
    res.status(200).send({ validUser });
  } else {
    res.status(401).send({ message: "User is not authenticated" });
  }
};
