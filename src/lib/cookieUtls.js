export const getLocaleFromCookie = () => {
  if (typeof document !== "undefined") {
    const match = document.cookie.match(/locale=([^;]+)/);
    return match ? match[1] : "en";
  }
};
