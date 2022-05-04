import * as constant from "../constants/CommonConstants";
const initialState = {
    package_name: [],
    country_name:[],
    category_list:[],
    brand_list:[],
    priority_list:[],
    publisher_list:[],
    status_list:[],
    menu_list: [],
    filter_list: [],
    channel_list: [],
    loading: false,
    error: null,
};

const CommonReducer = (state = initialState, { type, response }) => {
    switch (type) {
        case constant.PACKAGENAME_INIT:
        case constant.MENULIST_INIT:
        case constant.FILTERLIST_INIT:
            case constant.CHANNEL_LIST_INIT:
                case constant.COUNTRY_LIST_INIT:
                case constant.CATEGORY_LIST_INIT:
                case constant.BRAND_LIST_INIT:
                case constant.PRIORITY_LIST_INIT:
                case constant.PUBLISHER_LIST_INIT:
                case constant.STATUS_LIST_INIT:
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
            case constant.CHANNEL_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    channel_list: response,
                }
            case constant.COUNTRY_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    country_name: response,
                }
            case constant.CATEGORY_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    category_list: response,
                }
            case constant.BRAND_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    brand_list: response,
                }
            case constant.PRIORITY_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    priority_list: response,
                }
            case constant.PUBLISHER_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    publisher_list: response,
                }
            case constant.STATUS_LIST_INIT_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    status_list: response,
                }
      

        case constant.PACKAGENAME_INIT_ERROR:
        case constant.MENULIST_INIT_ERROR:
        case constant.FILTERLIST_INIT_ERROR:
            case constant.CHANNEL_LIST_INIT_ERROR:
                case constant.COUNTRY_LIST_INIT_ERROR:
                case constant.CATEGORY_LIST_INIT_ERROR:
                case constant.BRAND_LIST_INIT_ERROR:
                case constant.PRIORITY_LIST_INIT_ERROR:
                case constant.PUBLISHER_LIST_INIT_ERROR:
                case constant.STATUS_LIST_INIT_ERROR:
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