import { Suspense } from "react";
import TechnologyContent from "../TechnologyContent/TechnologyContent";

const Technologies = () => {

    const technologiesPromise = async () => {
        const res = await fetch("/technology_data.json");
        return await res.json();
    };

    return (
        <div>
            <div className="container mx-auto px-4 md:px-10 lg:px-0 py-6">

                <div>
                     <h2 className="md:text-4xl font-extrabold text-[#0F172A]">Explore the<span className="gradient-text">Technologies</span></h2>

                    <p className="my-3 text-sm md:text-base md:font-semibold">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <Suspense
                    fallback={
                        <div className="flex justify-center items-center">
                            <p className="text-xl font-bold">
                              <span className="loading loading-spinner text-secondary"></span>  Loading...
                            </p>
                        </div>
                    }
                >
                    <TechnologyContent
                        technologiesPromise={technologiesPromise()}
                    />
                </Suspense>

            </div>
        </div>
    );
};

export default Technologies;