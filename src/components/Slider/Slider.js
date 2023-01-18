import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Foto } from '../FotoComponent/Foto';

function Slider({ array1, array2 }) {
  const options = {
    height: '44vh',
    // height: '20vh',
    width: '100vw',
    perPage: 1,
    perMove: 1,
    rewind: true,
    arrows: true,
    autoplay: false,
    interval: 700,
    speed: 1000,
    pauseOnHover: false,
    pagination: false,
    updateOnMove: true,
    breakpoints: {
      1024: {
        perPage: 3,

      },
      767: {
        perPage: 2,

      },
      414: {
        perPage: 2,
        // height: '24vh',
      },
    }
  }

  return (
    <Splide options={options} className="contSlider" aria-label="React Splide Example">
      {!!array1 && array1.map((a) => {
        return <SplideSlide>
          <Foto anno={a} foto={`B${a}`} key={a} />
        </SplideSlide>
      })}

      {!!array2 && array2.map((a) => {
        return <SplideSlide>
          <Foto anno2={a} foto={`B${a}`} key={a} />
        </SplideSlide>
      })}
    </Splide>
  );
}

export { Slider };