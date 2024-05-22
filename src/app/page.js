"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect, useRef } from "react";

import logo from "../../public/logoCervejaria.png";
import facebook from "../../public/FOTOS/facebook_preto.png";
import insta from "../../public/FOTOS/instagram_preto.png";
import facebookWhite from "../../public/FOTOS/facebook_branco.png";
import instaWhite from "../../public/FOTOS/instaWhite.webp";
import backgroundPaper from "../../public/FOTOS/backgroundPaper.png";
import riscos from "../../public/FOTOS/3riscos.png";
import x_icon from "../../public/FOTOS/x_icon.webp";

import { useLanguage } from "@/context/ContentContext";

export default function Home() {
  const { setLanguage, isLoading, content, sliderImages } = useLanguage();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [closeNav, setCloseNav] = useState(false);
  const sobreTitleRef = useRef(null);
  const menuTitleRef = useRef(null);
  const contactosTitleRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 25,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [sliderImages]);

  const handleCloseNav = () => {
    setCloseNav(!closeNav);
  };

  useEffect(() => {
    if (closeNav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [closeNav]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          A carregar conteúdos...
        </h1>
      </div>
    );
  }

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
              {content.sobreNosTitle}
            </li>
            <li
              onClick={() => {
                setCloseNav(false);
                scrollToRef(menuTitleRef);
              }}
            >
              sddsd
              {content.menuTitle}
            </li>
            <li
              onClick={() => {
                setCloseNav(false);
                scrollToRef(contactosTitleRef);
              }}
            >
              {content.contactosTitle}
            </li>
          </ul>
          <div className={styles.topicosDireita}>
            <div className={styles.socialsImgs}>
              <a target="_blank" href={content.contacts_facebook}>
                <Image
                  src={facebookWhite}
                  width={35}
                  height={35}
                  alt="Step"
                  className={styles.socialImg}
                />
              </a>
              <a target="_blank" href={content.contacts_insta}>
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
                  onClick={() => setLanguage("pt")}
                >
                  PT
                </li>
                |
                <li
                  style={{ cursor: "pointer" }}
                  onClick={() => setLanguage("en")}
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
                {content.contactosTitle}
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
          <li onClick={() => scrollToRef(sobreTitleRef)}>
            {content.sobreNosTitle}
          </li>
          <li onClick={() => scrollToRef(menuTitleRef)}>{content.menuTitle}</li>
          <li onClick={() => scrollToRef(contactosTitleRef)}>
            {content.contactosTitle}
          </li>
        </ul>
        <div className={styles.topicosDireita}>
          <div className={styles.socialsImgs}>
            <a target="_blank" href={content.contacts_facebook}>
              <Image
                src={facebookWhite}
                width={35}
                height={35}
                alt="Step"
                className={styles.socialImg}
              />
            </a>
            <a target="_blank" href={content.contacts_insta}>
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
                onClick={() => setLanguage("pt")}
              >
                PT
              </li>
              |
              <li
                style={{ cursor: "pointer" }}
                onClick={() => setLanguage("en")}
              >
                EN
              </li>
            </div>
            <button
              onClick={() => scrollToRef(contactosTitleRef)}
              className={styles.reservarBtn}
            >
              {content.contactosTitle}
            </button>
          </div>
        </div>
      </nav>

      <div className={styles.geral}>
        <div className={styles.carousel}>
          <div className={styles.carouselInner}>
            {sliderImages.map((img, index) => (
              <div
                key={index}
                className={`${styles.carouselItem} ${
                  index === currentSlide ? styles.carouselItemActive : ""
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
            {sliderImages.map((_, index) => (
              <span
                key={index}
                className={`${styles.dot} ${
                  index === currentSlide ? styles.dotActive : ""
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
            src={content.sobre_titleImage}
            className={styles.title}
          />
        </div>

        <p className={styles.desc}>{content.sobre_description}</p>
        <div className={styles.sobreImgs}>
          <div className={styles.sobreImgContainer}>
            <Image
              src={content.sobre_image1}
              width={300}
              height={300}
              alt="Step"
              className={styles.sobreImg1}
            />
          </div>
          <div className={styles.sobreImgContainer2}>
            <Image
              src={content.sobre_image2}
              width={600}
              height={300}
              alt="Step"
              className={styles.sobreImg2}
            />
          </div>
        </div>
        <a /* href={content.sobre_video_link} */ target="_blank">
          <div className={styles.sobreVideo}>
            <video controls>
              <source src={content.sobre_video_link} type="video/mp4" />
            </video>
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
            src={content.criacao_titleImage}
            className={styles.title}
          />
        </div>

        <div className={styles.criacaoContainer}>
          <div className={styles.esqCriacao}>
            <div className={styles.criacaoImg1Container}>
              <Image
                src={content.criacao_image1}
                width={400}
                height={300}
                alt="Step"
                className={styles.criacaoImg1}
              />
            </div>
            <p>{content.criacao_description}</p>
          </div>
          <div className={styles.dirCriacao}>
            <div className={styles.criacaoImg2Container}>
              <Image
                src={content.criacao_image2}
                width={400}
                height={500}
                alt="Step"
                className={styles.criacaoImg2}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.maturacao}>
        <div className={styles.titleContent}>
          <Image
            alt="Step"
            width={140}
            height={70}
            src={content.maturacao_titleImage}
            className={styles.title}
          />
        </div>
        <div className={styles.maturacaoContainer}>
          <div className={styles.maturacaoEsq}>
            <div className={styles.maturacaoImgContainer1}>
              <Image
                src={content.maturacao_image1}
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
                  src={content.maturacao_image2}
                  width={150}
                  height={150}
                  alt="Step"
                  className={styles.maturacaoImg2}
                />
              </div>
              <div className={styles.maturacaoImgContainer}>
                <Image
                  src={content.maturacao_image3}
                  width={150}
                  height={150}
                  alt="Step"
                  className={styles.maturacaoImg3}
                />
              </div>
            </div>
            <p className={styles.desc}>{content.maturacao_description}</p>
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
            src={content.corte_titleImage}
            className={styles.title}
          />
        </div>
        <div className={styles.cortesImgs}>
          <div className={styles.cortesImgContainer1}>
            <Image
              src={content.corte_image1}
              width={450}
              height={300}
              alt="Step"
              className={styles.corteImg1}
            />
          </div>
          <div className={styles.cortesImgContainer}>
            <Image
              src={content.corte_image2}
              width={250}
              height={300}
              alt="Step"
              className={styles.corteImg2}
            />
          </div>
          <div className={styles.cortesImgContainer}>
            <Image
              src={content.corte_image3}
              width={250}
              height={300}
              alt="Step"
              className={styles.corteImg3}
            />
          </div>
        </div>
        <p style={{ color: "#000" }} className={styles.desc}>
          {content.corte_description}
        </p>
      </div>

      <div ref={menuTitleRef} className={styles.menu}>
        <div className={styles.titleContent}>
          <Image
            alt="Step"
            width={140}
            height={70}
            src={content.menu_titleImage}
            className={styles.title}
          />
        </div>

        <div className={styles.Imgs}>
          <div className={styles.menuImgContainer}>
            <Image
              src={content.menu_image1}
              width={350}
              height={200}
              alt="Step"
              className={styles.menuImg1}
            />
          </div>
          <div className={styles.menuImgContainer}>
            <Image
              src={content.menu_image2}
              width={350}
              height={200}
              alt="Step"
              className={styles.menuImg2}
            />
          </div>
        </div>
        <p className={styles.desc}>{content.menu_description}</p>
        <div className={styles.Imgs}>
          <div className={styles.menuImgContainer4}>
            <Image
              src={content.menu_image3}
              width={350}
              height={200}
              alt="Step"
              className={styles.menuImg3}
            />
          </div>
          <div className={styles.menuImgContainer4}>
            <Image
              src={content.menu_image4}
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
              src={content.menu_image5}
              width={350}
              height={350}
              alt="Step"
              className={styles.menuImg5}
            />
          </div>
          <p className={styles.desc}>{content.menu_description2}</p>
        </div>
        <div className={styles.menuImg6}>
          <div className={styles.menuImgContainer6}>
            <Image
              src={content.menu_image6}
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
            src={content.contacts_image}
            className={styles.titleContactos}
          />
        </div>

        <div className={styles.contactosMain}>
          <div className={styles.contactosContainer}>
            <div className={styles.contactosTexts1}>
              <p className={styles.contactosText}>
                {content.contacts_location_street}
              </p>
              <p className={styles.contactosText}>
                {" "}
                {content.contacts_location_postcode}
              </p>
              <p className={styles.contactosText}>
                {" "}
                {content.contacts_location_region}
              </p>
            </div>
            <div className={styles.contactosTexts2}>
              <p className={styles.contactosText}>{content.contacts_phone}</p>
              <p style={{ fontSize: 18 }} className={styles.contactosText}>
                {content.contactosPhoneDesc}
              </p>
              <p className={styles.contactosText}>{content.contacts_email}</p>
            </div>
            <div className={styles.socialsImgs}>
              <a target="_blank" href={content.contacts_facebook}>
                <Image
                  src={facebook}
                  width={45}
                  height={45}
                  alt="Step"
                  className={styles.socialImg}
                />
              </a>
              <a target="_blank" href={content.contacts_insta}>
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
            src={content.hours_image}
            className={styles.title}
          />
        </div>
        <br />
        <p className={styles.horarioText}>{content.hours_1}</p>
        <p className={styles.horarioText}>{content.hours_2}</p>
        <p className={styles.horarioText}>{content.hours_3}</p>
      </div>

      <div
        style={{
          paddingBottom: 35,
        }}
        className={styles.politica}
      >
        <p className={styles.politicaText1}> {content.politicaPrivacy}</p>
        <p className={styles.politicaText2}>{content.politicaRights}</p>
      </div>
    </div>
  );
}
