import { use, useState } from "react";
import type { TechnologyType } from "../../Types/type";
import TechnologiesCards from "../TechnologyCards/TechnologyCards";
import StackSidebar from "../StackSidebar/StackSidebar";
interface TechnologiesCardsProps {
    techologiesPromise: Promise<TechnologyType[]>
}

const Technologies = ({ techologiesPromise }: TechnologiesCardsProps) => {

    const technologies = use(techologiesPromise)

    const [selectedStack, setSelectedStack] = useState<TechnologyType[]>([])


    return (
        <div>
            <div className="container mx-auto  px-4 md:px-10 lg:px-0  py-6">
                <div>
                    <h2 className="md:text-4xl font-extrabold text-[#0F172A]">Explore the <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span></h2>
                    <p className="my-3 text-sm md:text-base md:font-semibold">Pick one technology per category to build your ideal stack.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 mt-8 md:mt-14">
                    <div className="lg:col-span-9 gap-2">

                        <TechnologiesCards 
                        selectedStack={selectedStack}
                        setSelectedStack={setSelectedStack}
                        technologies={technologies}
                        ></TechnologiesCards>

                    </div>
                    <div className="lg:col-span-3" >
                        <StackSidebar
                        selectedStack={selectedStack}
                        setSelectedStack={setSelectedStack}
                        ></StackSidebar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;