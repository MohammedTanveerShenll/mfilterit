import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
    Input,
    Select,
    DatePickerField,
} from "../../../../../src/_metronic/_partials/controls";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../../src/_metronic/_helpers/index";

import { InputGroup, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import {data} from './data'
const Reports = () => {
    const columns = [
        {
            dataField: "id",
            text: "ID",
            sort: true
        },
        {
            dataField: "date",
            text: "Date",
            sort: true,
        },
        {
            dataField: "sub_channel",
            text: "Sub Channel",
            sort: true,
        },
        {
            dataField: "sub_sub_channel",
            text: "Sub Sub Channel",
        },
        {
            dataField: "channel",
            text: "Channel",
            sort: true,
        },
        {
            dataField: "location",
            text: "Location",
            sort: true,
        },
        {
            dataField: "brand",
            text: "Brand",
            sort: true,
        },
        {
            dataField: "keyword",
            text: "Keyword",
            sort: true,
        },
        {
            dataField: "country",
            text: "Country",
            sort: true,
        },
        {
            dataField: "category",
            text: "Category",
            sort: true,
        },
        {
            dataField: "sub_category",
            text: "Sub Category",
            sort: true,
        },
        {
            dataField: "priority",
            text: "Priority",
            sort: true,
        },
        {
            dataField: "status_update_date",
            text: "Status Update Date",
            sort: true,
        },
        {
            dataField: "ticket_id",
            text: "Ticket ID",
            sort: true,
        },
        {
            dataField: "ticket_status",
            text: "Ticket Status",
            sort: true,
        },
        {
            dataField: "heading",
            text: "Heading",
            sort: true,
        },
        {
            dataField: "Description",
            text: "description",
            sort: true,
        },
        {
            dataField: "case_report",
            text: "Case Report",
            sort: true,
        },
        {
            dataField: "screenshot",
            text: "Screenshot",
            sort: true,
        },
        {
            dataField: "destination_url",
            text: "Destination URL",
            sort: true,
        },
        {
            dataField: "display_url",
            text: "Display URL",
            sort: true,
        },
        {
            dataField: "source_url",
            text: "Source URL",
            sort: true,
        },
        {
            dataField: "destination_url_domain",
            text: "Destination URL Domain",
            sort: true,
        },
        {
            dataField: "publisher",
            text: "Publisher",
            sort: true,
        },
        {
            dataField: "sub_publisher",
            text: "sub_publisher",
            sort: true,
        },
        {
            dataField: "campaign",
            text: "Campaign",
            sort: true,
        },
        {
            dataField: "campaign_name",
            text: "Campaign Name",
            sort: true,
        },
        {
            dataField: "additional_info_1",
            text: "Additional Info 1",
            sort: true,
        },
        {
            dataField: "tat",
            text: "TAT",
            sort: true,
        },
        {
            dataField: "ticket_open_status",
            text: "Ticket Open Status",
            sort: true,
        },
        
        {
            dataField: "status",
            text: "Status",
            formatter: (cellContent, row) => {
                return (
                    <div>
                        {row.status === "active" &&
                            <span class="label label-lg label-light-success label-inline">{row.status}</span>
                        }
                        {row.status === "inprogress" &&
                            <span class="label label-lg label-light-warning label-inline">{row.status}</span>
                        }
                        {row.status === "rejected" &&
                            <span class="label label-lg label-light-danger label-inline">{row.status}</span>
                        }
                        {row.status === "approved" &&
                            <span class="label label-lg label-light-primary label-inline">{row.status}</span>
                        }
                    </div>
                );
            }
        }
      
        
    ];
    
    const customTotal = (from, to, size) => (
        <span className="react-bootstrap-table-pagination-total ml-3">
            Showing {from} to {to} of {size} Results
        </span>
    );
    
    const selectRow = {
        mode: "checkbox",
        clickToSelect: true,
        hideSelectAll: false,
    };
    
    const options = {
        paginationSize: 4,
        alwaysShowAllBtns: true, // Always show next and previous button
        withFirstAndLast: false, // Hide the going to First and Last page button
        // hideSizePerPage: true, // Hide the sizePerPage dropdown always
        // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
        firstPageText: 'First',
        prePageText: 'Back',
        nextPageText: 'Next',
        lastPageText: 'Last',
        nextPageTitle: 'First page',
        prePageTitle: 'Pre page',
        firstPageTitle: 'Next page',
        lastPageTitle: 'Last page',
        showTotal: true,
        paginationTotalRenderer: customTotal,
        disablePageTitle: true,
        sizePerPageList: [{
            text: '10', value: 10
        }, {
            text: '20', value: 20
        }] // A numeric array is also available. the purpose of above example is custom the text
    };
    

    return (
     <>
      <div className="card card-custom">
            <Card>
                <CardHeader title="Products list">
                    <CardHeaderToolbar>
                        <div className="card-toolbar">
                            <Link to="create" className="btn btn-primary font-weight-bolder
                     font-size-sm mr-3">
                                Create</Link>
                        </div>
                    </CardHeaderToolbar>
                </CardHeader>
                <CardBody>
                    <div className="App">
                        <BootstrapTable
                            bootstrap4
                            keyField="id"
                            data={data}
                            columns={columns}
                            pagination={paginationFactory(options)}
                            wrapperClasses="table-responsive"
                            classes="table table-head-custom table-vertical-center overflow"
                            bordered={false}
                            selectRow={selectRow}
                        />
                    </div>
                </CardBody>
            </Card>


        </div>

     </>
    );
}

export default Reports;