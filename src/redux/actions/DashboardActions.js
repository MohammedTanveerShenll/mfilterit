import * as constant from '../constants/DashboardConstants';

export const FetchTotalIncidents = (dashboarddata) => {
    return {
        type: constant.TOTAL_INCIDENTS,
        dashboarddata
    }
};

export const FetchIncidentVolumes = (dashboarddata) => {
    return {
        type: constant.INCIDENT_VOLUMES,
        dashboarddata
    }
};

export const FetchActivecasesbychannel = (dashboarddata) => {
    return {
        type: constant.ACTIVECASE_CHANNEL,
        dashboarddata
    }
};

