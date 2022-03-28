import React from "react";
import { useState, useEffect } from "react";
import styled, { css, keyframes } from "styled-components";

const blinking = keyframes`
    0% {
        opacity: 1;
    }

    25% {
        opacity: 0;
    }

    75% {
        opacity: 1;
    }
`;

const BlinkingMixin = css`
	animation: ${blinking} ${(props) => props.caretBlinkingSpeed}ms linear infinite;
`;

const RenderedText = styled.p`
	${(props) => props.styling}

	position: relative;
	display: inline-block;

	&::after {
		content: "";
		position: absolute;
		right: -${(props) => (props.typingPermitted && props.displayCaret ? props.caretWidth - 1 : 0)};
		height: 1em;
		border-right: ${(props) => (props.typingPermitted && props.displayCaret ? props.caretWidth : 0)}px solid
			${(props) => props.caretColor};
		${(props) => props.blinkingCaret && BlinkingMixin}
	}
`;

const GlitchingTypingText = (props) => {
	const {
		children,
		element,
		styling,
		className,
		typingPermitted = true,
		flagDoneTyping,
		displayCaret = true,
		caretWidth = 10,
		caretColor = "currentColor",
		blinkingCaret = false,
		caretBlinkingSpeed = 1000,
		nextCharProbability = 0.8,
		typingDuration = 3000,
		glitchProbability = 0.25,
		potentialGlitchInterval = 250,
	} = props;
	const text = children;
	const [renderedText, setRenderedText] = useState(text || "");
	const [sliceIndex, setSliceIndex] = useState(0);
	const [glitchingIntervalID, setGlitchingIntervalID] = useState(null);
	const [typingIntervalID, setTypingIntervalID] = useState(null);

	const possibleChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	const randomizeTextCharacter = (textToAugment) => {
		const charToReplaceIndex = Math.floor(Math.random() * textToAugment.length);
		const randomChar = possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
		const splitText = textToAugment.split("");
		splitText[charToReplaceIndex] = randomChar;
		const newText = splitText.join("");
		return newText;
	};

	useEffect(() => {
		return () => {
			clearInterval(glitchingIntervalID);
			clearInterval(typingIntervalID);
		};
	}, []);

	const typingInterval = Math.floor(typingDuration / (text?.length || 1));
	useEffect(() => {
		let gID, tID;
		if (typingPermitted) {
			gID = setInterval(() => {
				if (Math.random() > 1 - glitchProbability) {
					setRenderedText(randomizeTextCharacter(text));
				} else {
					setRenderedText(text);
				}
			}, potentialGlitchInterval);
			setGlitchingIntervalID(gID);

			if (typingDuration !== -1) {
				if (sliceIndex < text.length) {
					tID = setInterval(() => {
						if (Math.random() > 1 - nextCharProbability) {
							setSliceIndex((index) => index + 1);
						}
					}, typingInterval);
					setTypingIntervalID(tID);
				}
			} else {
				setSliceIndex(text.length);
			}
		} else {
			clearInterval(gID);
			clearInterval(tID);
		}
	}, [typingPermitted]);

	useEffect(() => {
		if (sliceIndex >= text.length) {
			flagDoneTyping?.();
			clearInterval(typingIntervalID);
		}
	}, [sliceIndex]);

	return (
		<RenderedText
			as={element}
			styling={styling}
			className={className}
			typingPermitted={typingPermitted}
			displayCaret={displayCaret}
			caretWidth={caretWidth}
			caretColor={caretColor}
			blinkingCaret={blinkingCaret}
			caretBlinkingSpeed={caretBlinkingSpeed}
		>
			{renderedText.slice(0, sliceIndex)}
		</RenderedText>
	);
};

export default GlitchingTypingText;
