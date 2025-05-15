

// import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
// import AracDetayModal from "../components/AracDetayModal";
// import ReservationModal from "../components/ReservationModal";
// import { usePriceData } from "../context/PriceContext";
// import { useTranslation } from "react-i18next";
// import Footer from "../components/Footer";
// import { convertPrice } from "../utils/currencyRates";

// const vehicles = [
//   {
//     name: "Volkswagen Transporter / 6 Pax",
//     key: "Transporter",
//     price: 1550,
//     img: [
//       "/images/vehicles/transporter.jpg",
//       "/images/vehicles/traffic2.png",
//       "/images/vehicles/transdetay1.jpeg",
//       "/images/vehicles/transdetay2.jpeg",
//     ],
//     capacity: 6,
//     luggage: 6,
//   },
//   {
//     name: "MercedesBenz Vito 1 / 6 Pax",
//     key: "Vito",
//     price: 1600,
//     img: [
//       "/images/mercedes9.png",
//       "/images/vehicles/mercedes8.png",
//       "/images/vehicles/vitodetay1.png",
//       "/images/vehicles/vitodetay2.png",
//     ],
//     capacity: 6,
//     luggage: 6,
//   },
//   {
//     name: "Mercedes-Benz Sprinter 1 / 14 Pax",
//     key: "Sprinter",
//     price: 2750,
//     img: [
//       "/images/vehicles/sprinter.png",
//       "/images/vehicles/sprinterdetay3.png",
//       "/images/vehicles/sprinterdetay1.png",
//       "/images/vehicles/sprinterdetay2.png",
//     ],
//     capacity: 14,
//     luggage: 14,
//   },
// ];

// const AracSecimi = () => {
//   const { t, i18n } = useTranslation();
//   const lang = i18n.language;
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const from = queryParams.get("from");
//   const to = queryParams.get("to") || queryParams.get("bolge");
//   const passengers = queryParams.get("passengers");
//   const pricesByRegionAndVehicle = usePriceData();
//   const selected = location.state;

//   const [openModal, setOpenModal] = useState(false);
//   const [openReservation, setOpenReservation] = useState(false);
//   const [selectedVehicle, setSelectedVehicle] = useState(null);

//   const handleOpenModal = (vehicle) => {
//     setSelectedVehicle(vehicle);
//     setOpenModal(true);
//   };

//   const handleCloseModal = () => {
//     setOpenModal(false);
//     setSelectedVehicle(null);
//   };

//   const handleOpenReservation = (vehicle) => {
//     setSelectedVehicle(vehicle);
//     setOpenReservation(true);
//   };

//   const handleCloseReservation = () => {
//     setOpenReservation(false);
//     setSelectedVehicle(null);
//   };

//   const filteredVehicles = vehicles.filter((vehicle) =>
//     passengers === "4+"
//       ? vehicle.capacity >= 4
//       : vehicle.capacity >= parseInt(passengers || "1")
//   );

//   // ✅ 3 ayrı kaynaktan bölge anahtarını belirle
//   const regionKey =
//     selected?.bolge?.toUpperCase() ||
//     to?.toUpperCase() ||
//     selected?.location?.split("-")[1]?.trim().toUpperCase();

//   return (
//     <>
//       <section className="relative w-full">
//         <div
//           className="hidden md:block bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: "url('/images/three2.png')",
//             height: "670px",
//             width: "100%",
//           }}
//         />
//         <div
//           className="block md:hidden relative h-[400px] bg-cover bg-center bg-no-repeat"
//           style={{ backgroundImage: "url('/images/mobilebanner4.png')" }}
//         />
//       </section>

//       <section className="max-w-screen-xl mx-auto px-4 py-12">
//         {selected?.location && selected?.price && (
//           <div className="bg-orange-500 text-black text-center py-4 text-2xl font-bold rounded-lg mb-8">
//             {selected.location} - Fiyat: {convertPrice(selected.price, lang)}
//           </div>
//         )}

// <h2 className="text-2xl font-bold text-center mb-8">
//   {from && to ? (
//     <>
//       {from} → {to}{" "}
//       {passengers && `(${passengers} ${t("vehicle.passenger")})`}{" "}
//       {t("vehicle.selection")}
//     </>
//   ) : (
//     t("vehicle.selection")
//   )}
// </h2>

