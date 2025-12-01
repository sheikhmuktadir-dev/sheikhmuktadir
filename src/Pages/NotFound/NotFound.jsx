import Style from "./notfound.module.css";
import Container from "../../Components/Container/Container";

export default function NotFound() {
  return (
    <section className={Style.notFoundSection}>
      <Container>
        <div className={Style.notFound}>
          <h1>404</h1>
          <h5>Page Not Found</h5>
        </div>
      </Container>
    </section>
  );
}
