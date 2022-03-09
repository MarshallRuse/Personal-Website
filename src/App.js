import React from "react";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppRouter from "./routers/AppRouter";
import "react-image-lightbox/style.css";

function App() {
    return (
        <React.Fragment>
            <CssBaseline>
                <AppRouter />
            </CssBaseline>
        </React.Fragment>
    );
}

export default App;
