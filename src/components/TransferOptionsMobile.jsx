
import React from "react";
import { usePriceData } from "../context/PriceContext";
import { convertPrice } from "../utils/currencyRates";
import i18n from "i18next";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const destinations = ["Lara", "Belek", "Side", "Alanya", "Kemer"];

const TransferOptionsMobile = () => {
  const pricesByRegionAndVehicle = usePriceData();
  const { t } = useTranslation("translation");

  const filteredDestinations = destinations
    .map((region) => {
      const regionKey = region.toUpperCase();
      const regionPrices = pricesByRegionAndVehicle?.[regionKey];
      const vehicleKey = regionPrices && Object.keys(regionPrices)[0];
      const price = regionPrices?.[vehicleKey];

      return price
        ? {
            location: `Antalya Havalimanı → ${region}`,
            regionKey,
            price,
          }
        : null;
    })
    .filter(Boolean);

  return (
    <div className="w-full px-4 grid grid-cols-2 gap-3 max-w-md mx-auto">
  {filteredDestinations.map((option, index) => (
    <Link
      key={index}
      to={`/arac-secimi?from=Antalya Havalimanı&to=${option.regionKey}`}
      className="bg-white rounded-lg shadow p-3 h-[60px] flex justify-between items-center text-black no-underline"
      style={{ textDecoration: "none" }}
    >
      <span className="text-[13px] font-medium leading-tight !no-underline">
        {option.location}
      </span>
      <span className="text-sm font-bold text-yellow-600 whitespace-nowrap !no-underline">
        {convertPrice(option.price, i18n.language)}
      </span>
    </Link>
  ))}

  {/* ✅ DİĞER TÜM BÖLGELER - aynı satırda, bir kutu gibi */}
  <Link
  to="/bolgeler"
  className="bg-orange-500 text-white font-semibold rounded-lg shadow p-3 h-[60px] flex items-center justify-center text-center no-underline"
  style={{ textDecoration: "none" }}
>
  {t("otherRegions")}
</Link>
</div>

  );
};

export default TransferOptionsMobile;
