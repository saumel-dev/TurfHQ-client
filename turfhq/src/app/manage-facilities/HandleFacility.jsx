'use client'
import Image from "next/image";
import { authClient } from "../lib/auth-client";
import { useState } from "react";
import { AlertDialog, Button, Input, Label, Modal, TextField, toast } from "@heroui/react";
import { redirect, useRouter } from "next/navigation";
const noop = () => { };
const HandleFacility = ({ facilities: initialFacilities }) => {
    const router = useRouter();
    const [facilities, setFacilities] = useState(initialFacilities);
    const [selectedFacility, setSelectedFacility] = useState(null);
    const [slots, setSlots] = useState([]);
    const [slotInput, setSlotInput] = useState("");

    const openEdit = (facility) => {
        setSelectedFacility(facility);
        setSlots(facility.available_slots);
    };

    const addSlot = () => {
        if (slotInput.trim() === "") return;
        setSlots(slot => [...slot, slotInput.trim()]);
        setSlotInput("");
    };

    const handleDelete = async (facilityId) => {
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${facilityId}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            }
        });

        if (res.ok) {
            toast.success("Facility Deleted Successfully", {
                actionProps: {
                    children: "",
                    className: "bg-success text-success-foreground",
                    onPress: noop,
                },
                description: "",
            })
            setFacilities(prev => prev.filter(item => item._id !== facilityId));
            router.refresh('/manage-facilities');
        }
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updated = {
            name: formData.get("name"),
            facility_type: formData.get("facility_type"),
            image: formData.get("image"),
            location: formData.get("location"),
            price_per_hour: Number(formData.get("price_per_hour")),
            capacity: Number(formData.get("capacity")),
            available_slots: slots,
            description: formData.get("description"),
        };

        const { data: tokenData } = await authClient.token();

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/facilities/${selectedFacility._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(updated)
        });

        if (res.ok) {
            alert("Facility updated successfully");
            router.refresh('/manage-facilities');
        } else {
            alert("Something went wrong");
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-5 py-10 flex-1 dark:bg-zinc-800 rounded-2xl mt-20">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-bold text-center">Manage Facility</h1>
                {facilities.map((facility) => (
                    <div
                        key={facility._id}
                        className="w-full dark:bg-zinc-700 border rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition shadow-sm hover:shadow-md"
                    >
                        <div className="flex items-center gap-4 w-full sm:w-auto">
                            <div className="relative w-24 h-20 rounded-xl">
                                <Image
                                    src={facility.image}
                                    alt={facility.facility_type}
                                    fill
                                    className="object-cover rounded-2xl"
                                />
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-lg capitalize">{facility.name}</h3>
                                <div className="text-sm space-y-0.5">
                                    <p><span className="font-semibold uppercase text-[11px]">Type:</span> {facility.facility_type}</p>
                                    <p><span className="font-semibold uppercase text-[11px]">Location:</span> {facility.location}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end gap-3 pt-3 sm:pt-0 border-t sm:border-t-0 border-sky-200/50 w-full sm:w-auto">
                            <Modal>
                                <Button variant="primary" onPress={() => openEdit(facility)}>
                                    Edit
                                </Button>
                                <Modal.Backdrop>
                                    <Modal.Container placement="auto">
                                        <Modal.Dialog className="sm:max-w-md">
                                            <Modal.CloseTrigger />
                                            <Modal.Header>
                                                <Modal.Heading>Edit Facility</Modal.Heading>
                                            </Modal.Header>
                                            <Modal.Body className="p-6">
                                                <form id="edit-form" onSubmit={handleSave} className="flex flex-col gap-4">

                                                    <TextField className="w-full" name="name" variant="secondary">
                                                        <Label className="text-[11px] font-bold uppercase tracking-wider">Facility Name</Label>
                                                        <Input className={`dark:bg-white dark:text-black`} defaultValue={selectedFacility?.name} placeholder="e.g. Green Turf Football Ground" />
                                                    </TextField>

                                                    <div className="flex flex-col gap-1.5">
                                                        <Label className="text-[11px] font-bold uppercase tracking-wider">Sport Type</Label>
                                                        <select
                                                            name="facility_type"
                                                            defaultValue={selectedFacility?.facility_type}
                                                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm dark:bg-white dark:text-black"
                                                        >
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

                                                    <TextField className="w-full" name="image" variant="secondary">
                                                        <Label className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Image URL</Label>
                                                        <Input className={"dark:bg-white dark:text-black"} defaultValue={selectedFacility?.image} placeholder="https://example.com/image.jpg" />
                                                    </TextField>

                                                    <TextField className="w-full" name="location" variant="secondary">
                                                        <Label className="text-[11px] font-bold uppercase tracking-wider">Location</Label>
                                                        <Input className={"dark:bg-white dark:text-black"} defaultValue={selectedFacility?.location} placeholder="e.g. Gulshan, Dhaka" />
                                                    </TextField>

                                                    <div className="grid grid-cols-2 gap-4">
                                                        <TextField name="price_per_hour" type="number" variant="secondary">
                                                            <Label className="text-[11px] font-bold uppercase tracking-wider">Price/hr</Label>
                                                            <Input className={"dark:bg-white dark:text-black"} defaultValue={selectedFacility?.price_per_hour} placeholder="1000" />
                                                        </TextField>
                                                        <TextField name="capacity" type="number" variant="secondary">
                                                            <Label className="text-[11px] font-bold uppercase tracking-wider">Capacity</Label>
                                                            <Input className={"dark:bg-white dark:text-black"} defaultValue={selectedFacility?.capacity} placeholder="10" />
                                                        </TextField>
                                                    </div>

                                                    <div className="flex flex-col gap-1.5">
                                                        <Label className="text-[11px] font-bold uppercase tracking-wider">Available Slots</Label>
                                                        <div className="flex gap-2">
                                                            <input
                                                                type="text"
                                                                value={slotInput}
                                                                onChange={(e) => setSlotInput(e.target.value)}
                                                                placeholder="e.g. 09:00 AM - 10:00 AM"
                                                                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-green-500 dark:bg-white dark:text-black"
                                                            />
                                                            <button
                                                                type="button"
                                                                onClick={addSlot}
                                                                className="w-10 h-10 rounded-full bg-green-500 text-white text-xl flex items-center justify-center hover:bg-green-600"
                                                            >+</button>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2 mt-1">
                                                            {slots.map((slot, index) => (
                                                                <span key={index} className="flex items-center gap-1 bg-green-100 text-green-500 text-xs px-3 py-1 rounded-full">
                                                                    {slot}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-1.5">
                                                        <Label className=" font-bold">Description</Label>
                                                        <textarea
                                                            name="description"
                                                            defaultValue={selectedFacility?.description}
                                                            placeholder="Describe your facility..."
                                                            rows={3}
                                                            className="w-full px-4 py-3 rounded-xl border dark:bg-white dark:text-black border-gray-200 text-sm"
                                                        />
                                                    </div>
                                                </form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button slot="close" variant="secondary">Cancel</Button>
                                                <Button type="submit" form="edit-form" className="bg-green-500 text-white">
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal.Dialog>
                                    </Modal.Container>
                                </Modal.Backdrop>
                            </Modal>
                            <AlertDialog>
                                <Button variant="danger">Delete</Button>
                                <AlertDialog.Backdrop>
                                    <AlertDialog.Container>
                                        <AlertDialog.Dialog className="sm:max-w-[400px]">
                                            <AlertDialog.CloseTrigger />
                                            <AlertDialog.Header>
                                                <AlertDialog.Icon status="danger" />
                                                <AlertDialog.Heading>Delete this facility permanently?</AlertDialog.Heading>
                                            </AlertDialog.Header>
                                            <AlertDialog.Body>
                                                <p>
                                                    This will permanently delete this facility and all of its
                                                    data. This action cannot be undone.
                                                </p>
                                            </AlertDialog.Body>
                                            <AlertDialog.Footer>
                                                <Button slot="close" variant="tertiary">
                                                    Cancel
                                                </Button>
                                                <Button onClick={() => handleDelete(facility._id)} slot="close" variant="danger">
                                                    Delete
                                                </Button>
                                            </AlertDialog.Footer>
                                        </AlertDialog.Dialog>
                                    </AlertDialog.Container>
                                </AlertDialog.Backdrop>
                            </AlertDialog>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HandleFacility;