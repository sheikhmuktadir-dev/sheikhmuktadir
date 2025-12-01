import { Link } from "react-router-dom";
import Style from "./button.module.css";

export default function ButtonDark({ children, url }) {
  return (
    <Link to={url || "/"} className={Style.buttonDark}>
      {children}
    </Link>
  );
}
