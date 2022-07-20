import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import CardWrapper from "../components/CardWrapper";
import Contact from "../components/Contact";
import Seo from "../components/Seo";
import p from "../content/preview.json";

export const query = graphql`
  query {
    designo: file(name: { eq: "preview-designo" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    memory: file(name: { eq: "preview-memory" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
    bookmark: file(name: { eq: "preview-bookmark" }) {
      childImageSharp {
        gatsbyImageData(placeholder: TRACED_SVG)
      }
    }
  }
`;

const PortfolioPageStyles = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 8rem;
  margin-top: 4rem;
`;

const PortfolioPage = ({ data }) => {
  const { designo, memory, bookmark } = data;
  console.log(p);
  return (
    <PortfolioPageStyles>
      <Seo title="Portfolio" />
      <CardWrapper
        alt={p[0].alt}
        id={p[0].id.toString()}
        isEven={p[0].id % 2 === 0}
        src={designo}
        text={p[0].description}
        title={p[0].title}
        to={`/portfolio/${p[0].slug}`}
        value="View Project"
      />
      <CardWrapper
        alt={p[1].alt}
        id={p[1].id.toString()}
        isEven={p[1].id % 2 === 0}
        src={memory}
        text={p[1].description}
        title={p[1].title}
        to={`/portfolio/${p[1].slug}`}
        value="View Project"
      />
      <CardWrapper
        alt={p[2].alt}
        id={p[2].id.toString()}
        isEven={p[2].id % 2 === 0}
        src={bookmark}
        text={p[2].description}
        title={p[2].title}
        to={`/portfolio/${p[2].slug}`}
        value="View Project"
      />
      <Contact />
    </PortfolioPageStyles>
  );
};

export default PortfolioPage;

PortfolioPage.propTypes = {
  data: PropTypes.object,
};
