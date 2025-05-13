import i18n from "i18next";

const LanguageSwitcher = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <img src="/flags/tr.png" alt="Türkçe" onClick={() => changeLanguage('tr')} width={30} style={{ cursor: "pointer" }} />
      <img src="/flags/en.png" alt="English" onClick={() => changeLanguage('en')} width={30} style={{ cursor: "pointer" }} />
      <img src="/flags/de.png" alt="Deutsch" onClick={() => changeLanguage('de')} width={30} style={{ cursor: "pointer" }} />
      <img src="/flags/ru.png" alt="Русский" onClick={() => changeLanguage('ru')} width={30} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default LanguageSwitcher;
