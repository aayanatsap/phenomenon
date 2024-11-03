const plugin = require('tailwindcss/plugin')

module.exports = plugin(function({addUtilities}){
    const newUtilities = {
        ".scrollbar-thin": {
            scrollbarWidth: "thin",
            scrollbarColor: "#E5E5E5",
        },
        ".scrollbar-webkit": {
            "&::-webkit-scrollbar": {
                width: "8px"
            },
            "&::-webkit-scrollbar-track": {
                background: "transparent"
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#E5E5E5",
                borderRadius: "20px",
                border: "1px solid #E5E5E5"
            }
        }
    }
    addUtilities(newUtilities, ["responsive", "hover"])
})