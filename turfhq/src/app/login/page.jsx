'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { redirect } from "next/navigation";
import { authClient } from "../lib/auth-client";

const LoginPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signIn.email({
            email: user.email,
            password: user.password
        })

        if (data) {
            alert(`Login Successfull`);
            redirect('/');
        }
        if (error) {
            alert(error.message);
        }
    }

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center min-h-screen">
                <Form className="flex w-96 flex-col gap-4 bg-green-200 p-10 rounded-2xl" onSubmit={onSubmit}>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className={`w-full`}>
                            Login
                        </Button>
                    </div>
                    <p className="text-center text-sm">or</p>
                    <Button className="w-full" variant="tertiary">
                        <FcGoogle></FcGoogle>
                        Login in with Google
                    </Button>

                    <p className="text-sm text-center">Dont have an account? <span className="text-orange-400"><Link href={`/signup`}>Register</Link></span></p>
                </Form>
            </div>
        </div>
    );
};

export default LoginPage;


