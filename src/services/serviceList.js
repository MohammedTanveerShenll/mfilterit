// const API_URL = 'http://192.168.29.95:3020/api/v1'
const API_URL = 'http://infringementapi.mfilterit.net'

const serviceList = {

  counts_data: `${API_URL}/api/bi/plots/counts`,
  package_name: `${API_URL}/api/user/ckxpydjs50004icfaf0v97io7/package`,
  menu_list: `${API_URL}/api/user/ckxpydjs50004icfaf0v97io7/menu`,
  filter_list: `${API_URL}/api/user/ckxpydjs50004icfaf0v97io7/filter`,
  incident_volume: `${API_URL}/api/bi/plots/incident_volume`,
  activecases_channel: `${API_URL}/api/bi/plots/active_cases_by_channel`,
  sub_channel: `${API_URL}/api/bi/plots/sub_channel`,
  topten_location: `${API_URL}/api/bi/plots/top_ten_location`,
  category_level_count: `${API_URL}/api/bi/plots/category_level_count`,
  publisher_level_count: `${API_URL}/api/bi/plots/publisher_level_count`,
  channel_list: `${API_URL}/api/bi/filters/channel`,
  country_list: `${API_URL}/api/bi/filters/country`,
  category_list: `${API_URL}/api/bi/filters/category`,
  brand_list: `${API_URL}/api/bi/filters/brand`,
  priority_list: `${API_URL}/api/bi/filters/priority`,
  publisher_list: `${API_URL}/api/bi/filters/publisher`,
  status_list: `${API_URL}/api/bi/filters/status`,
  report_list: `${API_URL}/api/bi/report`,
}



export default serviceList


