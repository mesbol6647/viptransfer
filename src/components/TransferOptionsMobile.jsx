
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


// import React, { useState } from "react";
// import { usePriceData } from "../context/PriceContext";
// import { convertPrice } from "../utils/currencyRates";
// import { useTranslation } from "react-i18next";
// import { Link } from "react-router-dom";
// import i18n from "i18next";

// const locations = ["Antalya Havalimanı", "Lara", "Belek", "Side", "Alanya", "Kemer"];

// const TransferOptionsMobile = () => {
//   const pricesByRegionAndVehicle = usePriceData();
//   const { t } = useTranslation("translation");

//   const [from, setFrom] = useState("Antalya Havalimanı");
//   const [to, setTo] = useState("");

//   const isAirportRoute =
//     from === "Antalya Havalimanı" || to === "Antalya Havalimanı";

//   const regionKey = (from === "Antalya Havalimanı" ? to : from).toUpperCase();
//   const regionPrices = isAirportRoute ? pricesByRegionAndVehicle?.[regionKey] : null;
//   const vehicleKey = regionPrices && Object.keys(regionPrices)[0];
//   const price = regionPrices?.[vehicleKey];

//   const canShowPrice = isAirportRoute && price;

//   return (
//     <div className="w-full px-4 max-w-md mx-auto space-y-4">
//       <div className="flex flex-col gap-2">
//         <label className="font-semibold text-sm">Kalkış Yeri (From):</label>
//         <select
//           className="border p-2 rounded"
//           value={from}
//           onChange={(e) => setFrom(e.target.value)}
//         >
//           {locations.map((loc) => (
//             <option key={loc} value={loc}>{loc}</option>
//           ))}
//         </select>

//         <label className="font-semibold text-sm">Varış Yeri (To):</label>
//         <select
//           className="border p-2 rounded"
//           value={to}
//           onChange={(e) => setTo(e.target.value)}
//         >
//           <option value="">Seçiniz</option>
//           {locations
//             .filter((loc) => loc !== from)
//             .map((loc) => (
//               <option key={loc} value={loc}>{loc}</option>
//             ))}
//         </select>
//       </div>

//       <div className="mt-4">
//         {to ? (
//           canShowPrice ? (
//             <Link
//               to={`/arac-secimi?from=${from}&to=${to}`}
//               className="block bg-green-600 text-white font-semibold text-center p-3 rounded"
//             >
//               {from} → {to} | {convertPrice(price, i18n.language)}
//             </Link>
//           ) : (
//             <div className="text-center text-red-600 font-medium">
//               Bu iki lokasyon arasında fiyat bilgisi bulunmuyor.
//             </div>
//           )
//         ) : (
//           <div className="text-center text-gray-500 text-sm">
//             Lütfen varış noktasını seçin.
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TransferOptionsMobile;
