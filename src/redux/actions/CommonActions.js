import * as constant from '../constants/CommonConstants';

export const FetchPackagename = () => {
    return {
        type: constant.PACKAGENAME_INIT,
    }
};

export const FetchMenulist = (packageName) => {
    return {
        type: constant.MENULIST_INIT,
        packageName
    }
};

export const FetchFilterlist = (packageName) => {
    return {
        type: constant.FILTERLIST_INIT,
        packageName
    }
};

