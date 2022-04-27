/* eslint-disable no-unreachable */
import { EndPoints, ApiUrl } from '../helpers/Endpoints';

const CommonServices = {}

CommonServices.ViewPackagename = function () {
    let url = ApiUrl + EndPoints.package_name
    return fetch(url)
        .then(async response => {
            const data = await response.json();
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

CommonServices.ViewMenulist = function (packageName) {
    let url = ApiUrl + EndPoints.menu_list + '?package_name=' + packageName
    return fetch(url)
        .then(async response => {
            const data = await response.json();
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

CommonServices.ViewFilterlist = function (packageName) {
    let url = ApiUrl + EndPoints.filter_list + '?package_name=' + packageName
    return fetch(url)
        .then(async response => {
            const data = await response.json();
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


export default CommonServices