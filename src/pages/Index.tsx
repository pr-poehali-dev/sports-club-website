import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import UpcomingWorkouts from "@/components/UpcomingWorkouts";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <NewsSection />
      <UpcomingWorkouts />
    </div>
  );
};

export default Index;
