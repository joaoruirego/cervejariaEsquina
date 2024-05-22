"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";

import logo from "../../public/logoCervejaria.png";
import fotoGrande from "../../public/SLIDER_INICIO/SLIDER_MEAT_LOVERS.jpg";

import sobreImg1 from "../../public/FOTOS/SOBRE_1.jpg";
import sobreImg2 from "../../public/FOTOS/SOBRE_2.jpg";

import criacaoImg1 from "../../public/FOTOS/CRIACAO_1.jpg";
import criacaoImg2 from "../../public/FOTOS/CRIACAO_2.jpg";

import maturacao1 from "../../public/FOTOS/MATURACAO_1.jpg";
import maturacao2 from "../../public/FOTOS/MATURACAO_2.jpg";
import maturacao3 from "../../public/FOTOS/MATURACAO_3.jpg";
import maturacao4 from "../../public/FOTOS/SELO_RAMO_GRANDE.png";

import cortesImg1 from "../../public/FOTOS/CORTE_1.jpg";
import cortesImg2 from "../../public/FOTOS/CORTE_2.jpg";
import cortesImg3 from "../../public/FOTOS/CORTE_3.jpg";

import menuImg1 from "../../public/FOTOS/MENU_1.jpg";
import menuImg2 from "../../public/FOTOS/MENU_2.jpg";
import menuImg3 from "../../public/FOTOS/MENU_3.jpg";
import menuImg4 from "../../public/FOTOS/MENU_4.jpg";
import menuImg5 from "../../public/FOTOS/MENU_5.jpg";
import menuImg6 from "../../public/FOTOS/MENU_6.jpg";

import facebook from "../../public/FOTOS/facebook_preto.png";
import insta from "../../public/FOTOS/instagram_preto.png";

import facebookWhite from "../../public/FOTOS/facebook_branco.png";
import instaWhite from "../../public/FOTOS/instaWhite.webp";

import sobreTitle from "../../public/FOTOS/SOBRE.png";
import criacaoTitle from "../../public/FOTOS/CRIACAO.png";
import maturacaoTitle from "../../public/FOTOS/MATURACAO.png";
import corteTitle from "../../public/FOTOS/CORTE.png";
import menuTitle from "../../public/FOTOS/MENU.png";
import contactosTitle from "../../public/FOTOS/CONTACTOS.png";
import horarioTitle from "../../public/FOTOS/HORARIO.png";

import backgroundPaper from "../../public/FOTOS/backgroundPaper.png";
import riscos from "../../public/FOTOS/3riscos.png";
import x_icon from "../../public/FOTOS/x_icon.webp";

import "../components/i18nconfig";
import { useTranslation } from "react-i18next";

const images = [
  "/SLIDER_INICIO/SLIDER_MEAT_LOVERS.jpg",
  "/SLIDER_INICIO/SLIDER_BIFANA.jpg",
  "/SLIDER_INICIO/SLIDER_CARNE.jpg",
  "/SLIDER_INICIO/SLIDER_PREGO.jpg",
];

