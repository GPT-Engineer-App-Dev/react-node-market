import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Particles from './pages/Particles.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/particles" element={<Particles />} />
      </Routes>
    </Router>
  );
}

export default App;