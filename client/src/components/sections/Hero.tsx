import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Stars } from "../canvas/Stars";
import { Avatar } from "../canvas/Avatar";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Canvas */}
      <Canvas
        camera={{ position: [0, 0, 5] }}
        className="absolute inset-0"
      >
        <Stars />
        <Avatar />
      </Canvas>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="relative z-10">
          {/* Brand Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-2"
          >
            <span className="text-sm sm:text-base text-primary/80">
              Haris | JavaScript Mastery
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold">
              <span className="text-gradient">Hi, I'm Haris</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-2xl"
          >
            I develop 3D visuals, user interfaces and web applications
          </motion.p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background pointer-events-none" />
    </section>
  );
}