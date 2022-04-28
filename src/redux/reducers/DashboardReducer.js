import * as constant from "../constants/DashboardConstants";
const initialState = {
    incident_data: [],
    incidentloading: true,
    incidentdata_error: null,

    incidentvolumne_data: [],
    incidentvolumneloading: true,
    incidentvolumne_error: null,

    activecases_data: [],
    activecaseloading: true,
    activecases_error: null,
};

const DashboardReducer = (state = initialState, { type, response }) => {
    switch (type) {
        case constant.TOTAL_INCIDENTS:
            return {
                ...state,
                incidentloading: true,
            };

        case constant.INCIDENT_VOLUMES:
            return {
                ...state,
                incidentvolumneloading: true,
            };

        case constant.ACTIVECASE_CHANNEL:
            return {
                ...state,
                activecaseloading: true,
            };

        // success

        case constant.TOTAL_INCIDENTS_SUCCESS:
            return {
                ...state,
                incidentloading: false,
                incident_data: response.data,
            };

        case constant.INCIDENT_VOLUMES_SUCCESS:
            return {
                ...state,
                incidentvolumneloading: false,
                incidentvolumne_data: response.data,
            };

        case constant.ACTIVECASE_CHANNEL_SUCCESS:
            return {
                ...state,
                activecaseloading: false,
                activecases_data: response.data,
            };

        // error

        case constant.TOTAL_INCIDENTS_ERROR:
            return {
                ...state,
                incidentloading: false,
                incidentdata_error: response,
            };

        case constant.INCIDENT_VOLUMES_ERROR:
            return {
                ...state,
                incidentvolumneloading: false,
                incidentvolumne_error: response,
            };

        case constant.ACTIVECASE_CHANNEL_ERROR:
            return {
                ...state,
                activecaseloading: false,
                activecases_error: response,
            };

        default:
            return state;
    }
}
export default DashboardReducer