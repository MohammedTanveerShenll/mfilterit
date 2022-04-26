/* eslint-disable no-restricted-imports */
import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { ProgressBar } from 'react-bootstrap';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Formik, Field } from 'formik';
import { Row, Col, Button, Card, InputGroup, FormControl, Form } from "react-bootstrap";
import SelectField from '../../../../_metronic/_partials/controls/forms/SelectField';
import DatePicker from "react-datepicker";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { Checkbox } from "../../../../_metronic/_partials/controls";
import clsx from 'clsx';
import { FetchTotalIncidents } from "../../../../../src/redux/actions/DashboardActions";
import { useSelector, useDispatch } from 'react-redux';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    root: {
        width: '100%',
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',

    },
});
const Dashboard = () => {
    const dispatch = useDispatch()
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    const classes = useStyles();
    const [panel, setPanel] = useState(true);
    const packages = [
        { value: "itc", label: "itc" },
        { value: "admin", label: "admin" },
    ]
    const barchartData = {
        series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded'
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            },
            yaxis: {
                title: {
                    text: 'Incident Volumes'
                }
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$ " + val + " thousands"
                    }
                }
            }
        }
    }
    const donutchartData = {
        series: [44, 55, 41, 17],
        options: {
            chart: {
                width: 100,
                type: 'donut'
            },
            labels: ["Organic Search", "Social media Platforms", "Q & A", "Youtube",],
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
    const columnchartData = {
        series: [{
            data: [400, 430, 448, 470, 540, 580, 690, 1100]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
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
                categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
                    'United States'
                ],
            }
        },
    }
    const columnchartData1 = {
        series: [{
            data: [400, 430, 448, 470, 540]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350
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
                categories: ['Maps', 'Facebook', 'Youtube', 'Pintrest', 'Linkedin'],
            }
        }
    }

    const toggleDrawer = (e) => {
        setPanel(false)
    }
    const getFilter = (e) => {
        console.log("data");
    }
    const handleSearch = (formData) => {
        console.log(formData);
    }
    useEffect(() => {
        dispatch(FetchTotalIncidents())
    }, [])

    const incident_data = useSelector(state => state.dashboard.incident_data)
    const loading = useSelector(state => state.dashboard.loading)

    console.log(incident_data);

    return (
        <>
            <div className="row">
                <div className="col-md-5 card card-custom p-0">
                    <div className=''>
                        <div className="card-body p-0 position-relative overflow-hidden">
                            <div
                                className="card-rounded-bottom bg-danger"
                                style={{ height: "auto" }}>
                                <div class="card-header border-0 bg-danger py-5">
                                    <h3 class="card-title font-weight-bolder text-white">Incidents</h3>
                                </div>
                            </div>
                            <div className="card-spacer mt-n15">
                                <div className="row m-0">
                                    <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                                        <span className="text-warning font-weight-bold font-size-h6">
                                            Total Incidents
                                        </span>
                                        <h1 className="text-warning font-weight-bold font-size-h1 mt-5">
                                            49
                                        </h1>
                                    </div>
                                    <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                                        <span className="text-primary font-weight-bold font-size-h6 mt-2">
                                            Active Cases
                                        </span>
                                        <h1 className="text-primary font-weight-bold font-size-h1 mt-5">
                                            11
                                        </h1>
                                    </div>
                                </div>
                                <div className="row m-0">
                                    <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                                        <span className="text-danger font-weight-bold font-size-h6 mt-2">
                                            Resolved Cases
                                        </span>
                                        <h1 className="text-danger font-weight-bold font-size-h1 mt-5">
                                            23
                                        </h1>
                                    </div>
                                    <div className="col bg-light-success px-6 py-8 rounded-xl">
                                        <span className="text-success font-weight-bold font-size-h6 mt-2">
                                            In Progress
                                        </span>
                                        <h1 className="text-success font-weight-bold font-size-h1 mt-5">
                                            14
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="card card-custom">
                        <h5 className="text-center mt-5">Incident Volumes</h5>
                        <Chart options={barchartData.options} series={barchartData.series} type="bar" />
                    </div>
                </div>
                <div className="col-md-6 card card-custom">
                    <div className="">
                        <h5 className="text-center mt-5">Active Cases By Channels</h5>
                        <Chart options={donutchartData.options} series={donutchartData.series} type="donut" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card card-custom">
                        <h5 className="text-center mt-5">Sub Channels</h5>
                        <Chart options={columnchartData1.options} series={columnchartData1.series} type="bar" />
                    </div>
                </div>
                <div className="col-md-12 card card-custom">
                    <h5 className="text-center mt-5">Top 10 Locations</h5>
                    <Chart options={columnchartData.options} series={columnchartData.series} type="bar" />
                </div>
                <div className="col-md-6 pl-0">
                    <div className="card card-custom">
                        <div class="card-header border-0">
                            <h3 class="card-title font-weight-bolder text-dark">Category level Counts</h3>
                        </div>
                        <div class="card-body pt-0">
                            <div class="d-flex align-items-center mb-9 bg-light-warning rounded p-5">
                                <div class="d-flex flex-column flex-grow-1 mr-2">
                                    <span class="font-weight-bold text-dark-75 font-size-lg mb-1">
                                        Fake Customer Care No -
                                        <span class="font-weight-bolder text-warning py-1 font-size-lg pl-3">27</span>
                                    </span>
                                    <span class="text-muted font-weight-bold">Case Ratio</span>
                                </div>
                                <span class="font-weight-bolder text-warning py-1 font-size-lg">71.05%</span>
                            </div>

                            <div class="d-flex align-items-center bg-light-success rounded p-5 mb-9">
                                <div class="d-flex flex-column flex-grow-1 mr-2">
                                    <span class="font-weight-bold text-dark-75 font-size-lg mb-1">
                                        Fake Job Promotions -
                                        <span class="font-weight-bolder text-success py-1 font-size-lg pl-3">9</span>
                                    </span>
                                    <span class="text-muted font-weight-bold">Case Ratio</span>
                                </div>
                                <span class="font-weight-bolder text-success py-1 font-size-lg">23.68%</span>
                            </div>
                            <div class="d-flex align-items-center bg-light-danger rounded p-5 mb-9">
                                <div class="d-flex flex-column flex-grow-1 mr-2">
                                    <span class="font-weight-bold text-dark-75 font-size-lg mb-1">
                                        Fake Offers -
                                        <span class="font-weight-bolder text-danger py-1 font-size-lg pl-3">2</span>
                                    </span>
                                    <span class="text-muted font-weight-bold">Case Ratio</span>
                                </div>
                                <span class="font-weight-bolder text-danger py-1 font-size-lg">5.26%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 card card-custom">
                    <div class="card-header border-0">
                        <h3 class="card-title font-weight-bolder text-dark">Publisher level Counts</h3>
                    </div>
                    <div class="card-body pt-0 card-scroll">
                        <div class="mb-5">
                            <h6 class="card-title font-weight-bolderfont-size-h6 mb-2 d-block">
                                8328799570 - 2</h6>
                            <div class="font-weight-bold text-muted font-size-sm">
                                <span class="text-dark-75 font-size-h2 font-weight-bolder mr-2">5.26%</span>Case Ratio</div>
                            <ProgressBar now="5.26" variant="warning" />
                        </div>

                        <div class="mb-5">
                            <h6 class="card-title font-weight-bolderfont-size-h6 mb-2 d-block">
                                7387060648 - 1</h6>
                            <div class="font-weight-bold text-muted font-size-sm">
                                <span class="text-dark-75 font-size-h2 font-weight-bolder mr-2">2.63%</span>Case Ratio</div>
                            <ProgressBar now="2.63" variant="warning" />
                        </div>

                        <div class="mb-5">
                            <h6 class="card-title font-weight-bolderfont-size-h6 mb-2 d-block">
                                8965325689 - 5</h6>
                            <div class="font-weight-bold text-muted font-size-sm">
                                <span class="text-dark-75 font-size-h2 font-weight-bolder mr-2">50.5%</span>Case Ratio</div>
                            <ProgressBar now="50.5" variant="warning" />
                        </div>

                        <div class="mb-5">
                            <h6 class="card-title font-weight-bolderfont-size-h6 mb-2 d-block">
                                7845124578 - 3</h6>
                            <div class="font-weight-bold text-muted font-size-sm">
                                <span class="text-dark-75 font-size-h2 font-weight-bolder mr-2">45.25%</span>Case Ratio</div>
                            <ProgressBar now="45.25" variant="warning" />
                        </div>

                        <div class="mb-5">
                            <h6 class="card-title font-weight-bolderfont-size-h6 mb-2 d-block">
                                9589784512 - 5</h6>
                            <div class="font-weight-bold text-muted font-size-sm">
                                <span class="text-dark-75 font-size-h2 font-weight-bolder mr-2">80.36%</span>Case Ratio</div>
                            <ProgressBar now="80.36" variant="warning" />
                        </div>

                    </div>
                </div>
            </div>
            <Drawer
                anchor={"left"}
                open={panel}
                onClose={(e) => toggleDrawer(false)}>
                <div style={{ width: "265px" }}>
                    <div>
                        <Formik
                            initialValues={{ package_name: '', checked: [], }}
                            onSubmit={(values, { setSubmitting }) => {
                                handleSearch(values);
                                setSubmitting(false);
                            }}>
                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit,
                                setFieldValue, isSubmitting, }) => (
                                <form onSubmit={handleSubmit}>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Field
                                            component={SelectField}
                                            name="package_name"
                                            placeholder="Select Package"
                                            option={packages}
                                            values={values}
                                            setFieldValue={setFieldValue}
                                            handleBlur={handleBlur}
                                        />
                                    </Col>
                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <label>Select Date</label>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                        />
                                        <DatePicker
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                        />
                                    </Col>

                                    <div className={classes.root}>
                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.heading, classes.orange_color)}>
                                                        <h6 className="mb-0" >Channels</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.secondaryHeading, classes.orange_color)}>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                                                    <Checkbox name="checked" children="Organic Search" />
                                                    <Checkbox name="checked" children="Youtube" />
                                                    <Checkbox name="checked" children="Q & A" />
                                                    <Checkbox name="checked" children="Social Media Platforms" />
                                                </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Categorires</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.secondaryHeading, classes.orange_color)}
                                                    ></Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                                                    <Checkbox children="Fake Customer Care No" />
                                                    <Checkbox children="Fake Job Promotions" />
                                                    <Checkbox children="Fake Offers" />
                                                </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Publishers</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={classes.secondaryHeading}></Typography>
                                                </div>
                                                <div className={classes.column}

                                                >
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                                                    <Checkbox children="7074165033" />
                                                    <Checkbox children="7029054285" />
                                                    <Checkbox children="8649805464" />
                                                    <Checkbox children="7866058485" />
                                                    <Checkbox children="9835147819" />
                                                    <Checkbox children="8116334087" />
                                                    <Checkbox children="8144925793" />
                                                    <Checkbox children="9928344499" />
                                                    <Checkbox children="7665008611" />
                                                    <Checkbox children="7387060648" />
                                                    <Checkbox children="9694884347" />
                                                    <Checkbox children="8209553293" />
                                                    <Checkbox children="7420811295" />
                                                    <Checkbox children="9413035047" />
                                                    <Checkbox children="9837703667" />
                                                </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div
                                                    className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Countries</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}></Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}>0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                                                    <Checkbox children="India" />
                                                </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                        <ExpansionPanel>
                                            <ExpansionPanelSummary
                                                expandIcon={<ExpandMoreIcon />}
                                                aria-controls="panel1c-content"
                                                id="panel1c-header"
                                            >
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.heading, classes.orange_color)}
                                                    >
                                                        <h6 className="mb-0">Brands</h6>
                                                    </Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography className={clsx(classes.secondaryHeading, classes.orange_color)}></Typography>
                                                </div>
                                                <div className={classes.column}>
                                                    <Typography
                                                        className={clsx(classes.secondaryHeading, classes.orange_color)}
                                                    >0 Selected</Typography>
                                                </div>
                                            </ExpansionPanelSummary>
                                            <Divider />
                                            <ExpansionPanelActions>
                                                <div className="row">
                                                    <InputGroup className="mb-3">
                                                        <FormControl
                                                            placeholder="Search"
                                                            aria-label="Search"
                                                            aria-describedby="basic-addon2"
                                                        />
                                                        <InputGroup.Append>
                                                            <InputGroup.Text id="basic-addon2">
                                                                <span>Search</span>
                                                            </InputGroup.Text>
                                                        </InputGroup.Append>
                                                    </InputGroup>
                                                </div>
                                            </ExpansionPanelActions>
                                            <ExpansionPanelDetails className={classes.details}>
                                                <Form.Group controlId="formBasicChecbox" className="checkbox-inner mb-0">
                                                    <Checkbox children="RBL Bank" />
                                                </Form.Group>
                                            </ExpansionPanelDetails>
                                        </ExpansionPanel>

                                    </div>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Button type="submit" disabled={isSubmitting} className="w-100">
                                            Submit
                                        </Button>
                                    </Col>

                                </form>
                            )}
                        </Formik>
                    </div>

                </div>
            </Drawer>
        </>
    );
}

export default Dashboard;