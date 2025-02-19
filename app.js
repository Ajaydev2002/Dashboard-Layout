
import React from "react";
import ReactDOM from "react-dom/client";
import DashboardLayoutBranding from "./src/Components/DashboardLayoutBranding";



const Applayout = () => {
    return (
        <div>
            <DashboardLayoutBranding/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);