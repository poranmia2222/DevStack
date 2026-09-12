import { GoStarFill } from "react-icons/go";
import type { TechnologyType } from "../../Types/type";
import { type Dispatch, type SetStateAction } from "react";
import { Bounce, toast } from "react-toastify";

interface TechnologyProps {
    technology: TechnologyType
    selectedStack: TechnologyType[]
    setSelectedStack: Dispatch<SetStateAction<TechnologyType[]>>
}


const TechnologyCard = ({ technology, selectedStack, setSelectedStack }: TechnologyProps) => {

    const isDisabled = selectedStack.some(
        stack => stack.id === technology.id
    );


    const handeAddStackButton = () => {

        setSelectedStack([...selectedStack, technology])

        toast.success(`${technology.name} has been added successfully to the stack!`, {
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
        <div className={`${isDisabled ? 'border-[#059669]' : 'border-slate-200'} flex flex-col space-y-4 border rounded-2xl p-4 transition-all duration-300
  hover:-translate-y-2 hover:border-[#059669]  hover:shadow-xl hover:shadow-primary/10`}>
            <div className="flex justify-between items-center">
                <img className="w-10" src={technology.icon} alt="" />
                <p className="bg-[#ECFDF5] px-4 py-1 rounded-lg border border-[#059669] font-semibold text-sm text-[#059669]">{technology.badge}</p>
            </div>
            <h3 className="md:text-xl font-bold">{technology.name}</h3>
            <p className="text-sm md:text-base">{technology.description}</p>
            <div className="divider"></div>
            <div className=" flex justify-between items-center mt-auto text-sm font-semibold text-[#334155]">
                <p className=" px-2 py-1 md:px-3 md:py-2 rounded-lg text-[10px] md:text-[15px] bg-[#F1F5F9]">{technology.category}</p>
                <p className="text-[10px] md:text-[15px]">{technology.difficulty}</p>
                <p className="flex items-center gap-2 text-[10px] md:text-base"><GoStarFill className="text-yellow-500 md:text-lg" />{technology.rating}</p>
            </div>
            <button onClick={() => handeAddStackButton()} disabled={isDisabled} className="btn  mt-auto disabled:bg-[#05966840] disabled:text-[#059669] disabled:border-[#059669] bg-[#0A0F1D] text-white w-full">{
                isDisabled ? "✓ Added to Stack" : "Add to Stack"
            }</button>
        </div>
    );
};

export default TechnologyCard;