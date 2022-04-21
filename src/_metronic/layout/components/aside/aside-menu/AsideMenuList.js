import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";

export function AsideMenuList({ layoutProps }) {
    const location = useLocation();
    const getMenuItemActive = (url, hasSubmenu = false) => {
        return checkIsActive(location, url) ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open menu-item-not-hightlighted` : "";
    };

    return (
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
            <li className="menu-section ">
                <h4 className="menu-text">Menu</h4>
                <i className="menu-icon flaticon-more-v2"></i>
            </li>
            <li
                className={`menu-item ${getMenuItemActive("/dashboard", false)}`}
                aria-haspopup="true" >
                <NavLink className="menu-link" to="/dashboard">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/General/Settings-1.svg")} />
                    </span>
                    <span className="menu-text">Dashboard</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/360-degree", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/360-degree">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Pantone.svg")} />
                    </span>
                    <span className="menu-text">360 Degree</span>
                </NavLink>
            </li>
            {/*            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive("/error", true)}`}
                aria-haspopup="true"
                data-menu-toggle="hover">
                <NavLink className="menu-link menu-toggle" to="/error">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
                    </span>
                    <span className="menu-text">Demo</span>
                    <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-parent" aria-haspopup="true">
                            <span className="menu-link">
                                <span className="menu-text">Demo</span>
                            </span>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("demo")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/demo">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">List</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </li>*/}
            <li className={`menu-item ${getMenuItemActive("/issues", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/issues">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Tools.svg")} />
                    </span>
                    <span className="menu-text">Issues</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/packages", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/packages">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
                    </span>
                    <span className="menu-text">Packages</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/reports", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/reports">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Clipboard-list.svg")} />
                    </span>
                    <span className="menu-text">Reports</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/ticketing-system", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/ticketing-system">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Ticket.svg")} />
                    </span>
                    <span className="menu-text">Ticketing System</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/tickets", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/tickets">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
                    </span>
                    <span className="menu-text">Tickets</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/users", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/users">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Adress-book2.svg")} />
                    </span>
                    <span className="menu-text">Users</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/verification", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/verification">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Readed-mail.svg")} />
                    </span>
                    <span className="menu-text">Verification</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/web-fraud-dashboard", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/web-fraud-dashboard">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
                    </span>
                    <span className="menu-text">Web Fraud Dashboard</span>
                </NavLink>
            </li>
        </ul>
    );
}
