'use client';

import experienceItems from "@/constants/ExperienceSection";
import { ExperienceItem } from "@/types";
import React, { useEffect, useState } from "react";


const ExperienceSection: React.FC = () => {
    const [currentExperienceItemName, setCurrentExperienceItemName] = useState<string>('ironhack');
    const [currentExperience, setCurrentExperience] = useState<ExperienceItem>(() => experienceItems.find(item => item.id === 'ironhack')!);
    const [animate, setAnimate] = useState<boolean>(true);

    const handleExperienceItemClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const buttonText = event.currentTarget.innerText.toLowerCase();
        setAnimate(false); // Reset animation
        setTimeout(() => {
            setCurrentExperienceItemName(buttonText);
            const experience = experienceItems.find(item => item.name.toLowerCase() === buttonText);
            if (experience) {
                setCurrentExperience(experience);
            }
            setAnimate(true); // Trigger animation after state update
        }, 200); // Delay to match the transition duration
    };

    useEffect(() => {

    }, [currentExperience]);

    return (
        <section className="px-6 ">
            <div className="mb-10">
                <h1 className="text-left text-[26px] font-bold tracking-[10px] ">2. Experience</h1>
                <hr className="h-px border-charcoal-gray dark:border-slate-300 mt-3 w-2/5" />
            </div>
            <div className="flex w-full justify-evenly">
                <button className="focus:bg-charcoal-gray p-2 focus:bg-opacity-25" onClick={handleExperienceItemClick}>Ironhack</button>
                <button className="focus:bg-charcoal-gray p-2 focus:bg-opacity-25" onClick={handleExperienceItemClick}>Remy</button>
                <button className="focus:bg-charcoal-gray p-2 focus:bg-opacity-25" onClick={handleExperienceItemClick}>Apple</button>
            </div>
            <div className="relative w-full">
                <hr className={`absolute top-0 h-0.5 bg-charcoal-gray mt-2 transition-all ease-in-out duration-500 ${currentExperienceItemName === "remy" ? "w-[62%]" : currentExperienceItemName === "apple" ? "w-full" : "w-32"}`} />
            </div>
            <div className={`text-sm text-pretty flex flex-col gap-4 mt-10 transition ease-in-out duration-150 ${animate ? ' opacity-100' : ' opacity-0'}`}>
                {currentExperience && (
                    <>
                        <h2 className="font-bold text-xl">{currentExperience.title}</h2>
                        <p>{currentExperience.description}</p>
                    </>
                )}
            </div>
        </section>
    );
}

export default ExperienceSection;
