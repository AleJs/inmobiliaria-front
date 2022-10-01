import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { formRegister } from "../../services/usuario";
import { Link } from "react-router-dom";
import { HOME, LOGIN } from "../../routes/path";
import "./login.css";

const register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { firstName, lastName, userName, email, password } = formData;

  const handleOnChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
    formRegister(formData);
  };

  return (
    <div className=" background ">
      <Container
        style={{ height: "100vh" }}
        className="  d-flex align-items-center justify-content-center "
      >
        <div className="d-flex justify-content-center shadow-lg p-1 caja2 bg-body rounded border ">
          <div className="row  d-flex justify-content-center" style={{ width: "100%" }}>
            <div className=" d-flex  justify-content-center">
              <h3 className="mb-4  p-2">Registrarse</h3>
            </div>

            <div className="d-flex row gap align-self-center  ">
              <Form
                onSubmit={handleSubmit}
                className="w-100 m-auto needs-validation"
                noValidate
              >
                <div className="row">
                  <Form.Group className="mb-3 col" controlId="formBasicName">
                    <Form.Label>First name</Form.Label>
                    <Form.Control
                      type="name"
                      name="firstName"
                      placeholder="Enter first name"
                      value={firstName}
                      onChange={handleOnChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 col"
                    controlId="formBasicLastName"
                  >
                    <Form.Label>Last name</Form.Label>
                    <Form.Control
                      type="name"
                      name="lastName"
                      placeholder="Enter last name"
                      value={lastName}
                      onChange={handleOnChange}
                      required
                    />
                  </Form.Group>
                </div>
                <div className="row">
                  <Form.Group className="mb-3 col" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleOnChange}
                      required
                    />
                  </Form.Group>
                  <Form.Group
                    className="mb-3 col"
                    controlId="formBasicPassword"
                  >
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Password"
                      value={password}
                      onChange={handleOnChange}
                      required
                    />
                  </Form.Group>
                </div>
               

                <div className="row mb-3 m-2 d-flex justify-content-center">
                  <Button variant="primary" className="col-5" type="submit">
                    Register
                  </Button>
                </div>
                <div className=" row d-flex m-2 justify-content-between align-items-center">
                  <Button variant="warning" className="h-100  col-2" style={{borderRadius:"1px"}} as={Link} to={HOME}>
                    <span>Back</span>
                  </Button>
                  <Button variant="link " className="  col-4" as={Link} to={LOGIN}>
                    <span>Do you have an account?</span>
                  </Button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default register;
