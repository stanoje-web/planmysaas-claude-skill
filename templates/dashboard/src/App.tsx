import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Overview from "./pages/Overview";
import PhasePage from "./pages/PhasePage";
import ItemPage from "./pages/ItemPage";

export default function App() {
  return (
    <div className="min-h-screen flex bg-bg">
      <Sidebar />
      <main className="flex-1 min-w-0 px-6 py-8 lg:px-10 lg:py-10 max-w-6xl mx-auto w-full">
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/phase/:phaseId" element={<PhasePage />} />
          <Route path="/item/:itemId" element={<ItemPage />} />
        </Routes>
      </main>
    </div>
  );
}
