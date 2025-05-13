
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { usePriceData } from "../context/PriceContext"; // 🔥
import { convertPrice } from "../utils/currencyRates"; 
import i18n from "i18next"; // 🔥

const destinations = [
  { title: "Antalya Havalimanı - Belek", image: "/images/transfer/2.png" },
  { title: "Antalya Havalimanı - Kalkan", image: "/images/transfer/3.png" },
  { title: "Antalya Havalimanı - Lara", image: "/images/transfer/4.png" },
  { title: "Antalya Havalimanı - Konyaaltı", image: "/images/transfer/5.png" },
  { title: "Antalya Havalimanı - Side", image: "/images/transfer/6.png" },
  { title: "Antalya Havalimanı - Alanya", image: "/images/transfer/1.png" },
  { title: "Antalya Havalimanı - Kemer", image: "/images/transfer/7.png" },
  { title: "Antalya Havalimanı - Tekirova", image: "/images/transfer/8.png" },
  { title: "Antalya Havalimanı - Manavgat", image: "/images/transfer/9.png" },
  { title: "Antalya Havalimanı - Beldibi", image: "/images/transfer/10.png" }
];

const Section1 = () => {
  const { t } = useTranslation("section1");
  const pricesByRegionAndVehicle = usePriceData();

  // Fiyatları PriceContext’ten çekmek için bölge key'ini al
  const parseRegionKey = (title) =>
    title.split("-")[1].trim().toUpperCase(); // örnek: "BELEK"

  // Sadece PriceContext’te tanımlı bölgelere filtrele
  const filteredDestinations = destinations
    .map((dest) => {
      const regionKey = parseRegionKey(dest.title);
      const regionPrices = pricesByRegionAndVehicle?.[regionKey];
      const vehicleKey = regionPrices && Object.keys(regionPrices)[0];
      const price = regionPrices?.[vehicleKey];
      return price
        ? {
            ...dest,
            price,
            regionKey,
          }
        : null;
    })
    .filter(Boolean);

  return (
    <section className="bg-gray-900 text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg text-center mb-12">
          <h4 className="text-2xl font-bold sm:text-3xl">{t("title")}</h4>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((dest, i) => (
            <Link
              key={i}
              to={`/arac-secimi?from=Antalya Havalimanı&to=${dest.regionKey}`}
              className="relative h-64 rounded-xl overflow-hidden shadow-lg border border-gray-800 group block"
            >
              <img
                src={dest.image}
                alt={dest.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 w-full bg-[#050b16] bg-opacity-90 h-[55px] flex justify-between items-center px-3">
                <h3 className="text-white text-xl font-semibold truncate">
                  {dest.title}
                </h3>
                <span className="text-yellow-400 text-2xl font-bold">
  {convertPrice(dest.price, i18n.language)}
</span>
              </div>
            </Link>
          ))}

          <Link
            to="/bolgeler"
            className="relative h-64 rounded-xl overflow-hidden shadow-lg border border-gray-800 group block"
          >
            <img
              src="/images/transfer/fsd.png"
              alt="Tüm Bölgeler"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-0 w-full bg-[#050b16] bg-opacity-90 h-[55px] flex justify-between items-center px-3">
              <h3 className="text-white text-xl font-semibold">
                {t("otherRegions")}
              </h3>
              <p className="text-yellow-400 text-2xl font-semibold underline">
                {t("clickHere")}
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Section1;
