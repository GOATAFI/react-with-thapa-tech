import seriesData from "../api/seriesData.json";
import { SeriesCard } from "./SeriesCard";
export const NetflixCards = () => {
  return (
    <>
      {seriesData.map((curElem) => {
        return <SeriesCard key={curElem.id} curElem={curElem} />;
      })}
    </>
  );
};
