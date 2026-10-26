import { ChevronRightIcon } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

interface IDestinationD {
    _id: string,
    price: string,
    departureDate: string,

}

const DetalisCard = ({ destination }: { destination: IDestinationD }) => {
    const featureName = "Scheduled reports"
    return (
        <div>
            <Card size="sm" className="mx-auto w-full max-w-xs">
                <CardHeader>
                    <CardTitle className="text-gray-400">{featureName}</CardTitle>
                    <CardDescription className="space-y-4">

                        <span className="text-2xl font-bold text-cyan-500">$ {destination.price}</span>
                        <p>per person</p>
                        <span className="border px-10 text-end py-2 rounded-2xl ">{destination.departureDate}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Link href={'/'}><button className=" cursor-pointer py-2 rounded-xl  text-white bg-[#15A1BF] w-full">
                        Book Now
                    </button></Link>
                    <ul className="grid gap-2 py-2 text-sm">
                        <li className="flex gap-2">
                            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                            <span>Free cancellation up to 7 days</span>
                        </li>
                        <li className="flex gap-2">
                            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                            <span>Send to channels or specific teammates.</span>
                        </li>
                        <li className="flex gap-2">
                            <ChevronRightIcon className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                            <span>Include charts, tables, and key metrics.</span>
                        </li>
                    </ul>
                </CardContent>

            </Card>
        </div>
    );
};

export default DetalisCard;