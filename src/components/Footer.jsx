

import React from "react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <h3 className="text-lg font-bold mb-4 text-center border-b border-gray-700 pb-2">
            {t("services.title")}
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="pb-3 border-b border-gray-700">
              🚗 {t("services.airport")}
            </li>
            <li className="pb-3 border-b border-gray-700">
              🛑 {t("services.private")}
            </li>
            <li className="pb-3 border-b border-gray-700">
              🛎️ {t("services.vip")}
            </li>
            <li className="pb-3 border-b border-gray-700">
              🎒 {t("services.group")}
            </li>
            <li className="pb-3 border-b border-gray-700">
              📍 {t("services.city")}
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-center border-b border-gray-700 pb-2">
            {t("vehicles.title")}
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="pb-3 border-b border-gray-700">
              🚙 {t("vehicles.vito")}
            </li>
            <li className="pb-3 border-b border-gray-700">
              🚘 {t("vehicles.suv")}
            </li>
            <li className="pb-3 border-b border-gray-700">
              🎖️ {t("vehicles.lux")}
            </li>
            <li className="pb-3 border-b border-gray-700">
              📡 {t("vehicles.tracking")}
            </li>
            <li className="pb-3 border-b border-gray-700">
              🍾 {t("vehicles.comfort")}
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4 text-center border-b border-gray-700 pb-2">
            {t("contact.title")}
          </h3>
          <ul className="space-y-4 text-sm">
            <li className="pb-3 border-b border-gray-700">
              📍 {t("contact.location")}
            </li>
            <li className="pb-3 border-b border-gray-700">
              📞 +90 546 570 21 07
            </li>
            <li className="pb-3 border-b border-gray-700">
              📱 +90 546 570 21 07
            </li>
            <li className="pb-3 border-b border-gray-700">
              📧 rezervasyon@antalyaviptransfer.com
            </li>
          </ul>
          <div className="flex space-x-6 mt-6 justify-center">
            <a href="https://wa.me/905465702107">
              <img
                src="/images/7.png"
                alt="Facebook"
                className="h-11 w-11 hover:opacity-80"
              />
            </a>
            <a href="https://wa.me/905465702107">
              <img
                src="/images/8.png"
                alt="Instagram"
                className="h-11 w-11 hover:opacity-80"
              />
            </a>
            <a href="https://wa.me/905465702107">
              <img
                src="/images/10.png"
                alt="WhatsApp"
                className="h-12 w-12 hover:opacity-80"
              />
            </a>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <img
            src="/images/belge.png"
            alt="Belge"
            className="w-full max-w-[250px] h-auto object-contain mx-auto"
          />
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} BoldSoft – {t("rights")}
      </div>
    </footer>
  );
};

export default Footer;
