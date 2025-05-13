// import React from "react";
// import {
//   CarFront,
//   PlaneLanding,
//   UserCheck,
//   Users,
//   MapPin,
//   PartyPopper,
//   Ship,
//   Route,
// } from "lucide-react";
// import { Link } from "react-router-dom";

// // Her hizmete ikon + slug eklenmiş hali
// const vipServices = [
//   {
//     title: "Havalimanı - Otel Transferleri",
//     slug: "havalimani-otel-transferleri",
//     icon: <PlaneLanding size={26} />,
//   },
//   {
//     title: "Özel Şoförlü Araç Kiralama",
//     slug: "ozel-soforlu-arac-kiralama",
//     icon: <CarFront size={26} />,
//   },
//   {
//     title: "VIP Karşılama & Özel Asistan",
//     slug: "vip-karsilama-ozel-asistan",
//     icon: <UserCheck size={26} />,
//   },
//   {
//     title: "Grup ve Aile Transferleri",
//     slug: "grup-aile-transferleri",
//     icon: <Users size={26} />,
//   },
//   {
//     title: "Şehir İçi Özel Transferler",
//     slug: "sehir-ici-ozel-transferler",
//     icon: <MapPin size={26} />,
//   },
//   {
//     title: "Gece Kulübü & Eğlence Transferi",
//     slug: "gece-kulubu-eglence-transferi",
//     icon: <PartyPopper size={26} />,
//   },
//   {
//     title: "Yat / Marina Transferi",
//     slug: "yat-marina-transferi",
//     icon: <Ship size={26} />,
//   },
//   {
//     title: "Uzun Mesafe Özel Transferler",
//     slug: "uzun-mesafe-transferleri",
//     icon: <Route size={26} />,
//   },
// ];

// const VipServices = () => {
//   return (
//     <section className="bg-black text-white py-16 px-4">
//       <div className="max-w-screen-xl mx-auto">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold mb-2">VIP Transfer Hizmetleri</h2>
//           <div className="w-24 h-1 bg-yellow-500 mx-auto" />
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {vipServices.map((service, i) => (
//             <Link
//               key={i}
//               to={`/vip/${service.slug}`}
//               className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-2 bg-[#1d2738] hover:bg-[#2c3a4f] border border-gray-700 rounded-xl px-4 py-6 transition duration-200 shadow-sm h-full"
//             >
//               <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-black">
//                 {service.icon}
//               </div>
//               <span className="text-sm md:text-base lg:text-lg font-semibold mt-1 md:mt-0">
//                 {service.title}
//               </span>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VipServices;


import React from "react";
import {
  CarFront,
  PlaneLanding,
  UserCheck,
  Users,
  MapPin,
  PartyPopper,
  Ship,
  Route,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const VipServices = () => {
  const { t } = useTranslation();

  const vipServices = [
    {
      title: t("vipServices.1"),
      slug: "havalimani-otel-transferleri",
      icon: <PlaneLanding size={26} />,
    },
    {
      title: t("vipServices.2"),
      slug: "ozel-soforlu-arac-kiralama",
      icon: <CarFront size={26} />,
    },
    {
      title: t("vipServices.3"),
      slug: "vip-karsilama-ozel-asistan",
      icon: <UserCheck size={26} />,
    },
    {
      title: t("vipServices.4"),
      slug: "grup-aile-transferleri",
      icon: <Users size={26} />,
    },
    {
      title: t("vipServices.5"),
      slug: "sehir-ici-ozel-transferler",
      icon: <MapPin size={26} />,
    },
    {
      title: t("vipServices.6"),
      slug: "gece-kulubu-eglence-transferi",
      icon: <PartyPopper size={26} />,
    },
    {
      title: t("vipServices.7"),
      slug: "yat-marina-transferi",
      icon: <Ship size={26} />,
    },
    {
      title: t("vipServices.8"),
      slug: "uzun-mesafe-transferleri",
      icon: <Route size={26} />,
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{t("vipServices.title")}</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {vipServices.map((service, i) => (
            <Link
              key={i}
              to={`/vip/${service.slug}`}
              className="flex flex-col md:flex-row items-center justify-center md:justify-start text-center md:text-left gap-2 bg-[#1d2738] hover:bg-[#2c3a4f] border border-gray-700 rounded-xl px-4 py-6 transition duration-200 shadow-sm h-full"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-black">
                {service.icon}
              </div>
              <span className="text-sm md:text-base lg:text-lg font-semibold mt-1 md:mt-0">
                {service.title}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipServices;
