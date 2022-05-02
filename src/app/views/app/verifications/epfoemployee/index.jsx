import React, { useState, useEffect } from 'react';
import {
    Input
} from "../../../../../_metronic/_partials/controls/forms/Input";
import {
    DatePickerField
} from "../../../../../_metronic/_partials/controls/forms/DatePickerField";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Row, Col, Button, Card } from "react-bootstrap";

const initialValues = {
    name: '', 
    establishment:'',
    due_date:'',
}

const schema = yup.object().shape({
    name: yup.string().required(),
    establishment: yup.string().required(),
    due_date:yup.string().required(),
});

export default function EpfoEmployee() {
    const roles = [
        { value: "1", label: "Admin" },
        { value: "2", label: "Customer" },
    ]
    return (
        <>
            <Card className="reportfilter-Ctr">
                <Card.Header className="pb-3">
                    <h5>EPFO Employee</h5>
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
                                                name="establishment"
                                                component={Input}
                                                placeholder="Enter Establishment"
                                                label="Establishment"
                                                type="text"
                                            />
                                        </Col>
                                        <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                            {/* <Field
                                                name="name"
                                                component={DatePickerField}
                                                placeholder="Enter Name"
                                                label="Name"
                                                type="text"
                                            /> */}
                                             <DatePickerField
                                            name="due_date"
                                            label="Date"
                                            placeholder="enter the date"
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

