import type { Dispatch, SetStateAction } from "react";
import type { TechnologyType } from "../../Types/type";
import StackCards from "../StackCards/StackCards";

interface SelectedTechnologies {

    selectedStack: TechnologyType[]
    setSelectedStack: Dispatch<SetStateAction<TechnologyType[]>>
}

const Stack = ({ selectedStack, setSelectedStack}: SelectedTechnologies) => {

    return (
        <aside className="border border-slate-200 rounded-2xl p-4 space-y-2 sticky top-24" >
            <h2 className="text-xl font-bold">Your Stack</h2>
            <p className="font-semibold text-sm">{
                selectedStack.length > 0 ? `${selectedStack.length} Technology Selected` : "No technologies selected yet."
            }</p>
            <div>
                {
                    selectedStack.length > 0 ?
                        <StackCards
                            selectedStack={selectedStack}
                            setSelectedStack={setSelectedStack}
                        ></StackCards> : <p className="text-center font-semibold text-sm py-6 border border-dashed  border-slate-400 rounded-lg">Your stack is empty.</p>
                }
            </div>
        </aside>
    );
};

export default Stack;