import React from 'react'
import '../assets/css/styles.css';
import featuresImage from '../assets/img/features.png';
import mapImage from '../assets/img/map.svg';

function FeaturedSection() {
    return (
        <section class="features section">
            <h2 class="section__title">
                More Features
            </h2>

            <div class="features__container container grid">
                <div class="features__group">
                    <img src={featuresImage} alt="" class="features__img" />

                        <div class="features__card features__card-1">
                            <h3 class="features__card-title">800v</h3>
                            <p class="features__card-description">
                                <p>Turbo</p>
                                <p>Chargin</p>
                            </p>
                        </div>

                        <div class="features__card features__card-2">
                            <h3 class="features__card-title">350</h3>
                            <p class="features__card-description">
                                <p>Km</p>
                                <p>Range</p>
                            </p>
                        </div>

                        <div class="features__card features__card-3">
                            <h3 class="features__card-title">480</h3>
                            <p class="features__card-description">
                                <p>Km</p>
                                <p>Travel</p>
                            </p>
                        </div>
                </div>

                <img src={mapImage} alt="" class="features__map" />
            </div>
        </section>
    )
}

export default FeaturedSection