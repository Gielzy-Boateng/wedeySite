/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      wedey: "Poppins",
    },
    screens: {
      tablet: "450px",
      // => @media (min-width: 450px) { ... }

      laptop: "530px",
      // => @media (min-width: 530px) { ... }

      bgLaptop: "620px",
      // => @media (min-width: 620px) { ... }
      smDesktop: "720px",
      // => @media (min-width: 720px) { ... }
      mdDesktop: "850px",
      // => @media (min-width: 850px) { ... }

      desktop: "1230px",
      // => @media (min-width: 1230px) { ... }
    },

    extend: {
      backgroundImage: {
        linearGradient:
          "linear-gradient(-45deg, #ee7752, #ff006275, #23a6d5, #23d5ab)",
        aboutGradient: "linear-gradient(45deg, #06bae4, #b9d644, #f37244)",
      },

      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 9s ease infinite",
      },
      backgroundSize: {
        "size-200": "400% 400%",
      },
    },
  },
  plugins: [],
};

// fontFamily: {
//   wedey: "Poppins, monospace",
// },
// screens: {
//   tablet: "425px",
//   // => @media (min-width: 640px) { ... }

//   wideTab: "480px",s

//   // => @media (min-width: 480px)

//   smlaptop: "578px",
//   // => @media (min-width: 1024px) { ... }

//   desktop: "1280px",
//   // => @media (min-width: 1280px) { ... }
// },
