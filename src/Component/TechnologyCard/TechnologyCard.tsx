import { GoStarFill } from "react-icons/go";
import type { TechnologyType } from "../../Types/type";

interface TechnologyProps {
    technology: TechnologyType
}


const TechnologyCard = ({ technology }: TechnologyProps) => {
    return (
        <div className="space-y-4 border border-slate-200 rounded-2xl p-4 transition-all duration-300
  hover:-translate-y-2 hover:border-[#059669]  hover:shadow-xl hover:shadow-primary/10">
            <div className="flex justify-between items-center">
                <img className="w-10" src={technology.icon} alt="" />
                <p className="bg-[#ECFDF5] px-4 py-1 rounded-lg border border-[#059669] font-semibold text-sm text-[#059669]">{technology.badge}</p>
            </div>
            <h3 className="text-xl font-bold">{technology.name}</h3>
            <p className="text-xl">{technology.description}</p>
            <div className="divider"></div>
            <div className=" flex justify-between items-center text-sm font-semibold text-[#334155]">
                <p className="px-4 py-2 rounded-lg bg-[#F1F5F9]">{technology.category}</p>
                <p>{technology.difficulty}</p>
                <p className="flex items-center gap-2"><GoStarFill className="text-yellow-500 text-lg" />{technology.rating}</p>
            </div>
            <button className="btn bg-[#0A0F1D] text-white w-full">Add to Stack</button>
        </div>
    );
};

export default TechnologyCard;