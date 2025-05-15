
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useTranslation } from "react-i18next";
// // import { usePriceData } from "../context/PriceContext";
// // import { FaMapMarkerAlt, FaUsers, FaSearch } from "react-icons/fa";

// // const MobileTransferSearch = () => {
// //   const navigate = useNavigate();
// //   const { t } = useTranslation("searchbox");
// //   const prices = usePriceData();

// //   const [selectedTo, setSelectedTo] = useState("");
// //   const [passengerCount, setPassengerCount] = useState("1");

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     if (!selectedTo) return;
// //     navigate(
// //       `/arac-secimi?from=${encodeURIComponent(t("from"))}&to=${encodeURIComponent(
// //         selectedTo
// //       )}&passengers=${passengerCount}`
// //     );
// //   };

// //   const regionOptions = Object.keys(prices);

// //   return (
// //     <div className="block md:hidden bg-black text-white pb-6 px-4 pt-2">
// //       <form
// //         onSubmit={handleSearch}
// //         className="flex flex-col gap-4 max-w-xs mx-auto bg-gray-900 rounded-xl p-4 shadow-inner"
// //       >
// //         <h4 className="text-center text-lg text-yellow-500">
// //           {t("otherRegions")}
// //         </h4>

// //         {/* Alış Yeri (sabit gösterim) */}
// //         <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
// //           <FaMapMarkerAlt />
// //           <span className="text-white text-sm">{t("from")}</span>
// //         </div>

// //         {/* Bırakış Yeri */}
// //         <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
// //           <FaMapMarkerAlt />
// //           <select
// //             value={selectedTo}
// //             onChange={(e) => setSelectedTo(e.target.value)}
// //             className="bg-transparent text-white w-full focus:outline-none"
// //           >
// //             <option value="">{t("toPlaceholder")}</option>
// //             {regionOptions.map((region, idx) => (
// //               <option key={idx} value={region} className="text-black">
// //                 {region}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         {/* Yolcu Sayısı */}
// //         <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
// //           <FaUsers />
// //           <select
// //             value={passengerCount}
// //             onChange={(e) => setPassengerCount(e.target.value)}
// //             className="bg-transparent text-white w-full focus:outline-none"
// //           >
// //             {[...Array(14)].map((_, i) => (
// //               <option key={i + 1} value={i + 1} className="text-black">
// //                 {t("passengers")}: {i + 1}
// //               </option>
// //             ))}
// //           </select>
// //         </div>

// //         {/* Ara Butonu */}
// //         <button
// //           type="submit"
// //           className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-all"
// //         >
// //           <FaSearch /> {t("search")}
// //         </button>
// //       </form>
// //     </div>
// //   );
// // };

// // export default MobileTransferSearch;
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useTranslation } from "react-i18next";
// import { usePriceData } from "../context/PriceContext";
// import { FaMapMarkerAlt, FaUsers, FaSearch } from "react-icons/fa";

// const MobileTransferSearch = () => {
//   const navigate = useNavigate();
//   const { t } = useTranslation("searchbox");
//   const prices = usePriceData();

//   const [selectedFrom, setSelectedFrom] = useState("Antalya Havalimanı");
//   const [selectedTo, setSelectedTo] = useState("");
//   const [passengerCount, setPassengerCount] = useState("1");

//   const regionOptions = ["Antalya Havalimanı", ...Object.keys(prices)];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!selectedFrom || !selectedTo) return;

//     navigate(
//       `/arac-secimi?from=${encodeURIComponent(selectedFrom)}&to=${encodeURIComponent(
//         selectedTo
//       )}&passengers=${passengerCount}`
//     );
//   };

//   return (
//     <div className="block md:hidden bg-black text-white pb-6 px-4 pt-2">
//       <form
//         onSubmit={handleSearch}
//         className="flex flex-col gap-4 max-w-xs mx-auto bg-gray-900 rounded-xl p-4 shadow-inner"
//       >
//         <h4 className="text-center text-lg text-yellow-500">
//           {t("otherRegions")}
//         </h4>

//         {/* Kalkış Yeri */}
//         <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
//           <FaMapMarkerAlt />
//           <select
//             value={selectedFrom}
//             onChange={(e) => setSelectedFrom(e.target.value)}
//             className="bg-transparent text-white w-full focus:outline-none"
//           >
//             {regionOptions.map((region, idx) => (
//               <option key={idx} value={region} className="text-black">
//                 {region}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Varış Yeri */}
//         <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
//           <FaMapMarkerAlt />
//           <select
//             value={selectedTo}
//             onChange={(e) => setSelectedTo(e.target.value)}
//             className="bg-transparent text-white w-full focus:outline-none"
//           >
//             <option value="">{t("toPlaceholder")}</option>
//             {regionOptions
//               .filter((region) => region !== selectedFrom)
//               .map((region, idx) => (
//                 <option key={idx} value={region} className="text-black">
//                   {region}
//                 </option>
//               ))}
//           </select>
//         </div>

