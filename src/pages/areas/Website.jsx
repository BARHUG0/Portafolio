import ViewportContainer from "@components/ViewportContainer";
import Title from "@components/Title";
import ImageWithDescription from "@components/ImageWithDescription";
import Image from "@components/Image.jsx";

import atomic from "@assets/img/atomic.png";
import abax from "@assets/img/abax.png";
import star from "@assets/img/star.png";
import reactLogo from "@assets/img/react.png";
import viteLogo from "@assets/img/vite.png";
import storybook from "@assets/img/storybook.png";
import javascript from "@assets/img/javascript.png";
import css from "@assets/img/css.png";
import html from "@assets/img/html.png";
import cpp from "@assets/img/cpp.png";

import style from "@pages/areas/Website.module.css";

function Website() {
  return (
    <>
      <ViewportContainer id="websites">
        <div className={style.normal}>
          <Title text="Websites" />
          <a href="https://test.hdaniyyel.dev/" target="_blank">
            <ImageWithDescription
              img={{
                src: atomic,
                alt: "Atomic Studio",
              }}
              text="Agencia creativa boutique"
            />
          </a>
        </div>
      </ViewportContainer>
      <ViewportContainer id="side">
        <div className={style.normal}>
          <Title text="Side projects" />
          <div style={{ display: "flex", flexDirection: "row", gap: "2em" }}>
            <a href="https://hdaniyyel.dev/Abax" target="_blank">
              <ImageWithDescription
                img={{
                  src: abax,
                  alt: "Atomic Studio",
                }}
                text="The ancient abacus brought back to life"
              />
            </a>
            <a href="https://hdaniyyel.dev/LabReact" target="_blank">
              <ImageWithDescription
                img={{
                  src: star,
                  alt: "Atomic Studio",
                }}
                text="Star Wars meets CSS"
              />
            </a>
          </div>
        </div>
      </ViewportContainer>
      <ViewportContainer id="skills">
        <div className={style.normal}>
          <Title text="Skills" />

          <div style={{ display: "flex", flexDirection: "row", gap: "1em" }}>
            <Image src={reactLogo} alt="React Logo" variant="skill" />
            <Image src={viteLogo} alt="Vite Logo" variant="skill" />
            <Image src={storybook} alt="Storybook Logo" variant="skill" />
            <Image src={html} alt="HTML Logo" variant="skill" />
            <Image src={css} alt="CSS Logo" variant="skill" />
            <Image src={javascript} alt="Javascript Logo" variant="skill" />
            <Image src={cpp} alt="C++ Logo" variant="skill" />
          </div>
        </div>
      </ViewportContainer>
    </>
  );
}

export default Website;
