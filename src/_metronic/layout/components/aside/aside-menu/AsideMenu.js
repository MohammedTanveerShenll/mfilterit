import React, { useMemo, useState, useEffect } from "react";
import { AsideMenuList } from "./AsideMenuList";
import { useHtmlClassService } from "../../../_core/MetronicLayout";
import Select from 'react-select'
import { FetchPackagename, FetchMenulist } from "../../../../../redux/actions/CommonActions";
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
    dispatch(FetchMenulist(e.value))
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
          <li>
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