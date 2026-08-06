import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
    const skillContainerStyling = "skill-container-anim w-[90%] h-[20em] md:h-[22em] flex flex-col justify-end mx-auto bg-secondary dark:bg-gray-300 px-7 pt-20 pb-7 rounded-md";
    const headingStyling = "text-xl mt-2 mb-4 md:text-2xl md:mt-4 lg:text-[1.6rem]";
    const checkStyling = "bx bx-check text-primary text-lg md:text-2xl";
    const pListStyling = "text-sm font-light flex items-center gap-2 py-1 md:text-[.95rem]";

    useGSAP(() => {
        gsap.fromTo('.anim-skills', {
            opacity: 0,
            y: 20
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.anim-skills',
                start: 'top 80%',
                end: 'bottom 10%',
            }
        });

        gsap.fromTo('.skill-container-anim', {
            opacity: 0,
            y: 30
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.skill-container-anim',
                start: 'top 80%',
            }
        });
    }, []);

    return (
        <div className="mt-20 relative md:mt-28 px-7 md:px-10 lg:max-w-screen-xl lg:mx-auto lg:px-7" id="skills">
            <div className='absolute w-[2.7em] h-[5em] skew-y-[40deg] bg-primary right-0 top-[-2%]'></div>

            <div className="">
                <h1 className="text-2xl font-medium md:text-3xl anim-skills">Skills</h1>
                <p className="text-sm font-light my-2 md:text-base anim-skills">What i offer</p>

                <div className="mt-8 flex flex-col gap-4 md:mt-12 md:gap-5 lg:gap-8 lg:w-[85%] lg:mx-auto">
                    <div className="flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-8">
                        <div className={skillContainerStyling}>
                            <i className="bx bx-devices text-4xl text-primary lg:text-5xl"></i>
                            <h1 className={headingStyling}>UI/UX</h1>
                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>User-Centered Design</span>
                            </p>

                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>Prototyping & Wireframing</span>
                            </p>

                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>Responsive Design</span>
                            </p>
                        </div>

                        <div className={skillContainerStyling}>
                            <i className="bx bx-code text-4xl text-primary lg:text-5xl"></i>
                            <h1 className={headingStyling}>Frontend Development</h1>
                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>React & Next.js Applications</span>
                            </p>

                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>State Management & Data Fetching</span>
                            </p>

                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>Performance Optimization</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 md:flex-row md:gap-5 lg:gap-8">
                        <div className={skillContainerStyling}>
                            <i className="bx bxs-data text-4xl text-primary lg:text-5xl"></i>
                            <h1 className={headingStyling}>Backend Development</h1>
                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>RESTful API Design</span>
                            </p>

                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>NestJS, Laravel & Express</span>
                            </p>

                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>Database Architecture</span>
                            </p>
                        </div>

                        <div className={skillContainerStyling}>
                            <i className="bx bx-network-chart text-4xl text-primary lg:text-5xl"></i>
                            <h1 className={headingStyling}>API & System Design</h1>
                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>Authentication & Authorization</span>
                            </p>

                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>Real-Time & WebSocket Systems</span>
                            </p>

                            <p className={pListStyling}>
                                <i className={checkStyling}></i>
                                <span>Database Modeling & ORM</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills