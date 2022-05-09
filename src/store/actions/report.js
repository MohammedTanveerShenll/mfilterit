export const ReportActionsTypes = {
  REPORT: 'REPORT',
  SAVE_REPORT_RESPONSE: 'SAVE_REPORT_RESPONSE',
  CLEAR_REPORT: 'CLEAR_REPORT',
  ERROR: 'GET_REPORT_ERROR',
}

export const ReportActions = {
  report: (data) => {
    return {
      type: ReportActionsTypes.REPORT,
      payload: data
    }
  },
  saveReportResponse: data => ({
    type: ReportActionsTypes.SAVE_REPORT_RESPONSE,
    data
  }),
  clearReport: () => ({
    type: ReportActionsTypes.CLEAR_REPORT
  })
}
