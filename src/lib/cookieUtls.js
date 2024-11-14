export const getLocaleFromCookie = () => {
  if (document !== "undefined") {
    const match = document.cookie.match(/locale=([^;]+)/);
    return match ? match[1] : "en";
  }
};