//         <div className="flex flex-col md:flex-row md:gap-6 md:overflow-x-auto pb-4 px-1">
//           {filteredVehicles.map((vehicle, index) => {
//             const rawPrice =
//               pricesByRegionAndVehicle?.[regionKey]?.[vehicle.key] || "-";
//             const shownPrice =
//               rawPrice === "-" ? "-" : convertPrice(rawPrice, lang);

//             return (
//               <div
//                 key={index}
//                 className="w-full md:min-w-[350px] md:max-w-[400px] bg-white border rounded-lg shadow-md flex flex-col overflow-hidden mb-6 md:mb-0"
//               >
//                 <div className="relative w-full">
//                   <img
//                     src={vehicle.img[0]}
//                     alt={vehicle.name}
//                     className="w-full h-52 object-cover"
//                   />
//                   <div className="absolute bottom-2 left-2 bg-orange-500 text-white font-bold px-3 py-1 rounded">
//                     {shownPrice}
//                   </div>
//                 </div>

//                 <div className="p-4 flex flex-col flex-1 justify-between">
//                   <div>
//                     <h3 className="text-xl font-semibold mb-2">
//                       {vehicle.name}
//                     </h3>
//                     <p className="text-sm text-gray-600 mb-2">
//                       🛈 {t("vehicle.priceNote")}
//                     </p>
//                     <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-4">
//                       <span>
//                         👥 {vehicle.capacity} {t("vehicle.capacity")}
//                       </span>
//                       <span>
//                         📦 {vehicle.luggage} {t("vehicle.luggage")}
//                       </span>
//                       <span>🚗 {t("vehicle.driver")}</span>
//                     </div>
//                   </div>

//                   <div className="flex gap-4 mt-auto">
//                     <button
//                       onClick={() => handleOpenReservation(vehicle)}
//                       className="bg-black text-white w-[50%] py-2 rounded-full hover:bg-gray-800 transition"
//                     >
//                       {t("vehicle.select")}
//                     </button>
//                     <button
//                       onClick={() => handleOpenModal(vehicle)}
//                       className="bg-orange-500 text-white w-[50%] py-2 rounded-full hover:bg-orange-600 transition"
//                     >
//                       {t("vehicle.details")}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </section>

//       {openModal && selectedVehicle && (
//         <AracDetayModal
//           open={openModal}
//           onClose={handleCloseModal}
//           images={selectedVehicle.img}
//         />
//       )}

//       {openReservation && selectedVehicle && (
//         <ReservationModal
//           open={openReservation}
//           onClose={handleCloseReservation}
//           vehicle={selectedVehicle}
//           from={from}
//           to={to}
//           passengers={passengers}
//         />
//       )}
//       <Footer />
//     </>
//   );
// };

// export default AracSecimi;


import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import AracDetayModal from "../components/AracDetayModal";
import ReservationModal from "../components/ReservationModal";
import { usePriceData } from "../context/PriceContext";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import { convertPrice } from "../utils/currencyRates";

const vehicles = [
  {
    name: "Volkswagen Transporter / 6 Pax",
    key: "Transporter",
    price: 1550,
    img: [
      "/images/vehicles/transporter.jpg",
      "/images/vehicles/traffic2.png",
      "/images/vehicles/transdetay1.jpeg",
      "/images/vehicles/transdetay2.jpeg",
    ],
    capacity: 6,
    luggage: 6,
  },
  {
    name: "MercedesBenz Vito 1 / 6 Pax",
    key: "Vito",
    price: 1600,
    img: [
      "/images/mercedes9.png",
      "/images/vehicles/mercedes8.png",
      "/images/vehicles/vitodetay1.png",
      "/images/vehicles/vitodetay2.png",
    ],
    capacity: 6,
    luggage: 6,
  },
  {
    name: "Mercedes-Benz Sprinter 1 / 14 Pax",
    key: "Sprinter",
    price: 2750,
    img: [
      "/images/vehicles/sprinter.png",
      "/images/vehicles/sprinterdetay3.png",
      "/images/vehicles/sprinterdetay1.png",
      "/images/vehicles/sprinterdetay2.png",
    ],
    capacity: 14,
    luggage: 14,
  },
];

