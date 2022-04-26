import { TOTAL_INCIDENTS } from '../constants/DashboardConstants'

export const FetchTotalIncidents = () => {
    console.log("actions" + TOTAL_INCIDENTS);
    return {
        type: TOTAL_INCIDENTS,
    }
};

