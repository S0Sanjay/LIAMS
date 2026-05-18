import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Training from './pages/Training';
import Research from './pages/Research';
import Events from './pages/Events';
import Collaborations from './pages/Collaborations';
import Contact from './pages/Contact';
import './pages/Shared.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="training" element={<Training />} />
          <Route path="research" element={<Research />} />
          <Route path="events" element={<Events />} />
          <Route path="collaborations" element={<Collaborations />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
