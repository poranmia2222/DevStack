import { RxCross2 } from "react-icons/rx";
import type { TechnologyType } from "../../Types/type";
import type { Dispatch, SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface TechnologyProps {
    technology: TechnologyType
    selectedStack: TechnologyType[]
    setSelectedStack: Dispatch<SetStateAction<TechnologyType[]>>
}


const StackCard = ({ technology, selectedStack, setSelectedStack}: TechnologyProps) => {

    const handleDeleteStack = () => {
        console.log("Stack Deleted!", technology)

        const filterSelectedStack = selectedStack.filter(stack => stack.id !== technology.id)

        setSelectedStack(filterSelectedStack)

        toast.info(`${technology.name} has been remove from stack!`, {
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
        <div className="flex items-center justify-between border border-slate-200 rounded-xl p-2 space-x-4">
            <div className="flex gap-4">
                <img className="w-10" src={technology.icon} alt="" />
                <div>
                    <h3 className="font-bold">{technology.name}</h3>
                    <p className="text-sm">{technology.category}</p>
                </div>
            </div>
            <RxCross2 onClick={() => handleDeleteStack()} className="text-3xl cursor-pointer" />
        </div>
    );
};

export default StackCard;