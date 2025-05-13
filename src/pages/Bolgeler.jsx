


import React from "react";
import { useNavigate } from "react-router-dom";
import DashboardBlog from "./DashboardBlog";
import { usePriceData } from "../context/PriceContext";
import { useTranslation } from "react-i18next";
import { convertPrice } from "../utils/currencyRates";

const Bolgeler = () => {
  const navigate = useNavigate();
  const pricesByRegionAndVehicle = usePriceData();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const handleBoxClick = (title) => {
    navigate(`/arac-secimi?bolge=${encodeURIComponent(title)}`);
  };

  return (
    <>
      <DashboardBlog />
      <section className="bg-orange-500 py-8">
        <h2 className="text-white text-2xl font-bold text-center mb-6">
          {t("regions.title")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 max-w-screen-xl mx-auto">
          {Object.entries(pricesByRegionAndVehicle).map(([title, prices], index) => {
            const rawPrice = prices.Transporter;
            const shownPrice = convertPrice(rawPrice, lang);

            return (
              <div
                key={index}
                onClick={() => handleBoxClick(title)}
                className="cursor-pointer bg-black text-white flex justify-between items-center px-4 py-2 rounded-md text-sm font-semibold shadow-md hover:bg-gray-800 transition"
              >
                <span>
                  {t("regions.airport")}<br />{title}
                </span>
                <span>{shownPrice}</span>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Bolgeler;
