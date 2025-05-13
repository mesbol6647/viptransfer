

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import useAuthCalls from "../service/useAuthCalls";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import MenuListItems from "../components/MenuListItems";
import Section1 from "../components/Section1";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";
import Stats from "../components/Stats";
import SearchBox from "../components/SearchBox";
import BlogPosts from "../components/BlogPosts";
import TransferOptionsMobile from "../components/TransferOptionsMobile";
import MobileTransferSearch from "../components/MobileTransferSearch";
import VipServices from "../components/VipServices";
import { useTranslation } from "react-i18next";

function Dashboard() {
  const { user } = useSelector((state) => state.auth);
  const { logout } = useAuthCalls();
  const { t } = useTranslation();

  return (
    <>
      <section className="relative w-full">
        {/* === PC Görseli ve Arama Kutusu === */}
        <div
          className="hidden md:block bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/pcbanner4.png')",
            height: "700px",
            width: "100%",
            // marginTop: "100px",
          }}
        >
          <div
            className="absolute inset-0 bg-black/10 flex flex-col items-center text-white text-center px-4"
            style={{ marginTop: "80px" }}
          >
            <h1 className="text-4xl font-bold mb-6">{t("home.title")}</h1>
          </div>

          <div
            className="absolute inset-0 bg-black/10 flex flex-col items-center text-white text-center px-4"
            style={{ marginTop: "650px" }}
          >
            <SearchBox />
          </div>
        </div>

        {/* === Mobil Görsel ve Arama Kutusu === */}
        <div className="block md:hidden relative">
          <img
            src="/images/mobilebanner2.png"
            alt="Mobil VIP Transfer"
            className="w-full h-[680px] object-cover"
            style={{ marginTop: "-80px" }}
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-start pt-[330px] items-center text-white text-center px-4 gap-3">
            {/* Başlık kutusu */}
            <div className="bg-black/60 rounded px-4 py-1 backdrop-blur-sm">
              <h1 className="text-xl font-bold text-white">{t("home.title")}</h1>
            </div>

            {/* Transfer kutuları */}
            <TransferOptionsMobile />

            {/* Fiyat açıklaması */}
            <p className="text-xs text-gray-300 mt-1 italic text-center">
              {t("home.note")}
            </p>

            
          </div>
        </div>
      </section>

      {/* Mobil transfer form bileşeni (siyah zemin) */}
      <MobileTransferSearch />
      <div className="hidden md:block">
        <Section1 />
      </div>
      <VipServices />
      <Testimonials />
      <BlogPosts />
      <Stats />
      <Footer />
    </>
  );
}
export default Dashboard;