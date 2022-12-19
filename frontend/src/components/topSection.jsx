import React from 'react'
import '../assets/css/styles.css';
import homeImage from '../assets/img/home.png';

function TopSection() {
  return (
    <section className="overflow-hidden relative px-0 pb-8 pt-16 home" id="home">
        <div className="shape shape__big absolute"></div>
        <div className="shape shape__small absolute"></div>
        <div className="home__container pt-16 relative mx-4 lg:mx-auto grid">
          <div className="text-center">
            <h1 className="text-2xl lg:text-4xl mb-4">
              Choose The Best Car
            </h1>

            <h2 className="text-base mb-1 lg:text-xl">
              Porsche Mission E
            </h2>

            <h3 className="home__elec inline-flex items-center font-normal text-sm lg:text-sm">
              <i className="ri-flashlight-fill"></i> Electric car
            </h3>
          </div>

          <img src={homeImage} alt="" className="home__img" />

            <div className="home__car flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="home__car-icon inline-flex items-center justify-center text-sm mb-3 p-2">
                  <i className="ri-temp-cold-line"></i>
                </div>
                <h2 className="font-medium text-xl mb-1 lg:text-2xl">24°</h2>
                <h3 className="home__car-name">TEMPERATURE</h3>
              </div>

              <div className="text-center">
                <div className="home__car-icon inline-flex items-center justify-center text-sm mb-3 p-2">
                  <i className="ri-dashboard-3-line"></i>
                </div>
                <h2 className="font-medium text-xl mb-1 lg:text-2xl">873</h2>
                <h3 className="home__car-name">MILEAGE</h3>
              </div>

              <div className="text-center">
                <div className="home__car-icon inline-flex items-center justify-center text-sm mb-3 p-2">
                  <i className="ri-flashlight-fill"></i>
                </div>
                <h2 className="font-medium text-xl mb-1 lg:text-2xl">94%</h2>
                <h3 className="home__car-name">BATTERY</h3>
              </div>
            </div>

            <a href="/" className="home__button border-solid border-2 flex items-center justify-center justify-self-center font-medium h-16 text-sm relative text-white w-16 lg:text-sm">START</a>
        </div>
      </section>
  )
}

export default TopSection