import { slate, indigo } from "@radix-ui/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ...slate,
        ...indigo
      }
    },
  },
  plugins: [],
}

