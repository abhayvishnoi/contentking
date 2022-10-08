/** @type {import('tailwindcss').Config} */

const mode = process.env.TAILWIND_MODE ? "jit" : "aot";

module.exports = {
  darkMode: "class",
  mode: mode,
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      animation: {
        "levitate-0": "levitate 0.5s ease-in-out infinite",
        levitate: "levitate 2s ease-in-out infinite",
        "levitate-2": "levitate 3s ease-in-out infinite",
        "levitate-3": "levitate 4s ease-in-out infinite",
        "fade-in-0": "fade-in 0.5s ease-in",
        "fade-in": "fade-in 1s ease-in",
        "fade-in-2": "fade-in 2s ease-in",
        "fade-in-3": "fade-in 3s ease-in",
        "fade-out-0": "fade-out 0.5s ease-in 1",
        "fade-out": "fade-out 1s ease-in 1",
        "fade-out-2": "fade-out 2s ease-in 1",
        "fade-out-3": "fade-out 3s ease-in 1",
        "fade-in-out-0": "fade-in-out 0.5s ease-in infinite",
        "fade-in-out": "fade-in-out 1s ease-in infinite",
        "fade-in-out-2": "fade-in-out 2s ease-in infinite",
        "fade-in-out-3": "fade-in-out 3s ease-in infinite",
        "slide-left-0": "slide-left 0.5s ease-out",
        "slide-left": "slide-left 1.2s ease-out",
        "slide-left-2": "slide-left 2s ease-out",
        "slide-left-3": "slide-left 3s ease-out",
        "slide-right-0": "slide-right 0.5s ease-out",
        "slide-right-min": "slide-right-min 2s ease-out",
        "slide-right": "slide-right 1.2s ease-out",
        "slide-right-2": "slide-right 2s ease-out",
        "slide-right-3": "slide-right 3s ease-out",
        "slide-up-0": "slide-up 0.5s ease-out",
        "slide-up": "slide-up 1.2s ease-out",
        "slide-up-2": "slide-up 2s ease-out",
        "slide-up-3": "slide-up 3s ease-out",
        "slide-down-0": "slide-down 0.5s ease-out",
        "slide-down": "slide-down 1.2s ease-out",
        "slide-down-2": "slide-down 2s ease-out",
        "slide-down-3": "slide-down 3s ease-out",
        "scale-105": "scale-1.05 1s linear",
        "scale-110": "scale-1.1 1.2s ease-out",
        "scale-125": "scale-1.2 1.2s ease-out",
        "scale-150": "scale-1.5 1.2s ease-out",
      },
      keyframes: {
        "scale-1.05": {
          "100%": {
            transform: "scale(1.05)",
          },
        },
        "scale-110": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
        "scale-125": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.25)",
          },
        },
        "scale-150": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.5)",
          },
        },
        levitate: {
          "0%, 100%": {
            transform: "translateY(-10%)",
          },
          "50%": {
            transform: "translateY(0)",
          },
        },
        "fade-in": {
          " 100%": {
            opacity: "1",
          },
          "0%": {
            opacity: "0",
          },
        },
        "fade-out": {
          "100%": {
            opacity: "0",
          },
          "0%": {
            opacity: "1",
          },
        },
        "fade-in-out": {
          "100%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.5",
          },
          "0%": {
            opacity: "1",
          },
        },
        "slide-left": {
          "100%": {
            transform: "translateX(0)",
          },
          "0%": {
            transform: "translateX(20%)",
          },
        },
        "slide-right": {
          "100%": {
            transform: "translateX(0)",
          },
          "0%": {
            transform: "translateX(-20%)",
          },
        },
        "slide-right-min": {
          "100%": {
            transform: "translateX(0)",
          },
          "0%": {
            transform: "translateX(-10%)",
          },
        },
        "slide-up": {
          "100%": {
            transform: "translateY(0)",
          },
          "0%": {
            transform: "translateY(20%)",
          },
        },
        "slide-down": {
          "100%": {
            transform: "translateY(0)",
          },
          "0%": {
            transform: "translateY(-20%)",
          },
        },
      },
      fontFamily: {
        caveat: ["Caveat", "cursive"],
        damion: ["Damion", "cursive"],
        dancing: ["Dancing Script", "cursive"],
        indie: ["Indie Flower", "cursive"],
        knewave: ["Knewave", "cursive"],
        lobster: ["Lobster", "cursive"],
        londrina: ["Londrina Shadow", "cursive"],
        pacifico: ["Pacifico", "cursive"],
        passions: ["Passions Conflict", "cursive"],
        rouge: ["Rouge Script", "cursive"],
        sacramento: ["Sacramento", "cursive"],
        satisfy: ["Satisfy", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
