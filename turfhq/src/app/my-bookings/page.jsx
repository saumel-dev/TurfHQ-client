'use client'
import { authClient } from "@/app/lib/auth-client";
import { useEffect, useState } from "react";

const MyBookingsPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return; // wait until user is loaded

        const fetchBookings = async () => {
            const { data: tokenData } = await authClient.getToken();
            console.log("full session:", JSON.stringify(tokenData));
            const token = tokenData?.token;
            console.log("Token", token);
            console.log("user email:", user.email);
            console.log("token:", token);
            const res = await fetch(`http://localhost:5000/bookings?email=${user.email}`, {
                headers: {
                    "authorization": `Bearer ${token}`
                }
            });
            console.log("response status:", res.status);
            const data = await res.json();
            console.log("bookings data:", data);
            setBookings(data);
            setLoading(false);
        };

        fetchBookings();
    }, [user?.email]); // reruns when user email changes

    if (loading) return <p>Loading...</p>;
    if (bookings.length === 0) return <p>No bookings yet.</p>;

    return (
        <div>
            {bookings.map((booking) => (
                <div key={booking._id}>
                    <p>{booking.facility_type}</p>
                    <p>{booking.booking_date}</p>
                    <p>{booking.time_slot}</p>
                    <p>{booking.hours} hrs</p>
                    <p>{booking.total_price} bdt</p>
                    <p>{booking.status}</p>
                    <button onClick={() => handleCancel(booking._id)}>Cancel</button>
                </div>
            ))}
        </div>
    );
};

export default MyBookingsPage;