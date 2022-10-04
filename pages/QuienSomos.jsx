import React from "react";
import { Container, Image } from "react-bootstrap";
import logo from "../components/inmuebles/img/logo.png";
import edificio from "../components/inmuebles/img/edificio.jpg";
import historia from "../components/inmuebles/img/historia.jpg";
const QuienSomos = () => {
  return (
    <Container
   
      className=" p-5   d-flex align-items-center justify-content-start "
    >
      <div className="row w-100" >
        
        <div className="col align-self-center  justify-content-center d-flex">
          <Image
            src={logo}
            className="rounded"
            alt=""
            width="40%"
            height="auto"
          />
        </div>
        <div className="col ">
          <h1>Quienes somos</h1>

          <p className="w-75" style={{  letterSpacing: "3px"}}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            non beatae perspiciatis ad ipsa ut! In nesciunt ipsa est aperiam?
            Cumque culpa ut ipsum libero fuga in porro sequi vel.
          </p>
        </div>
        
        
        
        <div className="row m-5 d-flex justify-content-center text-center">
          <h1>Nuestra Historia</h1>
          <p className="m-2 w-50  " style={{  letterSpacing: "3px"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            fugiat, consectetur quam ipsam totam dolores repellendus itaque ab
            odio placeat inventore? Error molestias repudiandae illum ut nostrum
            distinctio, unde ratione.
          </p>
        <div className="row m-3">

            <div className=" d-flex justify-content-center ">
                <Image
                src={historia}
                className="rounded"
                alt=""
                width="30%"
                height="auto"
                />
            </div>
        </div>
        </div>

       
            <div className="col text-end align-self-center ">
                <h1 className="mb-4">Quienes somos</h1>

                <p style={{  letterSpacing: "3px"}}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
                non beatae perspiciatis ad ipsa ut! In nesciunt ipsa est aperiam?
                Cumque culpa ut ipsum libero fuga in porro sequi vel.
                </p>
            </div>
            <div className="col  justify-content-center d-flex">
                <Image
                src={edificio}
                className="rounded"
                alt=""
                width="50%"
                height="auto"
                />
            </div>

      </div>
    </Container>
  );
};

export default QuienSomos;
