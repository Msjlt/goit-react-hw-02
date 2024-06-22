import css from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <div>
      <p className={css.text}>Good: {feedback.good}</p>
      <p className={css.text}>Neutral: {feedback.neutral}</p>
      <p className={css.text}>Bad: {feedback.bad}</p>
      <p className={css.text}>Total: {totalFeedback}</p>
      {totalFeedback > 0 && (
        <p className={css.text}>Positive Feedback:{positivePercentage}%</p>
      )}
    </div>
  );
};

export default Feedback;
