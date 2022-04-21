import React from "react";

// Sections
import HeaderSection from "./HeaderSection.js";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection.js";
import BlogSection from "./BlogSection";
import AboutMeSection from "./AboutMeSection.js";

const HomePage = () => {
    return (
        <main style={{ backgroundColor: "#000" }}>
            <HeaderSection />
            <SkillsSection />
            <ProjectsSection />
            <BlogSection />
            <AboutMeSection />
        </main>
    );
};

export default HomePage;
