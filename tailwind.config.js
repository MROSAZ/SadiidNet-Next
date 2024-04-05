module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Gray": {
          "500": "#999999",
          "700": "#D9D9D9",
          "900": "#eaeaeaff",
          "Black": "#000000",
          "White": "#FFFFFF"
        },
        "Primary": {
          "100": "#3a26efff",
          "500": "#8469deff",
          "700": "#9a91e2ff"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "TenUnits": "80px",
        "Unit": "8px",
        "TripleUnit": "24px",
        "FiveUnits": "40px",
        "HalfUnit": "4px",
        "FourUnits": "32px",
        "DoubleUnit": "16px"
      },
      "borderRadius": {
        "Radius 4": "4px",
        "Round": "50%",
        "Radius 8": "8px",
        "Radius 2": "2px"
      },
      "scale": {
        "MaxContent": "1414px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ]
}