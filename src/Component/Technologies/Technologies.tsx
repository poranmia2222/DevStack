import { Suspense } from "react";
import TechnologiesCards from "../TechnologyCards/TechnologyCard";

const Technologies = () => {

    const techologiesPromise = async () => {
        const res = await fetch("/public/technology_data.json")
        const data = await res.json()
        return data
    }
    return (
        <div>
            <div className="container mx-auto">
                <div>
                    <h2 className="text-4xl font-extrabold text-[#0F172A]">Explore the <span className="bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">Technologies</span></h2>
                    <p className="my-3 font-semibold">Pick one technology per category to build your ideal stack.</p>
                </div>

                <div className="grid grid-cols-12 gap-10 mt-14">
                    <div className="col-span-9 gap-2">

                        <Suspense fallback={<div>Loading...</div>}>
                            <TechnologiesCards techologiesPromise={techologiesPromise()}></TechnologiesCards>
                        </Suspense>

                    </div>
                    <div className="col-span-3">
                        <div className="bg-amber-700 h-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Technologies;