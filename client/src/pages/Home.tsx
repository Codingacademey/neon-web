
import { Suspense, lazy } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

const About = lazy(() => import("@/components/sections/About").then(mod => ({ default: mod.About })));
import { Skills } from "@/components/sections/Skills";
const Projects = lazy(() => import("@/components/sections/Projects").then(mod => ({ default: mod.Projects })));
const Contact = lazy(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })));

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
        <About />
      </Suspense>
      <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
        <Skills />
      </Suspense>
      <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
        <Projects />
      </Suspense>
      <Suspense fallback={<div className="h-96"><Skeleton className="w-full h-full" /></div>}>
        <Contact />
      </Suspense>
    </div>
  );
}
