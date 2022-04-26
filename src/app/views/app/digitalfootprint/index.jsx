/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardBody,
    CardHeader,
    CardHeaderToolbar,
} from "../../../../_metronic/_partials/controls";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../../../_metronic/_helpers/index";
import { InputGroup, Modal, OverlayTrigger, Tooltip } from "react-bootstrap";

import { Row, Col, Button} from "react-bootstrap";
const data = [
    // {
    //     "id": 1, "package_name": "in.itcstore", "menu": "Incident Dashboard,Incident Report,Tickets",
    //     "filter": "channel,category,publisher,country,brand,priority",
    // },
    // {
    //     "id": 2, "package_name": "itc-wd-app", "menu": "Incident Dashboard,Incident Report ,Tickets,Add User,Add Package,User Package Mapping,User Management,Verification,Address,Bank Verification,Black List Email,Black List,Company Search,Court Cases,Data Check,Domain Detail,Driving License,Email,Location,Number Data Check,Pan Card Check,Pan Gst Check,Passport Check,Phone,Policy,Vehicle Detail,World Watch Streeming,Bulk Verification",
    //     "filter": "web_campaign,web_channel,web_creative_id,web_system_domain,web_placement_id,web_publisher_id,web_fraud_category,web_fraud_sub_category,web_placement_type,web_intermediate_seller,web_adstxt_exists",
    // },
];

const columns = [
    {
        dataField: "id",
        text: "ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "case_id",
        text: "Case ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "contact_no",
        text: "Contact No.",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'140px',
            width: '10px'
         }
    },
    {
        dataField: "Email",
        text: "email",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "upi_id",
        text: "UPI ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "truecaller_name",
        text: "Truecaller Name",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'170px',
            width: '10px'
         }
    },
    {
        dataField: "truecaller_status",
        text: "Truecaller Status",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'170px',
            width: '10px'
         }
    },
    {
        dataField: "telecom_opertor",
        text: "Telecom Opertor",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'170px',
            width: '10px'
         }
    },
    {
        dataField: "telecom_circle",
        text: "Telecom Circle",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'170px',
            width: '10px'
         }
    },
    {
        dataField: "payment_gateway",
        text: "Payment Gateway",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'170px',
            width: '10px'
         }
    },
    {
        dataField: "facebook_id",
        text: "facebook_id",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "twitter_id",
        text: "Twitter ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "linkedin_id",
        text: "LinkedIn ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "instagram_id",
        text: "Instagram ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "pintrest_id",
        text: "Pintrest ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "telegram_id",
        text: "Telegram ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "whats_app_id",
        text: "Whats App ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "other_id",
        text: "Other ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "account_linked",
        text: "Account Linked",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'170px',
            width: '10px'
         }
    },
    {
        dataField: "reported_for",
        text: "Reported for",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "brand_status",
        text: "Brand Status",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "brand_1",
        text: "Brand 1",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "brand_2",
        text: "Brand 2",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "brand_3",
        text: "Brand 3",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "brand_4",
        text: "Brand 1",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "reported_date",
        text: "Reported Date",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'180px',
            width: '10px'
         }
    },
    {
        dataField: "category",
        text: "Category",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "location",
        text: "Location",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "channel",
        text: "Channel",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "ad_description",
        text: "Ad Description",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'158px',
            width: '10px'
         }
    },
    {
        dataField: "id",
        text: "ID",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'60px',
            width: '10px'
         }
    },
    {
        dataField: "sub_publisher",
        text: "Sub Publisher",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "pdf_reports",
        text: "PDF reports",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "inserted_date",
        text: "Inserted Date",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    {
        dataField: "case_reports",
        text: "Case Reports",
        style: {
             
            width: '10px'
        },
        headerStyle: {
       
            minWidth:'100px',
            width: '10px'
         }
    },
    
  
   
   
    
];

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

export default function DigitalFootPrint() {
    return (
        <div className="card card-custom">
            <Card>
            <Row style={{marginTop:'14px',marginBottom:'-25px'}}> 
                 <Col xs={6} sm={6} md={3} lg={1} xl={4}  className='d-flex f-r' style={{marginLeft:'32px',marginRight:'-14px'}}>
                                <div class="input-group">
                <input class="form-control border-secondary py-2" type="search" />
                <div class="input-group-append">
                    <button class="btn btn-primary font-weight-bolder font-size" type="button">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
</Col>
<Col xs={6} sm={6} md={3} lg={1} xl={3} className='d-flex f-r'>
<button className="btn btn-primary font-weight-bolder font-size">
                                Close Ticket    
                                </button>
                                </Col>
</Row>
                <CardBody>
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
                            noDataIndication={'no data'}
                        />
                    </div>
                </CardBody>
            </Card>


        </div>
    )
}
