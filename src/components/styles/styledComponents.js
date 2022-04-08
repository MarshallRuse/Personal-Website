import React from "react";
import styled from "styled-components";
import breakpoints from "./breakpoints";

const GenericSectionTitle = styled.p`
    color: #fff;
    font-family: "Orbitron", sans-serif;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.167;
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 2rem;
    position: relative;
    pointer-events: none;
    text-align: center;
    ${(props) => props.styling}
`;

export const SectionTitle = ({ children, element = "h1", styling }) => (
    <GenericSectionTitle as={element} styling={styling}>
        {children}
    </GenericSectionTitle>
);

const GenericSubsectionTitle = styled.p`
    color: #fff;
    font-family: "Orbitron", sans-serif;
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 0em;
    line-height: 1.167;
    margin: 0;
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: relative;
    pointer-events: none;
    text-align: center;
    ${(props) => props.styling}
`;

export const SubsectionTitle = ({ children, element = "h2", styling }) => (
    <GenericSubsectionTitle as={element} styling={styling}>
        {children}
    </GenericSubsectionTitle>
);

const GenericSubSubsectionTitle = styled.p`
    color: #fff;
    font-family: "Orbitron", sans-serif;
    flex: 1 0 100%;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 1.334;
    letter-spacing: 0em;
    margin: 0;
    padding: 20px 0;
    text-align: center;
    ${(props) => props.styling}
`;

export const SubSubsectionTitle = ({ children, element = "h3", styling }) => (
    <GenericSubSubsectionTitle as={element} styling={styling}>
        {children}
    </GenericSubSubsectionTitle>
);

export const NavLink = styled.a`
    color: ${(props) => (props.color ? props.color : "#fff")};
    display: inline-block;
    position: relative;
    text-decoration: none;
    transition: color 0.25s ease-out;

    &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--color-blue-light);
        height: 2px;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.25s ease-out;
        width: 100%;
    }
    &:hover,
    &:focus {
        color: var(--color-blue-light);
    }
    &:hover:after,
    &:focus:after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

export const IconRow = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 1.5rem;
    margin-bottom: 4rem;
    row-gap: 2rem;
`;

export const IconBox = styled.div`
    ${(props) => props.styling};
    flex-basis: ${(props) => (props.numPerRow ? `${100 / props.numPerRow}%` : "50%")};
    flex-grow: 0;
    max-width: ${(props) => (props.numPerRow ? `${100 / props.numPerRow}%` : "50%")};
    padding: 1rem;

    @media (min-width: ${breakpoints.sm}) {
        flex-basis: ${(props) => (props.numPerRowSm ? `${100 / props.numPerRowSm}%` : "25%")};
        flex-grow: 0;
        max-width: ${(props) => (props.numPerRowSm ? `${100 / props.numPerRowSm}%` : "25%")};
    }

    @media (min-width: ${breakpoints.md}) {
        flex-basis: ${(props) => (props.numPerRowMd ? `${100 / props.numPerRowMd}%` : "16.67%")};
        flex-grow: 0;
        max-width: ${(props) => (props.numPerRowMd ? `${100 / props.numPerRowMd}%` : "16.67%")};
    }
    @media (min-width: ${breakpoints.lg}) {
        flex-basis: ${(props) => (props.numPerRowLg ? `${100 / props.numPerRowLg}%` : "12.5%")};
        flex-grow: 0;
        max-width: ${(props) => (props.numPerRowLg ? `${100 / props.numPerRowLg}%` : "12.5%")};
    }
`;
