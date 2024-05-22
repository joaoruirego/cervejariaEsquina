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
          <button>Upload Image</button>
        )}
      </div>
    </div>
  );

  const renderTextInput = (key) => (
    <div key={key}>
      <label>{key}</label>
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
      <h3 className={styles.subtitle}>Slider</h3>
      <p className={styles.desc}>Imagens do Carrossel</p>
      <div className={styles.images}>
        <div className={styles.image}>{renderImageInput("slider_image1")}</div>
        <div className={styles.image}>{renderImageInput("slider_image2")}</div>
        <div className={styles.image}>{renderImageInput("slider_image3")}</div>
        <div className={styles.image}>{renderImageInput("slider_image4")}</div>
      </div>
      <div>
        <h3 className={styles.subtitle}>Sobre</h3>

        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("sobre_titleImage")}
          </div>

          <div className={styles.image}>{renderImageInput("sobre_image1")}</div>
          <div className={styles.image}>{renderImageInput("sobre_image2")}</div>
        </div>
        {renderTextInput("sobre_description_pt")}
        {renderTextInput("sobre_description_en")}
      </div>
      <div>
        <h3 className={styles.subtitle}>Criação</h3>
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
        {renderTextInput("criacao_description_pt")}
        {renderTextInput("criacao_description_en")}
      </div>
      <div>
        <h3 className={styles.subtitle}>Maturação</h3>
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

        {renderTextInput("maturacao_description_pt")}
        {renderTextInput("maturacao_description_en")}
      </div>
      <div>
        <h3 className={styles.subtitle}>Corte</h3>
        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("corte_titleImage")}
          </div>

          <div className={styles.image}>{renderImageInput("corte_image1")}</div>
          <div className={styles.image}>{renderImageInput("corte_image2")}</div>
          <div className={styles.image}>{renderImageInput("corte_image3")}</div>
        </div>

        {renderTextInput("corte_description_pt")}
        {renderTextInput("corte_description_en")}
      </div>
      <div>
        <h3 className={styles.subtitle}>Menu</h3>
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

        {renderTextInput("menu_description_pt")}
        {renderTextInput("menu_description_en")}
      </div>
      <div>
        <h3 className={styles.subtitle}>Contacts</h3>

        <div className={styles.images}>
          <div className={styles.image}>
            {renderImageInput("contacts_hoursImage")}
          </div>
        </div>
        {renderTextInput("contacts_hours")}
        {renderTextInput("contacts_location")}
        {renderTextInput("contacts_phone")}
        {renderTextInput("contacts_email")}
      </div>
    </div>
  );
};

export default AdminPage;
