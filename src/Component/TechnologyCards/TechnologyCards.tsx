import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../Types/type";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

interface TechnologiesCardsProps {
    technologies: TechnologyType[]
    selectedStack: TechnologyType[]
    setSelectedStack: Dispatch<SetStateAction<TechnologyType[]>>
}

const TechnologiesCards = ({ technologies, selectedStack, setSelectedStack, }: TechnologiesCardsProps) => {

    return (
        <div className="grid grid-cols-3 gap-10">
            {technologies.map(technology =>

                <TechnologyCard
                    key={technology.id}
                    technology={technology}
                    selectedStack={selectedStack}
                    setSelectedStack={setSelectedStack}
                >

                </TechnologyCard>)}
        </div>
    );
};

export default TechnologiesCards;