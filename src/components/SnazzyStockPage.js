import React from "react";
import ProjectPageTemplate from "./ProjectPageTemplate";
import { IconRow, IconBox, NavLink, SubSubsectionTitle } from "./styles/styledComponents";
import GlowingIcon from "./elements/GlowingIcon";
import { ReactComponent as ReactLogo } from "../assets/logos/colorless/react.svg";
import { ReactComponent as MaterialUILogo } from "../assets/logos/colorless/material-ui.svg";
import { ReactComponent as ExpressLogo } from "../assets/logos/colorless/express.svg";
import { ReactComponent as NodejsLogo } from "../assets/logos/colorless/nodejs.svg";
import { ReactComponent as MySQLLogo } from "../assets/logos/colorless/mysql.svg";

const carouselImages = [
    {
        imageSrc: "SnazzyStock/cart",
        description: "A cart to record sales transactions",
    },
    {
        imageSrc: "SnazzyStock/addToCart",
        description: "The modal to add a product to the cart",
    },
    {
        imageSrc: "SnazzyStock/addToCartAutocomplete",
        description: "Autocomplete search by SKU or product name for adding product to cart",
    },
    {
        imageSrc: "SnazzyStock/salesPage",
        smallScreenAltSrc: "SnazzyStock/groupedResidents",
        description: "List of sales by date",
    },
    {
        imageSrc: "SnazzyStock/salesByDate",
        description: "Sales Record - By Date page - summary section",
    },
    {
        imageSrc: "SnazzyStock/salesByDate-TransactionRecords",
        description: "Sales Record - By Date - list of transactions",
    },
    {
        imageSrc: "SnazzyStock/suppliersList",
        description: "Supplier summaries as links to Supplier pages",
    },
    {
        imageSrc: "SnazzyStock/supplierPage",
        description: "Supplier page",
    },
    {
        imageSrc: "SnazzyStock/supplierPage-CostRevenueHistory",
        description: "Cost/Revenue chart on the Supplier page",
    },
    {
        imageSrc: "SnazzyStock/purchaseOrder",
        description: "Purchase Order page summary section",
    },
    {
        imageSrc: "SnazzyStock/purchaseOrder-Categories",
        description: "Purchase Order page chart of category of items purchased",
    },
    {
        imageSrc: "SnazzyStock/productsPage",
        description: "List of products",
    },
    {
        imageSrc: "SnazzyStock/productPage",
        description: "Product page with Variation sales histories by date",
    },
    {
        imageSrc: "SnazzyStock/addProducts",
        description: "Add new product form with support for variable or simple products",
    },
];

const BackgroundInfo = () => (
    <>
        <p>
            Snazzy Stock is an in-development inventory management app for{" "}
            <NavLink href='https://www.snazzystones.ca' target='_blank'>
                Snazzy Stones Jewellery
            </NavLink>
            , a small retail business.
        </p>
        <p>
            Snazzy Stones currently tracks inventory via hand-written records (for in-person sales) cross-referenced
            with Woocommerce sales records (for website sales) and Etsy CSV exports (
            <NavLink href='https://www.etsy.com/ca/shop/SnazzyStonesJewelry' target='_blank'>
                for Etsy sales
            </NavLink>
            ). The idea behind Snazzy Stock is to have one unified platform into which all records of sale or purchase
            order transactions will feed to ensure automatic tracking and to provide sales analytics for products.
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
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='Express' glowColor={"var(--color-express)"}>
                    <ExpressLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='Node JS' glowColor={"var(--color-nodejs)"}>
                    <NodejsLogo />
                </GlowingIcon>
            </IconBox>
            <IconBox numPerRowSm={4} numPerRowMd={4} numPerRowLg={4}>
                <GlowingIcon title='MySQL' glowColor={"var(--color-mysql)"}>
                    <MySQLLogo />
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

const SnazzyStockPage = () => {
    return (
        <ProjectPageTemplate
            carouselBackgroundImage='SnazzyStock/chainsBanner'
            pageTitle='Snazzy Stock App'
            projectSourceLink='private'
            projectDemoLink=''
            carouselImages={carouselImages}
            backgroundInfo={<BackgroundInfo />}
            featuresBackgroundImage='SnazzyStock/calendarCorkboard'
            featuresInfo={<FeaturesInfo />}
            developmentBackgroundImage='SnazzyStock/workoutBackground'
            developmentBackgroundImageSmallScreenAlt='SnazzyStock/curlBackground'
            developmentInfo={<DevelopmentInfo />}
        />
    );
};

export default SnazzyStockPage;
