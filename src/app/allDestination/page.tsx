import { Suspense } from "react";
import DestinationExplorer from "@/components/destination/destinationExplorer";
import { Skeleton } from "@/components/ui/skeleton";

const DestinationsContent = async () => {
  const res = await fetch("http://localhost:5000/addDestination");
  const destinations = await res.json();
  return <DestinationExplorer destinations={destinations} />;
};

const CardSkeleton = () => (
  <div className="rounded-xl ring-1 ring-foreground/10 overflow-hidden">
    <Skeleton className="aspect-[4/3] rounded-none" />
    <div className="space-y-3 p-4">
      <div className="flex items-center justify-between">
        <Skeleton className="h-3.5 w-20 rounded-full" />
        <Skeleton className="h-4 w-14 rounded-full" />
      </div>
      <div className="flex items-end justify-between">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-4 w-16" />
      </div>
      <Skeleton className="h-3.5 w-24" />
      <Skeleton className="h-3 w-16" />
    </div>
  </div>
);

const AllDestinationPage = async () => {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
      {/* Header */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-[#1e2a4a] sm:text-4xl">
          Explore All Destinations
        </h1>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Find your perfect travel experience from our curated collection
        </p>
      </div>

      {/* Filters, count and cards */}
      <div className="mt-8">
        <Suspense
          fallback={
            <div>
              <div className="grid gap-3 sm:grid-cols-3">
                <Skeleton className="h-9 rounded-full" />
                <Skeleton className="h-9 rounded-full" />
                <Skeleton className="h-9 rounded-full" />
              </div>
              <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <CardSkeleton key={i} />
                ))}
              </div>
            </div>
          }
        >
          <DestinationsContent />
        </Suspense>
      </div>
    </div>
  );
};

export default AllDestinationPage;
