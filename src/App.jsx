import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import About from './pages/About';
import HelloPage from './pages/HelloPage';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="hello" element={<HelloPage />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
