// // // // // // components/MobileTransferSearch.js
// // // // // import React from "react";
// // // // // import { useNavigate } from "react-router-dom";

// // // // // const MobileTransferSearch = () => {
// // // // //   const navigate = useNavigate();

// // // // //   return (
// // // // //     <div className="block md:hidden bg-black text-white pb-6 px-4">
// // // // //       {/* <h2 className="text-lg font-semibold mb-4 text-left">Diğer Transfer Bölgeleri</h2> */}
      
// // // // //       <div className="flex flex-col gap-3 max-w-xs mx-auto">
// // // // //         <select className="h-12 px-2 rounded bg-gray-800 text-white">
// // // // //           <option>Alış Yeri Seçin</option>
// // // // //           <option>Antalya Havalimanı</option>
// // // // //           <option>Otogar</option>
// // // // //         </select>
// // // // //         <select className="h-12 px-2 rounded bg-gray-800 text-white">
// // // // //           <option>Bırakış Yeri Seçin</option>
// // // // //           <option>Lara</option>
// // // // //           <option>Belek</option>
// // // // //           <option>Side</option>
// // // // //         </select>
// // // // //         <select className="h-12 px-2 rounded bg-gray-800 text-white">
// // // // //           <option>Yolcu Sayısı Seçin</option>
// // // // //           <option>1</option>
// // // // //           <option>2</option>
// // // // //           <option>3</option>
// // // // //           <option>4+</option>
// // // // //         </select>

// // // // //         <button
// // // // //           onClick={() => navigate("/arac-secimi")}
// // // // //           className="h-12 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded shadow"
// // // // //         >
// // // // //           Ara
// // // // //         </button>
// // // // //       </div>
// // // // //     </div>
// // // // //   );
// // // // // };

// // // // // export default MobileTransferSearch;


// // // // // components/MobileTransferSearch.js
// // // // import React from "react";
// // // // import { useNavigate } from "react-router-dom";

// // // // const MobileTransferSearch = () => {
// // // //   const navigate = useNavigate();

// // // //   return (
// // // //     <div className="block md:hidden bg-black text-white pb-6 px-4">
// // // //       <div className="flex flex-col gap-4 max-w-xs mx-auto bg-gray-900 rounded-xl p-4 shadow-inner">
// // // //         <select className="h-12 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
// // // //           <option>Alış Yeri Seçin</option>
// // // //           <option>Antalya Havalimanı</option>
// // // //           <option>Otogar</option>
// // // //         </select>

// // // //         <select className="h-12 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
// // // //           <option>Bırakış Yeri Seçin</option>
// // // //           <option>Lara</option>
// // // //           <option>Belek</option>
// // // //           <option>Side</option>
// // // //         </select>

// // // //         <select className="h-12 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
// // // //           <option>Yolcu Sayısı Seçin</option>
// // // //           <option>1</option>
// // // //           <option>2</option>
// // // //           <option>3</option>
// // // //           <option>4+</option>
// // // //         </select>

// // // //         <button
// // // //           onClick={() => navigate("/arac-secimi")}
// // // //           className="h-12 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition-transform hover:scale-[1.02]"
// // // //         >
// // // //           Ara
// // // //         </button>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default MobileTransferSearch;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { useFormik } from "formik";
// import * as Yup from "yup";

// const MobileTransferSearch = () => {
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       from: "",
//       to: "",
//       passengers: "",
//     },
//     validationSchema: Yup.object({
//       from: Yup.string().required("Alış yeri zorunlu"),
//       to: Yup.string().required("Bırakış yeri zorunlu"),
//       passengers: Yup.string().required("Yolcu sayısı zorunlu"),
//     }),
//     onSubmit: (values) => {
//       const query = new URLSearchParams(values).toString();
//       navigate(`/arac-secimi?${query}`);
//     },
//   });

