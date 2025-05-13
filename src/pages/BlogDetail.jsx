

import React from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import DashboardBlog from "./DashboardBlog";
import blogDataTr from "../data/blog-post.tr.json";
import blogDataEn from "../data/blog-post.en.json";
import blogDataDe from "../data/blog-post.de.json";
import blogDataRu from "../data/blog-post.ru.json"; // Rusça veriyi içe aktar
import { useTranslation } from "react-i18next";

const BlogDetail = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();

  let blogData;

  if (i18n.language === "en") {
    blogData = blogDataEn;
  } else if (i18n.language === "de") {
    blogData = blogDataDe;
  } else if (i18n.language === "ru") {
    blogData = blogDataRu;
  } else {
    blogData = blogDataTr;
  }

  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="text-center text-red-500 py-20">
        {i18n.language === "en"
          ? "Blog not found"
          : i18n.language === "de"
          ? "Blog nicht gefunden"
          : i18n.language === "ru"
          ? "Блог не найден"
          : "Blog bulunamadı"}
      </div>
    );
  }

  return (
    <>
      <DashboardBlog />
      <div className="max-w-screen-md mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

        {post.sections.map((section, index) => (
          <div key={index} className="mb-10">
            {section.heading && (
              <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
            )}

            {section.paragraphs && (
              <div className="space-y-4 text-gray-800 leading-relaxed">
                {section.paragraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            )}

            {section.bulletPoints && (
              <ul className="list-disc list-inside space-y-2 text-gray-800 mt-4">
                {section.bulletPoints.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;
