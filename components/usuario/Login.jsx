import { useState, useRef } from "react";
import {
  Button,
  Container,
  Form,
  Stack,
  Spinner,
  Alert,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HOME, REGISTER } from "../../routes/path";
import { formLogin } from "../../services/usuario";
import { useAuthContext } from "../../context/authContext";
const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = loginData;
  const [errorMsg, setErrorMsg] = useState("");
  const { LoginContext, isAuthenticated } = useAuthContext();

  const divRef = useRef(null);
  const spinnerRef = useRef(null);

  // spinnerRef.current.style.display='none'

  const handelOnChange = (e) => {
    setLoginData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    divRef.current.style.display = "none";
    spinnerRef.current.style.display = "";
  
    //api aws
    let responseApi = await formLogin(loginData);

    validToken(responseApi);
    // seterrorMsg(response.data.message);
    // hook validar token
  };

  const validToken = (data) => {
    if (data === 200) {
  
      spinnerRef.current.style.display = "none";
      divRef.current.style.display = "initial";
      console.log("todo bien");
    } else {
      divRef.current.style.display = "initial";
      spinnerRef.current.style.display = "none";
    
      setErrorMsg(data.message);
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit} className="w-75 m-auto">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User name</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter userName"
            value={email}
            onChange={handelOnChange}
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
            onChange={handelOnChange}
            required
          />
        </Form.Group>

        <Stack gap="2" className="col-md-5 mx-auto">
          <Button variant="primary" type="submit">
            <span ref={divRef}>Submit</span>
            {errorMsg != "" ? (
              (divRef.current.style.display = "")
            ) : (
              <Spinner
                ref={spinnerRef}
                style={{ display: "none" }}
                animation="border"
                role="status"
              >
                <span className="visually-hidden " hidden>
                  Loading...
                </span>
              </Spinner>
            )}
          </Button>
          {errorMsg != "" ? (
            <Alert variant="danger" >
              {errorMsg}
            </Alert>
          ) : (
            ""
          )}

          <div>
            Need an Account?
            <Button as={Link} to={REGISTER}>
              Sign Up
            </Button>
          </div>
        </Stack>
      </Form>
      <Button as={Link} to={HOME}>
        INICIO
      </Button>
    </Container>
  );
};

export default Login;
