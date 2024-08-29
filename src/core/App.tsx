import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Container from "../components/Container";
import HomePage from "../pages/HomePage";
import ThankYouPage from "../pages/ThankYouPage";
function App() {
  const [input, setInput] = useState<string>();
  console.log(input);

  return (
    <Container>
      <Routes>
        <Route
          path="/"
          element={<HomePage input={input} setInput={setInput} />}
        />
        <Route
          path="/thankyouphoto/:id"
          element={<ThankYouPage input={input} />}
        />
      </Routes>
    </Container>
  );
}

export default App;
