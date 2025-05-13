
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import blog2 from "../assets/blog/blog2.png";
import blog4 from "../assets/blog/blog4.png";
import blog1 from "../assets/blog/blog1.png";
import blog3 from "../assets/blog/blog3.png";
import blog5 from "../assets/blog/blog5.png";
import blog6 from "../assets/blog/blog6.png";
import blog7 from "../assets/blog/blog7.png";
import blog8 from "../assets/blog/blog8.png";
import blog9 from "../assets/blog/blog9.png";

const VipTransferBlog = () => {
  const { t } = useTranslation();

  const blogPosts = [
    {
      id: 1,
      image: blog4,
      author: "Antalya Air Team",
      date: "6 Mayıs 2025",
      title: t("blog.1.title"),
      description: t("blog.1.description"),
    },
    {
      id: 2,
      image: blog2,
      author: "Antalya Air Team",
      date: "4 Mayıs 2025",
      title: t("blog.2.title"),
      description: t("blog.2.description"),
    },
    {
      id: 3,
      image: blog1,
      author: "Antalya Air Team",
      date: "2 Mayıs 2025",
      title: t("blog.3.title"),
      description: t("blog.3.description"),
    },
    {
      id: 4,
      image: blog3,
      author: "Antalya Air Team",
      date: "7 Mayıs 2025",
      title: t("blog.4.title"),
      description: t("blog.4.description"),
    },
    {
      id: 5,
      image: blog5,
      author: "Antalya Air Team",
      date: "8 Mayıs 2025",
      title: t("blog.5.title"),
      description: t("blog.5.description"),
    },
    {
      id: 6,
      image: blog6,
      author: "Antalya Air Team",
      date: "8 Mayıs 2025",
      title: t("blog.6.title"),
      description: t("blog.6.description"),
    },
    {
      id: 7,
      image: blog7,
      author: "Antalya Air Team",
      date: "9 Mayıs 2025",
      title: t("blog.7.title"),
      description: t("blog.7.description"),
    },
    {
      id: 8,
      image: blog9,
      author: "Antalya Air Team",
      date: "9 Mayıs 2025",
      title: t("blog.8.title"),
      description: t("blog.8.description"),
    },
    {
      id: 9,
      image: blog8,
      author: "Antalya Air Team",
      date: "10 Mayıs 2025",
      title: t("blog.9.title"),
      description: t("blog.9.description"),
    },
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Antalya Air VIP Transfer Blog
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200"
            >
              <Link to={`/blog/${post.id}`}>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full object-cover mt-2"
                  style={{ height: "192px" }}
                />
              </Link>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <div className="text-sm text-gray-500">
                  {post.date} | {post.author}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VipTransferBlog;
