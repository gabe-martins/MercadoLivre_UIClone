import React from "react";

import { Container, Wrapper } from "./styles";

import Product from "../Product"

const Layout: React.FC = () => {
  return (
    <Container>
      {/* <Header />
      <Footer /> */}
      <Wrapper>
        <Product />
      </Wrapper>

    </Container>
  );
};

export default Layout;
