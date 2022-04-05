import React from "react";
import styled from "styled-components";

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
