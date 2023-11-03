import { useState } from "react";
import Form from "./components/Form";
import Line from "./components/Line";
import Results from "./components/Results";

function App() {
  const [date, setDate] = useState({
    years: "",
    months: "",
    days: "",
  });

  const [errors, setErrors] = useState({
    dayError: false,
    monthError: false,
    yearError: false,
  });

  const handleSetError = (field, value, maxValue) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: value > maxValue,
    }));
  };

  const handleInputChange = (field, e) => {
    setDate((prevDate) => ({
      ...prevDate,
      [field]: e.target.value,
    }));
  };

  return (
    <div className="container">
      <Form
        date={date}
        errors={errors}
        onInputChange={handleInputChange}
        onSetError={handleSetError}
      />
      <Line />
      <Results date={date} errors={errors} />
    </div>
  );
}

export default App;
