import React from "react";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

import SellerInfo from "../SellerInfo";
import ProductAction from "../ProductAction";

import tshirtimg from "../../assets/tshirt.png";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtimg} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esprando ou devolvemos seu dinheiro
        </p>
      </span>

      <span>
        <p className="title">Compra garantida com vendedor</p>
        <p className="description">30 dias após a compra</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In consequat
      magna scelerisque, dignissim elit eget, gravida ex. Maecenas pellentesque
      semper feugiat. Morbi ante lacus, iaculis quis tincidunt ut, ullamcorper
      eget tortor. In quis mi quis sem suscipit rhoncus. Nulla vulputate maximus
      lacinia. Mauris viverra risus non est rhoncus, vel pretium dolor
      consectetur. Nam at tincidunt magna. Integer fringilla eu tellus at
      vehicula. Sed mollis, nisi id lobortis porta, diam sapien blandit risus,
      quis mollis dolor purus a erat. Vivamus eget metus eu lectus molestie
      lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.
      Fusce id mi vel arcu consectetur rhoncus. Curabitur in volutpat elit.
      Integer nec pretium mauris. Duis nibh ipsum, feugiat nec sem et, tristique
      luctus metus. Vestibulum ante ipsum primis in faucibus orci luctus et
      ultrices posuere cubilia curae.
    </p>
  </Description>
);

export default Product;
