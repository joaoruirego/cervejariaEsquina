"use client";
import React, { createContext, useState, useContext, useEffect } from "react";
import { getContentData } from "@/actions/getData";

const LanguageContext = createContext();

const localStorageKey = "language";
import { en } from "@/locales/en";
import { pt } from "@/locales/pt";

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [allContent, setAllContent] = useState(null);
  const [content, setContent] = useState(null);
  const [sliderImages, setSliderImages] = useState([]);

  function processData(data, language) {
    let processedData = {};

    for (let key in data) {
      if (key.endsWith(`_${language}`)) {
        processedData[key.replace(`_${language}`, "")] = data[key];
      } else if (!key.endsWith("_en") && !key.endsWith("_pt")) {
        processedData[key] = data[key];
      }
    }

    return processedData;
  }

  const setLanguage = (lang) => {
    localStorage.setItem(localStorageKey, lang);
    setLanguageState(lang);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const storedLanguage = localStorage.getItem(localStorageKey);
      const lang = storedLanguage || "en";
      const data = await getContentData();

      setAllContent(data);
      setSliderImages([
        data.slider_image1,
        data.slider_image2,
        data.slider_image3,
        data.slider_image4,
      ]);
      const contentData = processData(data, lang);

      if (lang === "en") {
        const updatedContentData = {
          ...contentData,
          ...en, // Assuming en is defined somewhere
        };
        setContent(updatedContentData);
      } else {
        const updatedContentData = {
          ...contentData,
          ...pt, // Assuming pt is defined somewhere
        };
        setContent(updatedContentData);
      }

      setLanguageState(lang);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const updateContent = async () => {
      if (language) {
        const contentData = processData(allContent, language);

        if (language === "en") {
          const updatedContentData = {
            ...contentData,
            ...en,
          };
          setContent(updatedContentData);
        } else {
          const updatedContentData = {
            ...contentData,
            ...pt,
          };
          console.log(updatedContentData);
          setContent(updatedContentData);
        }
      }
    };

    updateContent();
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, isLoading, content, sliderImages }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  return useContext(LanguageContext);
};
