import React, { useState } from "react";
import Canvas from "./Canvas";

const MatrixBG = () => {
	const [canvasWidth, setCanvasWidth] = useState(undefined);
	const [ctx, setCtx] = useState(undefined);

	const establishCanvasWidth = (width) => {
		setCanvasWidth(width);
	};
	const establishContext = (context) => {
		setCtx(context);
	};

	// Setting up the letters
	const chars =
		"ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ";
	const letters = chars.split("");

	// Setting up the columns
	const fontSize = 10;
	const columns = canvasWidth ? canvasWidth / fontSize : 10;
	// Setting up the drops
	const drops = [];
	for (let i = 0; i < columns; i++) {
		drops[i] = 1;
	}

	const draw = () => {
		if (ctx) {
			ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			for (let i = 0; i < drops.length; i++) {
				const text = letters[Math.floor(Math.random() * letters.length)];
				ctx.fillStyle = "#0ff";
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);
				drops[i]++;
				if (drops[i] * fontSize > ctx.canvas.height && Math.random() > 0.95) {
					drops[i] = 0;
				}
			}
		}
	};
	return <Canvas draw={draw} establishCanvasWidth={establishCanvasWidth} establishContext={establishContext} />;
};

export default MatrixBG;
