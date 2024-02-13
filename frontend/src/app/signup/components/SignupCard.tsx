"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface UserData {
  name: string;
  password: string;
  confirmPassword: string;
}
const SignupCard = () => {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: "",
      password: "",
      confirmPassword: "",
    },
  });
  const { register, handleSubmit } = form;
  const onSubmit = async (userCredential: UserData) => {
    const response = await fetch("http://localhost:5000/api/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(userCredential),
    });
    const data = await response.json();
    if (response.ok) return router.push("/");
    console.log("Valid user from server", data);
  };
  return (
    <div>
      <div className="p-1">
        <Card className="w-[400px] h-full">
          <CardHeader>
            <CardTitle className="text-primary text-2xl">Signing Up</CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your name"
                              {...field}
                              {...register("name", {
                                required: {
                                  value: true,
                                  message: "please fill your name !",
                                },
                                maxLength: {
                                  value: 50,
                                  message: "do not spam the name !",
                                },
                              })}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your password"
                              {...field}
                              {...register("password", {
                                required: {
                                  value: true,
                                  message: "please fill your password !",
                                },
                                minLength: {
                                  value: 3,
                                  message:
                                    "password must be at least 3 characters",
                                },
                              })}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <FormField
                      control={form.control}
                      name="confirmPassword"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Confirm Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Enter your password"
                              {...field}
                              {...register("confirmPassword", {
                                required: {
                                  value: true,
                                  message: "please fill your password !",
                                },
                                minLength: {
                                  value: 3,
                                  message:
                                    "password must be at least 3 characters",
                                },
                              })}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-white mt-5 rounded-xl"
                >
                  Sign Up
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignupCard;
