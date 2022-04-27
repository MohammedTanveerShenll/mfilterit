/* eslint-disable no-unreachable */
import { EndPoints, ApiUrl } from '../helpers/Endpoints';

const DashboardServices = {}

// let searchParams = new URLSearchParams()
// Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
// let url = ApiUrl + EndPoints.dashboard_data + searchParams
// return fetch({
//     url: url,
//     method: 'get',
// })
DashboardServices.ViewTotalincidents = function (queryParams) {
    console.log(queryParams)
    // return fetch('http://infringementapi.mfilterit.net/api/user/ckz7xxeqn80620is7pfxu4093/menu?package_name=com.rblbank')
    //     .then(async response => {
    //         const data = await response.json();
    //         return data;
    //         if (!response.ok) {
    //             const error = (data && data.message) || response.statusText;
    //             return Promise.reject(error);
    //         }
    //     })
    //     .catch(error => {
    //         console.error('There was an error!', error);
    //     });
}
export default DashboardServices