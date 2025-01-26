import { LuImport } from "react-icons/lu";
import kusum from "../assets/hero-image.png";

const Hero = () => {
  return (
   <section>
    <div className="flex flex-col items-center justify-center">
        <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
            Kusum BS
        </h1>
        <div className="w-full">
        <img src={kusum} alt="kusum bs" className="mt-8 h-96 w-full object-cover" />
        </div>

    </div>
   </section>
  )
}

export default Hero;
