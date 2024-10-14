import { EXPERIENCES } from "../constants";
const Work = () => {
  return (
   <section id="experience">
    <h2 className="my-10 text-center text-3xl lg:text-8xl">Work Experience</h2>
    <div className="mx-auto max-w-6xl">
        {EXPERIENCES.map((experience, id) => (
            <div key={id} className="mx-4 mb-20">
                <h2 className="m-8 max-w-6xl text-5xl lg:text-4xl font-medium lg:text-2xl">
                    {experience.company}
                </h2>
                <div className="m-8 max-w-6xl text-3xl lg:text-2xl flex justify-between">
                    <p className="py-4 tracking-wide lg:text-xl">
                        {experience.role}
                    </p>
                    <p className="py-4 lg:text-xl">
                        {experience.year}
                    </p>
                </div>
                <p className="m-8 max-w-6xl text-2xl text-justify lg:text-xl">
                    {experience.description}</p>
            </div>
        ))}
    </div>
   </section>
  );
};

export default Work;