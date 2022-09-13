import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from "./pages/MainPage";
import Payment from "./pages/Payment";
import ProductDetail from "./pages/ProductDetail";
import UserPage from "./pages/UserPage";

function App() {
  return (
  <div>
    <header>
      <span>유민몰</span>
      <input></input>
      <button>🔍</button>
      <a>로그인|</a>
      <a>회원가입|</a>
      <a>마이페이지</a>
    </header>
    <aside>
      <a href="http://localhost:3000/">가전제품</a>
      <a href="http://localhost:3000/">컴퓨터</a>
      <a href="http://localhost:3000/">전자제품</a>
      <a href="http://localhost:3000/">남성의류</a>
      <a href="http://localhost:3000/">여성의류</a>
    </aside>
  </div>
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
