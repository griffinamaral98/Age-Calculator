const Form = ({ onSetYears, onSetMonths, onSetDays }) => {
  return (
    <div className="form-container">
      <div className="input-container">
        <label htmlFor="day">day</label>
        <input
          type="text"
          name="day"
          id="day"
          placeholder="DD"
          maxlength="2"
          onChange={(e) => onSetDays(e)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="month">month</label>
        <input
          type="text"
          name="month"
          id="month"
          placeholder="MM"
          maxlength="2"
          onChange={(e) => onSetMonths(e)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="year">year</label>
        <input
          type="text"
          name="year"
          id="year"
          placeholder="YYYY"
          maxlength="4"
          onChange={(e) => onSetYears(e)}
        />
      </div>
    </div>
  );
};

export default Form;