const AracSecimi = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const from = queryParams.get("from");
  const to = queryParams.get("to") || queryParams.get("bolge");
  const passengers = queryParams.get("passengers");
  const pricesByRegionAndVehicle = usePriceData();
  const selected = location.state;

  const [openModal, setOpenModal] = useState(false);
  const [openReservation, setOpenReservation] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const handleOpenModal = (vehicle) => {
    setSelectedVehicle(vehicle);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedVehicle(null);
  };

  const handleOpenReservation = (vehicle) => {
    setSelectedVehicle(vehicle);
    setOpenReservation(true);
  };

  const handleCloseReservation = () => {
    setOpenReservation(false);
    setSelectedVehicle(null);
  };

  // ✅ Yolcu kapasitesine göre araç filtrele
  const filteredVehicles = vehicles.filter((vehicle) =>
    passengers === "4+"
      ? vehicle.capacity >= 4
      : vehicle.capacity >= parseInt(passengers || "1")
  );

  // ✅ Antalya Havalimanı çift yön mantığına göre fiyat için anahtar belirle
  let regionKey = null;
  if (from === "Antalya Havalimanı") {
    regionKey = to?.toUpperCase();
  } else if (to === "Antalya Havalimanı") {
    regionKey = from?.toUpperCase();
  }

  return (
    <>
      <section className="relative w-full">
        <div
          className="hidden md:block bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/three2.png')",
            height: "670px",
            width: "100%",
          }}
        />
        <div
          className="block md:hidden relative h-[400px] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/mobilebanner4.png')" }}
        />
      </section>

      <section className="max-w-screen-xl mx-auto px-4 py-12">
        {selected?.location && selected?.price && (
          <div className="bg-orange-500 text-black text-center py-4 text-2xl font-bold rounded-lg mb-8">
            {selected.location} - Fiyat: {convertPrice(selected.price, lang)}
          </div>
        )}

        <h2 className="text-2xl font-bold text-center mb-8">
          {from && to ? (
            <>
              {from} → {to}{" "}
              {passengers && `(${passengers} ${t("vehicle.passenger")})`}{" "}
              {t("vehicle.selection")}
            </>
          ) : (
            t("vehicle.selection")
          )}
        </h2>

        <div className="flex flex-col md:flex-row md:gap-6 md:overflow-x-auto pb-4 px-1">
          {filteredVehicles.map((vehicle, index) => {
            const rawPrice =
              regionKey && pricesByRegionAndVehicle?.[regionKey]?.[vehicle.key];
            const shownPrice = rawPrice ? convertPrice(rawPrice, lang) : "-";

            return (
              <div
                key={index}
                className="w-full md:min-w-[350px] md:max-w-[400px] bg-white border rounded-lg shadow-md flex flex-col overflow-hidden mb-6 md:mb-0"
              >
                <div className="relative w-full">
                  <img
                    src={vehicle.img[0]}
                    alt={vehicle.name}
                    className="w-full h-52 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-orange-500 text-white font-bold px-3 py-1 rounded">
                    {shownPrice}
                  </div>
                </div>

                <div className="p-4 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {vehicle.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      🛈 {t("vehicle.priceNote")}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-700 mb-4">
                      <span>
                        👥 {vehicle.capacity} {t("vehicle.capacity")}
                      </span>
                      <span>
                        📦 {vehicle.luggage} {t("vehicle.luggage")}
                      </span>
                      <span>🚗 {t("vehicle.driver")}</span>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <button
                      onClick={() => handleOpenReservation(vehicle)}
                      className="bg-black text-white w-[50%] py-2 rounded-full hover:bg-gray-800 transition"
                    >
                      {t("vehicle.select")}
                    </button>
                    <button
                      onClick={() => handleOpenModal(vehicle)}
                      className="bg-orange-500 text-white w-[50%] py-2 rounded-full hover:bg-orange-600 transition"
                    >
                      {t("vehicle.details")}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {openModal && selectedVehicle && (
        <AracDetayModal
          open={openModal}
          onClose={handleCloseModal}
          images={selectedVehicle.img}
        />
      )}

      {openReservation && selectedVehicle && (
        <ReservationModal
          open={openReservation}
          onClose={handleCloseReservation}
          vehicle={selectedVehicle}
          from={from}
          to={to}
          passengers={passengers}
        />
      )}

      <Footer />
    </>
  );
};

export default AracSecimi;
