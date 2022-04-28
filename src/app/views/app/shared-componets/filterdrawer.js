/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-restricted-imports */
import React, { useState, useEffect } from 'react'
import Drawer from '@material-ui/core/Drawer';
import { Formik, Field } from 'formik';
import { Row, Col, Button, Card, InputGroup, FormControl, Form } from "react-bootstrap";
import SelectField from '../../../../_metronic/_partials/controls/forms/SelectField';
import DatePicker from "react-datepicker";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { Checkbox } from "../../../../_metronic/_partials/controls";
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { FetchFilterlist } from "../../../../redux/actions/CommonActions"
import moment from 'moment';

export default function FilterDrawer(props) {
    const packageName = localStorage.getItem('dpackage');
    const dispatch = useDispatch()
    const { panel, toggleDrawer, handleSubmit } = props;
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

    const date = new Date();
    const weekstartdate = date.setDate(date.getDate() - 6)
    const [startDate, setStartDate] = useState(weekstartdate);
    const [endDate, setEndDate] = useState(new Date());
    const classes = useStyles();
    localStorage.setItem("startDate", moment(new Date(startDate)).format('YYYY-MM-DD'));
    localStorage.setItem("endDate", moment(new Date(endDate)).format('YYYY-MM-DD'));
    const handleSearch = (formData) => {
        handleSubmit(formData);
        console.log(localStorage.getItem("startDate"));
        console.log(localStorage.getItem("endDate"));
    }

    useEffect(() => {
        dispatch(FetchFilterlist(packageName))
    }, [])

    const filter_list = useSelector(state => state.common.filter_list)
    // const loading = useSelector(state => state.dashboard.loading)

    return (
        <Drawer
            anchor={"right"}
            open={panel}
            onClose={toggleDrawer}
        >
            <div style={{ width: "300px" }}>
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
                                    {filter_list.length === 0 ? "No data" :

                                        filter_list && filter_list.map((filtermenu, i) => (
                                            <ExpansionPanel>
                                                <ExpansionPanelSummary
                                                    expandIcon={<ExpandMoreIcon />}
                                                    aria-controls="panel1c-content"
                                                    id="panel1c-header"
                                                >
                                                    <div className={classes.column}>
                                                        <Typography
                                                            className={clsx(classes.heading, classes.orange_color)}>
                                                            <h6 className="mb-0" >{filtermenu}</h6>
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
                                        ))

                                    }
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
    )
}
