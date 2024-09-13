import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
// I think it's bad idea use defalt on App component
export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="*" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}