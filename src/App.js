import { Container } from "@mui/material";
import Content from "components/Content";
import Footer from "components/Footer";
import Header from "components/Header";

function App() {
  return (
    <>
      <Container sx={{ width: "100%" }}>
        <Header />
        <Content />
      </Container>
      <Footer />
    </>
  );
}

export default App;
