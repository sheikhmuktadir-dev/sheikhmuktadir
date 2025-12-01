import Style from "./home.module.css";
import Container from "../../Components/Container/Container";
import { RiReactjsFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { FaGitAlt } from "react-icons/fa";
import { AiFillMobile } from "react-icons/ai";
import { useEffect, useState } from "react";
import { SiFramer } from "react-icons/si";
import { skillsData } from "../../Data/Data";

export default function Skill() {
  const [skillScroll, setSkillScroll] = useState(false);

  const skillSet = {
    RiReactjsFill: <RiReactjsFill />,
    FaHtml5: <FaHtml5 />,
    RiTailwindCssFill: <RiTailwindCssFill />,
    FaBootstrap: <FaBootstrap />,
    IoLogoJavascript: <IoLogoJavascript />,
    IoLogoCss3: <IoLogoCss3 />,
    AiFillMobile: <AiFillMobile />,
    SiFramer: <SiFramer />,
    FaGitAlt: <FaGitAlt />,
  };

  useEffect(() => {
    const skillHandleScroll = () => {
      if (window.scrollY > 400) {
        setSkillScroll(true);
      } else {
        setSkillScroll(false);
      }
    };

    window.addEventListener("scroll", skillHandleScroll);
    return () => window.removeEventListener("scroll", skillHandleScroll);
  }, []);

  return (
    <section className={Style.skillSection}>
      <Container>
        <div className={Style.skillInner}>
          <h5 className={Style.skillHeading}>Tech Stack</h5>
          <div className={Style.skillFlex}>
            {skillsData?.length > 0 &&
              skillsData?.map((item, index) => {
                return (
                  <div
                    key={item?.id || index}
                    className={`${Style.skillTag} ${
                      skillScroll ? Style.skillTagNormal : ""
                    }`}
                  >
                    {skillSet[item?.icon]}
                    <span>{item?.name}</span>
                  </div>
                );
              })}
          </div>
        </div>
      </Container>
    </section>
  );
}
