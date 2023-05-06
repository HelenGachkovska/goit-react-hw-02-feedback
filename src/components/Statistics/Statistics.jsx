import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <>
      <h2>Statistic</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
