import css from "./Options.module.css";

const Options = ({ updateFeedback, totalFeedback, resetFeedback }) => {
  return (
    <div>
      <button className={css.but} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.but} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.but} onClick={() => updateFeedback("bad")}>
        Bad
      </button>

      {totalFeedback > 0 && (
        <button className={css.but} onClick={resetFeedback}>
          Reset
        </button>
      )}
      {totalFeedback > 0 && (
        <p className={css.text}>Total Feedback: {totalFeedback}</p>
      )}
    </div>
  );
};

export default Options;
