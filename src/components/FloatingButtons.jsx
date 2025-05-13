import React from "react";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp (Sağ altta) */}
      <div className="fixed bottom-4 right-4 z-50 animate-bounce">
        <a
          href="https://wa.me/905465702107"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/images/10.png"
            alt="WhatsApp"
            className="w-16 h-16 rounded-full shadow-lg"
          />
        </a>
      </div>

      {/* Telefon (Sol altta) */}
      <div className="fixed bottom-4 left-4 z-50 animate-bounce ">
        <a href="tel:+905465702107">
          <img
            src="/images/11.png"
            alt="Ara"
            className="w-16 h-16 rounded-full shadow-lg"
          />
        </a>
      </div>
    </>
  );
};

export default FloatingButtons;
