import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from '../../../components/ProjectCard';
import Spinner from '../../../components/Spinner';
import image from './quiz.jpg';

export default function Quiz({ quiz }) {
  if (!image) {
    return <Spinner />;
  }

  return (
    <ProjectCard 
      title={quiz.title}
      description={quiz.description}
      url={quiz.url}
      image={image}
      techList={quiz.techList}
    />
  );
}

Quiz.propTypes = {
  store: PropTypes.objectOf(PropTypes.object)
};