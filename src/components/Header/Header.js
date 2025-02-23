import React from "react";
import Tab from "../shared/Tab/Tab";
import Button from "../shared/Button/Button";
import ProfileCard from "../shared/ProfileCard/ProfileCard";
import "./Header.css";

const Header = () => {
    const tabs = [
        { name: "All Projects", icon: "📊" },
        { name: "Keyword Research", icon: "🔑" },
        { name: "Competitive Research", icon: "📈" },
        { name: "Website Audit", icon: "🖥️" },
        { name: "DM Captain Enterprise", icon: "📄" },
    ];

    return (
        <header className="header">
            <div className="header-wrapper">

                <div className="header-left">
                    <img
                        src="https://www.dmcockpit.com/_next/image?url=%2Fimages%2Fdark-logo.png&w=640&q=75"
                        alt="logo"
                        className="header-logo"
                    />
                    <div className="header-tabs-container">
                        <Tab variant="dark" tabs={tabs} />
                    </div>
                </div>

                <div className="header-right">
                    <Button text="My Plan" variant="success" iconClass="vip-crown-fill" />
                    <ProfileCard name="John Doe" role="Project Manager" avatar={null} />
                </div>

            </div>
        </header>
    );
};

export default Header;
