const Results = ({ date, errors }) => {
  const { days, months, years } = date;
  const { dayError, monthError, yearError } = errors;

  const timePassedSince = (day, month, year) => {
    const today = new Date();
    if (!day || !month || !year) {
      return {
        years: "- -",
        months: "- -",
        days: "- -",
      };
    }

    const birthDate = new Date(year, month - 1, day);

    if (isNaN(birthDate) || year < 0 || year > today.getFullYear()) {
      return {
        years: "- -",
        months: "- -",
        days: "- -",
      };
    }

    if (day < 1 || day > 31) {
      return {
        years: "- -",
        months: "- -",
        days: "- -",
      };
    }

    let yearsDiff = today.getFullYear() - birthDate.getFullYear();
    let monthsDiff = today.getMonth() - birthDate.getMonth();
    let daysDiff = today.getDate() - birthDate.getDate();

    if (monthsDiff < 0 || (monthsDiff === 0 && daysDiff < 0)) {
      yearsDiff--;
      monthsDiff += 12;
    }

    if (daysDiff < 0) {
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      daysDiff = prevMonth.getDate() - birthDate.getDate() + today.getDate();
      monthsDiff--;
    }

    return {
      years: yearsDiff,
      months: monthsDiff,
      days: daysDiff,
    };
  };

  const result = timePassedSince(days, months, years);

  const isValid = !dayError && !monthError && !yearError;

  return (
    <div>
      <div className="results-container">
        <div className="results-text-container">
          <span className="dashes">{isValid ? result.years : "- -"}</span>
          <span className="results">years</span>
        </div>

        <div className="results-text-container">
          <span className="dashes">{isValid ? result.months : "- -"}</span>
          <span className="results">months</span>
        </div>

        <div className="results-text-container">
          <span className="dashes">{isValid ? result.days : "- -"}</span>
          <span className="results">days</span>
        </div>
      </div>
    </div>
  );
};

export default Results;
