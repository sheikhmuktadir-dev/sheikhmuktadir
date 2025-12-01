import Style from "./home.module.css";
import Container from "../../Components/Container/Container";
import { useState } from "react";
import { FaCircleChevronDown } from "react-icons/fa6";
import { FaCircleChevronUp } from "react-icons/fa6";
import { experienceData } from "../../Data/Data";
import { aboutParagraphs } from "../../Data/Data";

export default function About() {
  const [hideToggle, setHideToggle] = useState(false);
  return (
    <section className={Style.aboutSection} id="about">
      <Container>
        <div className={Style.aboutInner}>
          <h2>About Me</h2>

          <div className={Style.aboutGrid}>
            <div className={Style.experienceArea}>
              {experienceData?.length > 0 &&
                experienceData?.map((list, index) => {
                  return (
                    <div
                      key={list?.id || index}
                      className={`${Style.experienceCard} ${
                        hideToggle ? Style.experienceCardShowAll : ""
                      }`}
                    >
                      <p>{list?.period}</p>
                      <div>
                        <h6>{list?.role}</h6>
                      </div>
                    </div>
                  );
                })}

              <div
                onClick={() => setHideToggle((prev) => !prev)}
                className={Style.viewMessage}
              >
                <span>{hideToggle ? "Hide" : "Show All"}</span>
                <span>
                  {hideToggle ? <FaCircleChevronUp /> : <FaCircleChevronDown />}
                </span>
              </div>
            </div>

            <div className={Style.aboutParaArea}>
              {aboutParagraphs?.length > 0 &&
                aboutParagraphs?.map((item, index) => {
                  return <p key={item || index}>{item}</p>;
                })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
