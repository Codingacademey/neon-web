import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Brain, Rocket } from "lucide-react";

const cards = [
  {
    icon: <Code2 className="h-8 w-8" />,
    title: "Developer",
    description: "Passionate about creating elegant solutions to complex problems"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Problem Solver",
    description: "Analytical thinker with strong debugging skills"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Fast Learner",
    description: "Quick to adapt and master new technologies"
  }
];

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 text-primary">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
