import { BrowserRouter, Route, Routes } from "react-router-dom";

import AppStatusGuard from "@/components/guards/app-status-guard";

import { DashboardPage, ComingSoonPage } from "@/pages";

function App() {
  return (
    <BrowserRouter>
      <AppStatusGuard>
        <Routes>
          <Route index element={<DashboardPage />} />
          <Route path="comingsoon" element={<ComingSoonPage />} />
        </Routes>
      </AppStatusGuard>
    </BrowserRouter>
  );
}

export default App;
