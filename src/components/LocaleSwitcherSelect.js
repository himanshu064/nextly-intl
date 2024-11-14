"use client";
import { getLocaleFromCookie } from "@/lib/cookieUtls";
import { usePathname, useRouter } from "@/navigation";
import React, { useEffect, useState, useTransition } from "react";

const LocaleSwitcherSelect = ({ children }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [selectedLocale, setSelectedLocale] = useState("en");
  const pathname = usePathname();

  useEffect(() => {
    // Fetch the initial locale from the cookie when the component mounts
    const fetchLocale = async () => {
      const locale = await getLocaleFromCookie();
      setSelectedLocale(locale);
    };
    fetchLocale();
  }, []);

  function onSelectChange(event) {
    const newLocale = event.target.value;
    setSelectedLocale(newLocale); // Update the state with the new locale

    // Set the cookie on the client side
    if (document !== undefined) {
      document.cookie = `locale=${newLocale}; path=/; max-age=31536000`;
    }

    startTransition(() => {
      router.push(pathname);
      router.refresh();
    });
  }

  console.log(selectedLocale, "selectedLocale");

  return (
    <div className="relative inline-block w-full">
      <select
        id="locale-select"
        className={`block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out ${
          isPending ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
        value={selectedLocale} // Use value instead of defaultValue
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
      {isPending && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            className="animate-spin h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v2a6 6 0 100 12v2a8 8 0 01-8-8z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};

export default LocaleSwitcherSelect;
