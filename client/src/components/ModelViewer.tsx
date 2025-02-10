import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { ProjectModel } from './canvas/ProjectModel';
import { Dialog, DialogContent } from './ui/dialog';
import { Button } from './ui/button';
import { Loader } from '@react-three/drei';
import { X } from 'lucide-react';

type ModelViewerProps = {
  isOpen: boolean;
  onClose: () => void;
  modelPath: string;
  title: string;
};

export function ModelViewer({ isOpen, onClose, modelPath, title }: ModelViewerProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] h-[600px] p-0">
        <div className="absolute top-4 right-4 z-50">
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative w-full h-full bg-background/80 backdrop-blur-sm">
          <h2 className="absolute top-4 left-4 text-xl font-bold z-10">
            {title}
          </h2>
          <Canvas
            dpr={[1, 2]}
            performance={{ min: 0.5 }}
          >
            <Suspense fallback={null}>
              <ProjectModel modelPath={modelPath} />
            </Suspense>
          </Canvas>
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <Loader />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}