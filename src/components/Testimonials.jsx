


// import React from "react";
// import { Link } from "react-router-dom";
// import { useTranslation } from "react-i18next";

// const Testimonials = () => {
//   const { t } = useTranslation("testimonials");

//   return (
//     <section className="bg-white">
//       <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
//         <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
//           {t("title")}
//         </h2>

//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {[1, 2, 3].map((_, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-xl shadow-xl border border-gray-100 mt-2 p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300"
//             >
//               <div className="flex items-center gap-4 mb-4">
//                 <img
//                   src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
//                   alt="yorum"
//                   className="w-14 h-14 rounded-full object-cover"
//                 />
//                 <div>
//                   <p className="font-medium text-gray-900">{t("name")}</p>
//                   <p className="text-sm text-yellow-500">★★★★★</p>
//                 </div>
//               </div>
//               <p className="text-gray-700 text-sm">{t("sampleComment")}</p>
//             </div>
//           ))}

//           <div className="bg-white rounded-xl shadow-xl border border-gray-100 mt-2 p-6 flex flex-col justify-center items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
//             <Link
//               to="/yorum"
//               className="w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded"
//             >
//               {t("viewAll")}
//             </Link>
//             <Link
//               to="/yorum-ekle"
//               className="w-full text-center bg-red-600 hover:bg-gray-200 text-white font-bold py-3 px-6 rounded"
//             >
//               {t("addComment")}
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;


import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation("testimonials");

  const reviews = [
    {
      name: "Ahmet Yılmaz",
      comment: "Araç tertemizdi, şoför çok saygılıydı. Kesinlikle tavsiye ederim.",
      rating: 5,
    },
    {
      name: "Emily Johnson",
      comment: "The driver was punctual and very polite. I was really impressed by the service.",
      rating: 4,
    },
    {
      name: "Lukas Schmidt",
      comment: "Sehr bequemer und schneller Transfer. Ich bin sehr zufrieden.",
      rating: 5,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          {t("title")}
        </h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-xl border border-gray-100 mt-2 p-6 flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-yellow-500 text-white flex items-center justify-center font-bold text-lg">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{review.name}</p>
                  <p className="text-sm text-yellow-500">
                    {"★".repeat(review.rating)}
                    {"☆".repeat(5 - review.rating)}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{review.comment}</p>
            </div>
          ))}

          <div className="bg-white rounded-xl shadow-xl border border-gray-100 mt-2 p-6 flex flex-col justify-center items-center gap-4 transition-transform hover:-translate-y-1 duration-300">
            <Link
              to="/yorum"
              className="w-full text-center bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded"
            >
              {t("viewAll")}
            </Link>
            <Link
              to="/yorum-ekle"
              className="w-full text-center bg-red-600 hover:bg-gray-200 text-white font-bold py-3 px-6 rounded"
            >
              {t("addComment")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
