import React from "react";
import "../styles/MainPart.css";
import "../styles/Formulas.css";
import IconContainer from "./IconContainer";
import accessIcon from "../images/icon-access-anywhere.svg";
import securityIcon from "../images/icon-security.svg";
import realTimeIcon from "../images/icon-collaboration.svg";
import anyFileIcon from "../images/icon-any-file.svg";

const MainPart = () => {

    const data = [
        {
            icon: accessIcon,
            header: "Access your files, anywhere",
            passage: "The ability  to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."
        },
        {
            icon: securityIcon,
            header: "Security you can trust",
            passage: "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."
        },
        {
            icon: realTimeIcon,
            header: "real-time collaboration",
            passage: "Securely share files and folders with friends, family, and collegues for live collaboration. No email attachments required."
        },
        {
            icon: anyFileIcon,
            header: "Store any type of file",
            passage: "Whether you are sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."
        }
    ]
    return (
        <div className="main-part-container">
            {data.map((data, index) => (
                <div key={index}>
                    <IconContainer
                    icon={data.icon}
                    header={data.header}
                    passage={data.passage}
                    />
                </div>
            ))}
        </div>
    )
}

export default MainPart;