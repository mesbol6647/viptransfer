

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const AddReview = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    name: "",
    rating: "5",
    comment: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.comment || !form.rating) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "comments"), {
        name: form.name.trim(),
        rating: Number(form.rating),
        comment: form.comment.trim(),
        createdAt: serverTimestamp(),
      });

      alert(t("review.alertSuccess") || "Yorum başarıyla gönderildi.");
      setForm({ name: "", rating: "5", comment: "" });
    } catch (error) {
      console.error("Yorum gönderilirken hata:", error);
      alert("Yorum gönderilemedi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {t("review.title") || "Yorum Ekle"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder={t("review.namePlaceholder") || "Adınız Soyadınız"}
            required
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <select
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="5">★★★★★ (5)</option>
            <option value="4">★★★★☆ (4)</option>
            <option value="3">★★★☆☆ (3)</option>
            <option value="2">★★☆☆☆ (2)</option>
            <option value="1">★☆☆☆☆ (1)</option>
          </select>

          <textarea
            name="comment"
            value={form.comment}
            onChange={handleChange}
            placeholder={t("review.commentPlaceholder") || "Yorumunuzu yazın..."}
            required
            rows={4}
            className="w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 rounded-lg"
          >
            {loading ? "Gönderiliyor..." : t("review.submit") || "Gönder"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddReview;
