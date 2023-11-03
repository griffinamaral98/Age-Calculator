const Form = ({ date, errors, onInputChange, onSetError }) => {
  const { days, months, years } = date;
  const { dayError, monthError, yearError } = errors;

  return (
    <div className="form-container">
      <div className="input-container">
        <label htmlFor="day" className={`label ${dayError ? "error" : ""}`}>
          day
        </label>
        <input
          type="text"
          name="day"
          id="day"
          className={`input ${dayError ? "input-error" : ""}`}
          placeholder="DD"
          maxLength="2"
          value={days}
          onChange={(e) => {
            onInputChange("days", e);
            onSetError("dayError", e.target.value, 31);
          }}
        />

        {dayError ? (
          <span className="error-message error">Must be a valid day</span>
        ) : null}
      </div>

      <div className="input-container">
        <label htmlFor="month" className={`label ${monthError ? "error" : ""}`}>
          month
        </label>
        <input
          type="text"
          name="month"
          id="month"
          className={`input ${monthError ? "input-error" : ""}`}
          placeholder="MM"
          maxLength="2"
          value={months}
          onChange={(e) => {
            onInputChange("months", e);
            onSetError("monthError", e.target.value, 12);
          }}
        />
        {monthError ? (
          <span className="error-message error">Must be a valid month</span>
        ) : null}
      </div>

      <div className="input-container">
        <label htmlFor="year" className={`label ${yearError ? "error" : ""}`}>
          year
        </label>
        <input
          type="text"
          name="year"
          id="year"
          className={`input ${yearError ? "input-error" : ""}`}
          placeholder="YYYY"
          maxLength="4"
          value={years}
          onChange={(e) => {
            onInputChange("years", e);
            onSetError("yearError", e.target.value, new Date().getFullYear());
          }}
        />

        {yearError ? (
          <span className="error-message error">Must be in the past</span>
        ) : null}
      </div>
    </div>
  );
};

export default Form;
