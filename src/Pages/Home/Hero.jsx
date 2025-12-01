import Container from "../../Components/Container/Container";
import Style from "./home.module.css";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IoLogoWhatsapp } from "react-icons/io";
import { heroData } from "../../Data/Data";
import heroImage from "/images/hero/hero.webp";

export default function Hero() {
  const { name, designation, greeting, image, socials = [] } = heroData || {};

  const iconMap = {
    FaLinkedin: <FaLinkedin />,
    FaGithub: <FaGithub />,
    SiGmail: <SiGmail />,
    IoLogoWhatsapp: <IoLogoWhatsapp />,
  };
  return (
    <section className={Style.heroMain}>
      <Container>
        <div className={Style.heroInner}>
          <div className={Style.heroMainFlex}>
            <img
              src={image || heroImage}
              alt={name || "Sheikh Muktadir"}
              className={Style.heroMainImage}
            />
            <div className={Style.heroTextArea}>
              <h5>{greeting || "Hello, I'm"}</h5>
              <h3>{name || "Sheikh Muktadir"}</h3>
              <h5 className={Style.heroDesignation}>
                {designation || "Frontend & UI Developer"}
              </h5>
              <div className={Style.heroSocialFlex}>
                {socials?.length > 0 &&
                  socials.map((icon, index) => {
                    return (
                      <a
                        href={icon?.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        key={icon?.id || index}
                        className={Style.heroSocialIcon}
                      >
                        {iconMap[icon?.icon]}
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
