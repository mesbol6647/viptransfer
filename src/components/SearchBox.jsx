

import React, { useState } from "react";
import { FaMapMarkerAlt, FaUsers, FaSearch } from "react-icons/fa";
import { usePriceData } from "../context/PriceContext";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const SearchBox = () => {
  const prices = usePriceData();
  const navigate = useNavigate();
  const { t } = useTranslation("searchbox");

  const [selectedTo, setSelectedTo] = useState("");
  const [passengerCount, setPassengerCount] = useState("1");

  const handleSearch = () => {
    if (!selectedTo) return;
    navigate(
      `/arac-secimi?from=${encodeURIComponent(t("from"))}&to=${encodeURIComponent(
        selectedTo
      )}&passengers=${passengerCount}`
    );
  };

  const regionOptions = Object.keys(prices);

  return (
    <div className="bg-gray-800 bg-opacity-70 rounded-2xl px-8 py-6 flex flex-wrap justify-center items-center gap-6 shadow-2xl max-w-7xl mx-auto">
      {/* Alış Yeri */}
      <div className="flex items-center gap-2 bg-gray-100 text-black px-5 py-3 rounded-full">
        <FaMapMarkerAlt className="text-black" />
        <span>{t("from")}</span>
      </div>

      {/* Bırakış Yeri */}
      <div className="flex items-center gap-2 bg-gray-100 text-black px-5 py-3 rounded-full">
        <FaMapMarkerAlt className="text-black" />
        <select
          className="bg-transparent focus:outline-none text-black"
          value={selectedTo}
          onChange={(e) => setSelectedTo(e.target.value)}
        >
          <option value="">{t("toPlaceholder")}</option>
          {regionOptions.map((region, idx) => (
            <option key={idx} value={region}>
              {region}
            </option>
          ))}
        </select>
      </div>

      {/* Yolcu Sayısı */}
      <div className="flex items-center gap-2 bg-gray-100 text-black px-5 py-3 rounded-full">
        <FaUsers className="text-black" />
        <select
          className="bg-transparent focus:outline-none text-black"
          value={passengerCount}
          onChange={(e) => setPassengerCount(e.target.value)}
        >
          {[...Array(14)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {t("passengers")}: {i + 1}
            </option>
          ))}
        </select>
      </div>

      {/* Ara Butonu */}
      <button
        onClick={handleSearch}
        className="flex items-center gap-2 border border-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-500 transition-all duration-300"
      >
        <FaSearch />
        {t("search")}
      </button>
    </div>
  );
};

export default SearchBox;
