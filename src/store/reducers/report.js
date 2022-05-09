
import { ReportActionsTypes } from '../actions'

export const reportInitialState = {
  data: null
}

export const reportStoreKey = 'reportStore'

const reportReducer = (state = reportInitialState, action) => {
  switch (action.type) {
    case ReportActionsTypes.REPORT:
      return { ...state, loading: true }
    case ReportActionsTypes.SAVE_REPORT_RESPONSE:
      return { ...state, login: action.data, loading: false }
    case ReportActionsTypes.CLEAR_REPORT:
      return { ...state, login: null }
    default:
      return state
  }
}

export default reportReducer
