import Style from "./card.module.css";
import ButtonFull from "../Button/ButtonFull";
import ButtonDark from "../Button/ButtonDark";
import { RiLiveFill } from "react-icons/ri";
import { FaCode } from "react-icons/fa6";

export default function WorkCard({ data }) {
  return (
    <>
      <div className={Style.workCard}>
        <img
          src={data?.image || ""}
          alt={data?.title || "project image"}
          className={Style.workCardImage}
        />
        <div className={Style.workCardText}>
          <h4 className={Style.workCardHeading}>{data?.title || "No Title"}</h4>
          <div className={Style.workCardButtonFlex}>
            <ButtonFull url={data?.liveLink}>
              <RiLiveFill />
              <span>View Live</span>
            </ButtonFull>
            <ButtonDark url={data?.sourceLink}>
              <FaCode />
              <span>Source Code</span>
            </ButtonDark>
          </div>
        </div>
      </div>
    </>
  );
}
