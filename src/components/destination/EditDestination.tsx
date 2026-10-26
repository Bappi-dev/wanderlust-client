"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IDestination } from "./DestinationDetalis";
import { useRouter } from "next/navigation";

export function EditDestination({ destination }: { destination: IDestination }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // ইনপুট ফিল্ডগুলোর জন্য আলাদা স্টেট বা সরাসরি ফর্ম থেকে ডেটা নেওয়ার ব্যবস্থা
  const [formData, setFormData] = useState({
    destinationName: destination.destinationName,
    country: destination.country,
    category: destination.category,
    price: destination.price,
    duration: destination.duration,
    departureDate: destination.departureDate,
    description: destination.description,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:5000/addDestination/${destination._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      console.log("Updated successfully:", result);

      if (res.ok) {
        setOpen(false); // সফল হলে ডায়ালগ বন্ধ হবে
        router.refresh(); 
      }
    } catch (error) {
      console.error("Error updating destination:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button variant="outline">Edit</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Destination</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div>
            <label className="text-sm font-medium">Destination Name</label>
            <Input
              name="destinationName"
              value={formData.destinationName}
              onChange={handleChange}
              placeholder="Destination Name"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Country</label>
            <Input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Country"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Category</label>
            <Input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Price</label>
            <Input
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Duration</label>
            <Input
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="Duration"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Departure Date</label>
            <Input
              name="departureDate"
              value={formData.departureDate}
              onChange={handleChange}
              placeholder="Date"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Description</label>
            <Textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full">
            Save Changes
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}