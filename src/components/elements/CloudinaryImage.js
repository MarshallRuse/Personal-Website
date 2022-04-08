import React from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload, accessibility, responsive, placeholder } from "@cloudinary/react";
import styled, { css } from "styled-components";

const BackgroundImageStyling = css`
    min-height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
    z-index: -1;
`;

const StyledImage = styled(AdvancedImage)`
    ${(props) => props.backgroundImage && BackgroundImageStyling}
    ${(props) => props.styling};
`;

const CloudinaryImage = ({ fileName, backgroundImage, className, styling, placeholderType = "pixelate" }) => {
    // Create and configure your Cloudinary instance.
    const cld = new Cloudinary({
        cloud: {
            cloudName: "marsh",
        },
    });

    const myImage = cld.image(`portfolio/${fileName}`);

    // Request automatic format and quality.
    myImage.format("auto").quality("auto");

    return (
        <StyledImage
            cldImg={myImage}
            plugins={[lazyload(), responsive({ steps: 200 }), placeholder({ mode: placeholderType })]}
            backgroundImage={backgroundImage}
            className={className}
            styling={styling}
        />
    );
};

export default CloudinaryImage;
