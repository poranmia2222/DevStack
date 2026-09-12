import { use, useState } from "react";
import type { TechnologyType } from "../../Types/type";
import TechnologiesCards from "../TechnologyCards/TechnologyCards";
import StackSidebar from "../StackSidebar/StackSidebar";

interface TechnologyContentProps {
    technologiesPromise: Promise<TechnologyType[]>;
}

const TechnologyContent = ({
    technologiesPromise,
}: TechnologyContentProps) => {

    const technologies = use(technologiesPromise);

    const [selectedStack, setSelectedStack] =
        useState<TechnologyType[]>([]);

    return (
        <div className="grid lg:grid-cols-12 gap-10 mt-8 md:mt-14">

            {/* Technology Cards */}
            <div className="lg:col-span-9">
                <TechnologiesCards
                    technologies={technologies}
                    selectedStack={selectedStack}
                    setSelectedStack={setSelectedStack}
                />
            </div>

            {/* Stack Sidebar */}
            <div className="lg:col-span-3">
                <StackSidebar
                    selectedStack={selectedStack}
                    setSelectedStack={setSelectedStack}
                ></StackSidebar>
            </div>

        </div>
    );
};

export default TechnologyContent;