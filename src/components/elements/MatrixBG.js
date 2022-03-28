import React, { useState } from "react";
import Canvas from "./Canvas";

const MatrixBG = (props) => {
	const { fps = 60 } = props;
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

	const convertMousePosToRowsAndCols = (x, y) => {
		// get col position
		const col = Math.floor(x / fontSize);

		// get row pos
		const row = Math.min(Math.ceil(y / fontSize), Math.floor(ctx.canvas.height));

		return { row, col };
	};

	// Disturbance Effect Handlers
	let disturbanceRow = -1;
	let disturbanceCol = -1;
	let timeout;

	const disturbanceEffect = (e) => {
		clearTimeout(timeout);
		const bounds = e.target.getBoundingClientRect();
		const x = e.clientX - bounds.left;
		const y = e.clientY - bounds.top;
		const { row, col } = convertMousePosToRowsAndCols(x, y);
		disturbanceRow = row;
		disturbanceCol = col;
		timeout = setTimeout(() => {
			disturbanceRow = -1;
			disturbanceCol = -1;
		}, 50);
	};

	const isDisturbanceAffectedPosition = (dropIndex) => {
		return drops[dropIndex] * fontSize > disturbanceRow && dropIndex === disturbanceCol;
	};

	// Canvas drawing
	const draw = () => {
		if (ctx) {
			ctx.fillStyle = `rgba(${window
				.getComputedStyle(document.body)
				.getPropertyValue("--color-blue-dark-raw")}, 0.3)`;
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
			for (let i = 0; i < drops.length; i++) {
				const text = letters[Math.floor(Math.random() * letters.length)];
				ctx.fillStyle = "#0ff";
				ctx.fillText(text, i * fontSize, drops[i] * fontSize);
				drops[i]++;
				if (
					drops[i] * fontSize > window.scrollY + window.innerHeight ||
					drops[i] * fontSize > ctx.canvas.height
				) {
					drops[i] = Math.round(-100 * Math.random());
				}
				if (isDisturbanceAffectedPosition(i)) {
					const h = Math.max(i - 1, 0);
					const j = Math.min(i + 1, Math.floor(columns));
					drops[h] = disturbanceRow;
					drops[i] = disturbanceRow;
					drops[j] = disturbanceRow;
				}
			}
		}
	};
	return (
		<Canvas
			draw={draw}
			onMouseMove={disturbanceEffect}
			establishCanvasWidth={establishCanvasWidth}
			establishContext={establishContext}
			fps={fps}
		/>
	);
};

export default MatrixBG;
