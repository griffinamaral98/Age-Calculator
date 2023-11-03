import { useState } from "react";
import Form from "./components/Form";
import Line from "./components/Line";
import Results from "./components/Results";

function App() {
  const [years, setYears] = useState("");
  const [months, setMonths] = useState("");
  const [days, setDays] = useState("");

  const handleSetYears = (e) => {
    setYears(e.target.value);
  };
  const handleSetMonths = (e) => {
    setMonths(e.target.value);
  };
  const handleSetDays = (e) => {
    setDays(e.target.value);
  };

  return (
    <div className="container">
      <Form
        onSetYears={handleSetYears}
        onSetMonths={handleSetMonths}
        onSetDays={handleSetDays}
      />
      <Line />
      <Results years={years} months={months} days={days} />
    </div>
  );
}

export default App;
