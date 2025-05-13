// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translation.json";
import translationTR from "./locales/tr/translation.json";
import translationDE from "./locales/de/translation.json";
import translationRU from "./locales/ru/translation.json";
import statsEN from './locales/en/stats.json';
import statsTR from './locales/tr/stats.json';
import statsDE from './locales/de/stats.json';
import statsRU from './locales/ru/stats.json';

import footerTR from "./locales/tr/footer.json";
import footerEN from "./locales/en/footer.json";
import footerDE from "./locales/de/footer.json";
import footerRU from "./locales/ru/footer.json";

import searchBoxEN from "./locales/en/searchBox.json";
import searchBoxTR from "./locales/tr/searchBox.json";  
import searchBoxDE from "./locales/de/searchBox.json";
import searchBoxRU from "./locales/ru/searchBox.json";

import section1EN from "./locales/en/section1.json";
import section1TR from "./locales/tr/section1.json";
import section1DE from "./locales/de/section1.json";
import section1RU from "./locales/ru/section1.json";

 import testimonialsEN from "./locales/en/testimonials.json";
import testimonialsTR from "./locales/tr/testimonials.json";
import testimonialsDE from "./locales/de/testimonials.json";
import testimonialsRU from "./locales/ru/testimonials.json";

import reservationsEN from "./locales/en/reservations.json";
import reservationsTR from "./locales/tr/reservations.json";
import reservationsDE from "./locales/de/reservations.json";
import reservationsRU from "./locales/ru/reservations.json";


const resources = {
  en: {
    translation: translationEN,
    stats: statsEN,
    footer: footerEN,
    searchbox: searchBoxEN,
    section1: section1EN,
    testimonials: testimonialsEN,
    reservations: reservationsEN,
  },
  tr: {
    translation: translationTR,
    stats: statsTR,
    footer: footerTR,
    searchbox: searchBoxTR,
    section1: section1TR,
    testimonials: testimonialsTR,
    reservations: reservationsTR,
    
    

  },
  de: {
    translation: translationDE,
    stats: statsDE,
    footer: footerDE,
    searchbox: searchBoxDE,
    section1: section1DE,
    testimonials: testimonialsDE,
    reservations: reservationsDE,
  },
  ru: {
    translation: translationRU,
    stats: statsRU,
    footer: footerRU,
    searchbox: searchBoxRU,
    section1: section1RU,
    testimonials: testimonialsRU,
    reservations: reservationsRU,
   
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
