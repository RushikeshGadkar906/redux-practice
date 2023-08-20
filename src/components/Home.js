import React from "react";

const Home = () => {
  return (
    <div>
      <div className="add-to-cart">
        {/* <span className="cart-count">7</span> */}
        <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" />
      </div>
    <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg" />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <span>Price: $1000.00</span>
        </div>
        <div className="btn-wrapper item">
          <button>Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
