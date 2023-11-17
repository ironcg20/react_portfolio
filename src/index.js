import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CHeader from "./common/CHeader";
import CFooter from "./common/CFooter";
import CHero from "./common/CHero";
import CCount from "./common/CCount";
import CAbout from "./common/CAbout";
import CProject from "./common/CProject";
import CMoreProject from "./common/CMoreProject";
import CSkill from "./common/CSkill";
import CTestimonial from "./common/CTestimonial";
import CContact from "./common/CContact";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <CHeader />
    <main>
      <CHero />
      <CAbout />
      <CCount />
      <CProject />
      <CMoreProject />
      <CSkill />
      <CTestimonial />
      <CContact />
    </main>
    <CFooter />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
