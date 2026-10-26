import { ArrowLeft, CalendarRange, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DetalisCard from "./DetalisCard";
import { EditDestination } from "./EditDestination";
import DeleteDestinationPage from "./deleteDestination";


export interface IDestination {
    _id: string,
    destinationName: string,
    country: string,
    category: string,
    price: string,
    duration: string,
    departureDate: string,
    imageUrl: string,
    description: string
}



const DestinationDetalis = ({ destination }: { destination: IDestination }) => {
    console.log(destination);
    return (
        <div className=" container mx-auto">
            <div>
                <div className=" lg:flex justify-between gap-4 py-4 items-center">
                    <Link href={'/allDestination'} className=" cursor-pointer flex gap-1 items-center text-xl mb-2 text-gray-400"><ArrowLeft size={15} /> Back to Destination</Link>
                    <div className="flex gap-2 items-center">
                        <EditDestination destination={destination} />
                        <DeleteDestinationPage description={destination} />
                    </div>
                </div>
                <div>
                    <Image className="w-full h-100 rounded-xl overflow-hidden" src={destination.imageUrl} alt='img' width={400} height={400}></Image>
                </div>
            </div>

            {/* text */}
            <div className="flex gap-10 my-10 space-y-2">

                <div>
                    <p className="lg:flex items-center gap-1 mt-4 text-cyan-500"><MapPin size={15} /> {destination.country}</p>
                    <p className="text-4xl">{destination.destinationName}</p>
                    <div className="lg:flex gap-2">
                        <h2 className="lg:flex gap-1 items-center"><CalendarRange size={15} /> {destination.duration}</h2>
                        <p>/{destination.departureDate}</p>
                    </div>
                    <h2 className="text-2xl">{destination.category}</h2>
                    <p>Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts,<br /> tropical landscapes, and unforgettable sunsets.</p>
                </div>
                <div>
                    <DetalisCard key={destination._id} destination={destination} />
                </div>
            </div>
        </div>

    );
};

export default DestinationDetalis;