import React, { useState } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";

// import images
import logolight from '../../assets/images/logo-light.png';
import logodark from '../../assets/images/logo-dark.png';

const Register = (props) => {
    document.title = "Register | Upzet - React Admin & Dashboard Template";

    // State for success and error handling
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // Formik Validation
    const validation = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email format").required("Please Enter Your Email"),
            username: Yup.string().required("Please Enter Your Username"),
            password: Yup.string().required("Please Enter Your Password"),
        }),
        onSubmit: async (values) => {
            try {
                const response = await axios.post("http://localhost:5001/api/auth/register", values);
                setSuccessMessage("User registered successfully!");
                setErrorMessage(""); // Clear any error messages
            } catch (error) {
                setErrorMessage("Registration failed. Please try again.");
                setSuccessMessage(""); // Clear any success messages
            }
        }
    });

    return (
        <div className="bg-pattern" style={{ height: "100vh" }}>
            <div className="bg-overlay"></div>
            <div className="account-pages pt-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={6} md={8} xl={4}>
                            <Card className='mt-5'>
                                <CardBody className="p-4">
                                    <div className="text-center">
                                        <Link to="/" className="">
                                            <img src={logodark} alt="" height="24" className="auth-logo logo-dark mx-auto" />
                                            <img src={logolight} alt="" height="24" className="auth-logo logo-light mx-auto" />
                                        </Link>
                                    </div>

                                    <h4 className="font-size-18 text-muted text-center mt-2">Free Register</h4>
                                    <p className="text-muted text-center mb-4">Get your free Upzet account now.</p>
                                    <Form
                                        className="form-horizontal"
                                        onSubmit={validation.handleSubmit}
                                    >
                                        {/* Success and Error Messages */}
                                        {successMessage && (
                                            <Alert color="success">
                                                {successMessage}
                                            </Alert>
                                        )}
                                        {errorMessage && (
                                            <Alert color="danger">
                                                {errorMessage}
                                            </Alert>
                                        )}

                                        <Row>
                                            <Col md={12}>
                                                <div className="mb-4">
                                                    <Label className="form-label">Email</Label>
                                                    <Input
                                                        id="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Enter email"
                                                        type="email"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.email || ""}
                                                        invalid={validation.touched.email && validation.errors.email ? true : false}
                                                    />
                                                    {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-4">
                                                    <Label className="form-label">Username</Label>
                                                    <Input
                                                        name="username"
                                                        type="text"
                                                        placeholder="Enter username"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.username || ""}
                                                        invalid={validation.touched.username && validation.errors.username ? true : false}
                                                    />
                                                    {validation.touched.username && validation.errors.username ? (
                                                        <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                                                    ) : null}
                                                </div>
                                                <div className="mb-4">
                                                    <Label className="form-label">Password</Label>
                                                    <Input
                                                        name="password"
                                                        type="password"
                                                        placeholder="Enter Password"
                                                        onChange={validation.handleChange}
                                                        onBlur={validation.handleBlur}
                                                        value={validation.values.password || ""}
                                                        invalid={validation.touched.password && validation.errors.password ? true : false}
                                                    />
                                                    {validation.touched.password && validation.errors.password ? (
                                                        <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                    ) : null}
                                                </div>
                                                <div className="form-check">
                                                    <input type="checkbox" className="form-check-input" id="term-conditionCheck" />
                                                    <label className="form-check-label fw-normal" htmlFor="term-conditionCheck">I accept <Link to="#" className="text-primary">Terms and Conditions</Link></label>
                                                </div>
                                                <div className="d-grid mt-4">
                                                    <button className="btn btn-primary waves-effect waves-light" type="submit">Register</button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Form>
                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
                                <p className="text-white-50">Already have an account? <Link to="/login" className="fw-medium text-primary">Login</Link></p>
                                <p className="text-white-50">© {new Date().getFullYear()} Upzet. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Register;