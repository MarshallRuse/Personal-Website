import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { useInView } from "react-intersection-observer";
import GlitchingTypingText from "./elements/GlitchingTypingText";
import CloudinaryImage from "./elements/CloudinaryImage";

const BlogSectionContainer = styled.div`
    background-color: #000;
    padding-bottom: 4rem;
    text-align: center;
`;

const SectionHeaderStyling = css`
    color: var(--color-blue-light);
    font-family: "Orbitron", sans-serif;
    font-size: 3rem;
    margin: 0;
    padding-top: 1em;
    padding-bottom: 2em;
    text-align: center;
`;

const Subsection = styled.div`
    margin-bottom: 4rem;
`;

const BlogTitleLine = styled.div`
    align-items: baseline;
    color: var(--color-blue-light);
    display: flex;
    flex-wrap: wrap;
    font-family: "Jura", sans-serif;
    padding: 0 1rem;
    text-align: left;
`;

const BlogPostStyling = css`
    font-family: "Jura", sans-serif;
    margin: 0;
    text-align: left;
`;

const BlogTitlePrefixStyling = css`
    ${BlogPostStyling}
    display: inline;
    font-size: 2rem;
    margin-right: 1rem;
`;

const BlogTitleStyling = css`
    ${BlogPostStyling}
    color: var(--color-pink);
    font-size: 2rem;
`;

const DetailLine = styled.div`
    ${BlogPostStyling}
    align-items: baseline;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.5rem;
    padding: 0 4rem;
    width: 100%;
`;
const DetailProperty = styled.p`
    color: var(--color-orange);
    font-weight: bold;
    margin-right: 1rem;
`;

const DetailValue = styled.p`
    color: var(--color-yellow);
`;

const DetailLink = styled.a`
    display: block;
    word-break: break-all;
    &:visited {
        color: var(--color-yellow);
    }
`;

const DetailBannerImage = styled.img`
    border: 6px double var(--color-yellow);
    width: clamp(300px, 70%, 1250px);
`;

