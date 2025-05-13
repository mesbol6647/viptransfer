// import React from "react";
// import DashboardBlog from "../pages/DashboardBlog";
// import Footer from "../components/Footer";

// const AboutPage = () => {
//   return (
//     <> 
//     <DashboardBlog />
//     <section className="bg-white text-gray-800 py-16 px-6">
//       <div className="max-w-4xl mx-auto space-y-10">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold mb-4 text-black">
//             Antalya Air VIP Transfer – Lüks, Konfor ve Güvenliğin Buluşma Noktası
//           </h1>
//           <p className="text-lg">
//             Antalya Air, yalnızca bir transfer firması değil; yolculuğunuzun her anını ayrıcalıklı kılan bir VIP yaşam deneyimidir. Antalya Havalimanı başta olmak üzere, Türkiye’nin gözde tatil beldelerine sunduğumuz özel transfer hizmetleri ile sektörde kalite çıtasını yükseltiyoruz.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">🎯 Misyonumuz</h2>
//           <p>Lüks ve prestiji herkes için ulaşılabilir kılarak, yolculuğun sadece varış noktası değil, başlı başına bir deneyim olduğunu kanıtlamak.</p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">👁 Vizyonumuz</h2>
//           <p>Antalya’nın sınırlarını aşarak, Türkiye genelinde ve uluslararası arenada VIP transferde örnek gösterilen bir marka olmak.</p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">🚘 Neden Antalya Air VIP Transfer?</h2>
//           <ul className="list-disc list-inside space-y-2">
//             <li>Sektörün en modern VIP araç filosu</li>
//             <li>Her zaman dakik ve planlı hizmet</li>
//             <li>Profesyonel ve güvenilir şoför kadrosu</li>
//             <li>Hijyen ve güvenlik standartlarında yüksek kalite</li>
//             <li>Misafir memnuniyeti odaklı yaklaşım</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">🛬 Nerelerdeyiz?</h2>
//           <p>Antalya Havalimanı, Belek, Side, Alanya, Kemer, Kaş, Kalkan, Manavgat, yat limanları, özel klinikler ve daha fazlası.</p>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">💼 Kimler Bizi Tercih Ediyor?</h2>
//           <ul className="list-disc list-inside space-y-2">
//             <li>Kalabalık aileler</li>
//             <li>Balayı çiftleri</li>
//             <li>Sanatçılar ve influencer'lar</li>
//             <li>Uluslararası iş insanları</li>
//             <li>Protokol konukları</li>
//           </ul>
//         </div>

//         <div>
//           <h2 className="text-2xl font-semibold mb-3">💬 Son Söz</h2>
//           <p>
//             Antalya Air VIP Transfer ile yola çıkmak, konforun ve güvenin adım adım hissedildiği bir deneyime davet edilmektir. Antalya’da tatil sadece otelde başlamaz. VIP transfer, konaklamanıza varmadan önce size “tatildeyim” duygusunu yaşatır.
//           </p>
//         </div>

//         <div className="text-center pt-6 border-t mt-10">
//           <p className="text-sm text-gray-600">
//             📞 7/24 destek hattı | 📧 info@antalyaair.com | 🌐 www.antalyaair.com
//           </p>
//         </div>
//       </div>
//     </section>
//     <Footer />
//     </>
//   );
// };

// export default AboutPage;


import React from "react";
import DashboardBlog from "../pages/DashboardBlog";
import Footer from "../components/Footer";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <DashboardBlog />
      <section className="bg-white text-gray-800 py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-black">
              {t("about.title")}
            </h1>
            <p className="text-lg">{t("about.intro")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("about.mission.title")}</h2>
            <p>{t("about.mission.desc")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("about.vision.title")}</h2>
            <p>{t("about.vision.desc")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("about.why.title")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("about.why.item1")}</li>
              <li>{t("about.why.item2")}</li>
              <li>{t("about.why.item3")}</li>
              <li>{t("about.why.item4")}</li>
              <li>{t("about.why.item5")}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("about.locations.title")}</h2>
            <p>{t("about.locations.desc")}</p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("about.clients.title")}</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>{t("about.clients.item1")}</li>
              <li>{t("about.clients.item2")}</li>
              <li>{t("about.clients.item3")}</li>
              <li>{t("about.clients.item4")}</li>
              <li>{t("about.clients.item5")}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">{t("about.closing.title")}</h2>
            <p>{t("about.closing.desc")}</p>
          </div>

          <div className="text-center pt-6 border-t mt-10">
            <p className="text-sm text-gray-600">{t("about.contact")}</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AboutPage;
