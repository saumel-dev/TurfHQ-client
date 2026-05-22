'use client'
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";

const SignUpPage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            image: user.image,
            password: user.password
        })

        if (data) {
            alert('SignUp Successfull');
            redirect('/');
        }

        if (error) {
            alert(error.message);
        }
    }
    const handleGoogleSignUp = async () => {
        await authClient.signIn.social({
            provider: "google",
            callbackURL: "/",
        });
    };

    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center min-h-screen">
                <Form className="flex w-96 flex-col gap-4 dark:bg-zinc-800 p-10 rounded-2xl bg-gray-200" onSubmit={onSubmit}>

                    <TextField isRequired name="name" type="text">
                        <Label>Name</Label>
                        <Input placeholder="John Doe" />
                        <FieldError />
                    </TextField>

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

                    <TextField isRequired name="image" type="url">
                        <Label>Photo URL</Label>
                        <Input placeholder="Enter your photo url" />
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
                            SignUp
                        </Button>
                    </div>
                    <p className="text-center text-sm">or</p>
                    <Button onClick={handleGoogleSignUp} className="w-full dark:bg-zinc-700 bg-white" variant="tertiary">
                        <FcGoogle></FcGoogle>
                        Sign in with Google
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default SignUpPage;


