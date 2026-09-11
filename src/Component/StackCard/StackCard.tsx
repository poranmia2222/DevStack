import { RxCross2 } from "react-icons/rx";
import type { TechnologyType } from "../../Types/type";

const StackCard = ({ technology }: { technology: TechnologyType }) => {

    const handleDeleteStack = () =>{
        console.log("Stack Deleted!", technology)
    }

    return (
        <div className="flex items-center justify-between border border-slate-200 rounded-xl p-2 space-x-4">
            <div className="flex gap-4">
                <img className="w-10" src={technology.icon} alt="" />
                <div>
                    <h3>{technology.name}</h3>
                    <p>{technology.category}</p>
                </div>
            </div>
            <RxCross2 onClick={()=>handleDeleteStack()} className="text-3xl cursor-pointer"/>
        </div>
    );
};

export default StackCard;