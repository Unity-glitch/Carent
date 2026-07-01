import { useParams } from "react-router-dom";
import { carData } from "../data/cars";
import DetailsContent from "../components/DetailsContent";
import PopularCars from "../components/PopularCars";

export default function Details() {
  const { id } = useParams();
  const defaultId = carData[0]?.id || "sedan-1";
  const detailId = id || defaultId;

  return (
    <div>
      <DetailsContent defaultId={detailId} />
      <PopularCars />
    </div>
  );
}
