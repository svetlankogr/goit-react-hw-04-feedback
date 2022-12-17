import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ good, bad, neutral, total, positiveFeedback }) => {
  return (
    <ul className={css.statisticsList}>
      <li className={css.text}>Good: {good}</li>
      <li className={css.text}>Neutral: {neutral}</li>
      <li className={css.text}>Bad: {bad}</li>
      <li className={css.text}>Total: {total}</li>
      {positiveFeedback ? (
        <li className={css.text}>Positive Feedback: {positiveFeedback}%</li>
      ) : (
        <li className={css.text}>Positive Feedback: 0%</li>
      )}
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
