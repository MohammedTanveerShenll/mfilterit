import axios from 'axios';

const DashboardServices = {}

DashboardServices.ViewTotalincidents = function () {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            return res.data;
        })
}

export default DashboardServices