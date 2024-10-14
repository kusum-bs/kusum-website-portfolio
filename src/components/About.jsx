import { ABOUT } from "../constants";

const About = () => {
  return (
    <section id="about">
        <h2 className="my-10 text-center text-3xl lg:text-8xl"> About Me</h2>
        <div className="mx-auto max-w-6xl mb-20 flex items-center justify-center">
            <p className="m-8 max-w-6xl text-2xl text-justify lg:text-xl">{ABOUT}</p>
        </div>
    </section>
  );
};

export default About;