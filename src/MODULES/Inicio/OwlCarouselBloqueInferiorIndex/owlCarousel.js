import React, { useEffect } from 'react'

import './owlCarousel.css'

import PlataformaBanner1 from '../../../BASE/img/Plataforma-banner-1.jpg'
import PlataformaBanner2 from '../../../BASE/img/Plataforma-banner-2.jpg'
import PlataformaBanner3 from '../../../BASE/img/Plataforma-banner-3.jpg'

const OwlCarousel = () => {
  useEffect(() => {
    const slider = document.querySelector('#slider')
    console.log(slider)
    let sliderSection = document.querySelectorAll('.slider__section')
    console.log(sliderSection)
    let sliderSectionLast = sliderSection[sliderSection.length - 1]
    console.log(sliderSectionLast)

    const btnLeft = document.querySelector('#btn-left')
    const btnRight = document.querySelector('#btn-right')

    slider.insertAdjacentElement('afterbegin', sliderSectionLast);

    function Next() {
      let sliderSectionFirst = document.querySelectorAll('.slider__section')[0]
      slider.style.marginLeft = '-200%'
      slider.style.transition = 'all .5s'
      setTimeout(function () {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = '-100%'
      }, 500)
    }

    function Prev() {
      let sliderSection = document.querySelectorAll('.slider__section')
      let sliderSectionLast = sliderSection[sliderSection.length - 1]
      slider.style.marginLeft = '0'
      slider.style.transition = 'all .5s'
      setTimeout(function () {
        slider.style.transition = 'none'
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = '-100%'
      }, 500)
    }

    btnRight.addEventListener('click', function(){
        Next();
    });

    btnLeft.addEventListener('click', function(){
        Prev();
    });

    setInterval(function(){
        Next();
    }, 5000);
  }, [])

  return (
    <div className="container-slider">
      <div id="slider" className="slider">
        <div className="slider__section">
          <img src={PlataformaBanner1} alt="PlataformaBanner1" className="slider__img" />
        </div>
        <div className="slider__section">
          <img src={PlataformaBanner2} alt="PlataformaBanner2" className="slider__img" />
        </div>
        <div className="slider__section">
          <img src={PlataformaBanner3} alt="PlataformaBanner3" className="slider__img" />
        </div>
      </div>
      <div className="slider__btn slider__btn--right" id="btn-right">
        &#62;
      </div>
      <div className="slider__btn slider__btn--left" id="btn-left">
        &#60;
      </div>
    </div>
  )
}

export default OwlCarousel
