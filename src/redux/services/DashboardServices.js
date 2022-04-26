/* eslint-disable no-unreachable */
import axios from 'axios';

const DashboardServices = {}

DashboardServices.ViewTotalincidents = function () {
    return fetch('http://infringementapi.mfilterit.net/api/user/ckz7xxeqn80620is7pfxu4093/menu?package_name=com.rblbank')
        .then(async response => {
            const data = await response.json();
            return data;
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
        })
        .catch(error => {
            //this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
}

export default DashboardServices