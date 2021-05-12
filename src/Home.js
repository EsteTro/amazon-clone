import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.imgur.com/SYHeuYM.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Nintendo Switch™ w/ Neon Blue & Neon Red Joy-Con™ + Mario Kart™ 8 Deluxe (Full Game Download) + 3 Month Nintendo Switch Online Individual Membership"
            price={409.99}
            image="https://m.media-amazon.com/images/I/71aARG3zYBL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="495380"
            title="Lenovo Legion 5 Gaming Laptop, IPS FHD Screen (1920 x 1080), AMD Ryzen 7 4800H, 16 GB DDR4, 512 GB SSD, NVIDIA GTX 1660Ti, Windows 10, 82B1000AUS, Phantom Black"
            price={999.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81w%2B3k4U8PL._AC_SY355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Sony WH-1000XM4 Wireless Noise Canceling Headphones with Microphone for Phone Calls and Alexa Voice Control, Black"
            price={265.49}
            rating={5}
            image="https://m.media-amazon.com/images/I/71o8Q5XJS5L._AC_SS450_.jpg"
          />
          <Product
            id="4903850"
            title="New Echo Dot (4th generatión) International Version | Smart Speaker with Alexa | Black"
            price={98.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51ydNSj0AiL._AC_SY400_.jpg"
          />
          <Product
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            title="Gaming Monitor SAMSUNG Odyssey G9 49' | QHD, 240Hz, 1000R curved, QLED, NVIDIA G-SYNC and FreeSync | Model LC49G95TSSNXZA"
            price={1882.04}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81r8JazRcoL._AC_SL1500_.jpg"
          />
          <Product
            title="Canon EOS R6 Full Frame Mirrorless Camera with 4K Video, Full Frame CMOS Sensor, DIGIC X Image Processor, SD UHS-II Memory Card Slots and Up to 12fps with Mechanical Shutter, Body Only, Black"
            price={2449.98}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81HwzslD2oL._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
