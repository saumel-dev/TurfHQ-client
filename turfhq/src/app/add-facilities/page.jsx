'use client'
import { Button, FieldError, Form, Input, Label, TextField, toast } from "@heroui/react";
import { CiCirclePlus } from "react-icons/ci";
import { authClient } from "../lib/auth-client";
import { redirect } from "next/navigation";
const noop = () => { };
const AddFacilitiesPage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user;
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const { data: tokenData } = await authClient.token();
        const token = tokenData?.token;

        const data = {
            name: formData.get('facilityName'),
            facility_type: formData.get('sportType'),
            image: formData.get('imageUrl'),
            location: formData.get('location'),
            price_per_hour: Number(formData.get('pricePerHour')),
            capacity: Number(formData.get('capacity')),
            available_slots: [formData.get('timeSlots')],
            description: formData.get('description'),
            owner_email: user?.email,
            booking_count: 0
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        if (res.ok) {
            toast.success("Facility Added Successfully", {
                actionProps: {
                    children: "",
                    className: "bg-success text-success-foreground",
                    onPress: noop,
                },
                description: "",
            })
            redirect('/manage-facilities')
        }
        else {
            alert('somthing is wrong');
        }
    };

    return (
        <div className="min-h-screen  py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
            <div className="w-full max-w-4xl">
                <div className="mb-6 px-2 flex justify-center flex-col items-center">
                    <h1 className="text-2xl font-bold">Add New Facility</h1>
                    <p className="text-sm mt-1">List your turf</p>
                </div>

                <div className="dark:bg-zinc-800 rounded-3xl p-8 md:p-10 shadow-sm">
                    <Form className="flex flex-col gap-6" onSubmit={onSubmit}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                            <TextField isRequired name="facilityName" className="flex flex-col gap-1.5">
                                <Label className="text-[11px] font-bold uppercase tracking-wider">Facility Name</Label>
                                <Input
                                    placeholder="e.g. Green Turf Football Ground"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm dark:bg-white"
                                />
                                <FieldError className="text-xs text-red-500" />
                            </TextField>

                            <div className="flex flex-col gap-1.5">
                                <Label className="text-[11px] font-bold uppercase tracking-wider">Sport Type</Label>
                                <div className="relative">
                                    <select
                                        required
                                        name="sportType"
                                        defaultValue=""
                                        className="w-full px-4 py-3 h-11.5 rounded-xl border text-black border-gray-200 text-sm cursor-pointer dark:bg-white"
                                    >
                                        <option value="" disabled hidden>Select Sport Type</option>
                                        <option value="Football">Football</option>
                                        <option value="Cricket">Cricket</option>
                                        <option value="Tennis">Tennis</option>
                                        <option value="Basketball">Basketball</option>
                                        <option value="Swimming">Swimming</option>
                                        <option value="Badminton">Badminton</option>
                                        <option value="8 Ball Pool">8 Ball Pool</option>
                                        <option value="Calisthenics">Calisthenics</option>
                                        <option value="Volleyball">Volleyball</option>
                                    </select>
                                </div>
                            </div>

                            <TextField isRequired name="imageUrl" type="url" className="flex flex-col gap-1.5">
                                <Label className="text-[11px] font-bold uppercase tracking-wider">Image URL</Label>
                                <Input
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#12a150] bg-white text-sm"
                                />
                                <FieldError className="text-xs text-red-500" />
                            </TextField>

                            <TextField isRequired name="location" type="text" className="flex flex-col gap-1.5">
                                <Label className="text-[11px] font-bold uppercase tracking-wider">Location</Label>
                                <Input
                                    placeholder="e.g. Gulshan, Dhaka"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm dark:bg-white"
                                />
                                <FieldError className="text-xs text-red-500" />
                            </TextField>

                            <TextField isRequired name="pricePerHour" type="number" className="flex flex-col gap-1.5">
                                <Label className="text-[11px] font-bold uppercase tracking-wider">Price Per Hour (bdt)</Label>
                                <Input
                                    placeholder="1000"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200text-sm dark:bg-white dark:text-black"
                                />
                                <FieldError className="text-xs text-red-500" />
                            </TextField>

                            <TextField isRequired name="capacity" type="number" className="flex flex-col gap-1.5">
                                <Label className="text-[11px] font-bold uppercase tracking-wider">Capacity (Players)</Label>
                                <Input
                                    placeholder="10"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200text-sm dark:bg-white dark:text-black"
                                />
                                <FieldError className="text-xs text-red-500" />
                            </TextField>
                        </div>

                        <div className="flex items-end gap-2 w-full">
                            <TextField isRequired name="timeSlots" className="flex-1 flex flex-col gap-1.5">
                                <Label className="text-[11px] font-bold uppercase tracking-wider">Available Time Slots</Label>
                                <Input
                                    placeholder="e.g. 08:00 AM - 09:00 AM"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#12a150] bg-white text-sm"
                                />
                                <FieldError className="text-xs text-red-500" />
                            </TextField>
                        </div>

                        <TextField isRequired name="description" className="flex flex-col gap-1.5">
                            <Label className="text-[11px] font-bold uppercase tracking-wider">Description</Label>
                            <textarea
                                name="description"
                                placeholder="Describe your facility..."
                                rows={4}
                                className="w-full dark:text-black px-4 py-3 rounded-xl border border-gray-200 text-sm dark:bg-white"
                            />
                            <FieldError className="text-xs text-red-500" />
                        </TextField>
                        <div className="mt-2 flex justify-center">
                            <Button
                                type="submit"
                                className="bg-green-500 text-white font-semibold rounded-xl px-5 py-2 text-sm shadow-sm"
                            >
                                Add Facility
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default AddFacilitiesPage;