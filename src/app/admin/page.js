"use client";
import { useState, useEffect, useRef } from "react";
import { db, storage } from "@/firebase";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import Image from "next/image";
import styles from "./admin.module.css";

const AdminPage = () => {
  const [content, setContent] = useState({
    slider_image1: null,
    slider_image2: null,
    slider_image3: null,
    slider_image4: null,
    sobre_titleImage: null,
    sobre_description_pt: "",
    sobre_description_en: "",
    sobre_image1: null,
    sobre_image2: null,
    sobre_video_link: "",
    criacao_titleImage: null,
    criacao_description_pt: "",
    criacao_description_en: "",
    criacao_image1: null,
    criacao_image2: null,
    maturacao_titleImage: null,
    maturacao_description_pt: "",
    maturacao_description_en: "",
    maturacao_image1: null,
    maturacao_image2: null,
    maturacao_image3: null,
    corte_titleImage: null,
    corte_description_pt: "",
    corte_description_en: "",
    corte_image1: null,
    corte_image2: null,
    corte_image3: null,
    menu_titleImage: null,
    menu_description_pt: "",
    menu_description_en: "",
    menu_description2_pt: "",
    menu_description2_en: "",
    menu_image1: null,
    menu_image2: null,
    menu_image3: null,
    menu_image4: null,
    menu_image5: null,
    menu_image6: null,
    contacts_location: "",
    contacts_phone: "",
    contacts_email: "",
    contacts_hoursImage: null,
    contacts_hours_pt: "",
    contacts_hours_en: "",
  });

  const [loading, setLoading] = useState(true); // loading state
  const fileInputRefs = useRef({});

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const docRef = doc(db, "admin", "conteudos");
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setContent(data);
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching content: ", error);
      } finally {
        setLoading(false); // Set loading to false after fetching content
      }
    };

    fetchContent();
  }, []);

  const handleTextChange = (key, value, type) => {
    setContent((prevContent) => ({
      ...prevContent,
      [key]: value,
    }));
  };

  const saveContent = async () => {
    try {
      const updatedContent = { ...content }; // Create a copy of content to avoid mutation
      const promises = [];

      for (const key in updatedContent) {
        const file = updatedContent[key];
        if (file instanceof File) {
          const imageRef = ref(storage, key);
          const uploadTask = uploadBytes(imageRef, file);
          promises.push(uploadTask);

          // Wait for the upload task to complete
          await uploadTask;

          // Get the download URL
          const downloadURL = await getDownloadURL(imageRef);
          updatedContent[key] = downloadURL;
        }
      }

      // Wait for all upload tasks to complete
      await Promise.all(promises);

      const docRef = doc(db, "admin", "conteudos");
      await setDoc(docRef, updatedContent);
      alert("Sucesso");
      console.log("Content updated successfully!");
    } catch (error) {
      console.error("Error updating content: ", error);
    }
  };

  const handleImageClick = (key) => {
    fileInputRefs.current[key].click();
  };

  const renderImageInput = (key) => (
    <div key={key}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => handleTextChange(key, e.target.files[0], "image")}
        style={{ display: "none" }}
        ref={(el) => (fileInputRefs.current[key] = el)}
      />
      <div style={{ cursor: "pointer" }} onClick={() => handleImageClick(key)}>
        {content[key] ? (
          typeof content[key] === "string" &&
          content[key].startsWith("http") ? (
            // If content is a URL
            <Image
              src={content[key]}
              alt={key}
              width={100}
              height={100}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          ) : (
            // If content is a file
            <Image
              src={
                content[key] instanceof File
                  ? URL.createObjectURL(content[key])
                  : ""
              }
              alt={key}
              width={100}
              height={100}
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
          )
        ) : (
          <button className={styles.uploadImgBtn}>Upload Image</button>
        )}
      </div>
    </div>
  );

  const renderTextInput = (key, desc) => (
    <div key={key}>
      <label>{desc}</label>
      <input
        type="text"
        value={content[key]}
        onChange={(e) => handleTextChange(key, e.target.value, "text")}
      />
    </div>
  );

  if (loading) return <h1>loading</h1>;

  return (
    <div className={styles.main}>
      <header>
        <h1 className={styles.title}>Edição de conteúdos</h1>
        <button onClick={() => saveContent()}>Guardar</button>
      </header>
      <div className={styles.bgDif}>
        <h3 className={styles.subtitle}>Slider</h3>
        <p className={styles.desc}>Imagens do Carrossel</p>
        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("slider_image1")}
          </div>
          <div className={styles.image}>
            {renderImageInput("slider_image2")}
          </div>
          <div className={styles.image}>
            {renderImageInput("slider_image3")}
          </div>
          <div className={styles.image}>
            {renderImageInput("slider_image4")}
          </div>
        </div>
      </div>
      <div className={styles.bgDif}>
        <h3 className={styles.subtitle}>Sobre</h3>
        <p className={styles.desc}>Imagens de "Sobre"</p>

        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("sobre_titleImage")}
          </div>

          <div className={styles.image}>{renderImageInput("sobre_image1")}</div>
          <div className={styles.image}>{renderImageInput("sobre_image2")}</div>
        </div>
        <br></br>
        <br></br>
        <p className={styles.desc}>Textos de "Sobre"</p>
        <div className={styles.texts}>
          <div className={styles.text}>
            {renderTextInput("sobre_description_pt", "Descrição Sobre PT")}
          </div>
          <div className={styles.text}>
            {renderTextInput("sobre_description_en", "Descrição Sobre EN")}
          </div>
          <div className={styles.text}>
            {renderTextInput("sobre_video_link", "Link para vídeo")}
          </div>
        </div>
      </div>

      <div className={styles.bgDif}>
        <h3 className={styles.subtitle}>Criação</h3>
        <p className={styles.desc}>Imagens de "Criação"</p>

        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("criacao_titleImage")}
          </div>

          <div className={styles.image}>
            {renderImageInput("criacao_image1")}
          </div>
          <div className={styles.image}>
            {renderImageInput("criacao_image2")}
          </div>
        </div>
        <br></br>
        <br></br>
        <p className={styles.desc}>Textos de "Criação"</p>
        <div className={styles.texts}>
          <div className={styles.text}>
            {renderTextInput("criacao_description_pt", "Descrição Criação PT")}
          </div>
          <div className={styles.text}>
            {" "}
            {renderTextInput("criacao_description_en", "Descrição Criação EN")}
          </div>
        </div>
      </div>

      <div className={styles.bgDif}>
        <h3 className={styles.subtitle}>Maturação</h3>
        <p className={styles.desc}>Imagens de "Maturação"</p>

        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("maturacao_titleImage")}
          </div>

          <div className={styles.image}>
            {renderImageInput("maturacao_image1")}
          </div>

          <div className={styles.image}>
            {renderImageInput("maturacao_image2")}
          </div>

          <div className={styles.image}>
            {renderImageInput("maturacao_image3")}
          </div>
        </div>
        <br></br>
        <br></br>
        <p className={styles.desc}>Textos de "Sobre"</p>
        <div className={styles.texts}>
          <div className={styles.text}>
            {renderTextInput("maturacao_description_pt", "Descrição Sobre PT")}
          </div>
          <div className={styles.text}>
            {renderTextInput("maturacao_description_en", "Descrição Sobre EN")}
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.subtitle}>Corte</h3>
        <p className={styles.desc}>Imagens de "Corte"</p>

        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("corte_titleImage")}
          </div>

          <div className={styles.image}>{renderImageInput("corte_image1")}</div>
          <div className={styles.image}>{renderImageInput("corte_image2")}</div>
          <div className={styles.image}>{renderImageInput("corte_image3")}</div>
        </div>
        <br></br>
        <br></br>
        <p className={styles.desc}>Textos de "Corte"</p>
        <div className={styles.texts}>
          <div className={styles.text}>
            {renderTextInput("corte_description_pt", "Descrição Corte PT")}
          </div>
          <div className={styles.text}>
            {" "}
            {renderTextInput("corte_description_en", "Descrição Corte EN")}
          </div>
        </div>
      </div>
      <div className={styles.bgDif}>
        <h3 className={styles.subtitle}>Menu</h3>
        <p className={styles.desc}>Imagens de "Menu"</p>

        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("menu_titleImage")}
          </div>

          <div className={styles.image}>{renderImageInput("menu_image1")}</div>
          <div className={styles.image}>{renderImageInput("menu_image2")}</div>
          <div className={styles.image}>{renderImageInput("menu_image3")}</div>
          <div className={styles.image}>{renderImageInput("menu_image4")}</div>
          <div className={styles.image}>{renderImageInput("menu_image5")}</div>
          <div className={styles.image}>{renderImageInput("menu_image6")}</div>
        </div>

        <br></br>
        <br></br>
        <p className={styles.desc}>Textos de "Menu"</p>

        <div className={styles.texts}>
          <div className={styles.text}>
            {renderTextInput("menu_description_pt", "Descrição Menu PT")}
          </div>
          <div className={styles.text}>
            {renderTextInput("menu_description_en", "Descrição Menu EN")}
          </div>
        </div>
      </div>
      <div>
        <h3 className={styles.subtitle}>Contactos</h3>
        <p className={styles.desc}>Imagens de "Contactos"</p>

        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("contacts_hoursImage")}
          </div>
        </div>
        <br></br>
        <br></br>
        <p className={styles.desc}>Textos de "Contactos"</p>

        <div className={styles.texts}>
          <div className={styles.text}>
            {renderTextInput("contacts_hours", "Horário")}
          </div>
          <div className={styles.text}>
            {" "}
            {renderTextInput("contacts_location", "Localização")}
          </div>
          <div className={styles.text}>
            {renderTextInput("contacts_phone", "Telemóvel")}
          </div>
          <div className={styles.text}>
            {" "}
            {renderTextInput("contacts_email", "Email")}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
