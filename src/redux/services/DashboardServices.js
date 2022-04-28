/* eslint-disable no-unreachable */
import { EndPoints, ApiUrl } from '../helpers/Endpoints';

const DashboardServices = {}

DashboardServices.ViewTotalincidents = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.counts_data + "?" + searchParams
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

DashboardServices.ViewIncidentVolumes = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.incident_volume + "?" + searchParams
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

DashboardServices.ViewActivecasesbyChannel = function (queryParams) {
    let searchParams = new URLSearchParams()
    Object.keys(queryParams).forEach(key => searchParams.append(key, queryParams[key]));
    let url = ApiUrl + EndPoints.activecases_channel + "?" + searchParams
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

export default DashboardServices