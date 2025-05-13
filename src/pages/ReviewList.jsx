
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import DashboardBlog from "./DashboardBlog";
import Footer from "../components/Footer";

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setReviews(data);
    };

    fetchReviews();
  }, []);

  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = timestamp.toDate();
    return date.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <> 
    <DashboardBlog/>
    <section className="py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Müşteri Yorumları</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between h-full border border-gray-200 hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center font-bold text-lg">
                {review.name?.charAt(0).toUpperCase() || "?"}
              </div>
              <div className="ml-4">
                <p className="font-semibold text-gray-800">{review.name}</p>
                <div className="text-yellow-500">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
              </div>
            </div>
            <p className="text-gray-700 break-words whitespace-pre-line mb-4">{review.comment}</p>
            <p className="text-sm text-gray-500 text-right mt-auto">{formatDate(review.createdAt)}</p>
          </div>
        ))}
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default ReviewList;
