import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { useTranslation } from "react-i18next";
import { convertPrice } from "../utils/currencyRates";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

const ReservationModal = ({ open, onClose, vehicle, from, to, passengers }) => {
  const { t, i18n } = useTranslation("reservations");
  const lang = i18n.language;

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    date: "",
    flightTime: "",
    flightCode: "",
    hotel: "",
    note: "",
    returnTransfer: false,
    babySeat: 0,
    passengerCount: passengers || ""
  });

  const [warning, setWarning] = useState("");
  const [regionPrice, setRegionPrice] = useState("");

  const routeFrom = (from || "Antalya Havalimanı").toUpperCase();
  const routeTo = to ? to : "[VARIŞ NOKTASI SEÇİLMEDİ]";

  useEffect(() => {
    const count = parseInt(formData.passengerCount);
    if ((vehicle.name.includes("Transporter") || vehicle.name.includes("Vito")) && count > 6) {
      setWarning(t("warning"));
    } else {
      setWarning("");
    }
  }, [formData.passengerCount, vehicle, t]);

  useEffect(() => {
    const pricesByRegionAndVehicle = {
      "LARA": { Transporter: "25 €", Vito: "25 €", Sprinter: "35 €" },
  "BELEK": { Transporter: "35 €", Vito: "35 €", Sprinter: "50 €" },
  "BOĞAZKENT": { Transporter: "30 €", Vito: "30 €", Sprinter: "50 €" },
  "SIDE": { Transporter: "35 €", Vito: "35 €", Sprinter: "65 €" },
  "SORGUN T. GÖL": { Transporter: "35 €", Vito: "35 €", Sprinter: "65 €" },
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

    const regionData = pricesByRegionAndVehicle[routeTo.toUpperCase()];
    let rawPrice = "-";
    if (regionData) {
      if (vehicle.name.toLowerCase().includes("transporter")) rawPrice = regionData.Transporter;
      else if (vehicle.name.toLowerCase().includes("vito")) rawPrice = regionData.Vito;
      else if (vehicle.name.toLowerCase().includes("sprinter")) rawPrice = regionData.Sprinter;
    }
    setRegionPrice(rawPrice !== "-" ? convertPrice(rawPrice, lang) : "-");
  }, [routeTo, vehicle, lang]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const sendToWhatsApp = () => {
    if (warning || !formData.passengerCount) return;

    const message =
      `*${t("title")}*\n\n` +
      `*${t("route")}:* ${routeFrom} → ${routeTo}\n` +
      `*${t("passengerCount")}:* ${formData.passengerCount}`;

    const phoneNumber = "905465702107";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style} className="max-h-[90vh] overflow-auto">
        <h2 className="text-xl font-bold mb-4 text-center">{t("title")}</h2>

        <p className="text-sm mb-2 text-gray-700 font-semibold text-center">
          {t("route")}: <span className="text-black font-bold">{routeFrom}</span> → <span className="text-black font-bold">{routeTo}</span>
        </p>

        <div className="flex flex-col text-center">
          <p className="text-xl font-bold text-black whitespace-nowrap">
            {t("priceLabel")}: {regionPrice}
          </p>
          <p className="text-sm font-semibold text-black whitespace-nowrap">
            {t("priceNote")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="number"
            name="passengerCount"
            placeholder={t("passengerCount")}
            className="border p-2 rounded"
            value={formData.passengerCount}
            onChange={handleChange}
            min={1}
            required
          />
        </div>

        {warning && (
          <div className="text-red-600 text-sm font-medium mb-4 text-center">
            ⚠️ {warning}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="fullName"
            placeholder={t("fullName")}
            className="border p-2 rounded"
            value={formData.fullName}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("phone")}
            className="border p-2 rounded"
            value={formData.phone}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder={t("email")}
            className="border p-2 rounded"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            className="border p-2 rounded"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="time"
            name="flightTime"
            className="border p-2 rounded"
            value={formData.flightTime}
            onChange={handleChange}
          />
          <input
            type="text"
            name="flightCode"
            placeholder={t("flightCode")}
            className="border p-2 rounded"
            value={formData.flightCode}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="hotel"
          placeholder={t("hotel")}
          className="border p-2 rounded w-full mt-4"
          value={formData.hotel}
          onChange={handleChange}
        />

        <textarea
          name="note"
          placeholder={t("note")}
          className="border p-2 rounded w-full mt-4"
          rows={3}
          value={formData.note}
          onChange={handleChange}
        />

        <div className="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            name="returnTransfer"
            checked={formData.returnTransfer}
            onChange={handleChange}
          />
          <label>{t("returnTransfer")}</label>
        </div>

        <div className="mt-2">
          <label>{t("babySeat")}:</label>
          <select
            name="babySeat"
            className="border p-2 rounded ml-2"
            value={formData.babySeat}
            onChange={handleChange}
          >
            <option value={0}>0</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
          </select>
        </div>

        <button
          onClick={sendToWhatsApp}
          className="mt-6 w-full bg-red-600 text-white text-xl py-2 rounded hover:bg-green-700"
          disabled={!!warning || !formData.passengerCount}
        >
          {t("complete")}
        </button>
      </Box>
    </Modal>
  );
};

export default ReservationModal;