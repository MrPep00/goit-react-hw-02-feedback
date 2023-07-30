import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statWrapper}>
    <p className={css.statData}>Good: {good}</p>
    <p className={css.statData}>Neutral: {neutral}</p>
    <p className={css.statData}>Bad: {bad}</p>
    <p className={css.statData}>Total: {total}</p>
    <p className={css.statData}>Positive Feedback: {positivePercentage}%</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
