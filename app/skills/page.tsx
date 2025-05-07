import Skills from "@/components/Skills";
import StarBackground from "@/components/StarBackground";

export default function SkillsPage() {
  return (
    <div className="relative min-h-screen">
      <StarBackground />
      <div className="container mx-auto px-4 py-20">
        <Skills />
      </div>
    </div>
  );
}
