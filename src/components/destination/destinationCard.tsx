import { ArrowUpRightIcon, ClockIcon, MapPinIcon, StarIcon } from "lucide-react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "cn";
import Link from "next/link";

export interface Destination {
  _id?: string;
  id?: string;
  destinationName: string;
  country: string;
  category: string;
  price: string | number;
  duration: string;
  imageUrl?: string;
  description?: string;
}

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

const parsePrice = (price: string | number) =>
  Number(String(price).replace(/[^0-9.]/g, "")) || 0;

const formatPrice = (price: string | number) => {
  const value = parsePrice(price);
  return `$${value.toLocaleString("en-US")}`;
};

const DestinationCard = ({ destination, className }: DestinationCardProps) => {
  const { destinationName, country, category, price, duration, imageUrl } =
    destination;

  return (
    <Card
      size="sm"
      className={cn(
        "rounded-xl ring-1 ring-foreground/10 shadow-sm transition-shadow duration-200 hover:shadow-md",
        className
      )}
    >
      {/* Image with rating badge */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl bg-muted">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageUrl}
            alt={destinationName}
            className="size-full object-cover transition-transform duration-300 hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex size-full items-center justify-center text-xs text-muted-foreground">
            No image available
          </div>
        )}
        <span className="absolute top-2.5 right-2.5 flex items-center gap-1 rounded-full bg-white/95 px-2.5 py-1 text-xs font-medium text-foreground shadow-sm">
          <StarIcon className="size-3.5 fill-amber-400 stroke-amber-400" />
        </span>
      </div>

      <CardHeader>
        {/* Location & category */}
        <div className="flex items-center justify-between gap-2">
          <CardDescription className="flex items-center gap-1 text-xs">
            <MapPinIcon className="size-3.5 text-rose-500" />
            {country}
          </CardDescription>
          {category ? (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground uppercase">
              {category}
            </span>
          ) : null}
        </div>

        {/* Title & price */}
        <div className="flex items-end justify-between gap-2 pt-1">
          <CardTitle className="font-heading text-lg font-semibold text-[#1e2a4a]">
            {destinationName}
          </CardTitle>
          <div className="text-right whitespace-nowrap">
            <span className="font-semibold text-[#1e2a4a]">
              {formatPrice(price)}
            </span>
            <span className="text-xs text-muted-foreground">/person</span>
          </div>
        </div>

        {/* Duration */}
        <CardDescription className="flex items-center gap-1.5 text-xs">
          <ClockIcon className="size-3.5" />
          {duration}
        </CardDescription>
      </CardHeader>

      <CardFooter className="border-t bg-transparent px-(--card-spacing) py-(--card-spacing)">
        <Link
          href={`/allDestination/${destination._id}`}
          className="flex items-center gap-1 text-xs font-semibold tracking-wide text-[#00c2cb] uppercase transition-colors hover:text-[#00aab2]"
        >
          Book Now
          <ArrowUpRightIcon className="size-3.5" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default DestinationCard;
