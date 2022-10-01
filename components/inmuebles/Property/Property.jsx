import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from 'react-bootstrap/Button';
import { BiStar } from "react-icons/bi";
import { Image } from "react-bootstrap";
const Property = ({ inmueble, image }) => {
  return (
    <Col>
      <Card>
        <div className="row">
          <div className="col-4 d-flex align-self-center ">
            <Card.Img
              className="img-fluid rounded-start m-2 "
              src={inmueble.image}
            />
          </div>
          <div className="col">
            <Card.Body>
              <Card.Title>
                Card title ⭐⭐⭐
              </Card.Title>
              <Card.Text>
                <div className="row">
                  <div className="col">
                    <div className="">

                 {inmueble.description}: <br />
                       <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus reprehenderit ipsa velit, quis commodi excepturi molestias,
                     minima, reiciendis amet ex sapiente numquam.
                      </p>

                    </div>

                    <div className="meters">
                      <label>
                        Tamano: {inmueble.maxSquareMeters}m² <br/> 
                        Totales: {inmueble.minSquareMeters}m² cubiertos

                      </label>
                    </div>
                  </div>

                  <div className="col">
                    <div className="commodities">
                      <label>
                       <span>
                       Ambientes: {inmueble.numbeOfAmbients} 
                       </span>
                       <br/>
                       <span>
                        Pileta: si
                       </span>
                       <br/>
                       <span>
                       Estacionamiento: No
                       </span>
                       <br/>

                      </label>
                    </div>
                    <div className="col">
                      <div className="price m-1">
                        <h6>
                            {inmueble.price}
                            {inmueble.typeMoney || " USD"}{" "}
                            <br/>
                         
                          $10000 Expensas{" "}
                        </h6>
                      </div>
                    </div>
                    <div className="d-flex justity-content-center flex-column align-items-center">
                    <Image className="d-flex" style={{width: "90px"}} src={inmueble.user} /> <br/>
                    <Button variant="success">Ofertar</Button>{' '}
                    </div>
                  </div>
                </div>
              </Card.Text>
            </Card.Body>
          </div>
        </div>
      </Card>
    </Col>
    // <div className="inmueble">
    //   <div className="images">
    //     <img src={inmueble.image} alt="" />
    //   </div>
    //   <div className="inmueble-container">
    //     <div className="description">
    //       {inmueble.description} Lorem ipsum dolor sit amet consectetur
    //       adipisicing elit. Asperiores, perspiciatis?
    //     </div>
    //     <div className="price">
    //       <h4>
    //         <b>
    //           {inmueble.price}
    //           {inmueble.typeMoney || " USD"}{" "}
    //         </b>
    //         + $ 10000 Expensas{" "}
    //       </h4>
    //     </div>
    //     <div className="meters">
    //       <label>
    //         <b>{inmueble.maxSquareMeters}</b> m² totales <b>{inmueble.minSquareMeters}</b> m² cubiertos
    //       </label>
    //     </div>
    //     <div className="commodities">
    //       <label>
    //         <b>{inmueble.numbeOfAmbients}</b> ambientes <b>Pileta</b>:Si{" "}
    //         <b>Estacionamiento</b>:No
    //       </label>
    //       <img src={inmueble.user} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Property;
