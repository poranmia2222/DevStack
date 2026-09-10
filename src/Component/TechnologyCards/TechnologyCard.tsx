import { use } from "react";
import type { TechnologyType } from "../../Types/type";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

interface TechnologiesCardsProps {
    techologiesPromise: Promise<TechnologyType[]>
}

const TechnologiesCards = ({ techologiesPromise }: TechnologiesCardsProps) => {
    const technologies = use(techologiesPromise)
    console.log(technologies)
    return (
        <div className="grid grid-cols-3 gap-10">
            {technologies.map(technology => 

            <TechnologyCard technology={technology}>

            </TechnologyCard>)}
        </div>
    );
};

export default TechnologiesCards;