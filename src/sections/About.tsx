import { useRef } from "react"
import AnimatedHeaderSection from "../components/AnimatedHeaderSection"
import AnimatedTextLines from "../components/AnimatedTextLines"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

type Props = {}

gsap.registerPlugin(ScrollTrigger);

function About({}: Props) {
    const description = `I build scalable, high-performance solutions from sketchy prototypes to production-ready code. Clean architecture, strong coffee, and a sense of humor keep me alive.`
    const aboutText = `I’m a results-driven Full Stack Developer building scalable, web applications.Specialize in both frontend and backend development, with strong skills in cloud infrastructure and modern AI tools.I thrive in agile environments, and bring a passion for clean code, problem-solving,and continuous learning.`
    const imgRef = useRef(null);

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger: imgRef.current,
        });
        gsap.to('#about',{
            scale:0.5,
            scrollTrigger: {
                trigger:'#about',
                start:"bottom 80%",
                end:"bottom 20%",
                scrub: true,
            },
            ease:"power1.inOut"
        })

        tl.from(imgRef.current,{
            opacity:1,
            duration:1,
            ease:"power1.in",
            scrollTrigger:{
                trigger:imgRef.current
            }
        })
    })

    return (
    <section id="about" className="min-h-screen bg-gray-950 rounded-b-4xl">
        <AnimatedHeaderSection subtitle="Develop with purpose, build to scale" title="About Me" description={description} textColor="text-white" withScrollTrigger={true} />
        <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking tracking-wide
        lg:flex-row md:text:2xl lg:text-3xl text-white/60">
            <img ref={imgRef} src="images/man.jpg" alt="man" className="w-md rounded-4xl" />
            <AnimatedTextLines text={aboutText} classname="w-full"/>
        </div>

    </section>
  )
}

export default About