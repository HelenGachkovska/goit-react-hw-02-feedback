import React from 'react';

const Statistics = ({ good, neutral, bad,  totalFeedback, positiveFeedback}) => {
  return (
    <section>
      <h2>Statistic</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive Feedback: {positiveFeedback}%</p>
    </section>
  );
};

export default Statistics;
