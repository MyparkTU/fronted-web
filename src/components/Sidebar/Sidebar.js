import React, { useContext, useRef, useState } from "react";
import {
    SDivider,
    SLink,
    SLinkContainer,
    SLinkIcon,
    SLinkLabel,
    SLinkNotification,
    SLogo,
    SSearch,
    SSearchIcon,
    SSidebar,
    SSidebarButton,
    STheme,
    SThemeLabel,
    SThemeToggler,
    SToggleThumb,
} from "./styles";

import { logoSVG } from "../../assets";
import logo from '../../assets/logo-1.png'

import {
    AiOutlineApartment,
    AiOutlineHome,
    AiOutlineLeft,
    AiOutlineSearch,
    AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsPeople } from "react-icons/bs";

import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";
function logout() {
    sessionStorage.removeItem('token')
    window.location.reload()
}

const Sidebar = () => {
    const searchRef = useRef(null);
    const { setTheme, theme } = useContext(ThemeContext);
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const { pathname } = useLocation();

    const searchClickHandler = () => {
        if (!sidebarOpen) {
            setSidebarOpen(true);
            searchRef.current.focus();
        } else {
            // search functionality
        }
    };

    return (
        <SSidebar isOpen={sidebarOpen} >
            <>
                <SSidebarButton isOpen={sidebarOpen} onClick={() => setSidebarOpen((p) => !p)}>
                    <AiOutlineLeft />
                </SSidebarButton>
            </>
            <SLogo>
                <img src={logo} alt="logo" />
            </SLogo>
            <SSearch
                onClick={searchClickHandler}
                style={!sidebarOpen ? { width: `fit-content` } : {}}
            >
                <SSearchIcon>
                    <AiOutlineSearch />
                </SSearchIcon>
                <input
                    ref={searchRef}
                    placeholder="Search"
                    style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
                />
            </SSearch>
            <SDivider />
            {linksArray.map(({ icon, label, notification, to }) => (
                <SLinkContainer key={label} isActive={pathname === to}>
                    <SLink to={to} style={!sidebarOpen ? { width: `fit-content` } : {}} >
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && (
                            <>
                                <SLinkLabel>{label}</SLinkLabel>
                                {/* if notifications are at 0 or null, do not display */}
                                {!!notification && (
                                    <SLinkNotification>{notification}</SLinkNotification>
                                )}
                            </>
                        )}
                    </SLink>
                </SLinkContainer>
            ))}
            <SDivider />
            {secondaryLinksArray.map(({ icon, label }) => (
                <SLinkContainer key={label}>
                    <SLink to="/" style={!sidebarOpen ? { width: `fit-content` } : {}} onClick={() => label === "ออกจากระบบ"? logout() : console.log('setting')} >
                        <SLinkIcon>{icon}</SLinkIcon>
                        {sidebarOpen && <SLinkLabel>{label}</SLinkLabel>}
                    </SLink>
                </SLinkContainer>
            ))}
            {/*<SDivider /> */}
            {/*<STheme>
                {sidebarOpen && <SThemeLabel>Dark Mode</SThemeLabel>}
                <SThemeToggler
                    isActive={theme === "dark"}
                    onClick={() => setTheme((p) => (p === "light" ? "dark" : "light"))}
                >
                    <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
                </SThemeToggler>
            </STheme> */}
        </SSidebar>
    );
};


const linksArray = [
    {
        label: "หนัาหลัก",
        icon: <AiOutlineHome />,
        to: "/",
        notification: 0,
    },
    {
        label: "สถานที่จอดรถ",
        icon: <MdOutlineAnalytics />,
        to: "/parkings",
        notification: 3,
    },
    {
        label: "รายงานปัญหา",
        icon: <BsPeople />,
        to: "/reports",
        notification: 0,
    }
    /* ,
    {
        label: "การแจ้งเตือน",
        icon: <AiOutlineApartment />,
        to: "/notfications",
        notification: 1,
    },*/
];

const secondaryLinksArray = [
    {
        label: "ตั้งค่า",
        icon: <AiOutlineSetting />,
    },
    {
        label: "ออกจากระบบ",
        icon: <MdLogout />,
    },
];

export default Sidebar;
