import { use } from "react";
import type { Plate } from "../types";
import PlatesCard from "./PlatesCard";

interface PlatosListProps {
    platesPromise: Promise<Plate[]>;
}
const PlatesList = ({ platesPromise }: PlatosListProps) => {
    // magia de react 19 el hook use
    const plates = use(platesPromise);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plates.map((plate: Plate) => (
            <PlatesCard key={plate.id} plate={plate} />

        ))}
    </div>
  )
}

export default PlatesList