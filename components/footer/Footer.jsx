import "./footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Propiedades</li>
          <li className="fListItem">Comprar</li>
          <li className="fListItem">Vender</li>
        </ul>
        <ul className="fList">
        <li className="fListItem">Alquilar</li>
          <li className="fListItem">Contacto</li>
          <li className="fListItem">Termino y condiciones</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2022 Bonpland.</div>
    </div>
  );
};
