import React from 'react';
import PropTypes from 'prop-types';

import ProjectCard from '../../../components/ProjectCard';
import image from './quiz.jpg';
// import { makeStyles } from '@material-ui/core';
// import Spinner from '../../../components/Spinner';

// const useStyles = makeStyles({
//   media: {
//     width: 400,
//   },
// });

export default function Quiz({ quiz }) {
  // const classes = useStyles();

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
  quiz: PropTypes.object
};