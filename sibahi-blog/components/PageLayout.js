import { Container } from "react-bootstrap";
import Navbar from "./Navbar"; // because it is in the same folder, we use ./Navbar. In the config.json, the baseUrl enables us to reference pages without ../

// this function makes importing PageLayout in other pages
export default function PageLayout({ children, className }) {
  return (
    <Container>
      <Navbar />
      <div className={`page-wrapper ${className} `}>{children}</div>

      <footer className="page-footer">
        <div>
          <a href="#">courses</a>
          {" | "}
          <a href="#">github</a>
          {" | "}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  );
}
