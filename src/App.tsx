import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DashboardPage } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
