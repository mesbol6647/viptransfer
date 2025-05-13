
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import data from "../data/vip-service.json";
import Footer from "../components/Footer";

const VipServicePage = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const lang = i18n.language;

  const serviceData = data["vip-services"][slug];
  const service = serviceData ? serviceData[lang] : null;

  if (!service) {
    return (
      <div className="text-white text-center py-24">
        <h1 className="text-2xl font-bold">Hizmet Bulunamadı</h1>
        <p className="text-gray-400 mt-2">Geçersiz bağlantı veya hizmet silinmiş olabilir.</p>
      </div>
    );
  }

  const image = `/images/vip/${slug}.png`;

  return (
    <>
      {/* Kapak Görseli */}
      <div className="relative w-full h-[300px] md:h-[700px] overflow-hidden">
        <img
          src={image}
          alt={service.title}
          className="w-full h-full object-cover brightness-[0.5]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            {service.title}
          </h1>
        </div>
      </div>

      <section className="bg-[#0d1117] text-white py-16 px-6 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <span>✈️</span> {service.title}
          </h1>

          <div className="text-gray-300 leading-relaxed space-y-4">
            {service.content.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {service.details && (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                {service.detailsTitle || "Detaylar"}
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {service.details.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {service.ideal && (
            <div className="mt-10">
              <h2 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                {service.idealTitle || "Kimler için ideal?"}
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {service.ideal.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VipServicePage;
