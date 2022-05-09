/* eslint-disable no-unreachable */
import { EndPoints, ApiUrl } from '../helpers/Endpoints';

const ReportServices = {}

ReportServices.ViewReportlist = function (packageName,fromDate,toDate,country,publisher,channel,brand,status,priority,category) {
    let url = ApiUrl + EndPoints.report_list + '?package_name=' + packageName + '&fromDate='+ fromDate +'&toDate=' + toDate +'&country=' + country + '&publisher=' + publisher + '&channel=' + channel + '&brand=' + brand + '&status=' + status + '&priority=' + priority + '&category=' + category
    console.log('urlsssss',url);
    return fetch(url)
        .then(async response => {
            const data = await response.json();
            console.log('dataaa',data);
            return data;
            if (!response.ok) {
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
}



export default ReportServices