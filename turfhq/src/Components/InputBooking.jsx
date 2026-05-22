'use client'
import { authClient } from "@/app/lib/auth-client";
import { Button, DateField, Form, Input, Label, TextField, toast } from "@heroui/react";
import { redirect } from "next/navigation";
import { useState } from "react";
const noop = () => { };
const InputBooking = ({ facility }) => {
    const { _id, name, facility_type, image, location, description, price_per_hour, capacity, booking_count, available_slots } = facility;

    const [bookingDate, setBookingDate] = useState(null);
    const [duration, setDuration] = useState(1);
    const [timeSlot, setTimeSlot] = useState("");
    const totalPrice = duration * price_per_hour;

    const formattedDate = bookingDate
        ? `${bookingDate.year}-${String(bookingDate.month).padStart(2, '0')}-${String(bookingDate.day).padStart(2, '0')}`
        : null;

    const { data: session } = authClient.useSession();
    const user = session?.user;

    const onSubmit = async (e) => {
        e.preventDefault();
        const { data: tokenData } = await authClient.token();
        const data = {
            facility_id: _id,
            facility_type: facility_type,
            user_email: user?.email,
            booking_date: formattedDate,
            time_slot: timeSlot,
            hours: duration,
            total_price: totalPrice,
            status: "pending",
            image: image
        };

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "authorization": `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(data)
        })
        if (res.ok) {
            toast.success("Booking Successful", {
                actionProps: {
                    children: "",
                    className: "bg-success text-success-foreground",
                    onPress: noop,
                },
                description: "",
            })
            redirect('/my-bookings')
        }
        else {
            alert('Something is wrong, try again later')
        }
    }
    const handleReset = () => {
        setDuration(1);
        setTimeSlot("");
        setBookingDate(null);
    };
    return (
        <div className='card w-110 px-10 h-160 py-5 dark:bg-zinc-900'>
            <div>
                <h1 className="text-md font-bold">Book This Facility</h1>
                <p className="text-sm text-gray-400">Fill your details to book this spot</p>
            </div>
            <div>
                <Form className="flex w-full flex-col gap-4 mt-5 space-y-3" onSubmit={onSubmit}>
                    <TextField
                        name="name"
                        type="text"
                    >
                        <Label className="text-[12px] font-semibold text-gray-500 dark:text-white uppercase">Facility</Label>
                        <Input value={name} readOnly className={`bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-600`} />
                    </TextField>
                    <DateField onChange={setBookingDate} className="w-full" name="date" value={bookingDate}>
                        <Label className="text-[12px] font-semibold text-gray-500 dark:text-white uppercase">Date</Label>
                        <DateField.Group>
                            <DateField.Input className="dark:bg-white dark:text-black">
                                {(segment) => <DateField.Segment segment={segment} />}
                            </DateField.Input>
                        </DateField.Group>
                    </DateField>
                    <TextField>
                        <Label className="text-gray-500 dark:text-white">Select a time slot</Label>
                        <select id="time-slot" required value={timeSlot} onChange={(e) => setTimeSlot(e.target.value)} className="w-full px-4 py-2 rounded-xl border border-gray-200 text-sm text-gray-600 card dark:bg-white">
                            <option value="">Select a time slot</option>
                            {
                                available_slots.map((slot, index) => (
                                    <option key={index} value={slot}>{slot}</option>
                                ))
                            }
                        </select>
                    </TextField>
                    <TextField
                        name="duration"
                        type="number"
                    >
                        <Label className="text-[12px] font-semibold text-gray-500 dark:text-white uppercase">Duration (Hours)</Label>
                        <Input value={duration} type="number" min={1} max={8} onChange={(e) => setDuration(Number(e.target.value))} placeholder="Minimum 1 hour to Maximum 8 hours" className={`bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-600`} />
                    </TextField>
                    <div className="card w-full dark:bg-white h-20 rounded-2xl">
                        <div className="flex justify-between">
                            <div className="space-y-1">
                                <div className={`text-sm text-gray-500 dark:text-black`}>{price_per_hour}bdt/hour x {duration}</div>
                                <p className="font-bold dark:text-black">Total Price</p>
                            </div>
                            <div className="flex justify-center items-center dark:text-black">
                                {totalPrice} bdt
                            </div>
                        </div>

                    </div>
                    <div className="flex gap-2">
                        <Button type="submit">
                            Submit
                        </Button>
                        <Button type="reset" variant="outline" onClick={handleReset} className={"dark:bg-white dark:text-black"}>
                            Reset
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default InputBooking;