import React, { useMemo, useState, useEffect } from "react";
import { AsideMenuList } from "./AsideMenuList";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import Select from 'react-select'
import { FetchPackagename, FetchMenulist } from "../../../../../redux/actions/CommonActions";
import {
  FetchTotalIncidents, FetchIncidentVolumes, FetchActivecasesbychannel, FetchSubchannel,
  FetchToptenLocation, FetchCategorlevelcount, FetchPublisherlevelcount
}
  from "../../../../../redux/actions/DashboardActions";
import { useSelector, useDispatch } from 'react-redux';

export function AsideMenu({ disableScroll }) {
  const [dpackage, setPackage] = useState(localStorage.getItem('dpackage') === null ? "in.itcstore" : localStorage.getItem('dpackage'));
  const uiService = useHtmlClassService();
  const dispatch = useDispatch();
  const layoutProps = useMemo(() => {
    return {
      layoutConfig: uiService.config,
      asideMenuAttr: uiService.getAttributes("aside_menu"),
      ulClasses: uiService.getClasses("aside_menu_nav", true),
      asideClassesFromConfig: uiService.getClasses("aside_menu", true)
    };
  }, [uiService]);



  const handleOnchange = (e) => {
    localStorage.setItem("dpackage", e.value);
    setPackage(e.value);
    const data = {
      "package_name": e.value,
      "fromDate": localStorage.getItem("startDate"),
      "toDate": localStorage.getItem("endDate"),
      "country": "all",
      "category": "all",
      "publisher": "all",
      "channel": "all",
      "brand": "all",
      "status": "all",
      "priority": "all"
    }
    dispatch(FetchMenulist(e.value))
    dispatch(FetchTotalIncidents(data))
    dispatch(FetchIncidentVolumes(data))
    dispatch(FetchActivecasesbychannel(data))
    dispatch(FetchSubchannel(data))
    dispatch(FetchToptenLocation(data))
    dispatch(FetchCategorlevelcount(data))
    dispatch(FetchPublisherlevelcount(data))
  }

  useEffect(() => {
    dispatch(FetchPackagename())
  }, [])

  const package_name = useSelector(state => state.common.package_name)
  let packages = [];
  if (package_name.length !== 0) {
    package_name.map((pack, i) => (
      packages.push({ value: pack.package_name, label: pack.package_name })
    ))
  }

  return (
    <>
      <div
        id="kt_aside_menu"
        data-menu-vertical="1"
        className={`aside-menu ${layoutProps.asideClassesFromConfig}`}
        {...layoutProps.asideMenuAttr}>
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          <li className="menu-section ">
            <h4 className="menu-text">Dashboard</h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          <li className="pr-5 pl-5">
            <Select
              value={
                packages.filter(option => option.value === dpackage)
              }
              onChange={handleOnchange}
              options={packages}
            />
          </li>
        </ul>
        <AsideMenuList layoutProps={layoutProps} />
      </div>
    </>
  );
}