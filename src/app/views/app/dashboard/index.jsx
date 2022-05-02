/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { ProgressBar, Spinner, Row, Col, Button } from 'react-bootstrap';
import FilterDrawer from '../shared-componets/filterdrawer';
import {
    FetchTotalIncidents, FetchIncidentVolumes, FetchActivecasesbychannel, FetchSubchannel, FetchToptenLocation,
    FetchCategorlevelcount, FetchPublisherlevelcount
} from "../../../../redux/actions/DashboardActions";
import { useSelector, useDispatch } from 'react-redux';
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers";

const Dashboard = () => {
    const [channels, setChannels] = useState("all");
    const [categories, setCategories] = useState("all");
    const [publishers, setPublishers] = useState("all");
    const [countries, setCountries] = useState("all");
    const [brands, setBrands] = useState("all");
    const [priorities, setPriorities] = useState("all");
    const [status, setStatus] = useState("all");

    const [panel, setPanel] = useState(false);
    const dispatch = useDispatch()
    // const [dashboarddata, setDashboarddata] = useState();
    const toggleDrawer = (e) => {
        setPanel(false)
    }
    const handleSubmit = (data) => {
        // setDashboarddata(data)
    }

    const openFilter = () => {
        setPanel(true)
    }

    const data = {
        "package_name": localStorage.getItem("dpackage"),
        "fromDate": localStorage.getItem("startDate"),
        "toDate": localStorage.getItem("endDate"),
        "country": countries,
        "category": categories,
        "publisher": publishers,
        "channel": channels,
        "brand": brands,
        "status": status,
        "priority": priorities
    }

    useEffect(() => {
        dispatch(FetchTotalIncidents(data))
        dispatch(FetchIncidentVolumes(data))
        dispatch(FetchActivecasesbychannel(data))
        dispatch(FetchSubchannel(data))
        dispatch(FetchToptenLocation(data))
        dispatch(FetchCategorlevelcount(data))
        dispatch(FetchPublisherlevelcount(data))
    }, [])

    const incident_data = useSelector(state => state.dashboard.incident_data)
    const incidentloading = useSelector(state => state.dashboard.incidentloading)

    const incidentvolume_data = useSelector(state => state.dashboard.incidentvolumne_data)
    const incidentvolumeloading = useSelector(state => state.dashboard.incidentvolumneloading)

    const activecasebychannel_data = useSelector(state => state.dashboard.activecases_data)
    const activecaseloading = useSelector(state => state.dashboard.activecaseloading)

    const subchannel_data = useSelector(state => state.dashboard.subchannel_data)
    const subchannelloading = useSelector(state => state.dashboard.subchannelloading)

    const toptenlocation_data = useSelector(state => state.dashboard.toptenlocation_data)
    const toptenlocationloading = useSelector(state => state.dashboard.toptenlocation_loading)

    const categorylevelcount_data = useSelector(state => state.dashboard.categorylevelcount_data)
    const categorylevelcountloading = useSelector(state => state.dashboard.categorylevelcount_loading)

    const publisherlevelcount_data = useSelector(state => state.dashboard.publisherlevelcount_data)
    const publisherlevelcountloading = useSelector(state => state.dashboard.publisherlevelcount_loading)

    const barchartData = {
        series: [{
            name: 'Incident Volume',
            data: []
        },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    dataLabels: {
                        position: 'top', // top, center, bottom
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val) {
                    return val;
                },
                offsetY: -20,
                style: {
                    fontSize: '12px',
                    colors: ["#304758"]
                }
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: [],
            },
            // yaxis: {
            //     title: {
            //         text: 'Incident Volumes'
            //     }
            // },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    // formatter: function (val) {
                    //     return "$ " + val + " thousands"
                    // }
                }
            }
        }
    }

    const donutchartData = {
        series: [],
        options: {
            chart: {
                width: 100,
                type: 'donut'
            },
            labels: [],
            states: {
                hover: {
                    filter: 'none'
                }
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    }

    const subchannelChart = {
        series: [{
            name: "Sub Channels",
            data: []
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                    color: '#FFFFFF',
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: [],
            }
        },
    }

    const toptenLocationChart = {
        series: [{
            name: "Top10 Location",
            data: []
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    borderRadius: 4,
                    horizontal: true,
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: [],
            }
        },


    }

    if (incidentvolume_data.length !== 0) {
        incidentvolume_data && incidentvolume_data.map((incvoulume, i) => (
            barchartData.series[0].data.push(incvoulume.count),
            barchartData.options.xaxis.categories.push(incvoulume.inserted_date)
        ))
    }

    if (activecasebychannel_data.length !== 0) {
        activecasebychannel_data && activecasebychannel_data.map((activecases, i) => (
            donutchartData.series.push(activecases.count),
            donutchartData.options.labels.push(activecases.channel_name)
        ))
    }

    if (subchannel_data.length !== 0) {
        subchannel_data && subchannel_data.map((subchannel, i) => (
            subchannelChart.series[0].data.push(subchannel.count),
            subchannelChart.options.xaxis.categories.push(subchannel.sub_channel_name)
        ))
    }

    if (toptenlocation_data.length !== 0) {
        toptenlocation_data && toptenlocation_data.map((toptenlocation, i) => (
            toptenlocation_data.sort((a, b) => (a.count < b.count) ? 1 : -1),
            toptenLocationChart.series[0].data.push(toptenlocation.count),
            toptenLocationChart.options.xaxis.categories.push(toptenlocation.location)
        ))
    }

    return (
        <div>
            {/* <Button onClick={openFilter}>
                <span className="svg-icon svg-icon-xl svg-icon-primary">
                    <SVG src={toAbsoluteUrl("media/svg/icons/Text/Filter.svg")} />
                </span>
            </Button> */}
            <Row gutter={[8, 8]}>
                <Col xs={12} sm={12} md={5} lg={5} xl={5} className="card">
                    <div className="p-0 position-relative overflow-hidden">
                        <div>
                            <div
                                className="card-rounded-bottom bg-danger"
                                style={{ height: "auto" }}>
                                <div class="card-header border-0 bg-danger py-5">
                                    <h3 class="card-title font-weight-bolder text-white">Incidents</h3>
                                </div>
                            </div>
                            <div className="p-5 mt-n15">
                                <div className="row m-0">
                                    <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                                        <span className="text-warning font-weight-bold font-size-h6">
                                            Total Incidents
                                        </span>
                                        {incidentloading === true ?
                                            <p className="mt-5">
                                                <Spinner animation="border" variant="warning" /> </p> :
                                            <h1 className="text-warning font-weight-bold font-size-h1 mt-5">
                                                {incident_data.total} </h1>
                                        }
                                    </div>
                                    <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                                        <span className="text-primary font-weight-bold font-size-h6 mt-2">
                                            Active Cases
                                        </span>
                                        {incidentloading === true ?
                                            <p className="mt-5">
                                                <Spinner animation="border" variant="warning" /> </p> :
                                            <h1 className="text-primary font-weight-bold font-size-h1 mt-5">
                                                {incident_data.active}
                                            </h1>
                                        }
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                                        <span className="text-danger font-weight-bold font-size-h6 mt-2">
                                            Resolved Cases
                                        </span>
                                        {incidentloading === true ?
                                            <p className="mt-5">
                                                <Spinner animation="border" variant="warning" /> </p> :
                                            <h1 className="text-danger font-weight-bold font-size-h1 mt-5">
                                                {incident_data.resolved}
                                            </h1>
                                        }
                                    </div>
                                    <div className="col bg-light-success px-6 py-8 rounded-xl">
                                        <span className="text-success font-weight-bold font-size-h6 mt-2">
                                            In Progress
                                        </span>
                                        {incidentloading === true ?
                                            <p className="mt-5">
                                                <Spinner animation="border" variant="warning" /> </p> :
                                            <h1 className="text-success font-weight-bold font-size-h1 mt-5">
                                                {incident_data.progress}
                                            </h1>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={12} md={7} lg={7} xl={7} className="card">
                    <h5 className="text-center mt-5">Incident Volumes</h5>
                    {incidentvolumeloading === false ?
                        <div>
                            {incidentvolume_data.length === 0 ?
                                <div className="text-center mt-5">
                                    <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" />
                                    <h6 className="mt-5">No Data Found !</h6>
                                </div>
                                :
                                <Chart options={barchartData.options} series={barchartData.series} type="bar" />
                            }
                        </div> :
                        <div className="content-loader">
                            <div className="loader-wrapper">
                                <Spinner animation="border" variant="warning" />
                            </div>
                        </div>
                    }
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="card">
                    <h5 className="text-center mt-5">Active Cases By Channels</h5>
                    {activecaseloading === false ?
                        <div>
                            {activecasebychannel_data.length === 0 ?
                                <div className="text-center mt-5">
                                    <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" />
                                    <h6 className="mt-5">No Data Found !</h6>
                                </div>
                                :
                                <Chart options={donutchartData.options} series={donutchartData.series} type="donut" />
                            }
                        </div>
                        :
                        <div className="content-loader">
                            <div className="loader-wrapper">
                                <Spinner animation="border" variant="warning" />
                            </div>
                        </div>
                    }
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="card">
                    <h5 className="text-center mt-5">Sub Channels</h5>
                    {subchannelloading === false ?
                        <div>
                            {subchannel_data.length === 0 ?
                                <div className="text-center mt-5">
                                    <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" />
                                    <h6 className="mt-5">No Data Found !</h6>
                                </div>
                                :
                                <Chart options={subchannelChart.options} series={subchannelChart.series} type="bar" />
                            }
                        </div> :
                        <div className="content-loader">
                            <div className="loader-wrapper">
                                <Spinner animation="border" variant="warning" />
                            </div>
                        </div>
                    }
                </Col>
                <Col xs={6} sm={6} md={6} lg={6} xl={6} className="card">
                    <h5 className="text-center mt-5">Top 10 Locations</h5>
                    {toptenlocationloading === false ?
                        <div>
                            {toptenlocation_data.length === 0 ?
                                <div className="text-center mt-5">
                                    <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" />
                                    <h6 className="mt-5">No Data Found !</h6>
                                </div>
                                :
                                <Chart options={toptenLocationChart.options} series={toptenLocationChart.series} type="bar" />
                            }
                        </div> :
                        <div className="content-loader">
                            <div className="loader-wrapper">
                                <Spinner animation="border" variant="warning" />
                            </div>
                        </div>
                    }
                </Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} className="card pt-5 pr-5 pl-5">
                    <Col>
                        <div>
                            <div class="card-header border-0 p-0">
                                <Row>
                                    <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                                        <h3 class="card-title font-weight-bolder text-dark">Category level Counts</h3>
                                    </Col>
                                    <Col>
                                        <div class="d-flex flex-column text-right">
                                            <span class="text-dark-75 font-weight-bolder font-size-h4">{categorylevelcount_data.total_active_cases}</span>
                                            <span class="text-muted font-size-sm font-weight-bolder">Total Active Cases</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            {categorylevelcountloading === false ?
                                <div class="card-body p-0 card-scroll mb-5">
                                    {categorylevelcount_data.result.length === 0 ?
                                        <div className="text-center mt-5">
                                            <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" />
                                            <h6 className="mt-5">No Data Found !</h6>
                                        </div>
                                        :
                                        categorylevelcount_data && categorylevelcount_data.result.map((category, i) => (
                                            <div class="mb-5" key={i}>
                                                <h6 class="card-title font-weight-bolderfont-size-h6 mb-2 d-block">
                                                    {category.category}</h6>
                                                <div class="font-weight-bold text-muted font-size-sm">
                                                    <span class="text-dark-75 font-size-h2 font-weight-bolder mr-2">
                                                        {category.active_cases} -</span>Active Cases</div>
                                                <ProgressBar now={category.active_cases} variant="warning" />
                                            </div>
                                        ))
                                    }
                                </div>
                                :
                                <div className="content-loader">
                                    <div className="loader-wrapper">
                                        <Spinner animation="border" variant="warning" />
                                    </div>
                                </div>
                            }
                        </div>
                    </Col>
                    <Col>
                        <div class="card-header border-0 p-0">
                            <Row>
                                <Col xs={7} sm={7} md={7} lg={7} xl={7}>
                                    <h3 class="card-title font-weight-bolder text-dark">Publisher level Counts</h3>
                                </Col>
                                <Col>
                                    <div class="d-flex flex-column text-right">
                                        <span class="text-dark-75 font-weight-bolder font-size-h4">{publisherlevelcount_data.total_active_cases}</span>
                                        <span class="text-muted font-size-sm font-weight-bolder">Total Active Cases</span>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        {publisherlevelcountloading === false ?
                            <div class="card-body p-0 card-scroll mb-5">
                                {publisherlevelcount_data.result.length === 0 ?
                                    <div className="text-center mt-5">
                                        <img src="../../../../../media/no-data.png" alt="no-dat" width="50" height="50" />
                                        <h6 className="mt-5">No Data Found !</h6>
                                    </div>
                                    :
                                    publisherlevelcount_data && publisherlevelcount_data.result.map((publisher, i) => (
                                        <div class="mb-5" key={i}>
                                            <h6 class="card-title font-weight-bolderfont-size-h6 mb-2 d-block">
                                                {publisher.publisher}</h6>
                                            <div class="font-weight-bold text-muted font-size-sm">
                                                <span class="text-dark-75 font-size-h2 font-weight-bolder mr-2">
                                                    {publisher.active_cases} -</span>Active Cases</div>
                                            <ProgressBar now={publisher.active_cases} variant="warning" />
                                        </div>
                                    ))
                                }
                            </div>
                            :
                            <div className="content-loader">
                                <div className="loader-wrapper">
                                    <Spinner animation="border" variant="warning" />
                                </div>
                            </div>
                        }
                    </Col>
                </Col>
            </Row>
            <FilterDrawer panel={panel} toggleDrawer={toggleDrawer} handleSubmit={handleSubmit} />
        </div>
    );
}

export default Dashboard;