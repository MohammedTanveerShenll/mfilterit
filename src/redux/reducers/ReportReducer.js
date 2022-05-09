import * as constant from "../constants/ReportConstants";
const initialState = {
  report_list:[]
};

const ReportReducer = (state = initialState, { type, response }) => {
    switch (type) {
        case constant.REPORT_INIT:
  
            return {
                ...state,
                loading: true,
            };

        case constant.REPORT_INIT_SUCCESS:
   
            return {
                ...state,
                loading: false,
                report_list: response,
            };

        case constant.REPORT_INIT_ERROR:
   
            return {
                ...state,
                loading: false,
                error: response,
            };
        default:
            return state;
    }
}
export default ReportReducer