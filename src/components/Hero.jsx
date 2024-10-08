import { LuImport } from "react-icons/lu";
import kusum from "../assets/hero-image.png";

const Hero = () => {
  return (
   <section>
    <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
            Kusum <br />BS
        </h1>
        <div className="mt-8">
            <a href="/kusum-resume-dev.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            download 
            className="flex items-center rounded-xl bg-lime-300 
            p-2 px-3 font-sans font-medium text-black hover:bg-lime-400">
                <span>Resume.pdf</span>
                <LuImport className="ml-2"/>
            </a>
        </div>
        <div className="w-full">
        <img src={kusum} alt="kusum bs" className="mt-8 h-96 w-full object-cover" />
        </div>

    </div>
   </section>
  )
}

export default Hero;