/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import {
    Input,
} from "../../../../_metronic/_partials/controls";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
import { Row, Col, Button, Card } from "react-bootstrap";

const initialValues = {
    username: '',
    email: '',
    confirm_password: '',
}

const schema = yup.object().shape({
    username: yup.string().required(),
    email: yup.string().email().required(),
    confirm_password: yup.string().required(),
});

export default function Users() {
    return (
        <>
            <Card className="reportfilter-Ctr">
                <Card.Header className="pb-3">
                    <h5>Change Password</h5>
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
                            <Form>
                                <Row gutter={[20, 20]}>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Field
                                            name="username"
                                            component={Input}
                                            placeholder="Enter user name"
                                            label="Name"
                                            type="text"
                                        />
                                    </Col>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Field
                                            name="email"
                                            component={Input}
                                            placeholder="Enter Email ID"
                                            label="Email"
                                            type="email"
                                        />
                                    </Col>

                                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Field
                                            name="confirm_password"
                                            component={Input}
                                            placeholder="Confirm Password"
                                            label="Confirm Password"
                                            type="password"
                                        />
                                    </Col>

                                </Row>

                                <div className="text-left">
                                    <Button type="submit">
                                        Save
                                    </Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </Card.Body>
            </Card>
        </>
    )
}
