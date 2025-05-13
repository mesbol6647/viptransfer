export const currencyRates = {
    tr: { symbol: "₺", rate: 45 },
    en: { symbol: "€", rate: 1 },
    ru: { symbol: "$", rate: 1.10 },
    de: { symbol: "€", rate: 1 },
  };

  export const convertPrice = (priceInEuroStr, lang) => {
    const base = parseFloat(priceInEuroStr.replace("€", "").trim());
    const { rate, symbol } = currencyRates[lang] || currencyRates["de"];
    const converted = Math.round(base * rate);
    return `${converted} ${symbol}`;
  };