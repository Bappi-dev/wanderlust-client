'use client'
import Image from "next/image";
import navImage from "@/assest/Wanderlast.png";
import Link from "next/link";
import { User } from "lucide-react";
import { cn } from "cn";


const navLinks = [
  { href: "/", label: "Home", active: true },
  { href: "/allDestination", label: "Destinations", active: false },
  { href: "/addDestination", label: "Add Destination", active: false },
  { href: "/my-bookings", label: "My Bookings", active: false },
];

const Navbar = () => {
  return (
    <nav className="container mx-auto">
      <div className="flex justify-between py-6">
             <ul className="flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  "text-sm transition-colors hover:text-[#00A8E8]",
                  link.active
                    ? "border-b-2 border-[#00A8E8] pb-0.5 font-medium text-[#00A8E8]"
                    : "text-foreground",
                )}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div>
          <Link href={'/'}><Image width={150} height={150} src={navImage} alt="Wanderlast logo" className="h-auto"></Image></Link>
        </div>
        <div className="flex  gap-4">
          <button className="md:flex lg:flex sm:flex  flex items-center gap-1"> <User className="size-4" /> My Profile</button>
          <Link href={'/'}> <button>Login</button></Link>
          <Link href={'/'}><button>SignUp</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
