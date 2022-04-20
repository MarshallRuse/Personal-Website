import React from "react";
import styled from "styled-components";
import { NavLink } from "./styles/styledComponents";

const StyledFooter = styled.footer`
    background-color: var(--color-blue-dark);
    color: #fff;
    font-family: "Jura", sans-serif;
    padding: 4rem;
    text-align: center;
`;

const Footer = () => {
    return (
        <StyledFooter>
            Copyright ©
            <NavLink
                href='https://www.linkedin.com/in/marshall-ruse/'
                target='_blank'
                rel='noopener noreferrer'
                style={{ margin: "0 5px" }}
            >
                Marshall Ruse
            </NavLink>
            {new Date().getFullYear()}.
        </StyledFooter>
    );
};

export default Footer;
