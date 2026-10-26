"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PlusIcon, Trash2Icon } from "lucide-react";
import toast from "react-hot-toast";

const CATEGORIES = [
  "Beach",
  "Mountains",
  "Historical",
  "Adventure",
  "Cultural",
  "Wildlife",
] as const;

const AddDestinationForm = () => {
  const [category, setCategory] = React.useState<string>(CATEGORIES[0]);
  const formRef = React.useRef<HTMLFormElement>(null);

  const resetForm = () => {
    formRef.current?.reset();
    setCategory(CATEGORIES[0]);
  };

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
     const res  = await fetch('http://localhost:5000/addDestination', {
       method:'POST',
       headers:{
        'Content-Type' : 'application/json',
       },
       body:JSON.stringify(data)
     })
     const result = await res.json()
      console.log(result);
      toast.success('succesfully added!!')
    resetForm();
  };

  return (
    <Card className="mx-auto mt-10 max-w-xl rounded-xl shadow-sm">
      <CardContent>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
        >
          {/* Destination Name */}
          <div className="grid gap-2">
            <Label htmlFor="destination-name">Destination Name</Label>
            <Input
              id="destination-name"
              name="destinationName"
              placeholder="Bali Paradise"
              required
            />
          </div>

          {/* Country & Category */}
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-2">
              <Label htmlFor="country">Country</Label>
              <Input id="country" name="country" placeholder="Indonesia" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                name="category"
                value={category}
                onValueChange={(value) => setCategory(String(value))}
              >
                <SelectTrigger id="category" className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Price & Duration */}
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
            <div className="grid gap-2">
              <Label htmlFor="price">Price (USD)</Label>
              <Input
                id="price"
                name="price"
                type="text"
                inputMode="numeric"
                placeholder="e.g., 1,299"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="duration">Duration</Label>
              <Input
                id="duration"
                name="duration"
                placeholder="e.g., 7 Days/6 Nights"
                required
              />
            </div>
          </div>

          {/* Departure Date */}
          <div className="grid gap-2">
            <Label htmlFor="departure-date">Departure Date</Label>
            <Input id="departure-date" name="departureDate" type="date" required />
          </div>

          {/* Image URL */}
          <div className="grid gap-2">
            <Label htmlFor="image-url">Image URL</Label>
            <Input
              id="image-url"
              name="imageUrl"
              type="url"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          {/* Description */}
          <div className="grid gap-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              name="description"
              placeholder="Describe the travel experience..."
              className="min-h-28"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-2 pt-1">
            <Button
              type="button"
              variant="destructive"
              size="lg"
              className="border border-destructive/30"
              onClick={resetForm}
            >
              <Trash2Icon />
              Cancel
            </Button>
            <Button
              type="submit"
              size="lg"
              className="bg-[#00c2cb] text-white hover:bg-[#00aab2]"
            >
              <PlusIcon />
              Add Travel Package
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddDestinationForm;
