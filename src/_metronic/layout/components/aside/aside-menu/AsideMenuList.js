import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { useSelector, useDispatch } from 'react-redux';
import { FetchMenulist } from "../../../../../redux/actions/CommonActions";
import { Spinner } from 'react-bootstrap';

export function AsideMenuList({ layoutProps }) {
    const dispatch = useDispatch()
    const location = useLocation()
    const packageName = localStorage.getItem("dpackage")
    const getMenuItemActive = (url, hasSubmenu = false) => {
        return checkIsActive(location, url) ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open menu-item-not-hightlighted` : "";
    };

    useEffect(() => {
        dispatch(FetchMenulist(packageName))
    }, [])

    const menuList = useSelector(state => state.common.menu_list)
    const loading = useSelector(state => state.common.loading)

    return (
        <>
            <ul className={`menu-nav ${layoutProps.ulClasses}`}>
                <li className="menu-section ">
                    <h4 className="menu-text">Menu</h4>
                    <i className="menu-icon flaticon-more-v2"></i>
                </li>
                {loading ? (<div>
                    <Spinner animation="border" variant="warning" />
                </div>) : (
                    menuList && menuList.map((menu, i) => (
                        <li key={"mainmenu_" + i}
                            className={`menu-item ${getMenuItemActive(menu.route, false)}`}
                            aria-haspopup="true" >
                            <NavLink className="menu-link" to={menu.route}>
                                <span className="svg-icon menu-icon">
                                    <SVG src={toAbsoluteUrl("/media/svg/icons/General/Settings-1.svg")} />
                                </span>
                                <span className="menu-text">{menu.menu_name}</span>
                            </NavLink>
                        </li>
                    )))
                }
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
                                className={`menu-item ${getMenuItemActive("address")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/address">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Address</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("bankverifications")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/bank-verification">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Bank Verification</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("basicepfo")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/basic-epfo">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Basic EPFO Search</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("companysearch")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/company-search">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Company Search</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("courtcase")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/court-case">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Court Case</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("ipdetail")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/ip-detail">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">IP Details</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("iplocation")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/ip-location">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">IP Location</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("pantogst")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/pan-to-gst">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">PAN to GST</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("verifyaadhar")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/verify-aadhar">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Verify Aadhar</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("verifydomain")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/verify-domain">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Verify Domain</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("verifyemail")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/verify-email">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Verify Email</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("verifypan")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/verify-pan">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Verify PAN</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("verifypassport")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/verify-passport">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Verify Passport</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("verifyvoteid")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/verify-voteid">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Verify Voter ID</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("verifyvechiclerc")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/verify-vehicle-rc">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Verify vehicle Rc</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("worldwatch")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/world-watch-risk-screening">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">World Watch Risk Screening</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("epfoemployee")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/epfo-employee">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">EPFO Emplyoee</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("verifydrivinglicense")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/verify-driving-license">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Verify Driving License</span>
                                </NavLink>
                            </li>
                            <li
                                className={`menu-item ${getMenuItemActive("bulkbankverification")}`}
                                aria-haspopup="true">
                                <NavLink className="menu-link" to="/verifications/bulk-bank-verification">
                                    <i className="menu-bullet menu-bullet-dot"><span /></i>
                                    <span className="menu-text">Bulk Bank Verification</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </li>
                {/* <li className={`menu-item ${getMenuItemActive("/users", false)}`} aria-haspopup="true">
                    <NavLink className="menu-link" to="/users">
                        <span className="svg-icon menu-icon">
                            <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Adress-book2.svg")} />
                        </span>
                        <span className="menu-text">Add User</span>
                    </NavLink>
                </li> */}

                {/* 
                
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
            <li className={`menu-item ${getMenuItemActive("/digitalfootprint", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/digitalfootprint">
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

           

            <li className={`menu-item ${getMenuItemActive("/web-fraud-dashboard", false)}`} aria-haspopup="true">
                <NavLink className="menu-link" to="/web-fraud-dashboard">
                    <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
                    </span>
                    <span className="menu-text">Web Fraud Dashboard</span>
                </NavLink>
            </li>
             */}
            </ul>
        </>

    );
}
