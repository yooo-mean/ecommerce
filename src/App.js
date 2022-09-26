import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Payment from "./pages/Payment";
import ProductDetail from "./pages/ProductDetail";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <BrowserRouter basename="ecommerce">
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/UserPage" element={<UserPage />} />
    </Routes>
  </BrowserRouter>
    /*<BrowserRouter basename="ecommerce">
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="/Payment" element={<Payment />} />
      <Route path="/UserPage" element={<UserPage />} />
    </Routes>
  </BrowserRouter>*/
  );
}

export default App;
