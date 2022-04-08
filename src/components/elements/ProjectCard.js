import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../styles/projectcard.module.css";
import CloudinaryImage from "./CloudinaryImage";

const ProjectCard = (props) => {
    const { cardImage, cardTitle, cardSubtitle, projectPageLink, demoLink, liveLink, sourceLink, stackIcons } = props;
    const history = useHistory();
    const goToPage = () => {
        history.push(projectPageLink);
    };

    const calcIconWidth = () => (stackIcons.length > 4 ? Math.floor(320 / stackIcons.length) : 80);

    return (
        <div className={styles.cardWrapper}>
            <div
                className={styles.cardBody}
                data-augmented-ui={`tl-clip tr-2-clip-x ${sourceLink && "br-2-clip-x"} ${
                    demoLink && "bl-2-clip-x"
                } both`}
                onClick={goToPage}
            >
                <div className={styles.cardBodyAugReset} data-augmented-ui-reset>
                    <CloudinaryImage
                        className={`${styles.cardBody} ${styles.cardBodyImg}`}
                        fileName={cardImage}
                        data-augmented-ui={`tl-clip tr-2-clip-x ${sourceLink && "br-2-clip-x"} ${
                            demoLink && "bl-2-clip-x"
                        } both`}
                    />
                </div>
            </div>
            <div className={styles.cardHeader}>
                <div className={styles.cardTitle}>{cardTitle}</div>
                <div className={styles.cardSubtitle}>{cardSubtitle}</div>
            </div>
            {(demoLink || liveLink) && (
                <a
                    href={demoLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${styles.btnCardAction} ${styles.btnDemo}`}
                    data-augmented-ui='tr-clip tl-clip both'
                >
                    {liveLink ? "Visit" : "Demo"}
                </a>
            )}
            {sourceLink && (
                <a
                    href={sourceLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className={`${styles.btnCardAction} ${styles.btnSource}`}
                    data-augmented-ui='tr-clip tl-clip both'
                >
                    Source
                </a>
            )}

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
