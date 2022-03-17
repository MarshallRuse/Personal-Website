import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/projectcard.module.css";

const ProjectCard = (props) => {
	const { cardImage, cardTitle, cardSubtitle, projectPageLink, demoLink, sourceLink, stackIcons } = props;
	const history = useHistory();
	const goToPage = () => {
		console.log("page: ", projectPageLink);
		history.push(projectPageLink);
	};

	const calcIconWidth = () => (stackIcons.length > 4 ? Math.floor(320 / stackIcons.length) : 80);

	return (
		<div className={styles.cardWrapper}>
			<div
				className={styles.cardBody}
				style={{ backgroundImage: `url(${cardImage})` }}
				data-augmented-ui={`tl-clip tr-2-clip-x br-2-clip-x ${demoLink !== undefined && "bl-2-clip-x"} both`}
				onClick={goToPage}
			></div>
			<div className={styles.cardHeader}>
				<div className={styles.cardTitle}>{cardTitle}</div>
				<div className={styles.cardSubtitle}>{cardSubtitle}</div>
			</div>
			{demoLink !== undefined && (
				<a
					href={demoLink}
					target='_blank'
					rel='noopener noreferrer'
					className={`${styles.btnCardAction} ${styles.btnDemo}`}
					data-augmented-ui='tr-clip tl-clip both'
				>
					Demo
				</a>
			)}
			<a
				href={sourceLink}
				target='_blank'
				rel='noopener noreferrer'
				className={`${styles.btnCardAction} ${styles.btnSource}`}
				data-augmented-ui='tr-clip tl-clip both'
			>
				Source
			</a>
			<div className={styles.cardIconStack}>
				{stackIcons.map((item, i) => (
					<div
						key={i}
						className={`${styles.stackIconWrapper} ${styles[item.class]}`}
						data-augmented-ui='all-hex border'
						style={{ "--aug-all-width": `${calcIconWidth()}px` }}
					>
						<img src={item.icon} />
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectCard;
