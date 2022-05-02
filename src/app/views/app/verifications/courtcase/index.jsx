import React, { useState, useEffect } from 'react';
import {
    Input,
} from "../../../../../_metronic/_partials/controls/forms/Input";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Row, Col, Button, Card } from "react-bootstrap";

const initialValues = {
    name: '',
    state: '',
    address: '',
    type: '',
    father: '',
}

const schema = yup.object().shape({
    name: yup.string().required(),
    state: yup.string().email().required(),
    address: yup.string().required(),
    type: yup.string().required(),
    father: yup.string().required(),

});

export default function CourtCase() {
    const roles = [
        { value: "1", label: "Admin" },
        { value: "2", label: "Customer" },
    ]
    return (
        <>
            <Card className="reportfilter-Ctr">
                <Card.Header className="pb-3">
                    <h5>Company Search</h5>
                </Card.Header>
                <Card.Body className="pt-4 pb-4">
                    <Formik
                        enableReinitialize={true}
                        validationSchema={schema}
                        initialValues={initialValues}
                        onSubmit={(values, { resetForm }) => {
                            resetForm();
                            console.log(values);
                        }}
                    >
                        {({ values, setFieldValue, handleBlur }) => (
                            <div className="userform-Ctr">
                                <Form>
                                    <Row gutter={[20, 20]}>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                name="name"
                                                component={Input}
                                                placeholder="Enter Name"
                                                label="Name"
                                                type="text"
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                name="state"
                                                component={Input}
                                                placeholder="Enter State"
                                                label="State"
                                                type="text"
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                name="address"
                                                component={Input}
                                                placeholder="Enter Address"
                                                label="Address"
                                                type="text"
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                name="type"
                                                component={Input}
                                                placeholder="Enter Type"
                                                label="Type"
                                                type="text"
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            <Field
                                                name="father"
                                                component={Input}
                                                placeholder="Enter Father Name"
                                                label="Father Name"
                                                type="text"
                                            />
                                        </Col>
                                    </Row>
                                    <div className="text-left">
                                        <Row>
                                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <Button type="submit" className="w-100">
                                                    Search
                                                </Button>
                                            </Col>
                                            <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                                <Button className="w-100">
                                                    Clear
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                </Form>
                            </div>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </>
    )
}

