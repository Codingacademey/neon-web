import { motion } from "framer-motion";
import { SiPython, SiCplusplus, SiJavascript, SiHtml5, SiCss3, SiMysql, SiPandas, SiNumpy } from "react-icons/si";

const skills = [
  { name: "Python", icon: SiPython, proficiency: 90 },
  { name: "C++", icon: SiCplusplus, proficiency: 85 },
  { name: "JavaScript", icon: SiJavascript, proficiency: 88 },
  { name: "HTML", icon: SiHtml5, proficiency: 95 },
  { name: "CSS", icon: SiCss3, proficiency: 85 },
  { name: "MySQL", icon: SiMysql, proficiency: 80 },
  { name: "Pandas", icon: SiPandas, proficiency: 85 },
  { name: "NumPy", icon: SiNumpy, proficiency: 82 },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-background/50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-primary/20">
                <div className="flex items-center justify-center mb-4">
                  <skill.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-center font-semibold mb-2">{skill.name}</h3>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="bg-primary h-2.5 rounded-full"
                  />
                </div>
                <span className="text-sm text-muted-foreground mt-1 block text-center">
                  {skill.proficiency}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
