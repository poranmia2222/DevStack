import type { TechnologyType } from "../../Types/type";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

interface TechnologiesCardsProps {
    technologies: TechnologyType[]
}

const TechnologiesCards = ({ technologies }: TechnologiesCardsProps) => {
    
    return (
        <div className="grid grid-cols-3 gap-10">
            {technologies.map(technology => 

            <TechnologyCard technology={technology}>

            </TechnologyCard>)}
        </div>
    );
};

export default TechnologiesCards;