import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ option, onLeaveFeedback }) => {
  return (
    <>
      {option.map(el => (
        <button type="button" name={el} onClick={onLeaveFeedback} key={el}>
          {(el = el.charAt(0).toUpperCase() + el.slice(1))}
        </button>
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
