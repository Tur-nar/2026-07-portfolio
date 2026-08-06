import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Technologies = () => {
    const techLogoStyling = 'text-primary px-1 text-4xl';

    useGSAP(() => {
        gsap.fromTo('.tech-anim', {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'power1.inOut',
            stagger: 0.15,
            scrollTrigger: {
                trigger: '.tech-anim',
                start: 'top 80%',
                end: 'bottom 70%',
            }
        });

        gsap.fromTo('.tech-skill-anim', {
            y: 30,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            ease: 'power1.inOut',
            stagger: 0.02,
            scrollTrigger: {
                trigger: '.tech-skill-anim',
                start: 'top 80%',
                end: 'bottom 70%',
            }
        });

    }, []);

    return (
        <div className="mt-14 relative z-10 md:mt-24 lg:mt-28 px-7 md:px-10 lg:max-w-screen-xl lg:mx-auto lg:px-7">
            <div className='absolute w-[2.7em] h-[5em] skew-y-[40deg] bg-secondary dark:bg-gray-200 left-0 top-[-5%] -z-10'></div>
            <div className='z-10'>
                <h1 className="text-2xl font-medium md:text-3xl tech-anim">Technologies</h1>
                <p className="text-sm mt-2 mb-9 md:text-base font-[300] lg:mb-12 tech-anim">Technologies i'm most familiar with</p>

                <div className="grid grid-cols-4 mx-auto gap-3 md:gap-8 lg:grid-cols-8 lg:gap-x-16 lg:gap-y-10">
                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-figma ${techLogoStyling}`}></i>
                        Figma
                    </span>

                    <span className="flex flex-col px-3 items-center text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-html5 ${techLogoStyling}`}></i>
                        HTML
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-css3 ${techLogoStyling}`}></i>
                        CSS
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-bootstrap ${techLogoStyling}`}></i>
                        Bootstrap
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-sass ${techLogoStyling}`}></i>
                        SASS
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-tailwind-css ${techLogoStyling}`}></i>
                        Tailwind
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-javascript ${techLogoStyling}`}></i>
                        Javascript
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-typescript ${techLogoStyling}`}></i>
                        Typescript
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-git ${techLogoStyling}`}></i>
                        Git
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-github ${techLogoStyling}`}></i>
                        GitHub
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-react ${techLogoStyling}`}></i>
                        React
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-next-js ${techLogoStyling}`} />
                        Next.js
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-redux ${techLogoStyling}`} />
                        Redux
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-shadcn-ui ${techLogoStyling}`}></i>
                        ShadCN
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-radix-ui ${techLogoStyling}`} />
                        Radix-ui
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-react-query ${techLogoStyling}`} />
                        TanStack
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-nodejs ${techLogoStyling}`}></i>
                        Node.js
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-express-js ${techLogoStyling}`} />
                        Express
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-nest-js ${techLogoStyling}`} />
                        NestJS
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-prisma-orm ${techLogoStyling}`} />
                        Prisma
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-better-auth ${techLogoStyling}`} />
                        Better-auth
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-php ${techLogoStyling}`} />
                        PHP
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-laravel ${techLogoStyling}`} />
                        Laravel
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-postgresql ${techLogoStyling}`}></i>
                        PostgreSQL
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-my-sql ${techLogoStyling}`} />
                        MySQL
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bx bxl-mongodb ${techLogoStyling}`}></i>
                        MongoDB
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-jwt ${techLogoStyling}`} />
                        JWT
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-python ${techLogoStyling}`} />
                        Python
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-fastapi ${techLogoStyling}`} />
                        FastAPI
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-mcp ${techLogoStyling}`} />
                        MCP
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-cursor-ai ${techLogoStyling}`} />
                        Cursor
                    </span>

                    <span className="flex flex-col items-center px-3 text-[.85rem] font-[300] tech-skill-anim">
                        <i className={`bxl bx-google-antigravity ${techLogoStyling}`} />
                        Antigravity
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Technologies