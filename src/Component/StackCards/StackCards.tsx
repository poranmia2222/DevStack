import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../Types/type";
import StackCard from "../StackCard/StackCard";

interface SelectedTechnology {
    selectedStack: TechnologyType[]
    setSelectedStack: Dispatch<SetStateAction<TechnologyType[]>>
}

const StackCards = ({ selectedStack, setSelectedStack }:SelectedTechnology) => {
    return (
        <div className="flex flex-col gap-3">
            {
                selectedStack.map(technology => <StackCard technology={technology}></StackCard>)
            }
        </div>
    );
};

export default StackCards;