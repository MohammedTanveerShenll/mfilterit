import React  from 'react'
// import { , InputGroup } from "react-bootstrap";
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
    Input,
    Select,
    DatePickerField,
} from "../../../../_metronic/_partials/controls/index";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers/index";
import { Form,InputGroup, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Formik,  Field } from "formik";
import { useState ,useEffect } from "react";

const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total ml-3">
        Showing {from} to {to} of {size} Results
    </span>
);

const options = {
    paginationSize: 4,
    alwaysShowAllBtns: true, // Always show next and previous button
    withFirstAndLast: false, // Hide the going to First and Last page button
    // hideSizePerPage: true, // Hide the sizePerPage dropdown always
    // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
    firstPageText: 'First',
    prePageText: <i class="ki ki-bold-arrow-back icon-xs"></i>,
    nextPageText: <i class="ki ki-bold-arrow-next icon-xs"></i>,
    lastPageText: 'Last',
    nextPageTitle: 'First page',
    prePageTitle: 'Pre page',
    firstPageTitle: 'Next page',
    lastPageTitle: 'Last page',
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
        { text: '5', value: 5 },
        { text: '10', value: 10 },
        { text: '20', value: 20 }
    ]
};

const ThreeSixtyDegree = () => {

    const [show, setEditShow] = useState(false);
    const [viewshow, setViewtShow] = useState(false);

    const handleViewClose = () => setViewtShow(false);
    const handleViewShow = () => setViewtShow(true);

    const handleEditClose = () => setEditShow(false);
    const handleEditShow = () => setEditShow(true);

    const data = [
        {
            "ticket_id": 4302, "subject": "Take down", "description": "Take down : Publisher number does not belongs to RBL customer",
            "priority": "Immediate", "status": "new", "assignee": "mFilterIt Team 4 RBL", "author": "Kiran AR",
            "start_date": "2022-03-28", "due_date": "2022-03-30", "attachments": "https://mf-portal-store.s3.us-west-2.amazonaws.com/RBL+Bank/Feb/RBLBANK_organic_14.pdf"
        },
        {
            "ticket_id": 4289, "subject": "Take down", "description": "The link mentioned number does not belongs to RBL hence take do",
            "priority": "Immediate", "status": "Re-Opened", "assignee": "mFilterIt Team 4 RBL", "author": "Kiran AR",
            "start_date": "2022-03-28", "due_date": "2022-03-30", "attachments": "https://mf-portal-store.s3.us-west-2.amazonaws.com/RBL+Bank/Feb/organic_RBL_14_02.png"
        },
        {
            "ticket_id": 5623, "subject": "Take down", "description": "The link mentioned number does not belongs to RBL hence take do",
            "priority": "Immediate", "status": "new", "assignee": "mFilterIt Team 4 RBL", "author": "Kiran AR",
            "start_date": "2022-03-28", "due_date": "2022-03-30", "attachments": "https://mf-portal-store.s3.us-west-2.amazonaws.com/RBL+Bank/Feb/organic_RBL_14_02.png"
        },
        {
            "ticket_id": 3243, "subject": "Take down", "description": "The link mentioned number does not belongs to RBL hence take do",
            "priority": "Immediate", "status": "Re-Opened", "assignee": "mFilterIt Team 4 RBL", "author": "Kiran AR",
            "start_date": "2022-03-28", "due_date": "2022-03-30", "attachments": "https://mf-portal-store.s3.us-west-2.amazonaws.com/RBL+Bank/Feb/organic_RBL_14_02.png"
        },
        {
            "ticket_id": 4443, "subject": "Take down", "description": "The link mentioned number does not belongs to RBL hence take do",
            "priority": "Immediate", "status": "new", "assignee": "mFilterIt Team 4 RBL", "author": "Kiran AR",
            "start_date": "2022-03-28", "due_date": "2022-03-30", "attachments": "https://mf-portal-store.s3.us-west-2.amazonaws.com/RBL+Bank/Feb/organic_RBL_14_02.png"
        },
        {
            "ticket_id": 7877, "subject": "Take down", "description": "The link mentioned number does not belongs to RBL hence take do",
            "priority": "Immediate", "status": "Re-Opened", "assignee": "mFilterIt Team 4 RBL", "author": "Kiran AR",
            "start_date": "2022-03-28", "due_date": "2022-03-30", "attachments": "https://mf-portal-store.s3.us-west-2.amazonaws.com/RBL+Bank/Feb/organic_RBL_14_02.png"
        },
        {
            "ticket_id": 5654, "subject": "Take down", "description": "The link mentioned number does not belongs to RBL hence take do",
            "priority": "Immediate", "status": "new", "assignee": "mFilterIt Team 4 RBL", "author": "Kiran AR",
            "start_date": "2022-03-28", "due_date": "2022-03-30", "attachments": "https://mf-portal-store.s3.us-west-2.amazonaws.com/RBL+Bank/Feb/organic_RBL_14_02.png"
        },
        {
            "ticket_id": 9087, "subject": "Take down", "description": "The link mentioned number does not belongs to RBL hence take do",
            "priority": "Immediate", "status": "Re-Opened", "assignee": "mFilterIt Team 4 RBL", "author": "Kiran AR",
            "start_date": "2022-03-28", "due_date": "2022-03-30", "attachments": "https://mf-portal-store.s3.us-west-2.amazonaws.com/RBL+Bank/Feb/organic_RBL_14_02.png"
        },
        {
            "ticket_id": 5554, "subject": "Take down", "description": "The link mentioned number does not belongs to RBL hence take do",
            "priority": "Immediate", "status": "Re-Opened", "assignee": "mFilterIt Team 4 RBL", "author": "Kiran AR",
            "start_date": "2022-03-28", "due_date": "2022-03-30", "attachments": "https://mf-portal-store.s3.us-west-2.amazonaws.com/RBL+Bank/Feb/organic_RBL_14_02.png"
        }
    ];

    const columns = [
        {
            dataField: "ticket_id",
            text: "Ticket ID",
            sort: true,
            style: {
                width: '8%'
            },
            formatter: (cellContent, row) => {
                return (
                    <div>
                        <a onClick={handleEditShow} style={{ color: "#3699ff" }}> {row.ticket_id}</a>
                    </div>
                );
            }
        },
        {
            dataField: "subject",
            text: "Subject",
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis-50">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    {row.subject}
                                </Tooltip>
                            }
                        >
                            <span>{row.subject}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "description",
            text: "Description",
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.description}
                                </Tooltip>
                            }
                        >
                            <span>{row.description}</span>
                        </OverlayTrigger>
                    </div>
                );
            }

        },
        {
            dataField: "priority",
            text: "Priority",
            sort: true,
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis-50">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    {row.priority}
                                </Tooltip>
                            }
                        >
                            <span>{row.priority}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "status",
            text: "Status",
            sort: true,
            formatter: (cellContent, row) => {
                return (
                    <div>
                        {row.status === "new" ?
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        {row.status}
                                    </Tooltip>
                                }
                            >
                                <span class="label label-lg label-light-success label-inline">{row.status}</span>
                            </OverlayTrigger>
                            :
                            <OverlayTrigger
                                placement="top"
                                overlay={
                                    <Tooltip id={`tooltip-top`}>
                                        {row.status}
                                    </Tooltip>
                                }
                            >
                                <span class="label label-lg label-light-warning label-inline">{row.status}</span>
                            </OverlayTrigger>}
                    </div>
                );
            }
        },
        {
            dataField: "assignee",
            text: "Assignee",
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis-50">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    {row.assignee}
                                </Tooltip>
                            }
                        >
                            <span>{row.assignee}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "author",
            text: "Author",
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis-50">
                        <OverlayTrigger
                            placement="top"
                            overlay={
                                <Tooltip id={`tooltip-top`}>
                                    {row.author}
                                </Tooltip>
                            }
                        >
                            <span>{row.author}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "start_date",
            text: "Start Date",
            style: {
                width: '12%'
            }
        },
        {
            dataField: "due_date",
            text: "Due Date",
            style: {
                width: '10%'
            }
        },
        {
            dataField: "attachments",
            text: "Attach",
            formatter: (cellContent, row) => {
                return (
                    <div className="text-center">
                        <a target="blank" href={row.attachments}>
                            <span className="svg-icon svg-icon-md svg-icon-primary">
                                <SVG
                                    src={toAbsoluteUrl(
                                        "/media/svg/icons/Files/File.svg"
                                    )}
                                ></SVG>
                            </span>
                        </a>
                    </div>
                );
            }
        },
        {
            text: "",
            style: {
                width: '10%'
            },
            formatter: (cellContent, row) => {
                return (

                    <div class="btn-toolbar" role="toolbar" aria-label="...">
                        <div class="btn-group mr-2" role="group" aria-label="...">
                            <button type="button" onClick={handleEditShow}
                                class="btn btn-outline-secondary btn-icon btn btn-icon btn-light">
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                    <SVG
                                        src={toAbsoluteUrl(
                                            "/media/svg/icons/Communication/Write.svg"
                                        )}
                                    ></SVG>
                                </span>
                            </button>
                            <button type="button" onClick={handleViewShow}
                                class="btn btn-outline-secondary btn-icon btn btn-icon btn-light">
                                <span className="svg-icon svg-icon-md svg-icon-primary">
                                    <SVG
                                        src={toAbsoluteUrl("/media/svg/icons/Home/Eye.svg")}>
                                    </SVG>
                                </span>
                            </button>
                        </div>
                    </div>
                );
            }
        },
    ];

    return (
        <div>
            <p className='text-justify'>
                The 360 Degree Search option enables user profile lookup across the public web, social media accounts, telegram, whatsapp groups, darkweb and other popular channels, using the attributes provided in the sample file here. For any concern, issues in accessing the functionality, please reach out to us on  brandinfringement.team@mfilterit.com <a href="mailto:brandinfringement.team@mfilterit.com">brandinfringement.team@mfilterit.com</a>
            </p>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-3'>
                    <button className="btn btn-primary font-weight-bolder font-size-sm ">
                        Sample Download
                    </button>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 d-flex justify-content-right float-right'>
                    <Form.Group controlId="formFile" className="mt-2 pull-right ">
                        <Form.Control type="file" />
                    </Form.Group>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 d-flex justify-content-right float-right'>
                    <Form.Group controlId="formFile" className="mt-2 pull-right ml-5">
                        <Form.Control type="file" />
                    </Form.Group>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3'>
                    <button className="btn btn-primary font-weight-bolder font-size-sm float-right ">
                        Upload
                    </button>
                </div>
            </div>

            <div className="card card-custom">
                <Card>
                    <CardHeader>
                        <CardBody className="pt-0 pb-0">
                            <div className="App">
                                <BootstrapTable
                                    bootstrap4
                                    keyField="id"
                                    data={data}
                                    columns={columns}
                                    pagination={paginationFactory(options)}
                                    wrapperClasses="table-responsive"
                                    classes="table table-head-custom table-vertical-center overflow-hidden"
                                    bordered={false}
                                    condensed
                                    responsive
                                />
                            </div>
                        </CardBody>
                    </CardHeader>
                </Card>
            </div>
            <Modal show={show} onHide={handleEditClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={{
                            subject: '',
                            due_date: '',
                            status: '',
                            priority: '',
                            assignee: '',
                            description: '',
                            notes: '',
                        }}
                        onSubmit={values => {
                            // same shape as initial values
                            console.log(values);
                        }}
                    >
                        {({ errors, touched }) => (
                            <Form className="form form-label-right">
                                <div className="row">
                                    <div className="col-md-4">
                                        <Field name="subject"
                                            component={Input}
                                            placeholder="Subject"
                                            label="Subject" />
                                    </div>

                                    <div className="col-md-4">
                                        <DatePickerField
                                            name="due_date"
                                            label="Due Date"
                                        />
                                    </div>

                                    <div className="col-md-4">
                                        <Select name="status" label="Status">
                                            <option value="new">New</option>
                                        </Select>
                                    </div>

                                    <div className="col-md-6">
                                        <Select name="priority" label="Priority">
                                            <option value="low">Low</option>
                                            <option value="normal">Normal</option>
                                            <option value="high">High</option>
                                            <option value="urgent">Urgent</option>
                                            <option value="immediate">Immediate</option>
                                        </Select>
                                    </div>

                                    <div className="col-md-6">
                                        <Select name="assignee" label="Assignee">
                                            <option value="mohitdayal">Mohit Dayal</option>
                                            <option value="giriprasadsanka">Giri Prasad Sanka</option>
                                            <option value="ankushsharma">Ankush Sharma</option>
                                            <option value="kiranar">Kiran AR</option>
                                            <option value="mfilteritteam">mFilterIt Team</option>
                                        </Select>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Description</label>
                                            <Field
                                                name="description"
                                                as="textarea"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Notes</label>
                                            <Field
                                                name="notes"
                                                as="textarea"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>

                                </div>
                                <Modal.Footer className="pb-0 pr-0">
                                    <button className="btn btn-light btn-elevate" onClick={handleEditClose}>
                                        Close
                                    </button>
                                    <button type="submit" className="btn btn-primary font-weight-bolder
                                        font-size-sm mr-3">Submit</button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>

            </Modal>

            <Modal show={viewshow} onHide={handleViewClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>Ticket Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-md-4">
                            <h6>Subject</h6>
                            <span>Take down</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Priority</h6>
                            <span>Immediate</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Project</h6>
                            <span>RBL Brand Infringement</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Status</h6>
                            <span>New</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Start Date</h6>
                            <span>2022-03-29</span>
                        </div>
                        <div className="col-md-4">
                            <h6>Due Date</h6>
                            <span>2022-03-29</span>
                        </div>

                        <div className="col-md-12">
                            <h6>Description</h6>
                            <span>Mentioned number in the given link does not belongs to RBL hence please take down the same.</span>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

        </div>


    );
}

export default ThreeSixtyDegree;