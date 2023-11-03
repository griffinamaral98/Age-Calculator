const Results = ({ years, months, days }) => {
  const timePassedSince = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
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

  const timePassed = timePassedSince(days, months, years);

  return (
    <div className="results-container">
      <div className="results-text-container">
        <span className="dashes">{years ? timePassed.years : "- -"}</span>
        <span className="results">years</span>
      </div>

      <div className="results-text-container">
        <span className="dashes">{months ? timePassed.months : "- -"}</span>
        <span className="results">months</span>
      </div>

      <div className="results-text-container">
        <span className="dashes">{days ? timePassed.days : "- -"}</span>
        <span className="results">days</span>
      </div>
    </div>
  );
};

export default Results;
