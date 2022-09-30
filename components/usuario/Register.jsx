import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { formRegister } from '../../services/usuario';
import { Link } from 'react-router-dom';
import { HOME } from '../../routes/path';

const register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
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
    <Container>
      <h1>Registrarse</h1>
      <Form
        onSubmit={handleSubmit}
        className="w-75 m-auto needs-validation"
        noValidate
      >
        <Form.Group className="mb-3" controlId="formBasicName">
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

        <Form.Group className="mb-3" controlId="formBasicLastName">
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

        <Form.Group className="mb-3" controlId="formBasicEmail">
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
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

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <Button as={Link} to={HOME}>
        INICIO
      </Button>
    </Container>
  );
};

export default register;
