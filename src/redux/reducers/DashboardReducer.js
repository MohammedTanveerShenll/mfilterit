import * as constant from "../constants/DashboardConstants";
const initialState = {
    incident_data: [],
    loading: false,
    error: null,
};

const DashboardReducer = (state = initialState, { type, response }) => {
    switch (type) {
        case constant.TOTAL_INCIDENTS:
            return {
                ...state,
                loading: true,
            };

        case constant.TOTAL_INCIDENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                incident_data: response,
            };

        case constant.TOTAL_INCIDENTS_ERROR:
            return {
                ...state,
                loading: false,
                error: response,
            };
        default:
            return state;
    }
}
export default DashboardReducer