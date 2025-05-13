// // // import React from "react";
// // // import DashboardBlog from "./DashboardBlog";

// // // const faqs = [
// // //   {
// // //     question: "VIP transfer nedir?",
// // //     answer: "VIP transfer, size özel, konforlu ve sürücülü ulaşım hizmetidir. Başkalarıyla paylaşılmaz.",
// // //   },
// // //   {
// // //     question: "Araçlarımız hangi havalimanından hizmet veriyor?",
// // //     answer: "Antalya Havalimanı çıkışlı tüm otel ve turistik bölgelere transfer sağlıyoruz.",
// // //   },
// // //   {
// // //     question: "Araç içinde içecek ikramı oluyor mu?",
// // //     answer: "Evet, araçlarımızda soğuk içecek ve su ikramı bulunmaktadır.",
// // //   },
// // //   {
// // //     question: "Bebek koltuğu mevcut mu?",
// // //     answer: "Evet. Rezervasyon sırasında talep edebilirsiniz.",
// // //   },
// // //   {
// // //     question: "Transfer ücretleri kişi başı mı?",
// // //     answer: "Hayır, fiyatlarımız araç bazlıdır. Kişi sayısına göre değişmez.",
// // //   },
// // //   {
// // //     question: "Sürücüleriniz yabancı dil biliyor mu?",
// // //     answer: "Evet, İngilizce bilen sürücülerimiz mevcuttur.",
// // //   },
// // //   {
// // //     question: "Gece geç saatlerde de hizmet veriyor musunuz?",
// // //     answer: "Evet. 7/24 transfer hizmetimiz vardır.",
// // //   },
// // //   {
// // //     question: "Ne kadar önceden rezervasyon yapmalıyım?",
// // //     answer: "En geç 12 saat önceden yapmanız önerilir.",
// // //   },
// // //   {
// // //     question: "İptal durumunda ücret iadesi yapılır mı?",
// // //     answer: "En az 24 saat önceden iptal edilen rezervasyonlarda tam iade yapılır.",
// // //   },
// // //   {
// // //     question: "Valiz sınırı var mı?",
// // //     answer: "Araç modeline göre bagaj kapasitesi vardır. Örneğin Sprinter 10+ bagaj alabilir.",
// // //   },
// // //   {
// // //     question: "Şoför bilgisi ne zaman paylaşılır?",
// // //     answer: "Transfer saatinden 2 saat önce WhatsApp üzerinden şoför bilgileri iletilir.",
// // //   },
// // //   {
// // //     question: "Araçlarınız sigortalı mı?",
// // //     answer: "Evet. Tüm araçlarımız ve yolcularımız sigortalanmıştır.",
// // //   },
// // // ];

// // // const FaqPage = () => {
// // //   return (
// // //     <> 
// // //     <DashboardBlog />
// // //     <section className="max-w-screen-lg mx-auto px-4 py-12">
// // //       <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">Sık Sorulan Sorular</h1>
// // //       <div className="space-y-6">
// // //         {faqs.map((item, index) => (
// // //           <div key={index} className="border-b pb-4">
// // //             <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
// // //             <p className="text-gray-700">{item.answer}</p>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     </section>
// // //     </>
// // //   );
// // // };

// // // export default FaqPage;


// // import React from "react";
// // import DashboardBlog from "./DashboardBlog";
// // import { useTranslation } from "react-i18next";

// // const FaqPage = () => {
// //   const { t } = useTranslation();

// //   const faqs = t("faq.items", { returnObjects: true });

// //   return (
// //     <>
// //       <DashboardBlog />
// //       <section className="max-w-screen-lg mx-auto px-4 py-12">
// //         <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
// //           {t("faq.title")}
// //         </h1>
// //         <div className="space-y-6">
// //           {faqs.map((item, index) => (
// //             <div key={index} className="border-b pb-4">
// //               <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
// //               <p className="text-gray-700">{item.answer}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </section>
// //     </>
// //   );
// // };

// // export default FaqPage;


// import React from "react";
// import { useTranslation } from "react-i18next";
// import DashboardBlog from "./DashboardBlog";

// const FaqPage = () => {
//   const { t } = useTranslation();

//   const faqs = t("faq.items", { returnObjects: true });
//   const title = t("faq.title");

//   return (
//     <>
//       <DashboardBlog />
//       <section className="max-w-screen-lg mx-auto px-4 py-12">
//         <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
//           {title}
//         </h1>
//         <div className="space-y-6">
//           {faqs.map((item, index) => (
//             <div key={index} className="border-b pb-4">
//               <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
//               <p className="text-gray-700">{item.answer}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default FaqPage;


import React from "react";
import { useTranslation } from "react-i18next";
import DashboardBlog from "./DashboardBlog";

const FaqPage = () => {
  const { t } = useTranslation();

  const title = t("faq.title", "FAQ");

  const rawItems = t("faq.items", { returnObjects: true });

  // Eğer array değilse boş array ata
  const faqs = Array.isArray(rawItems) ? rawItems : [];

  return (
    <>
      <DashboardBlog />
      <section className="max-w-screen-lg mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-center mb-8 text-orange-600">
          {title}
        </h1>
        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">{item.question}</h3>
              <p className="text-gray-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default FaqPage;