export default function Home() {
  const { t, i18n } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [closeNav, setCloseNav] = useState(false);
  const sobreTitleRef = useRef(null);
  const menuTitleRef = useRef(null);
  const contactosTitleRef = useRef(null);
  const [currentLanguage, setCurrentLanguage] = useState("pt"); // State to track the current language

  const changeLanguage = (language) => {
    console.log("changed to " + language);
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };
  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 25,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleCloseNav = () => {
    setCloseNav(!closeNav);
  };

  useEffect(() => {
    if (closeNav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Limpeza ao desmontar
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [closeNav]);

  return (
    <div className={styles.geral}>
      <nav className={styles.navTlmFixa}>
        <button onClick={handleCloseNav} className={styles.closeBtn}>
          <Image
            src={riscos}
            alt="Step"
            width={35}
            height={35}
            className={styles.iconNavTlm}
          />
        </button>
        <Image
          width={150}
          height={80}
          alt="Step"
          src={logo}
          className={styles.logo}
        />
      </nav>

      {closeNav && (
        <nav className={styles.navTlm}>
          <button onClick={handleCloseNav} className={styles.closeBtn}>
            <Image
              src={x_icon}
              alt="Step"
              width={35}
              height={35}
              className={styles.iconNavTlm}
            />
          </button>
          <Image
            width={150}
            height={80}
            alt="Step"
            src={logo}
            className={styles.logo}
          />
          <ul className={styles.topicosCentrais}>
            <li
              onClick={() => {
                setCloseNav(false); // Close the navigation
                scrollToRef(sobreTitleRef); // Scroll to the 'Sobre' section
              }}
            >
              {t("sobre-nos-title")}
            </li>
            <li
              onClick={() => {
                setCloseNav(false); // Close the navigation
                scrollToRef(menuTitleRef); // Scroll to the 'Sobre' section
              }}
            >
              {t("menu-title")}
            </li>
            <li
              onClick={() => {
                setCloseNav(false); // Close the navigation
                scrollToRef(contactosTitleRef); // Scroll to the 'Sobre' section
              }}
            >
              {t("contactos-title")}
            </li>
          </ul>
          <div className={styles.topicosDireita}>
            <div className={styles.socialsImgs}>
              <a
                target="_blank"
                href="https://www.facebook.com/cervejariaesquina"
              >
                <Image
                  src={facebookWhite}
                  width={35}
                  height={35}
                  alt="Step"
                  className={styles.socialImg}
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/cervejariaesquina"
              >
                <Image
                  src={instaWhite}
                  width={35}
                  height={35}
                  alt="Step"
                  className={styles.socialImg}
                />
              </a>
            </div>
            <div className={styles.navBarDireita}>
              <div className={styles.linguas}>
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => changeLanguage("pt")}
                >
                  PT
                </li>
                |
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => changeLanguage("en")}
                >
                  EN
                </li>
              </div>
              <button
                onClick={() => {
                  setCloseNav(false); // Close the navigation
                  scrollToRef(contactosTitleRef); // Scroll to the 'Sobre' section
                }}
                className={styles.reservarBtn}
              >
                {t("contactos-title")}
              </button>
            </div>
          </div>
        </nav>
      )}
      <nav className={styles.navBar}>
        <Image
          width={150}
          height={80}
          alt="Step"
          src={logo}
          className={styles.logo}
        />
        <ul className={styles.topicosCentrais}>
          <li onClick={() => scrollToRef(sobreTitleRef)}>{t("sobre-nos-title")}</li>
          <li onClick={() => scrollToRef(menuTitleRef)}>{t("menu-title")}</li>
          <li onClick={() => scrollToRef(contactosTitleRef)}>{t("contactos-title")}</li>
        </ul>
        <div className={styles.topicosDireita}>
          <div className={styles.socialsImgs}>
            <a
              target="_blank"
              href="https://www.facebook.com/cervejariaesquina"
            >
              <Image
                src={facebookWhite}
                width={35}
                height={35}
                alt="Step"
                className={styles.socialImg}
              />
            </a>
            <a
              target="_blank"
              href="https://www.facebook.com/cervejariaesquina"
            >
              <Image
                src={instaWhite}
                width={35}
                height={35}
                alt="Step"
                className={styles.socialImg}
              />
            </a>
          </div>
          <div className={styles.navBarDireita}>
            <div className={styles.linguas}>
              <li
                style={{ cursor: "pointer" }}
                onClick={() => changeLanguage("pt")}
              >
                PT
              </li>
              |
              <li
                style={{ cursor: "pointer" }}
                onClick={() => changeLanguage("en")}
              >
                EN
              </li>
            </div>
            <button
              onClick={() => scrollToRef(contactosTitleRef)}
              className={styles.reservarBtn}
            >
              {t("contactos-title")}
            </button>
          </div>
        </div>
      </nav>

      <div className={styles.geral}>
        <div className={styles.carousel}>
          <div className={styles.carouselInner}>
            {images.map((img, index) => (
              <div
                key={index}
                className={`${styles.carouselItem} ${index === currentSlide ? styles.carouselItemActive : ""
                  }`}
              >
                <Image
                  src={img}
                  alt={`Slide ${index + 1}`}
                  width={2000} // Adjust to fit the container size
                  height={2000} // Adjust to maintain aspect ratio
                  layout="responsive" // This makes the image responsive
                  className={styles.carrouselImage}
                />
              </div>
            ))}
          </div>
          <div className={styles.carouselDots}>
            {images.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${index === currentSlide ? styles.dotActive : ""
                  }`}
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </div>
      </div>

      <div ref={sobreTitleRef} className={styles.sobreNos}>
        <div className={styles.titleContent}>
          <Image
            alt="Step"
            width={140}
            height={70}
            src={sobreTitle}
            className={styles.title}
          />
        </div>

        <p className={styles.desc}>{t("sobre-nos-desc")}</p>
        <div className={styles.sobreImgs}>
          <div className={styles.sobreImgContainer}>
            <Image
              src={sobreImg1}
              width={300}
              height={300}
              alt="Step"
              className={styles.sobreImg1}
            />
          </div>
          <div className={styles.sobreImgContainer2}>
            <Image
              src={sobreImg2}
              width={600}
              height={300}
              alt="Step"
              className={styles.sobreImg2}
            />
          </div>
        </div>
        <a href="" target="_blank">
          <div className={styles.sobreVideo}>
            {/* <video autoPlay={false} >
            <source src="/caminho/para/seu/video.mp4" type="video/mp4" />
          </video> */}
          </div>
        </a>
      </div>

      <div
        style={{
          backgroundImage: `url(${backgroundPaper.src})`,
        }}
        className={styles.criacao}
      >
        <div className={styles.titleContent}>
          <Image
            alt="Step"
            width={140}
            height={70}
            src={criacaoTitle}
            className={styles.title}
          />
        </div>

        <div className={styles.criacaoContainer}>
          <div className={styles.esqCriacao}>
            <div className={styles.criacaoImg1Container}>
              <Image
                src={criacaoImg1}
                width={400}
                height={300}
                alt="Step"
                className={styles.criacaoImg1}
              />
            </div>
            <p>{t("criacao-desc1")}</p>
          </div>
          <div className={styles.dirCriacao}>
            <div className={styles.criacaoImg2Container}>
              <Image
                src={criacaoImg2}
                width={400}
                height={500}
                alt="Step"
                className={styles.criacaoImg2}
              />
            </div>
            <Image
              src={maturacao4}
              width={150}
              height={150}
              alt="Step"
              className={styles.maturacaoImg4}
            />
          </div>
        </div>
      </div>

      <div className={styles.maturacao}>
        <div className={styles.titleContent}>
          <Image
            alt="Step"
            width={140}
            height={70}
            src={maturacaoTitle}
            className={styles.title}
          />
        </div>
        <div className={styles.maturacaoContainer}>
          <div className={styles.maturacaoEsq}>
            <div className={styles.maturacaoImgContainer1}>
              <Image
                src={maturacao1}
                width={300}
                height={400}
                alt="Step"
                className={styles.maturacaoImg1}
              />
            </div>
          </div>
          <div className={styles.maturacaoDireita}>
            <div className={styles.maturacaoImgs}>
              <div className={styles.maturacaoImgContainer}>
                <Image
                  src={maturacao3}
                  width={150}
                  height={150}
                  alt="Step"
                  className={styles.maturacaoImg2}
                />
              </div>
              <div className={styles.maturacaoImgContainer}>
                <Image
                  src={maturacao2}
                  width={150}
                  height={150}
                  alt="Step"
                  className={styles.maturacaoImg3}
                />
              </div>
            </div>
            <p className={styles.desc}>{t("criacao-desc2")}</p>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${backgroundPaper.src})`,
        }}
        className={styles.corte}
      >
        <div className={styles.titleContent}>
          <Image
            alt="Step"
            width={140}
            height={70}
            src={corteTitle}
            className={styles.title}
          />
        </div>
        <div className={styles.cortesImgs}>
          <div className={styles.cortesImgContainer1}>
            <Image
              src={cortesImg1}
              width={450}
              height={300}
              alt="Step"
              className={styles.corteImg1}
            />
          </div>
          <div className={styles.cortesImgContainer}>
            <Image
              src={cortesImg2}
              width={250}
              height={300}
              alt="Step"
              className={styles.corteImg2}
            />
          </div>
          <div className={styles.cortesImgContainer}>
            <Image
              src={cortesImg3}
              width={250}
              height={300}
              alt="Step"
              className={styles.corteImg3}
            />
          </div>
        </div>
        <p style={{ color: "#000" }} className={styles.desc}>
          {t("corte-desc")}
        </p>
      </div>

      <div ref={menuTitleRef} className={styles.menu}>
        <div className={styles.titleContent}>
          <Image
            alt="Step"
            width={140}
            height={70}
            src={menuTitle}
            className={styles.title}
          />
        </div>

        <div className={styles.Imgs}>
          <div className={styles.menuImgContainer}>
            <Image
              src={menuImg1}
              width={350}
              height={200}
              alt="Step"
              className={styles.menuImg1}
            />
          </div>
          <div className={styles.menuImgContainer}>
            <Image
              src={menuImg2}
              width={350}
              height={200}
              alt="Step"
              className={styles.menuImg2}
            />
          </div>
        </div>
        <p className={styles.desc}>{t("menu-desc1")}</p>
        <div className={styles.Imgs}>
          <div className={styles.menuImgContainer4}>
            <Image
              src={menuImg3}
              width={350}
              height={200}
              alt="Step"
              className={styles.menuImg3}
            />
          </div>
          <div className={styles.menuImgContainer4}>
            <Image
              src={menuImg4}
              width={350}
              height={200}
              alt="Step"
              className={styles.menuImg4}
            />
          </div>
        </div>
        <div className={styles.Imgs}>
          <div className={styles.menuImgContainer5}>
            <Image
              src={menuImg5}
              width={350}
              height={350}
              alt="Step"
              className={styles.menuImg5}
            />
          </div>
          <p className={styles.desc}>{t("menu-desc2")}</p>
        </div>
        <div className={styles.menuImg6}>
          <div className={styles.menuImgContainer6}>
            <Image
              src={menuImg6}
              width={700}
              height={350}
              alt="Step"
              className={styles.menuImg6}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${backgroundPaper.src})`,
        }}
        ref={contactosTitleRef}
        className={styles.contactos}
      >
        <div className={styles.titleContent}>
          <Image
            alt="Step"
            width={140}
            height={70}
            src={contactosTitle}
            className={styles.titleContactos}
          />
        </div>

        <div className={styles.contactosMain}>
          <div className={styles.contactosContainer}>
            <div className={styles.contactosTexts1}>
              <p className={styles.contactosText}>{t("contactos-address1")}</p>
              <p className={styles.contactosText}>{t("contactos-address2")}</p>
              <p className={styles.contactosText}>{t("contactos-address3")}</p>
            </div>
            <div className={styles.contactosTexts2}>
              <p className={styles.contactosText}>{t("contactos-phone")}</p>
              <p style={{ fontSize: 18 }} className={styles.contactosText}>
                {t("contactos-phone-desc")}
              </p>
              <p className={styles.contactosText}>{t("contactos-email")}</p>
            </div>
            <div className={styles.socialsImgs}>
              <a
                target="_blank"
                href="https://www.facebook.com/cervejariaesquina"
              >
                <Image
                  src={facebook}
                  width={45}
                  height={45}
                  alt="Step"
                  className={styles.socialImg}
                />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/cervejariaesquina"
              >
                <Image
                  src={insta}
                  width={45}
                  height={45}
                  alt="Step"
                  className={styles.socialImg}
                />
              </a>
            </div>
          </div>
          <div className={styles.iframe}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3155.170436776802!2d-25.67678192349405!3d37.739145571994314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb432ab7e64c5d55%3A0x3fca610e4cf060af!2sCervejaria%20Esquina!5e0!3m2!1spt-PT!2spt!4v1715948936021!5m2!1spt-PT!2spt"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className={styles.horario}>
        <div className={styles.titleContent}>
          <Image
            alt="Step"
            width={140}
            height={70}
            src={horarioTitle}
            className={styles.title}
          />
        </div>
        <br />
        <p className={styles.horarioText}>{t("horario-weekday")}</p>
        <p className={styles.horarioText}>{t("horario-weekend")}</p>
        <p className={styles.horarioText}>{t("horario-sunday")}</p>
      </div>

      <div
        style={{
          paddingBottom: 35,
        }}
        className={styles.politica}
      >
        <p className={styles.politicaText1}>{t("politica-privacy")}</p>
        <p className={styles.politicaText2}>{t("politica-rights")}</p>
      </div>
    </div>
  );
}
