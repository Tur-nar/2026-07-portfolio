import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const socialLinkstyling = "flex gap-1 items-center py-2 px-4 bg-secondary dark:bg-gray-300 rounded dark:hover:text-white dark:hover:bg-primary hover:bg-primary group hover:shadow-lg hover:shadow-primary transition-all lg:px-6"
    const socialIconStyling = "text-primary text-xl group-hover:text-white"
    const socialTextStyling = "text-[.8rem] font-[300] md:text-[.9rem]"

    useGSAP(() => {
        gsap.fromTo('.contact-anim', {
            opacity: 0,
            y: 20
        }, {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.contact-anim',
                start: 'top 80%',
                end: 'bottom 10%',
            }
        });
    }, []);

    return (
        <div className="mt-32 relative z-10 md:mt-36 lg:mt-48 px-7 md:px-10 lg:max-w-screen-xl lg:mx-auto lg:px-7" id="contact">
            <div className='absolute w-[2.7em] h-[5em] skew-y-[40deg] bg-primary right-0 top-[-50%] -z-10'></div>
            <div className="z-10">
                <h1 className="text-3xl font-medium text-center md:text-4xl lg:text-5xl contact-anim">Get in Touch.</h1>
                <p className="text-sm font-light mt-5 text-center lg:mt-8 md:text-[.95rem] contact-anim">I'm currently specializing in <span className="text-primary">Full-Stack Development (NestJS & React)</span></p>

                <div className="mt-8 flex gap-4 justify-center lg:gap-6 contact-anim">
                    <a href="https://github.com/Tur-nar" target="_blank" className={socialLinkstyling}>
                        <i className={`bx bxl-github ${socialIconStyling}`}></i>
                        <span className={socialTextStyling}>Github</span>
                    </a>
                    <a href="https://www.linkedin.com/in/adebowale-ademuyiwa-505b56323/" target="_blank" className={socialLinkstyling}>
                        <i className={`bx bxl-linkedin ${socialIconStyling}`}></i>
                        <span className={socialTextStyling}>LinkedIn</span>
                    </a>
                    <a href="mailto:adebowaleademuyiwa12@gmail.com" target="_blank" className={socialLinkstyling}>
                        <i className={`bx bxs-envelope ${socialIconStyling}`}></i>
                        <span className={socialTextStyling}>Email</span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact