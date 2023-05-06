import React from 'react';
import PropTypes from 'prop-types';
import { TitleStat, Text } from './styled';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div>
      <TitleStat>Statistic</TitleStat>
      {good === 0 && neutral === 0 && bad === 0 ? (
        <Text>No feedback given</Text>
      ) : (
        <div>
          <Text>Good: {good}</Text>
          <Text>Neutral: {neutral}</Text>
          <Text>Bad: {bad}</Text>
          <Text>Total: {totalFeedback}</Text>
          <Text>Positive Feedback: {positiveFeedback}%</Text>
        </div>
      )}
    </div>
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
