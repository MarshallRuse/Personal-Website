import React from "react";
import ProjectPageTemplate from "./ProjectPageTemplate";
import { IconRow, IconBox, NavLink, SubSubsectionTitle } from "./styles/styledComponents";
import GlowingIcon from "./elements/GlowingIcon";
import { ReactComponent as ReactLogo } from "../assets/logos/colorless/react.svg";
import { ReactComponent as MaterialUILogo } from "../assets/logos/colorless/material-ui.svg";

const carouselImages = [
    {
        imageSrc: "RotationCoordinatorReportFormatter/landing",
        description: "The first thing you see",
    },
    {
        imageSrc: "RotationCoordinatorReportFormatter/whatIsThis",
        description: "Collapse panel explaining the app's purpose",
    },
    {
        imageSrc: "RotationCoordinatorReportFormatter/missingHeadersValidation",
        description: "Header validation of uploaded CSV, with requirements explanation",
    },
    {
        imageSrc: "RotationCoordinatorReportFormatter/groupedResidentsLandscape",
        smallScreenAltSrc: "RotationCoordinatorReportFormatter/groupedResidents",
        description: "The uploaded residents are grouped by Block, Rotation, and Hospital",
    },
    {
        imageSrc: "RotationCoordinatorReportFormatter/rotationCoordinatorsMerged",
        description: "Rotations' respective coordinators are merged appropriately, merged date is color-coded",
    },
    {
        imageSrc: "RotationCoordinatorReportFormatter/EPAsToExport",
        description:
            "Entrustable Professional Activities for each rotation are merged appropriately, merged data is color-coded",
    },
    {
        imageSrc: "RotationCoordinatorReportFormatter/doneUploadingMessage",
        description: "Users are instructed for further actions upon completion",
    },
    {
        imageSrc: "RotationCoordinatorReportFormatter/filters",
        description: "Undesired blocks, programs, and rotations can be filtered out of the data at any point",
    },
];

const BackgroundInfo = () => (
    <>
        <p>
            Each month, an individualized email is sent to several dozen Rotation Coordinators for the University of
            Toronto's Internal Medicine program. Each coordinator is responsible for a different (sub)specialty rotation
            at a different hospital, and each email contains the names, training levels, and rotation-specific
            assessment-objectives for the residents attending the rotation that month.
        </p>
        <p>
            Each email contains anywhere from one to a dozen residents for that block/rotation/hospital grouping, but
            the source data is only available as an un-grouped list of individual residents.
        </p>
        <p>
            {" "}
            Previously the work of grouping, filtering, formatting, and merging the data to the relevant Rotation
            Coordinators and{" "}
            <NavLink href='https://www.royalcollege.ca/rcsite/cbd/implementation/cbd-milestones-epas-e' target='_blank'>
                EPA assessments
            </NavLink>{" "}
            was done by hand, in a process that would take over an hour. I automated the process using{" "}
            <NavLink href='https://github.com/MarshallRuse/AutomatedRotationCoordinatorReport' target='_blank'>
                an elaborate Excel VBA macro
            </NavLink>
            , but it was a pain to update any time the format of the source-data or the filtering/formatting needs would
            change. Additionally, the use of an Excel macro was unintuitive to most users, and the actual .xlsm file was
            buried deep in our organization's shared drive. This web-app was made to provide a cleaner, more-accessible,
            more-informative, and more-intuitive interface to a tool that can now be{" "}
            <NavLink href='https://rotation-coordinator-report-formatter.netlify.app/' target='_blank'>
                shared simply with a URL
            </NavLink>
            .
        </p>
    </>
);

