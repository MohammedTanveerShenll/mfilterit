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
    const [show, setEditShow] = useState(false);
    const handleEditShow = () => setEditShow(true);
    const columns = [
        {
            dataField: "id",
            text: "ID",
            sort: true,
            style: {
             
                width: '10px'
            },
            headerStyle: {
                // backgroundColor: 'green',
                minWidth:'50px',
                width: '100px'
             },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis" style={{width:'20px'}} >
                        <a onClick={handleEditShow} style={{ color: "#3699ff" }}> {row.id}</a>
                    </div>
                );
            }
        },
        {
            dataField: "date",
            text: "Date",
             sort:true,
            style: {
                width: '5%'
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        {/* <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.date}
                                </Tooltip>
                            }
                        > */}
                            <span>{row.date}</span>
                        {/* </OverlayTrigger> */}
                    </div>
                );
            }
            
            
        },
        {
            dataField: "sub_channel",
            text: "Sub Channel",
          sort:'true',
        //   headerAlign: 'center',
            style: {
                width: '12%',
                
               
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.sub_channel}
                                </Tooltip>
                            }
                        >
                            <span>{row.sub_channel}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
          
            
        },
        {
            dataField: "sub_sub_channel",
            text: "Sub Channel",
            sort:true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.sub_sub_channel}
                                </Tooltip>
                            }
                        >
                            <span>{row.sub_sub_channel}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "channel",
            text: "Channel",
            sort:true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.channel}
                                </Tooltip>
                            }
                        >
                            <span>{row.channel}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "location",
            text: "Location",
            sort:true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.location}
                                </Tooltip>
                            }
                        >
                            <span>{row.location}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "brand",
            text: "Brand",
            sort:true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.brand}
                                </Tooltip>
                            }
                        >
                            <span>{row.brand}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "keyword",
            text: "Keyword",
            sort:true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.keyword}
                                </Tooltip>
                            }
                        >
                            <span>{row.keyword}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "country",
            text: "Country",
            sort:true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.country}
                                </Tooltip>
                            }
                        >
                            <span>{row.country}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "category",
            text: "Category",
            sort:true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.category}
                                </Tooltip>
                            }
                        >
                            <span>{row.category}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "sub_category",
            text: "Sub Category",
            sort:true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.sub_category}
                                </Tooltip>
                            }
                        >
                            <span>{row.sub_category}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "priority",
            text: "Priority",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
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
            dataField: "status_update_date",
            text: "Status Update Date",
            sort: true,
            style: {
                width: '12%',
            },
            headerStyle: {
              
                minWidth:'150px',
                width: '150px'
             },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.status_update_date}
                                </Tooltip>
                            }
                        >
                            <span>{row.status_update_date}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "ticket_id",
            text: "Ticket ID",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.ticket_id}
                                </Tooltip>
                            }
                        >
                            <span>{row.ticket_id}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "ticket_status",
            text: "Ticket Status",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.ticket_status}
                                </Tooltip>
                            }
                        >
                            <span>{row.ticket_status}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "heading",
            text: "Heading",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.heading}
                                </Tooltip>
                            }
                        >
                            <span>{row.heading}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "description",
            text: "Description",
            sort: true,
            style: {
                width: '12%',
            },
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
            dataField: "case_report",
            text: "Case Report",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.case_report}
                                </Tooltip>
                            }
                        >
                            <span>{row.case_report}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "screenshot",
            text: "Screenshot",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.screenshot}
                                </Tooltip>
                            }
                        >
                            <span>{row.screenshot}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "destination_url",
            text: "Destination URL",
            sort: true,
            style: {
                width: "30%",
            },
            headerStyle: {
              
                minWidth:'150px',
                width: '150px'
             },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.destination_url}
                                </Tooltip>
                            }
                        >
                            <span>{row.destination_url}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "display_url",
            text: "Display URL",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.display_url}
                                </Tooltip>
                            }
                        >
                            <span>{row.display_url}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "source_url",
            text: "Source URL",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.source_url}
                                </Tooltip>
                            }
                        >
                            <span>{row.source_url}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "destination_url_domain",
            text: "Destination URL Domain",
            // sort: true,
            style: {
                width: '22%',
                
                    


                  
            },
            headerStyle: {
              
                minWidth:'200px',
                width: '200px'
             },
            formatter: (cellContent, row) => {
                return (
                    // <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.destination_url_domain}
                                </Tooltip>
                            }
                        >
                            <span>{row.destination_url_domain}</span>
                        </OverlayTrigger>
                    // </div>
                );
            }
        },
        {
            dataField: "publisher",
            text: "Publisher",
            sort: true,
            style: {
                width: '12%',
            },
            
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.publisher}
                                </Tooltip>
                            }
                        >
                            <span>{row.publisher}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "sub_publisher",
            text: "sub_publisher",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.sub_publisher}
                                </Tooltip>
                            }
                        >
                            <span>{row.sub_publisher}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "campaign",
            text: "Campaign",
            sort: true,
            style: {
                width: '12%',
            },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.campaign}
                                </Tooltip>
                            }
                        >
                            <span>{row.campaign}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "campaign_name",
            text: "Campaign Name",
            sort: true,
            style: {
                width: '12%',
            },
            headerStyle: {
              
                minWidth:'140px',
                width: '150px'
             },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.campaign_name}
                                </Tooltip>
                            }
                        >
                            <span>{row.campaign_name}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "additional_info_1",
            text: "Additional Info 1",
            sort: true,
            style: {
                width: '12%',
            },
            headerStyle: {
              
                minWidth:'140px',
                width: '150px'
             },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.additional_info_1}
                                </Tooltip>
                            }
                        >
                            <span>{row.additional_info_1}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
        },
        {
            dataField: "tat",
            text: "TAT",
            sort: true,
            style: {
              
                width:'10%',
                // width: '150px'
             },
             headerStyle: {
              
                minWidth:'40px',
                width: '50px'
             },
        },
        
        {
            dataField: "ticket_open_status",
            text: "Ticket Open Status",
            sort: true,
            style: {
                width: '12%',
            },
            headerStyle: {
              
                minWidth:'140px',
                width: '150px'
             },
            formatter: (cellContent, row) => {
                return (
                    <div className="text-ellipsis">
                        <OverlayTrigger
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    {row.ticket_open_status}
                                </Tooltip>
                            }
                        >
                            <span>{row.ticket_open_status}</span>
                        </OverlayTrigger>
                    </div>
                );
            }
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
                <CardHeader title="Incident Report">
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
                            classes="table table-head-custom table-vertical-center"
                            bordered={false}
                            selectRow={selectRow}
                            condensed
                            responsive
                            
                        />
                    </div>
                </CardBody>
            </Card>


        </div>

     </>
    );
}

export default Reports;