import * as constant from '../constants/ReportConstants';

export const FetchReport = (packageName,fromDate,toDate,country,publisher,channel,brand,status,priority,category) => {
    return {
        type: constant.REPORT_INIT,
       packageName,
        fromDate,
        toDate,
        country,
        country,
        publisher,
        channel,
        brand,
        status,
        priority,
        category

    }
};





