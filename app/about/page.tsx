import AboutHero from "@/components/about/AboutHero";
import CompanyStory from "@/components/about/CompanyStory";
import TeamSection from "@/components/about/TeamSection";
import CompanyStats from "@/components/about/CompanyStats";
import WhyDifferent from "@/components/about/WhyDifferent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | Verlux Construction",
    description: "Learn about Verlux's history, mission, and the dedicated team building your dreams.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
            <AboutHero />
            <CompanyStory />
            <CompanyStats />
            <TeamSection />
            <WhyDifferent />
        </div>
    );
}
