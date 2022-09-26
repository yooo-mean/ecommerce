const Home = () => {
  return (
    <>
      <header>
        <span>유민몰</span>
        <input></input>
        <button>🔍</button>
        <a>로그인|</a>
        <a>회원가입|</a>
        <a href="http://localhost:3000/ecommerce/product/1">마이페이지</a>
      </header>
      <aside>
        <a>가전제품</a>
        <a>컴퓨터</a>
        <a>전자제품</a>
        <a>남성의류</a>
        <a href="http://localhost:3000/ecommerce/basket">결제</a>
      </aside>
    </>
  )
};

export default Home;