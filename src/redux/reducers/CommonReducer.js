import * as constant from "../constants/CommonConstants";
const initialState = {
    package_name: [],
    menu_list: [],
    filter_list: [],
    loading: false,
    error: null,
};

const CommonReducer = (state = initialState, { type, response }) => {
    switch (type) {
        case constant.PACKAGENAME_INIT:
        case constant.MENULIST_INIT:
        case constant.FILTERLIST_INIT:
            return {
                ...state,
                loading: true,
            };

        case constant.PACKAGENAME_INIT_SUCCESS:
            return {
                ...state,
                loading: false,
                package_name: response,
            };

        case constant.MENULIST_INIT_SUCCESS:
            return {
                ...state,
                loading: false,
                menu_list: response.menus,
            }

        case constant.FILTERLIST_INIT_SUCCESS:
            return {
                ...state,
                loading: false,
                filter_list: response.filter,
            }

        case constant.PACKAGENAME_INIT_ERROR:
        case constant.MENULIST_INIT_ERROR:
        case constant.FILTERLIST_INIT_ERROR:
            return {
                ...state,
                loading: false,
                error: response,
            };
        default:
            return state;
    }
}
export default CommonReducer