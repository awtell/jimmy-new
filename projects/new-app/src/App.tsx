import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Home/HomePage';
import About from './components/About/About';
import TableBanner from './components/TableDetails/TableDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/table_detail/:tableNumber" element={<TableBanner />} />
      </Routes>
    </Router>
  );
};

export default App;
