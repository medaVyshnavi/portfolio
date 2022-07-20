import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ProjectPartStyles = styled.section`
  margin-bottom: 4rem;

  h3 {
    color: var(--color-primary-grayish-blue-hex);
    font-size: var(--h3-size);
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h2-line-height);
    margin-bottom: 2.8rem;
  }

  p {
    color: var(--color-primary-grayish-blue-hex);
    font-size: var(--body-2-size);
    line-height: var(--body-line-height);
    opacity: 0.8;
  }
`;

const ProjectPart = ({ title, text }) => (
  <ProjectPartStyles>
    <h3>{title}</h3>
    <p>{text}</p>
  </ProjectPartStyles>
);

export default ProjectPart;

ProjectPart.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