const BlogPostSubsection = (props) => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
        triggerOnce: true,
        fallbackInView: true,
    });
    const { title, url, date, keywords, bannerImage } = props;
    const [elementVisibility, setElementVisibility] = useState({
        title: false,
        details: {
            url: false,
            date: false,
            keywords: false,
            banner: false,
        },
        bannerImage: false,
    });
    const [titleTypingDone, setTitleTypingDone] = useState(false);

    const titleTypingDelay = 2000;
    const titleTypingDuration = 1000;
    const titleEnterDelay = 1000;
    const detailsSectionDisplayDelay = titleTypingDelay + titleTypingDuration + titleEnterDelay;
    const detailDelay = 250;
    const bannerLoadingDuration = 500;
    const bannerImageDelay =
        detailsSectionDisplayDelay +
        detailDelay * Object.keys(elementVisibility.details).length +
        bannerLoadingDuration;

    const flagDoneTypingTitle = () => setTimeout(() => setTitleTypingDone(true), titleEnterDelay);

    useEffect(() => {
        if (inView) {
            setTimeout(() => {
                const visibility = { ...elementVisibility };
                visibility.title = true;
                setElementVisibility(visibility);
            }, titleTypingDelay);

            setTimeout(() => {
                Object.keys(elementVisibility.details).forEach((key, index) => {
                    setTimeout(() => {
                        const visibility = { ...elementVisibility };
                        visibility.details[key] = true;
                        setElementVisibility(visibility);
                    }, detailDelay * index);
                });
            }, detailsSectionDisplayDelay);

            setTimeout(() => {
                const visibility = { ...elementVisibility };
                visibility.bannerImage = true;
                setElementVisibility(visibility);
            }, bannerImageDelay);
        }
    }, [inView]);

    return (
        <Subsection ref={ref}>
            <BlogTitleLine>
                <GlitchingTypingText
                    element='h3'
                    styling={BlogTitlePrefixStyling}
                    glitchProbability={0.1}
                    typingPermitted={elementVisibility.title}
                    typingDuration={-1}
                    displayCaret={false}
                >
                    ~/Blog/posts:
                </GlitchingTypingText>
                <GlitchingTypingText
                    element='h3'
                    styling={BlogTitleStyling}
                    glitchProbability={0}
                    typingPermitted={elementVisibility.title}
                    typingDuration={titleTypingDuration}
                    displayCaret={!titleTypingDone}
                    flagDoneTyping={flagDoneTypingTitle}
                >
                    {title}
                </GlitchingTypingText>
            </BlogTitleLine>
            <DetailLine style={{ opacity: elementVisibility.details.url ? 1 : 0 }}>
                <DetailProperty>URL:</DetailProperty>
                <DetailLink href={url} target='_blank'>
                    {url}
                </DetailLink>
            </DetailLine>
            <DetailLine style={{ opacity: elementVisibility.details.date ? 1 : 0 }}>
                <DetailProperty>Date:</DetailProperty>
                <DetailValue>{date}</DetailValue>
            </DetailLine>
            <DetailLine style={{ opacity: elementVisibility.details.keywords ? 1 : 0 }}>
                <DetailProperty>Keywords:</DetailProperty>
                <DetailValue>{`[${keywords.map((word) => ` "${word}"`)}]`}</DetailValue>
            </DetailLine>
            <DetailLine style={{ opacity: elementVisibility.details.banner ? 1 : 0, flexWrap: "nowrap" }}>
                <DetailProperty>Banner:</DetailProperty>
                <DetailValue>
                    Loading
                    <GlitchingTypingText
                        element='p'
                        styling={{ margin: 0 }}
                        typingPermitted={elementVisibility.details.banner}
                        typingDuration={bannerLoadingDuration}
                        displayCaret={false}
                        glitchProbability={0}
                    >
                        ...
                    </GlitchingTypingText>
                    {elementVisibility.bannerImage && "Done."}
                </DetailValue>
            </DetailLine>
            <DetailLine style={{ opacity: elementVisibility.bannerImage ? 1 : 0, justifyContent: "center" }}>
                <CloudinaryImage
                    fileName={bannerImage.src}
                    styling={{ border: "6px double var(--color-yellow)", width: "clamp(300px, 70%, 1250px)" }}
                />
            </DetailLine>
        </Subsection>
    );
};

const posts = [
    {
        title: "Creating a Glitching Typing Animation in React",
        url: "https://medium.com/@ruse.marshall/creating-a-glitching-typing-animation-in-react-1317c251fd0f",
        date: "2022-03-16",
        keywords: ["React", "JavaScript", "Canvas", "Animation", "Tutorial"],
        bannerImage: { src: "Home/Banner_GlitchingTypingAnimation.gif", alt: "A banner gif for the tutorial" },
    },
    {
        title: "Converting a Vanilla JS Canvas Animation to React",
        url: "https://medium.com/@ruse.marshall/converting-a-vanilla-js-canvas-animation-to-react-78443bad6d7b",
        date: "2022-03-03",
        keywords: ["React", "Animation", "Web Development", "Styled Components", "Front End Development"],
        bannerImage: {
            src: "Home/Banner_MatrixRainfallReact.gif",
            alt: "A banner gif for the tutorial",
        },
    },
];

const BlogSection = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0.3,
    });
    const [blogTypingDone, setBlogTypingDone] = useState(false);

    const headlineTypingDuration = 500;
    const headlineEnterDelay = 1000;

    const flagDoneTypingBlog = () => setTimeout(() => setBlogTypingDone(true), headlineEnterDelay);

    return (
        <BlogSectionContainer id='blog-section' ref={ref}>
            <GlitchingTypingText
                element='h3'
                styling={SectionHeaderStyling}
                glitchProbability={0.1}
                typingPermitted={inView}
                typingDuration={headlineTypingDuration}
                displayCaret={!blogTypingDone}
                flagDoneTyping={flagDoneTypingBlog}
            >
                Blog
            </GlitchingTypingText>
            {posts.map((post) => (
                <BlogPostSubsection
                    title={post.title}
                    url={post.url}
                    date={post.date}
                    keywords={post.keywords}
                    bannerImage={post.bannerImage}
                />
            ))}
        </BlogSectionContainer>
    );
};

export default BlogSection;
