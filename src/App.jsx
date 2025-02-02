import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Hero from './pages/Hero';

const Services = () => <div className="pt-20">Services Page</div>;
const Studios = () => <div className="pt-20">Studios Page</div>;
const Contact = () => <div className="pt-20">Contact Page</div>;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/studios" element={<Studios />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;