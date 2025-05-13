// // import React from 'react'

// // const Stats = () => {
// //   return (
// // //     <section className="bg-white dark:bg-gray-900">
// // //   <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
// // //     <div className="mx-auto max-w-3xl text-center">
// // //       <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
// // //         Trusted by eCommerce Businesses
// // //       </h2>

// // //       <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
// // //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione dolores laborum labore
// // //         provident impedit esse recusandae facere libero harum sequi.
// // //       </p>
// // //     </div>

// // //     <div className="mt-8 sm:mt-12">
// // //       <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
// // //         <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
// // //           <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
// // //             Total Sales
// // //           </dt>

// // //           <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-blue-50">$4.8m</dd>
// // //         </div>

// // //         <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
// // //           <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
// // //             Official Addons
// // //           </dt>

// // //           <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-blue-50">24</dd>
// // //         </div>

// // //         <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center dark:bg-blue-700/25">
// // //           <dt className="order-last text-lg font-medium text-gray-500 dark:text-white/75">
// // //             Total Addons
// // //           </dt>

// // //           <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl dark:text-blue-50">86</dd>
// // //         </div>
// // //       </dl>
// // //     </div>
// // //   </div>
// // // </section>
// // <section className="bg-white py-16">
// //   <div className="max-w-screen-xl mx-auto px-4 text-center">
// //     <h2 className="text-4xl font-bold text-gray-900">Binlerce Yolcu Bizi Tercih Ediyor</h2>
// //     <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
// //       Antalya Havalimanı'ndan şehir merkezine ve tatil bölgelerine güvenli, konforlu ve zamanında ulaşım sağlıyoruz.
// //     </p>

// //     <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
// //       <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
// //         <p className="text-3xl font-bold text-blue-600">12.800+</p>
// //         <p className="mt-2 text-gray-600">Gerçekleştirilen Transfer</p>
// //       </div>
// //       <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
// //         <p className="text-3xl font-bold text-blue-600">4.9/5</p>
// //         <p className="mt-2 text-gray-600">Müşteri Memnuniyeti</p>
// //       </div>
// //       <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
// //         <p className="text-3xl font-bold text-blue-600">45+</p>
// //         <p className="mt-2 text-gray-600">Hizmet Verilen Bölge</p>
// //       </div>
// //     </div>
// //   </div>
// // </section>

// //   )
// // }

// // export default Stats

// import React from 'react';
// import { useTranslation } from 'react-i18next';


// const Stats = () => {
//   const { t } = useTranslation();

//   return (
//     <section className="bg-white py-16">
//       <div className="max-w-screen-xl mx-auto px-4 text-center">
//         <h2 className="text-4xl font-bold text-gray-900">
//           {t('stats.title')}
//         </h2>
//         <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
//           {t('stats.description')}
//         </p>

//         <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
//           <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
//             <p className="text-3xl font-bold text-blue-600">12.800+</p>
//             <p className="mt-2 text-gray-600">{t('stats.transfers')}</p>
//           </div>
//           <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
//             <p className="text-3xl font-bold text-blue-600">4.9/5</p>
//             <p className="mt-2 text-gray-600">{t('stats.rating')}</p>
//           </div>
//           <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
//             <p className="text-3xl font-bold text-blue-600">45+</p>
//             <p className="mt-2 text-gray-600">{t('stats.regions')}</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Stats;


import React from 'react';
import { useTranslation } from 'react-i18next';

const Stats = () => {
  const { t } = useTranslation('stats');

  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          {t('title')}
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          {t('description')}
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
            <p className="text-3xl font-bold text-blue-600">12.800+</p>
            <p className="mt-2 text-gray-600">{t('transfers')}</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
            <p className="text-3xl font-bold text-blue-600">4.9/5</p>
            <p className="mt-2 text-gray-600">{t('rating')}</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
            <p className="text-3xl font-bold text-blue-600">45+</p>
            <p className="mt-2 text-gray-600">{t('regions')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
