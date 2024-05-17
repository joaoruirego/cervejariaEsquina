import Image from "next/image";
import styles from "./page.module.css";
import logo from "../../public/logoCervejaria.png";
import fotoGrande from "../../public/SLIDER_INICIO/SLIDER_MEAT_LOVERS.jpg";

import sobreImg1 from "../../public/FOTOS/SOBRE_1.jpg";
import sobreImg2 from "../../public/FOTOS/SOBRE_2.jpg";

import criacaoImg1 from "../../public/FOTOS/CRIACAO_1.jpg";
import criacaoImg2 from "../../public/FOTOS/CRIACAO_2.jpg";

import maturacao1 from "../../public/FOTOS/MATURACAO_1.jpg";
import maturacao2 from "../../public/FOTOS/MATURACAO_2.jpg";
import maturacao3 from "../../public/FOTOS/MATURACAO_3.jpg";

import cortesImg1 from "../../public/FOTOS/CORTE_1.jpg";
import cortesImg2 from "../../public/FOTOS/CORTE_2.jpg";
import cortesImg3 from "../../public/FOTOS/CORTE_3.jpg";

import menuImg1 from "../../public/FOTOS/MENU_1.jpg";
import menuImg2 from "../../public/FOTOS/MENU_2.jpg";
import menuImg3 from "../../public/FOTOS/MENU_3.jpg";
import menuImg4 from "../../public/FOTOS/MENU_4.jpg";
import menuImg5 from "../../public/FOTOS/MENU_5.jpg";
import menuImg6 from "../../public/FOTOS/MENU_6.jpg";

import facebook from "../../public/FOTOS/facebook.webp";
import insta from "../../public/FOTOS/insta.png";

import facebookWhite from "../../public/FOTOS/facebookWhite.jpeg";
import instaWhite from "../../public/FOTOS/instaWhite.webp";

