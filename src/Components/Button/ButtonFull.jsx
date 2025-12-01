import { Link } from "react-router-dom";
import Style from "./button.module.css";

export default function ButtonFull({ children, url }) {
  return (
    <Link to={url || "/"} className={Style.buttonFull}>
      {children}
    </Link>
  );
}
