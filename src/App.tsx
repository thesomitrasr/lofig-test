import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PitchDeck from "./components/PitchDeck";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<PitchDeck />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
