import { useState, useRef } from "react";
import {
  Button,
  Container,
  Form,
  Stack,
  Spinner,
  Alert,
  Image
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { HOME, REGISTER } from "../../routes/path";
import { formLogin } from "../../services/usuario";
import { useAuthContext } from "../../context/authContext";
import logo from "../../components/inmuebles/img/logo.png";
import "./login.css";
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
    event.preventDefault();
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
      LoginContext()
    } else {
      divRef.current.style.display = "initial";
      spinnerRef.current.style.display = "none";
    
      setErrorMsg(data);
    }
  };

  return (
    <div className=" background ">
      <Container
        style={{ height: "100vh" }}
        className="  d-flex align-items-center justify-content-center "
      >
        <div className="d-flex justify-content-center shadow-lg p-1 caja2 bg-body rounded border ">
          <div className="row " style={{ width: "100%" }}>
            <div className="col align-self-center  justify-content-center d-flex ">
              <Image src={logo} className="rounded" alt="" width="100%" height="auto" />
            </div>
            <div className="col align-self-center  ">
              <Form onSubmit={handleSubmit} className="w-100 m-auto  ">
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                  <div className="w-100 d-flex  justify-content-center">
                    <h3 className="mb-4  p-2">Login</h3>
                  </div>

                  <Form.Label className="label">Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    className="control"
                    placeholder="Enter userName"
                    value={email}
                    onChange={handelOnChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label className="label">Password</Form.Label>
                  <Form.Control
                    className="control"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    onChange={handelOnChange}
                    required
                  />
                </Form.Group>

                <Stack  className="col-lg-20 mx-auto">
                  <Button variant="primary"  className="" type="submit">
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
                    <Alert variant="danger">{errorMsg}</Alert>
                  ) : (
                    ""
                  )}

                  <div className=" d-flex  justify-content-end text-center">
                    
                    <span className="align-self-center">Need an Account?  </span> 
                    <Button variant="link" as={Link} to={REGISTER}>
                      Sign Up
                    </Button>
                    <Button  variant="link" as={Link} to={HOME}>
                Home
              </Button>
                  </div>
                </Stack>
              </Form>
            
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
