import { useEffect, useState } from "react";
import "./App.css";

const slides = [
  {
    id: 1,
    img: "https://img1.akspic.ru/crops/9/3/3/9/1/119339/119339-anime-mifologia-attack_on_titan_2-art-napadenie_na_titan-1920x1080.jpg",
  },
  {
    id: 2,
    img: "https://f.vividscreen.info/soft/6f0c8f75ee9193799545569a5c8dd021/Itachi-Uchiha-1920x1080.jpg",
  },
  {
    id: 3,
    img: "https://vsthemes.org/uploads/posts/2021-07/1625588298_1040994.webp",
  },
];

function App() {
  const [allSlide, setAllSlide] = useState(0);
  const [disabledNext, setDisabledNext] = useState(false);
  const [disabledPrev, setDisabledPrev] = useState(false);
  const [active, setActive] = useState(0);

  const handleClickNext = () => {
    const setAllSlideTime = () => {
      setAllSlide((prev) => {
        if (prev !== -100) {
          return prev - 50;
        } else {
          return prev;
        }
      });
    }

    setTimeout(setAllSlideTime, 1000)

    switch (allSlide) {
      case 0:
        setActive(0);
      case (-50):
        setActive(prev => prev + 1);
          break
      case (-100):
        setActive(prev => prev + 1);
          break
    }
  };

  const handleClickPrev = () => {
    const setAllSlideTime = () => {
      setAllSlide((prev) => {
        if (prev !== 0) {
          return prev + 50;
        } else {
          return prev;
        }
      });
    }

    setTimeout(setAllSlideTime, 1000)
    
    switch (allSlide) {
      case 0:
        setActive(0);
      case (-50):
        setActive(prev => prev - 1);
          break
      case (-100):
        setActive(prev => prev - 1);
          break
    }
  };

  useEffect(() => {
    if (allSlide === -100) {
      setDisabledNext(true);
    } else {
      setDisabledNext(false);
    }
    if (allSlide === 0) {
      setDisabledPrev(true);
    } else {
      setDisabledPrev(false);
    }
  }, [allSlide]);

  return (
    <div className="App">
      <div className="window">
        <div
          className="all_slide"
          style={{
            transform: `translateX(${allSlide}%) scale(0.5)`,
          }}
        >
          {slides.map((item, i) => {
            return (
              <div className={active === i ? "slide active" : "slide"}>
                <img src={item.img} />
              </div>
            );
          })}
        </div>
        <div className="arrows">
          <button
            className="arrow"
            disabled={disabledPrev}
            onClick={() => handleClickPrev()}
          >
            назад
          </button>
          <button
            className="arrow"
            disabled={disabledNext}
            onClick={() => handleClickNext()}
          >
            вперед
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