//         {/* Yolcu Sayısı */}
//         <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
//           <FaUsers />
//           <select
//             value={passengerCount}
//             onChange={(e) => setPassengerCount(e.target.value)}
//             className="bg-transparent text-white w-full focus:outline-none"
//           >
//             {[...Array(14)].map((_, i) => (
//               <option key={i + 1} value={i + 1} className="text-black">
//                 {t("passengers")}: {i + 1}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Ara Butonu */}
//         <button
//           type="submit"
//           className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-all"
//         >
//           <FaSearch /> {t("search")}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MobileTransferSearch;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { usePriceData } from "../context/PriceContext";
import { convertPrice } from "../utils/currencyRates";
import { FaMapMarkerAlt, FaUsers, FaSearch } from "react-icons/fa";
import i18n from "i18next";

const MobileTransferSearch2 = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("searchbox");
  const pricesByRegionAndVehicle = usePriceData();

  const [selectedFrom, setSelectedFrom] = useState("Antalya Havalimanı");
  const [selectedTo, setSelectedTo] = useState("");
  const [passengerCount, setPassengerCount] = useState("1");

  const regionOptions = ["Antalya Havalimanı", ...Object.keys(pricesByRegionAndVehicle)];

  // Çift yön mantığına göre fiyatı al
  let regionKey = null;
  if (selectedFrom === "Antalya Havalimanı") {
    regionKey = selectedTo.toUpperCase();
  } else if (selectedTo === "Antalya Havalimanı") {
    regionKey = selectedFrom.toUpperCase();
  }

  const regionPrices = regionKey ? pricesByRegionAndVehicle?.[regionKey] : null;
  const vehicleKey = regionPrices && Object.keys(regionPrices)[0];
  const rawPrice = regionPrices?.[vehicleKey];
  const price = rawPrice ? convertPrice(rawPrice, i18n.language) : null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedFrom || !selectedTo) return;

    navigate(
      `/arac-secimi?from=${encodeURIComponent(selectedFrom)}&to=${encodeURIComponent(
        selectedTo
      )}&passengers=${passengerCount}`
    );
  };

  return (
    <div className="block md:hidden bg-orange-500 text-white pb-6 px-4 pt-2">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 max-w-xs mx-auto bg-gray-900 rounded-xl p-4 shadow-inner"
      >
        <h4 className="text-center text-lg text-yellow-500">{t("otherRegions")}</h4>

        {/* Kalkış Yeri */}
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
          <FaMapMarkerAlt />
          <select
            value={selectedFrom}
            onChange={(e) => setSelectedFrom(e.target.value)}
            className="bg-transparent text-white w-full focus:outline-none"
          >
            {regionOptions.map((region, idx) => (
              <option key={idx} value={region} className="text-black">
                {region}
              </option>
            ))}
          </select>
        </div>

        {/* Varış Yeri */}
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
          <FaMapMarkerAlt />
          <select
            value={selectedTo}
            onChange={(e) => setSelectedTo(e.target.value)}
            className="bg-transparent text-white w-full focus:outline-none"
          >
            <option value="">{t("toPlaceholder")}</option>
            {regionOptions
              .filter((region) => region !== selectedFrom)
              .map((region, idx) => (
                <option key={idx} value={region} className="text-black">
                  {region}
                </option>
              ))}
          </select>
        </div>

        {/* Yolcu Sayısı */}
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
          <FaUsers />
          <select
            value={passengerCount}
            onChange={(e) => setPassengerCount(e.target.value)}
            className="bg-transparent text-white w-full focus:outline-none"
          >
            {[...Array(14)].map((_, i) => (
              <option key={i + 1} value={i + 1} className="text-black">
                {t("passengers")}: {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Fiyat Gösterimi */}
        {/* {selectedTo && (
          <div className="text-center text-sm font-medium">
            {price ? (
              <span className="text-green-400">Fiyat: {price}</span>
            ) : (
              <span className="text-red-400">Bu yön için fiyat bilgisi yok</span>
            )}
          </div>
        )} */}

        {/* Ara Butonu */}
        <button
          type="submit"
          className="flex items-center justify-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-lg transition-all"
        >
          <FaSearch /> {t("search")}
        </button>
      </form>
    </div>
  );
};

export default MobileTransferSearch2;
