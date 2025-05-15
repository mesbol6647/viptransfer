// context/PriceContext.js
import React, { createContext, useContext } from "react";

export const PriceContext = createContext();

const pricesByRegionAndVehicle = {
  "LARA": { Transporter: "25 €", Vito: "25 €", Sprinter: "35 €" },
  "BELEK": { Transporter: "35 €", Vito: "35 €", Sprinter: "50 €" },
  "BOĞAZKENT": { Transporter: "30 €", Vito: "30 €", Sprinter: "50 €" },
  "SIDE": { Transporter: "45 €", Vito: "45 €", Sprinter: "65 €" },
  "SORGUN T. GÖL": { Transporter: "45 €", Vito: "45 €", Sprinter: "65 €" },
  "MANAVGAT": { Transporter: "45 €", Vito: "45 €", Sprinter: "65 €" },
  "KIZILAĞAÇ": { Transporter: "50 €", Vito: "50 €", Sprinter: "70 €" },
  "KIZILOT": { Transporter: "50 €", Vito: "50 €", Sprinter: "70 €" },
  "ÇENGER": { Transporter: "55 €", Vito: "55 €", Sprinter: "70 €" },
  "OKURCALAR": { Transporter: "55 €", Vito: "55 €", Sprinter: "75 €" },
  "AVSALLAR": { Transporter: "60 €", Vito: "60 €", Sprinter: "75 €" },
  "TÜRKLER": { Transporter: "60 €", Vito: "60 €", Sprinter: "75 €" },
  "PAYALLAR": { Transporter: "60 €", Vito: "60 €", Sprinter: "80 €" },
  "KONAKLI": { Transporter: "65 €", Vito: "65 €", Sprinter: "80 €" },
  "ALANYA": { Transporter: "70 €", Vito: "70 €", Sprinter: "90 €" },
  "MAHMUTLAR": { Transporter: "75 €", Vito: "75 €", Sprinter: "100 €" },
  "KARGICAK": { Transporter: "75 €", Vito: "75 €", Sprinter: "100 €" },
  "GAZİPAŞA": { Transporter: "80 €", Vito: "80 €", Sprinter: "120 €" },
  "ŞEHİRİÇİ": { Transporter: "25 €", Vito: "25 €", Sprinter: "35 €" },
  "KONYAALTI": { Transporter: "28 €", Vito: "28 €", Sprinter: "40 €" },
  "BELDİBİ": { Transporter: "35 €", Vito: "35 €", Sprinter: "45 €" },
  "GÖYNÜK": { Transporter: "35 €", Vito: "35 €", Sprinter: "50 €" },
  "KEMER": { Transporter: "40 €", Vito: "40 €", Sprinter: "55 €" },
  "KİRİŞ": { Transporter: "45 €", Vito: "45 €", Sprinter: "55 €" },
  "ÇAMYUVA": { Transporter: "45 €", Vito: "45 €", Sprinter: "60 €" },
  "TEKİROVA": { Transporter: "50 €", Vito: "50 €", Sprinter: "70 €" },
  "ÇIRALI": { Transporter: "60 €", Vito: "60 €", Sprinter: "80 €" },
  "OLİMPOS": { Transporter: "60 €", Vito: "60 €", Sprinter: "80 €" },
  "ULUPINAR": { Transporter: "60 €", Vito: "60 €", Sprinter: "80 €" },
  "KUMLUCA": { Transporter: "75 €", Vito: "75 €", Sprinter: "90 €" },
  "FİNİKE": { Transporter: "75 €", Vito: "75 €", Sprinter: "95 €" },
  "KAŞ": { Transporter: "130 €", Vito: "130 €", Sprinter: "180 €" },
  "KALKAN": { Transporter: "140 €", Vito: "140 €", Sprinter: "180 €" },
  "FETHİYE": { Transporter: "140 €", Vito: "140 €", Sprinter: "190 €" },
  "ÖLÜDENİZ": { Transporter: "140 €", Vito: "140 €", Sprinter: "190 €" },
  "DALAMAN": { Transporter: "150 €", Vito: "150 €", Sprinter: "230 €" },
  "BODRUM": { Transporter: "300 €", Vito: "300 €", Sprinter: "400 €" },
};

export const PriceProvider = ({ children }) => {
  return (
    <PriceContext.Provider value={pricesByRegionAndVehicle}>
      {children}
    </PriceContext.Provider>
  );
};

export const usePriceData = () => useContext(PriceContext);