const FeaturesInfo = () => (
    <>
        <p>The app takes as input 3 CSV files:</p>
        <ol>
            <li>
                Rotations exported from the{" "}
                <NavLink href='https://www.orbs.utoronto.ca/' target='_blank'>
                    Online Rotation & Base Hospital Scheduling (ORBS)
                </NavLink>
            </li>
            <li>A reference table for the Rotation Coordinators of the rotations listed in the rotations file</li>
            <li>A reference table for the EPAs to be completed on the rotations listed in the rotations file.</li>
        </ol>
        <p>The residents in the first input are grouped by:</p>
        <ul>
            <li>the rotation</li>
            <li>the hospital the roation is taking place at</li>
            <li>the residents' seniority (i.e. Juniors or Seniors)</li>
        </ul>
        <p>Four tables are produced:</p>
        <ol>
            <li>all of the residents, Rotation Coordinators, and EPAs matched by rotation and hospital</li>
            <li>the rotations and sites with exclusively Junior residents</li>
            <li>the rotations and sites with exclusively Senior residents</li>
            <li>the rotations and sites with both Junior and Senior residents</li>
        </ol>
        <p>
            All of the uploading and data manipulation is done <em>entirely</em> within the browser, and there is no
            outbound network traffic, so the data uploaded is secure.
        </p>
        <p>
            For CSV input there is an info panel that explains what headers are required, and specifically missing
            headers are highlighted for the user upon upload. Subsequent uploads are disallowed until the correct
            headers are included. A sample table of data is included with each explanation.
        </p>
        <p>
            Upon completion of the uploads (or at any point in between), the output-tables can be exported as a CSV. The
            completed tables can then be used directly as input for pre-constructed Mail Merge documents for emailing to
            the Rotation Coordinators.
        </p>
    </>
);

const DevelopmentInfo = () => (
    <>
        <IconRow $styling={{ marginBottom: "2rem" }}>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='React' glowColor={"var(--color-react)"}>
                    <ReactLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='Material UI' glowColor={"var(--color-materialui)"}>
                    <MaterialUILogo />
                </GlowingIcon>
            </IconBox>
        </IconRow>
        <p>
            Rotation Coordinator Report Formatter is designd entirely as a front-end app so that there are no security
            vulnerabilities associated with transmitting the data to a server for processing.
        </p>
        <SubSubsectionTitle>Front-End</SubSubsectionTitle>
        <p>
            The React front-end utilizes components from{" "}
            <NavLink href='https://mui.com/' target='_blank'>
                MUI v5
            </NavLink>
            , a component library implementing Google’s Material Design visual language. Custom styling in keeping with
            <NavLink
                href='https://www.utm.utoronto.ca/communications/sites/files/communications/public/shared/UofT%20Style%20Guide%20%2B%20Boundless%20Guide%20Feb%202012.pdf'
                target='_blank'
            >
                the University of Toronto's Visual Identity Style Guide
            </NavLink>{" "}
            is implemented using{" "}
            <NavLink href='https://mui.com/material-ui/guides/styled-engine/#main-content' target='_blank'>
                MUI's emotion CSS-in-JS API
            </NavLink>
            .
        </p>
        <p>
            A React implementation of the{" "}
            <NavLink href='https://www.papaparse.com/' target='_blank'>
                Papaparse
            </NavLink>{" "}
            in-browser CSV parsing library,{" "}
            <NavLink href='https://www.npmjs.com/package/react-papaparse' target='_blank'>
                react-papaparse v3
            </NavLink>
            , is used to parse the uploaded CSVs. Data grouping, filtering, and formatting are done with custom
            functions acting on the data held in React state hooks, which are then fed to components wrapping{" "}
            <NavLink href='https://mui.com/x/react-data-grid/' target='_blank'>
                MUI's DataGrid
            </NavLink>{" "}
            component.
        </p>
    </>
);

const RotationCoordinatorReportFormatterPage = () => {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='RotationCoordinatorReportFormatter/torontoAerial'
            pageTitle='Rotation Coordinator Report Formatter App'
            projectSourceLink='https://github.com/MarshallRuse/rotation-coordinator-data-formatter'
            projectDemoLink='https://rotation-coordinator-report-formatter.netlify.app'
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='RotationCoordinatorReportFormatter/calendarCorkboard'
            featuresInfo={<FeaturesInfo />}
            developmentBackgroundImage='RotationCoordinatorReportFormatter/workoutBackground'
            developmentBackgroundImageSmallScreenAlt='RotationCoordinatorReportFormatter/curlBackground'
            developmentInfo={<DevelopmentInfo />}
        />
    );
};

export default RotationCoordinatorReportFormatterPage;
