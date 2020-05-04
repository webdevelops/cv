import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from '../../../components/ProjectCard';
import lawyers from './lawyer.jpg';
import quizs from '../Quiz/quiz.jpg';
// import quizs from '../Quiz/quiz';
// import image from './lawyer.jpg';

export default function Lawyer({ lawyer }) {
  return (
    <ProjectCard
      title={lawyer.title}
      description={lawyer.description}
      url={lawyer.url}
      // image={lawyer.image}
      image={lawyers}
      // image={image}
      techList={lawyer.techList}
    />
  );
}

Lawyer.propTypes = {
  store: PropTypes.objectOf(PropTypes.object)
};