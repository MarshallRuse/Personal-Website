import React from "react";
import styled from "styled-components";
import { motion, useViewportScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { NavLink } from "../styles/styledComponents";

const variants = {
    transparent: {
        backgroundColor: "rgba(var(--color-blue-dark-raw), 0)",
    },
    visible: {
        backgroundColor: "rgba(var(--color-blue-dark-raw, 0.5)",
    },
};

const NavList = styled(motion.nav)`
    display: flex;
    justify-content: space-evenly;
    padding: 40px 0 20px;
    @media screen and (max-width: var(--breakpoints-md)) {
        padding: 40px 0px;
    }

    @media screen and (max-width: var(--breakpoints-sm)) {
        padding: 20px 0px 25px;
    }
`;

const NavBar = () => {
    // Choose at what point the image opacity becomes 0
    // E.G: 50px from the top
    const offsetHeight = 200;
    // Vertical scroll distance in pixels.
    const { scrollY } = useViewportScroll();
    // Transforms scroll and image height values to opacity values
    const yRange = useTransform(scrollY, [0, offsetHeight], [0, 0.5]);
    const opacity = useSpring(yRange, { stiffness: 400, damping: 40 });
    const bg = useMotionTemplate`rgba(var(--color-blue-dark-raw), ${opacity})`;

    return (
        <NavList style={{ backgroundColor: bg }}>
            <NavLink href='#skills-section' color='#fff'>
                Skills
            </NavLink>
            <NavLink href='#projects-section' color='#fff'>
                Projects
            </NavLink>
            <NavLink href='#blog-section' color='#fff'>
                Blog
            </NavLink>
            <NavLink href='#about-me-section' color='#fff'>
                About Me
            </NavLink>
            <NavLink href='#contact-section' color='#fff'>
                Contact
            </NavLink>
        </NavList>
    );
};

export default NavBar;
