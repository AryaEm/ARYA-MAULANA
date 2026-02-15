import { HeroSection } from '@/components/sections/heroSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      
      <div id="projects" className="h-screen bg-zinc-950 flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Projects Section (Coming Soon)</h2>
      </div>
      
      <div id="contact" className="h-screen bg-black flex items-center justify-center">
        <h2 className="text-4xl font-bold text-white">Contact Section (Coming Soon)</h2>
      </div>
    </main>
  );
}