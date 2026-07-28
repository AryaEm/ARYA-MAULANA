import HeroCard from "@/components/ui/HeroCard";
import AboutSnapshotCard from "@/components/ui/AboutSnapshotCard";
import CaseStudyHighlightCard from "@/components/ui/CaseStudyHighlightCard";
import StatusCard from "@/components/ui/StatusCard";
import ResumeCard from "@/components/ui/ResumeCard";
import SnakeGameCard from "@/components/ui/SnakeGameCard";
import ProfileCard from "../ui/ProfileCard";
import { TabId } from "@/types";

interface Props {
  onNavigate: (tab: TabId) => void;
}

export default function HomeView({ onNavigate }: { onNavigate: (tab: TabId) => void }) {
  return (
    <div className="masonry overflow-hidden columns-1 sm:columns-2 lg:columns-3 md:h-full">
      <HeroCard onNavigate={onNavigate} />
      <ResumeCard />
      <ProfileCard />
      <CaseStudyHighlightCard onOpen={() => onNavigate("projects")} />
      <AboutSnapshotCard />
      <StatusCard />
      <SnakeGameCard />
    </div>
  );
}