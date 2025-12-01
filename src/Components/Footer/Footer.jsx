import Style from "./footer.module.css";
import Container from "../Container/Container";
import { IoLogoWhatsapp } from "react-icons/io";
import { footerData } from "../../Data/Data";

export default function Footer() {
  const { cta, copyright } = footerData || {};
  return (
    <footer className={Style.footerMain}>
      <Container>
        <div className={Style.footerInner}>
          <h2 className={Style.footerText}>{cta?.heading}</h2>
          <a
            target="_blank"
            href={cta?.whatsapp?.url || `tel:${971505257130}`}
            className={Style.footerBox}
          >
            <span>{cta?.whatsapp?.label || "Whatsapp"}</span>
            <IoLogoWhatsapp />
          </a>
          <p className={Style.footerText}>
            {copyright || "© 2025 Sheikh Muktadir"}
          </p>
        </div>
      </Container>
    </footer>
  );
}
