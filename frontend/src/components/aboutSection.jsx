import React from 'react'
import '../assets/css/styles.css';
import aboutImage from '../assets/img/about.png';

function AboutSection() {
  return (
    <section class="about section" id="about">
                <div class="about__container container grid">
                    <div class="about__group">
                        <img src={aboutImage} alt="" class="about__img" />

                        <div class="about__card">
                            <h3 class="about__card-title">2.500+</h3>
                            <p class="about__card-description">
                                Supercharges placed along popular routes
                            </p>
                        </div>
                    </div>

                    <div class="about__data">
                        <h2 class="section__title about__title">
                            <p>Machines With</p>  
                            <p>Future Technology</p>
                        </h2>

                        <p class="about__description">
                            See the future with high-performance electric cars produced by 
                            renowned brands. They feature futuristic builds and designs with 
                            new and innovative platforms that last a long time.
                        </p>

                        <a href="#" class="button">Know more</a>
                    </div>
                </div>
            </section>
  )
}

export default AboutSection