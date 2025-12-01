import Style from "./home.module.css";
import Container from "../../Components/Container/Container";
import WorkCard from "../../Components/Card/WorkCard";
import { workData } from "../../Data/Data";

export default function Work() {
  return (
    <section className={Style.workSection} id="projects">
      <Container>
        <div className={Style.workInner}>
          <div className={Style.workHeadingArea}>
            <h1>Featured Projects</h1>
            <h5 className={Style.workHeadingScollText}>(scroll to explore)</h5>
          </div>

          <div className={Style.workCardArea}>
            {workData?.length > 0 &&
              workData?.map((list, index) => {
                return <WorkCard key={list?.id || index} data={list} />;
              })}
          </div>
        </div>
      </Container>
    </section>
  );
}
