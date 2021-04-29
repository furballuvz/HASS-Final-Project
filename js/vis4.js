var viz4 = 
{
     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
     "title": {
       "text": ["Daily Flights", "2019 vs 2020"],
       "frame": "group",
        "align": "left",
       "anchor": "start",
       "color": "white"
     },
     "background": "#45494f",
     "data": {
       "url": "data/flight_compare.csv"
     },       
      "width": 600,"height": 400,
      "encoding": {
          "x": {
            "field": "Hours",
            "axis": {
              "ticks": false,
              "title": null,
              "titlePadding": 25,
              "labelAngle": -75,
              "labelColor": "white"
            }, 
            "bandPosition": 0.5,
            "sort": ["8:00AM", "9:00AM", "10:00AM", "11:00AM", "12:00AM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM", "6:00PM","7:00PM", "8:00PM","9:00PM", "10:00PM", "11:00PM"]
          },
          "y": {
            "type": "quantitative",
            "scale": {"domain": [0, 70]},
            "axis": {
                "title": "Flights",
                "titleColor":"white", "labelColor": "white","gridColor": "#547694"
            }
          }
        },
       "layer": [
       {
        "mark": {"type": "area", "color": "#c98a00"},
        "encoding": {
          "y": {"aggregate": "median", "field": "Total", "type": "quantitative"},
          "color":{"field": "Year", "type": "nominal"},
          "opacity": {"value": 0.7},
          "tooltip": [
            {"field": "Hours", "title": "Time"},
            {"field": "Year"},
            {"aggregate": "median", "field": "Total", "title": "Flights"}
          ]
        }
      }
  ],
  "config": {
      "area": {"interpolate": "monotone"},
      "view": {"stroke": null},
      "legend": {"titleColor":"white","labelColor": "white"}
  }
};