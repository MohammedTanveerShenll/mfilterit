import React, { useMemo } from "react";
import objectPath from "object-path";
import SVG from "react-inlinesvg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { toAbsoluteUrl } from "../../../_helpers";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import { SearchDropdown } from "../extras/dropdowns/search/SearchDropdown";
import { UserNotificationsDropdown } from "../extras/dropdowns/UserNotificationsDropdown";
import { QuickActionsDropdown } from "../extras/dropdowns/QuickActionsDropdown";
import { MyCartDropdown } from "../extras/dropdowns/MyCartDropdown";
import { LanguageSelectorDropdown } from "../extras/dropdowns/LanguageSelectorDropdown";
import { QuickUserToggler } from "../extras/QuiclUserToggler";
import {
  getBreadcrumbsAndTitle,
  useSubheader,
} from "../../_core/MetronicSubheader";
// import {getBreadcrumbsAndTitle, useSubheader} from "../../_core/MetronicSubheader";

export function Topbar() {
  const uiService = useHtmlClassService();
  const subheader = useSubheader();
  const layoutProps = useMemo(() => {
    return {
      viewSearchDisplay: objectPath.get(
        uiService.config,
        "extras.search.display"
      ),
      viewNotificationsDisplay: objectPath.get(
        uiService.config,
        "extras.notifications.display"
      ),
      viewQuickActionsDisplay: objectPath.get(
        uiService.config,
        "extras.quick-actions.display"
      ),
      viewCartDisplay: objectPath.get(uiService.config, "extras.cart.display"),
      viewQuickPanelDisplay: objectPath.get(
        uiService.config,
        "extras.quick-panel.display"
      ),
      viewLanguagesDisplay: objectPath.get(
        uiService.config,
        "extras.languages.display"
      ),
      viewUserDisplay: objectPath.get(uiService.config, "extras.user.display"),
    };
  }, [uiService]);

  return (
    <div className="col-lg-12">
      <div className="topbar">
        <div className="col-lg-6">
          <div className="d-flex justify-content-start flex-start">
            <h5 className="text-dark font-weight-bold my-7 mr-5">
              <>{subheader.title}</>
            </h5>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="d-flex justify-content-end flex-end my-3">
            {layoutProps.viewQuickPanelDisplay && (
              <OverlayTrigger
                placement="bottom"
                overlay={<Tooltip id="quick-panel-tooltip">Filter</Tooltip>}
              >
                <div
                  className="topbar-item"
                  data-toggle="tooltip"
                  title="Filter"
                  data-placement="right"
                >
                  <div
                    className="btn btn-icon btn-clean btn-lg mr-1"
                    id="kt_quick_panel_toggle"
                  >
                    <span className="svg-icon svg-icon-xl svg-icon-primary">
                      <SVG
                        src={toAbsoluteUrl(
                          // "/media/svg/icons/Layout/Layout-4-blocks.svg"
                          "media/svg/icons/Text/Filter.svg"
                        )}
                      />
                    </span>
                  </div>
                </div>
              </OverlayTrigger>
            )}

            {layoutProps.viewUserDisplay && <QuickUserToggler />}
          </div>
        </div>
      </div>
    </div>
  );
}
