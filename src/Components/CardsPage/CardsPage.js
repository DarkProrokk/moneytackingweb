import Filters from "./Filter";
import LoadCards from "./LoadCards";

export default function CardsPage(){
    var content =
     <>
     <Filters />
     <LoadCards />
    </>
    return (content);
}