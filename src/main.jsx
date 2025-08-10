import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./routes/admin/layouts/mainLayout";
import StatPage from "./routes/admin/statPage/statPage";
import LegalPage from "./routes/admin/legalPage/legalPage";
import DocPage from "./routes/admin/docPage/docPage";
import PlacePage from "./routes/admin/placePage/placePage";
import UserPage from "./routes/admin/userPage/userPage";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<StatPage />} />
          <Route path="/legal" element={<LegalPage />} />
          <Route path="/doc" element={<DocPage />} />
          <Route path="/place" element={<PlacePage />} />
          <Route path="/user" element={<UserPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
