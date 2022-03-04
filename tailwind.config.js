module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        grey_dark:  "#282828",
        grey_light:  "#353535",
        grey_lighter: "#525252",
        logo_blue:  "#33B6FF",
        accent_blue: "#3F8CFF",
        log_purple:  "#CB88FF",
        write_teal : "#5AFFCE",
        confirm_green:  "#ABF997",
      },
    },
  },
  plugins: [require("daisyui")],
}
