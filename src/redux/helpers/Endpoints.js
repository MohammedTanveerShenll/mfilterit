const EndPoints = {
    counts_data: `/api/bi/plots/counts`,
    package_name: `/api/user/ckxpydjs50004icfaf0v97io7/package`,
    menu_list: `/api/user/ckxpydjs50004icfaf0v97io7/menu`,
    filter_list: `/api/user/ckxpydjs50004icfaf0v97io7/filter`,
    incident_volume: `/api/bi/plots/incident_volume`,
    activecases_channel: `/api/bi/plots/active_cases_by_channel`,
    sub_channel: `/api/bi/plots/sub_channel`,
    topten_location: `/api/bi/plots/top_ten_location`,
    category_level_count: `/api/bi/plots/category_level_count`,
    publisher_level_count: `/api/bi/plots/publisher_level_count`,
    channel_list: `/api/bi/filters/channel`,
    country_list: `/api/bi/filters/country`,
    category_list: `/api/bi/filters/category`,
    brand_list: `/api/bi/filters/brand`,
    priority_list: `/api/bi/filters/priority`,
    publisher_list: `/api/bi/filters/publisher`,
    status_list: `/api/bi/filters/status`,
    report_list: `/api/bi/report`,
}
const ApiUrl = "http://infringementapi.mfilterit.net"

export { EndPoints, ApiUrl }