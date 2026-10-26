import DestinationDetalis from "@/components/destination/DestinationDetalis";
import { Suspense } from "react";



const DestinationDetalisPage = async ({ params }) => {
    const { id } = await params;
    const res = await fetch(`http://localhost:5000/addDestination/${id}`)
    const destinations = await res.json()
    console.log(destinations);
    return (
        <div>
            <div>
                <Suspense fallback={<div>Lodding...</div>}>
                    <DestinationDetalis destination={destinations}/>
                </Suspense>
            </div>
        </div>
    );
};

export default DestinationDetalisPage;