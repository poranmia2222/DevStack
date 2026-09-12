import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../Types/type";
import StackCard from "../StackCard/StackCard";
import { Bounce, toast } from "react-toastify";

interface SelectedTechnology {
    selectedStack: TechnologyType[]
    setSelectedStack: Dispatch<SetStateAction<TechnologyType[]>>
}

const StackCards = ({ selectedStack, setSelectedStack}: SelectedTechnology) => {


    const handleRemoveAll = () => {
        setSelectedStack([])
        toast.info(`All removed from stack!`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce, 
        });
    }

    return (
        <div className="flex flex-col gap-3">
            {
                selectedStack.map(technology => <StackCard
                    key={technology.id}
                    technology={technology}
                    selectedStack={selectedStack}
                    setSelectedStack={setSelectedStack}
                ></StackCard>)
            }
            <button onClick={() => handleRemoveAll()} className="btn">Remove All</button>
        </div>
    );
};

export default StackCards;