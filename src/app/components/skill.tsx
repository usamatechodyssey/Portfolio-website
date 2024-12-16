import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faNodeJs,
  faBootstrap,
  faPhp,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

export default function SkillsSection() {
  return (
    <section id="skills" className=" py-14 text-center">
      <h2 className="text-3xl md:text-4xl lg:text-[40px] font-bold mb-8">
        My <span className="text-blue-600">Skills</span>
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {/* Skill Cards */}
        {skillsData.map((skill) => (
          <div
            key={skill.name}
            className=" rounded-lg p-5 w-32 transition-transform transform hover:-translate-y-2 shadow-lg hover:shadow-2xl"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-blue-600 text-1xl"
            />
            <h4 className="text-white mt-3 text-lg">{skill.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}

// Skills Data Array
const skillsData = [
  { name: "HTML5", icon: faHtml5 },
  { name: "CSS3", icon: faCss3Alt },
  { name: "JavaScript", icon: faJs },
  { name: "React", icon: faReact },
  { name: "Next.js", icon: faNodeJs },
  { name: "Bootstrap", icon: faBootstrap },
  { name: "PHP", icon: faPhp },

  { name: "Tailwind CSS", icon: faCss3 },
];