//   return (
//     <div className="block md:hidden bg-black text-white pb-6 px-4  pt-2">
//       {/* Diğer Transfer Bölgeleri Butonu */}
     
//       <form
//         onSubmit={formik.handleSubmit}
//         className="flex flex-col gap-4 max-w-xs mx-auto bg-gray-900 rounded-xl p-4 shadow-inner"
//       >
//         <h4 className=" text-center text-lg text-yellow-500 ">
//               DİĞER TRANSFER BÖLGELERİ
//             </h4>
//         {/* Alış Yeri */}
//         <div className="flex flex-col">
//           <select
//             name="from"
//             onChange={formik.handleChange}
//             value={formik.values.from}
//             className="h-12 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             <option value="">Alış Yeri Seçin</option>
//             <option value="Antalya Havalimanı">Antalya Havalimanı</option>
//             <option value="Otogar">Otogar</option>
//           </select>
//           {formik.touched.from && formik.errors.from && (
//             <span className="text-red-400 text-sm mt-1">{formik.errors.from}</span>
//           )}
//         </div>

//         {/* Bırakış Yeri */}
//         <div className="flex flex-col">
//           <select
//             name="to"
//             onChange={formik.handleChange}
//             value={formik.values.to}
//             className="h-12 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             <option value="">Bırakış Yeri Seçin</option>
//             <option value="Lara">Lara</option>
//             <option value="Belek">Belek</option>
//             <option value="Side">Side</option>
//           </select>
//           {formik.touched.to && formik.errors.to && (
//             <span className="text-red-400 text-sm mt-1">{formik.errors.to}</span>
//           )}
//         </div>

//         {/* Yolcu Sayısı */}
//         <div className="flex flex-col">
//           <select
//             name="passengers"
//             onChange={formik.handleChange}
//             value={formik.values.passengers}
//             className="h-12 px-4 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
//           >
//             <option value="">Yolcu Sayısı Seçin</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4+">4+</option>
//           </select>
//           {formik.touched.passengers && formik.errors.passengers && (
//             <span className="text-red-400 text-sm mt-1">{formik.errors.passengers}</span>
//           )}
//         </div>

//         <button
//           type="submit"
//           className="h-12 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg shadow-md transition-transform hover:scale-[1.02]"
//         >
//           Ara
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MobileTransferSearch;



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
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { usePriceData } from "../context/PriceContext";
import { FaMapMarkerAlt, FaUsers, FaSearch } from "react-icons/fa";

const MobileTransferSearch = () => {
  const navigate = useNavigate();
  const { t } = useTranslation("searchbox");
  const prices = usePriceData();

  const [selectedTo, setSelectedTo] = useState("");
  const [passengerCount, setPassengerCount] = useState("1");

  const handleSearch = (e) => {
    e.preventDefault();
    if (!selectedTo) return;
    navigate(
      `/arac-secimi?from=${encodeURIComponent(t("from"))}&to=${encodeURIComponent(
        selectedTo
      )}&passengers=${passengerCount}`
    );
  };

  const regionOptions = Object.keys(prices);

  return (
    <div className="block md:hidden bg-black text-white pb-6 px-4 pt-2">
      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 max-w-xs mx-auto bg-gray-900 rounded-xl p-4 shadow-inner"
      >
        <h4 className="text-center text-lg text-yellow-500">
          {t("otherRegions")}
        </h4>

        {/* Alış Yeri (sabit gösterim) */}
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
          <FaMapMarkerAlt />
          <span className="text-white text-sm">{t("from")}</span>
        </div>

        {/* Bırakış Yeri */}
        <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
          <FaMapMarkerAlt />
          <select
            value={selectedTo}
            onChange={(e) => setSelectedTo(e.target.value)}
            className="bg-transparent text-white w-full focus:outline-none"
          >
            <option value="">{t("toPlaceholder")}</option>
            {regionOptions.map((region, idx) => (
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

export default MobileTransferSearch;
