import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import MyPage from './pages/MyPage';

function App() {
  return (
    /*페이지 연결을 위한 라우터
      Routers for connecting to pages*/
    <BrowserRouter basename="ecommerce">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
