/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        mobile: "320px",
        tablet: "700px",
        hd: "1200px",
        "full-hd": "1800px",
        "2k": "2400px",
        "4k": "3400px",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "headline-large-strong": [
          "2.625rem",
          { lineHeight: "3.125rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        "headline-medium-strong": [
          "2.25rem",
          { lineHeight: "2.75rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        "headline-small-strong": [
          "1.75rem",
          { lineHeight: "2.25rem", letterSpacing: "0%", fontWeight: "600" },
        ],
        "headline-extra-small-strong": [
          "1.125rem",
          { lineHeight: "1.625rem", letterSpacing: "0%", fontWeight: "500" },
        ],

        "display-medium-strong": [
          "2rem",
          { lineHeight: "2.5rem", letterSpacing: "0%", fontWeight: "500" },
        ],
        "display-small-strong": [
          "1.375rem",
          { lineHeight: "2.25px", letterSpacing: "0%", fontWeight: "500" },
        ],

        "body-medium": [
          "1rem",
          { lineHeight: "1.625rem", letterSpacing: "0%", fontWeight: "400" },
        ],
        "body-medium-strong": [
          "1rem",
          { lineHeight: "1.5rem", letterSpacing: "0%", fontWeight: "500" },
        ],
        "body-small-strong": [
          "0.875rem",
          { lineHeight: "1.375rem", letterSpacing: "0%", fontWeight: "500" },
        ],
      },
      colors: {
        shadow: {
          light: "var(--shadow-light)",
          dark: "var(--shadow-dark)",
          "dark-medium": "var(--shadow-dark-medium)",
        },
        text: {
          DEFAULT: "var(--text-primary)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          fixed: "var(--primary-fixed)",
          variant: "var(--primary-variant)",
          inverse: "var(--primary-inverse)",
          "inverse-fixed": "var(--primary-inverse-fixed)",
          on: "var(--primary-on)",
          "on-fixed": "var(--primary-on-fixed)",
          "on-variant": "var(--primary-on-variant)",
          opacity: {
            4: "var(--primary-opacity-4)",
            8: "var(--primary-opacity-8)",
            12: "var(--primary-opacity-12)",
            16: "var(--primary-opacity-16)",
            24: "var(--primary-opacity-24)",
            32: "var(--primary-opacity-32)",

            variant: {
              4: "var(--primary-opacity-variant-4)",
              8: "var(--primary-opacity-variant-8)",
              12: "var(--primary-opacity-variant-12)",
              16: "var(--primary-opacity-variant-16)",
              24: "var(--primary-opacity-variant-24)",
              32: "var(--primary-opacity-variant-32)",
            },
          },
        },
        secondary: {
          fixed: "var(--secondary-fixed)",
          "on-fixed": "var(--secondary-on-fixed)",
          "container-fixed": "var(--secondary-container-fixed)",
          "fixed-opacity": {
            4: "var(--secondary-fixed-opacity-4)",
            8: "var(--secondary-fixed-opacity-8)",
            12: "var(--secondary-fixed-opacity-12)",
            16: "var(--secondary-fixed-opacity-16)",
            24: "var(--secondary-fixed-opacity-24)",
            32: "var(--secondary-fixed-opacity-32)",
          },
        },
        outline: {
          DEFAULT: "var(--outline)",
          variant: "var(--outline-variant)",
          inverse: "var(--outline-inverse)",
          "inverse-fixed": "var(--outline-inverse-fixed)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          "inverse-fixed": "var(--surface-inverse-fixed)",
          bright: "var(--surface-bright)",
          container: "var(--surface-container)",
          "container-fixed": "var(--surface-container-fixed)",
          "container-low": "var(--surface-container-low)",
          dim: "var(--surface-dim)",
          variant: "var(--surface-variant)",
        },
        tertiary: {
          "on-fixed": "var(--tertiary-on-fixed)",
          "container-fixed": "var(--tertiary-container-fixed)",
          fixed: "var(--tertiary-fixed)",
        },
      },
      boxShadow: {
        "inner-100-small":
          "inset 4px 4px 8px 0px var(--shadow-light), inset -4px -4px 8px 0px var(--shadow-light)",
        "drop-800-small":
          "4px 4px 8px 0px var(--shadow-dark), -4px -4px 8px 0px var(--shadow-dark)",
        "drop-800-medium":
          "4px 4px 16px 0px var(--shadow-dark-medium), -4px -4px 16px 0px var(--shadow-dark-medium)",
      },
      boxShadow: {
        "inner-100-small":
          "inset 4px 4px 8px 0px rgba(255, 255, 255, 0.04), inset -4px -4px 8px 0px rgba(255, 255, 255, 0.04)",
        "drop-800-small":
          "4px 4px 8px 0px rgba(18, 32, 54, 0.04), -4px -4px 8px 0px rgba(18, 32, 54, 0.04)",
        "drop-800-medium":
          "4px 4px 16px 0px rgba(18, 32, 54, 0.12), -4px -4px 16px 0px rgba(18, 32, 54, 0.12)",
      },
      backdropBlur: {
        medium: "32px",
      },
    },
  },
  plugins: [],
};
