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
                    <span className="menu-text">Incident Dashboard</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/reports", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/reports">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Clipboard-list.svg")} />
                    </span>
                    <span className="menu-text">Incident Report</span>
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
            <li className={`menu-item ${getMenuItemActive("/tickets", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/error">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
                    </span>
                    <span className="menu-text">Digital Foot print</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/users", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/users">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Adress-book2.svg")} />
                    </span>
                    <span className="menu-text">Add User</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/packages", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/packages">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
                    </span>
                    <span className="menu-text">Add Package</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/package-user", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/package-user">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
                    </span>
                    <span className="menu-text">User Package Mapping</span>
                </NavLink>
            </li>
            <li className={`menu-item ${getMenuItemActive("/usermanagement", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/usermanagement">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Box2.svg")} />
                    </span>
                    <span className="menu-text">User Management</span>
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
            {/*<li
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
            {/* <li className={`menu-item ${getMenuItemActive("/issues", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/issues">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Tools.svg")} />
                    </span>
                    <span className="menu-text">Issues</span>
                </NavLink>
            </li>

            <li className={`menu-item ${getMenuItemActive("/ticketing-system", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/ticketing-system">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Ticket.svg")} />
                    </span>
                    <span className="menu-text">Ticketing System</span>
                </NavLink>
            </li> */}

            <li
                className={`menu-item menu-item-submenu ${getMenuItemActive("/error", true)}`}
                aria-haspopup="true"
                data-menu-toggle="hover">
                <NavLink className="menu-link menu-toggle" to="/error">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")} />
                    </span>
                    <span className="menu-text">Verifications</span>
                    <i className="menu-arrow" />
                </NavLink>
                <div className="menu-submenu">
                    <i className="menu-arrow" />
                    <ul className="menu-subnav">
                        <li className="menu-item  menu-item-parent" aria-haspopup="true">
                            <span className="menu-link">
                                <span className="menu-text">Verifications</span>
                            </span>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/verifications">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Bulk Verification</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("world-watch-screening")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="world-watch-screening">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">World Watch Streaming</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("vehicle-detail")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="vehicle-detail">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Vehicle Detail</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("policy")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="policy">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Policy</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("phone")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="phone">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Phone</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("passport-check")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="passport-check">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Passport Check</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("pan-gst-check")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="pan-gst-check">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Pan Gst Check</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("pan-card-check")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="pan-card-check">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Pan Card Check</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("number-data-check")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="number-data-check">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Number Data Check</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("location")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="location">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Location</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("email")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="email">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Email</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("Verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/errors">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Driving License</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("Verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/errors">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Domain Detail</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("Verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/errors">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Data Check</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("Verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/errors">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Court Cases</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("Verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/errors">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Company Search</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("Verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/errors">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Black List</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("Verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/errors">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Black List Email</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("Verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/errors">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Bank Verification</span>
                            </NavLink>
                        </li>
                        <li
                            className={`menu-item ${getMenuItemActive("Verifications")}`}
                            aria-haspopup="true">
                            <NavLink className="menu-link" to="/errors">
                                <i className="menu-bullet menu-bullet-dot"><span /></i>
                                <span className="menu-text">Address</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </li>

            {/* <li className={`menu-item ${getMenuItemActive("/verification", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/verification">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Readed-mail.svg")} />
                    </span>
                    <span className="menu-text">Verification</span>
                </NavLink>
            </li> */}
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
