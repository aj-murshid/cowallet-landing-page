import React from "react";
import Feature from "../../components/Feature/Feature";
import FeatureReverse from "../../components/FeatureReverse/FeatureReverse";
import "./Features.css";
import ExpenseImg from "/public/images/addexpense.png";
import ManageProjectImg from "/public/images/manageproject.png";
import GetReportImg from "/public/images/getreport.png";
import EnquiryCard from "../../components/EnquiryCard/EnquiryCard";

const Features = () => {
    const contentObj = {
        svg1: (
            <svg xmlns="http://www.w3.org/2000/svg" width="272" height="474" viewBox="0 0 272 474" fill="none">
                <path
                    d="M91 226C91 356.615 367.115 473.715 236.5 473.715C105.885 473.715 0 367.831 0 237.215C0 106.6 105.885 0.71521 236.5 0.71521C367.115 0.71521 91 95.3847 91 226Z"
                    fill="#39FFC4"
                />
            </svg>
        ),
        svg2: (
            <svg xmlns="http://www.w3.org/2000/svg" width="272" height="474" viewBox="0 0 272 474" fill="none">
                <path
                    d="M180.587 248.431C180.587 117.815 -95.5284 0.71533 35.087 0.715342C165.702 0.715353 271.587 106.6 271.587 237.215C271.587 367.831 165.702 473.715 35.0869 473.715C-95.5284 473.715 180.587 379.046 180.587 248.431Z"
                    fill="url(#paint0_linear_0_86)"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_0_86"
                        x1="226.396"
                        y1="468.422"
                        x2="58.4545"
                        y2="0.63123"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#684CF6" />
                        <stop offset="1" stopColor="#6A36FF" />
                    </linearGradient>
                </defs>
            </svg>
        ),
        heading1: "Add expenses",
        image1: ExpenseImg,
        content1: `Specifically designed for government contractors, our app enables you to effortlessly manage government contracts from your mobile phone. Stay organized, access crucial information, and ensure compliance in one centralized platform.`,

        heading2: "manage projects",
        image2: ManageProjectImg,
        content2: `Say goodbye to messy spreadsheets and hello to organized project management. Our software lets you keep track of deadlines, budgets, and tasks all in one place.`,

        heading3: "Get Reports",
        image3: GetReportImg,
        content3: `Make informed decisions with Contractor Wallet’s reports. Get insights into your team’s productivity and performance, and export reports for your clients or stakeholders.`,
    };

    return (
        <div className="features">
            <h1 className="heading capital">our features</h1>
            <p className="capital">discover the power of feature-rich platform</p>
            <div className="feature-cards">
                <Feature
                    svg={contentObj.svg1}
                    image={contentObj.image1}
                    heading={contentObj.heading1}
                    content={contentObj.content1}
                />
                <FeatureReverse
                    svg={contentObj.svg2}
                    image={contentObj.image2}
                    heading={contentObj.heading2}
                    content={contentObj.content2}
                />
                <Feature
                    svg={contentObj.svg1}
                    image={contentObj.image3}
                    heading={contentObj.heading3}
                    content={contentObj.content3}
                />
            </div>
            <div className="enquiry-card">
                <EnquiryCard />
            </div>
        </div>
    );
};

export default Features;
