import React from 'react';
import { Form } from "react-bootstrap";


const ThreeSixtyDegree = () => {

    return (
        <div>
            <p className='text-justify'>
                The 360 Degree Search option enables user profile lookup across the public web, social media accounts, telegram, whatsapp groups, darkweb and other popular channels, using the attributes provided in the sample file here. For any concern, issues in accessing the functionality, please reach out to us on  brandinfringement.team@mfilterit.com
            </p>
            <div className='row'>
                <div className='col-lg-3 col-md-3 col-sm-3'>
                    <button className="btn btn-primary font-weight-bolder font-size-sm ">
                        Sample Download
                    </button>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3 justify-content-right'>
                    <Form.Group controlId="formFile" className="mt-2 pull-right mx-auto">
                        <Form.Control type="file" />
                    </Form.Group>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3'>
                    <Form.Group controlId="formFile" className="mt-2 pull-right mx-auto">
                        <Form.Control type="file" />
                    </Form.Group>
                </div>
                <div className='col-lg-3 col-md-3 col-sm-3'>
                    <button className="btn btn-primary font-weight-bolder font-size-sm float-right ">
                        Upload
                    </button>
                </div>
            </div>
            
        </div>


    );
}

export default ThreeSixtyDegree;