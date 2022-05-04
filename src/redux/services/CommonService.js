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
CommonServices.ViewChannellist = function (packageName,fromDate,toDate) {
    let url = ApiUrl + EndPoints.channel_list + '?package_name=' + packageName + '&fromDate='+ fromDate +'&toDate=' + toDate
    return fetch(url)
        .then(async response => {
            const data = await response.json();
            console.log("viewChannel",data);
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
CommonServices.ViewCountrylist = function (packageName,fromDate,toDate) {
    let url = ApiUrl + EndPoints.country_list + '?package_name=' + packageName + '&fromDate='+ fromDate +'&toDate=' + toDate
    return fetch(url)
        .then(async response => {
            const data = await response.json();
            console.log("country_list",data);
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
CommonServices.ViewCategorylist = function (packageName,fromDate,toDate) {
    console.log('packageName,fromDate,toDate', packageName,fromDate,toDate)
    let url = ApiUrl + EndPoints.category_list + '?package_name=' + packageName + '&fromDate='+ fromDate +'&toDate=' + toDate
    return fetch(url)
        .then(async response => {
            const data = await response.json();
            console.log("category_list",data);
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
CommonServices.ViewBrandlist = function (packageName,fromDate,toDate) {
    let url = ApiUrl + EndPoints.brand_list + '?package_name=' + packageName + '&fromDate='+ fromDate +'&toDate=' + toDate
    return fetch(url)
        .then(async response => {
            const data = await response.json();
            console.log("brand_list",data);
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
CommonServices.ViewPrioritylist = function (packageName,fromDate,toDate) {
    let url = ApiUrl + EndPoints.priority_list + '?package_name=' + packageName + '&fromDate='+ fromDate +'&toDate=' + toDate
    return fetch(url)
        .then(async response => {
            const data = await response.json();
            console.log("priority_list",data);
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
CommonServices.ViewPublisherlist = function (packageName,fromDate,toDate) {
    let url = ApiUrl + EndPoints.publisher_list + '?package_name=' + packageName + '&fromDate='+ fromDate +'&toDate=' + toDate
    return fetch(url)
        .then(async response => {
            const data = await response.json();
            console.log("publisher_list",data);
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
CommonServices.ViewStatuslist = function (packageName,fromDate,toDate) {
    let url = ApiUrl + EndPoints.status_list + '?package_name=' + packageName + '&fromDate='+ fromDate +'&toDate=' + toDate
    return fetch(url)
        .then(async response => {
            const data = await response.json();
            console.log("status_list",data);
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