export default function Home() {
  return (
    <div className={styles.geral}>
      <nav className={styles.navBar}>
        <Image
          width={150}
          height={80}
          alt="Step"
          src={logo}
          className={styles.logo}
        />
        <ul className={styles.topicosCentrais}>
          <li>Sobre</li>
          <li>Menu</li>
          <li>Contactos</li>
        </ul>
        <div className={styles.topicosDireita}>
          <div className={styles.socialsImgs}>
            <Image
              src={facebookWhite}
              width={35}
              height={35}
              alt="Step"
              className={styles.socialImg}
            />
            <Image
              src={instaWhite}
              width={35}
              height={35}
              alt="Step"
              className={styles.socialImg}
            />
          </div>
          <div className={styles.navBarDireita}>
            <div className={styles.linguas}>
              <li>PT</li>|<li>EN</li>
            </div>
            <button className={styles.reservarBtn}>Reservar</button>
          </div>
        </div>
      </nav>

      <div className={styles.carrosel}>
        <Image
          width={2000}
          height={2000}
          src={fotoGrande}
          alt="Step"
          className={styles.imagemGrandes}
        />
        <button></button>
      </div>

      <div className={styles.sobreNos}>
        <h1 className={styles.title}>Sobre</h1>

        <p className={styles.desc}>
          Num espaço mítico da cidade de Ponta Delgada, nasceu um novo conceito
          de cervejaria. É um lugar que junta famílias, amigos ou parceiros de
          negócio num ambiente acolhedor e descontraído. Uma casa de refeições
          que é de todos, para todos e que se orgulha de ser um dos refúgios
          preferidos, na nossa região, para os verdadeiros apreciadores de boa
          comida. Deixamos o convite para uma experiência gastronómica singular
          na ilha de São Miguel.
        </p>
        <div className={styles.sobreImgs}>
          <Image
            src={sobreImg1}
            width={300}
            height={300}
            alt="Step"
            className={styles.sobreImg1}
          />
          <Image
            src={sobreImg2}
            width={600}
            height={300}
            alt="Step"
            className={styles.sobreImg2}
          />
        </div>
        <div>
          <video autoPlay={false} className={styles.sobreVideo}>
            <source src="/caminho/para/seu/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      <div className={styles.criacao}>
        <h1 style={{ color: "#000" }} className={styles.title}>
          Criação
        </h1>

        <div className={styles.criacaoContainer}>
          <div className={styles.esqCriacao}>
            <Image
              src={criacaoImg1}
              width={400}
              height={300}
              alt="Step"
              className={styles.criacaoImg1}
            />
            <p>
              Na nossa pastagem, localizada nos arredores da cidade de Ponta
              Delgada, em pleno meio rural, é possível contemplar a raça Ramo
              Grande em todo o seu esplendor. Lá, os animais vivem livremente e
              sem pressa. São criados e tratados com carinho e bondade, por uma
              questão de responsabilidade e respeito pelo sustento que
              proporcionam.
            </p>
          </div>
          <div className={styles.dirCriacao}>
            <Image
              src={criacaoImg2}
              width={400}
              height={500}
              alt="Step"
              className={styles.criacaoImg2}
            />
            {/* <Image
              src={imgCriacaoRotulo}
              width={50}
              height={50}
              alt="Step"
              className={styles.criacaoImgRotulo}
            /> */}
          </div>
        </div>
      </div>

      <div className={styles.maturacao}>
        <h1 className={styles.title}>Maturação</h1>
        <div className={styles.maturacaoContainer}>
          <div className={styles.maturacaoEsq}>
            <Image
              src={maturacao1}
              width={300}
              height={400}
              alt="Step"
              className={styles.maturacaoImg1}
            />
          </div>
          <div className={styles.maturacaoDireita}>
            <div className={styles.maturacaoImgs}>
              <Image
                src={maturacao3}
                width={150}
                height={150}
                alt="Step"
                className={styles.maturacaoImg2}
              />
              <Image
                src={maturacao2}
                width={150}
                height={150}
                alt="Step"
                className={styles.maturacaoImg3}
              />
            </div>
            <p className={styles.desc}>
              Paciência e dedicação são as palavras que melhor definem o nosso
              processo de maturação de carne. Com recurso a armazenagem e
              equipamento moderno, mas sem esquecer técnicas tradicionais,
              deixamos a carne maturar lentamente de forma a intensificar o seu
              aroma e sabor a cada dia que passa. O resultado final é uma
              textura suculenta e um perfil de sabor rico, o que eleva a nossa
              carne para um patamar de qualidade insuperável.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.corte}>
        <h1 style={{ color: "#000" }} className={styles.title}>
          Corte
        </h1>

        <div className={styles.cortesImgs}>
          <Image
            src={cortesImg1}
            width={450}
            height={300}
            alt="Step"
            className={styles.corteImg1}
          />
          <Image
            src={cortesImg2}
            width={250}
            height={300}
            alt="Step"
            className={styles.corteImg2}
          />
          <Image
            src={cortesImg3}
            width={250}
            height={300}
            alt="Step"
            className={styles.corteImg3}
          />
        </div>
        <p style={{ color: "#000" }} className={styles.desc}>
          O nível premium é uma exigência que está sempre presente nos cortes
          que apresentamos aos nossos clientes. São obtidos de bovinos com
          qualidade superior, que são criados e alimentados com cuidado especial
          para garantir características como marmoreio, textura e sabor. Dos
          cortes que disponibilizamos, destacam-se o t-bone, tomahawk,
          costeleta, ribeye, fraldinha, alcatra e picanha.
        </p>
      </div>

      <div className={styles.menu}>
        <h1 className={styles.title}>Menu</h1>

        <div className={styles.Imgs}>
          <Image
            src={menuImg1}
            width={350}
            height={200}
            alt="Step"
            className={styles.menuImg1}
          />
          <Image
            src={menuImg2}
            width={350}
            height={200}
            alt="Step"
            className={styles.menuImg2}
          />
        </div>
        <p className={styles.desc}>
          Aqui, servem-se petiscos tradicionais, como camarão ou pão de alho,
          passando pelas divinais bifanas e os tenros pregos que podem ser
          acompanhados com cerveja açoriana centenária. Mas o destaque vai para
          a carne maturada de excelência, em particular de origem Ramo Grande,
          uma raça autóctone dos Açores que se caracteriza por ter uma carne com
          vermelho vivo, consistência firme, gordura bem distribuída e um aroma
          típico da espécie.
        </p>
        <div className={styles.Imgs}>
          <Image
            src={menuImg3}
            width={350}
            height={200}
            alt="Step"
            className={styles.menuImg3}
          />
          <Image
            src={menuImg4}
            width={350}
            height={200}
            alt="Step"
            className={styles.menuImg4}
          />
        </div>
        <div className={styles.Imgs}>
          <Image
            src={menuImg5}
            width={350}
            height={350}
            alt="Step"
            className={styles.menuImg5}
          />
          <p className={styles.desc}>
            O que seria da boa comida sem o bom vinho? A nossa garrafeira é uma
            autêntica viagem pelas várias regiões vitivinícolas de Portugal,
            onde cada garrafa conta uma história de excelência e paixão pelo
            vinho. É nosso compromisso apresentar néctares com características
            como sabor diferenciado, aroma distinto, cor viva, acidez
            equilibrada, taninos bem estruturados, encorpados e persistência
            prolongada na boca.
          </p>
        </div>
        <div className={styles.menuImg6}>
          <Image
            src={menuImg6}
            width={700}
            height={350}
            alt="Step"
            className={styles.menuImg6}
          />
        </div>
      </div>

      <div className={styles.contactos}>
        <h1 style={{ color: "#000" }} className={styles.title}>
          Contactos
        </h1>

        <div className={styles.contactosMain}>
          <div className={styles.contactosContainer}>
            <div className={styles.contactosTexts1}>
              <p className={styles.contactosText}>Avenida Roberto Ivens, 12</p>
              <p className={styles.contactosText}>9500-238 PONTA DELGADA</p>
              <p className={styles.contactosText}>AÇORES</p>
            </div>
            <div className={styles.contactosTexts2}>
              <p className={styles.contactosText}>+351 296 628 253</p>
              <p style={{ fontSize: 18 }} className={styles.contactosText}>
                chamada para a rede fixa nacional
              </p>
              <p className={styles.contactosText}>
                reservas@esquinasteakhouse.pt
              </p>
            </div>
            <div className={styles.socialsImgs}>
              <Image
                src={facebook}
                width={45}
                height={45}
                alt="Step"
                className={styles.socialImg}
              />
              <Image
                src={insta}
                width={45}
                height={45}
                alt="Step"
                className={styles.socialImg}
              />
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
        <h1 className={styles.title}>Horário</h1>
        <br></br>
        <p className={styles.horarioText}>
          SEGUNDA A QUINTA: 12h às 23h (COZINHA ATÉ 21H)
        </p>
        <p className={styles.horarioText}>
          SEXTA E SÁBADO: 12h às 00h (COZINHA ATÉ 22H)
        </p>
        <p className={styles.horarioText}>DOMINGO: FECHADO</p>
      </div>

      <div style={{ paddingBottom: 35 }} className={styles.politica}>
        <p className={styles.politicaText1}>
          POLÍTICA DE PRIVACIDADE | LIVRO DE RECLAMAÇÕES ELETRÓNICO
        </p>
        <p className={styles.politicaText2}>
          © ESQUINA STEAKHOUSE. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
}