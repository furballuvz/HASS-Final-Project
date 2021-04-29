 var viz1 = 
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/flight_traffic.csv"},
  "background": "#3f566b",
  "title": {
       "text": ["Total Daily Flights", "Jan 2019 - Apr 2021"],
       "frame": "group",
       "align": "left",
       "anchor": "start",
       "color": "white"
     },
  "width": 1000, "height": 250,
  "transform": [{
      "calculate": "{'plane': '✈️'}", "as": "plane"
    }],
    "layer": [
    {
      "encoding": {
        "x": {
          "field": "Date",
          "type": "temporal",
          "scale":{"domainMin": {"year": 2019}},          
          "axis": {"title": "", "tickCount": 8,
            "labelAlign": "left",
            "labelExpr": "[timeFormat(datum.value, '%b'), timeFormat(datum.value, '%m') == '01' ? timeFormat(datum.value, '%Y') : '']",
            "labelOffset": 4,
            "labelColor": "white",
            "labelPadding": -24,
            "tickSize": 30,
            "gridColor": "#547694",
            "gridDash": {
              "condition": {"test": {"field": "value", "timeUnit": "month", "equal": 1}, "value": []},
              "value": [2,2]
            },
            "tickDash": {
              "condition": {"test": {"field": "value", "timeUnit": "month", "equal": 1}, "value": []},
              "value": [2,2]
            }}
        },
        "y": {
          "field": "Flights", 
          "type": "quantitative", 
          "scale":{"domain": [0, 1200]}},
          "axis": {"title": "No. of Flights", "titleColor":"white", "labelColor": "white","gridColor": "#547694"}
      },
      "layer": [
      {
        "params": [{
          "name": "index",
          "select": {
            "type": "interval", "encodings": ["x"]
          },
          "bind": "scales"
        }],
        "mark": {
          "type": "area",
          "cursor": "pointer",
          "line": {
            "color": "#4682b4"
          },
          "color": {
            "x1": 1,
            "y1": 1,
            "x2": 1,
            "y2": 0,
            "gradient": "linear",
            "stops": [
              {
                "offset": 0,
                "color": "white"
              },
              {
                "offset": 1,
                "color": "#4682b4"
              }
            ]
          }
        }
      },{
        "params": [{
          "name": "label",
          "select": {
            "type": "point",
            "encodings": ["x"],
            "nearest": true,
            "on": "mouseover"
          }
        }],
          "mark": "point",
          "encoding": {
            "opacity": {
              "condition": {
                "param": "label",
                "empty": false,
                "value": 1
              },
              "value": 0
            }
          }
        }
      ]
    },{
      "transform": [{"filter": {"param": "label", "empty": false}}],
      "layer": [
        {
          "mark": {"type": "rule", "color": "black"},
          "encoding": {
            "x": {"type": "temporal", "field": "Date"}
          }
        },
        {
          "encoding": {
            "text": {"type": "quantitative", "field": "Flights"},
            "x": {"type": "temporal", "field": "Date"},
            "y": {"type": "quantitative", "field": "Flights", "axis": {"titleColor":"white", "labelColor": "white","gridColor": "#547694"}}
          },
          "layer": [
            {
              "mark": {
                "type": "text",
                "stroke": "#4682b4",
                "strokeWidth": 5,
                "align": "right",
                "dx": -20,
                "dy": 15
              }
            },
            {
              "mark": {
                "type": "text", 
                "align": "right",
                "fontWeight": "bold", 
                "dx": -20, "dy": 15, "color": "white"}
            }
          ]
        },
        {
          "encoding": {
            "text": {"type": "temporal", "field": "Date"},
            "x": {"type": "temporal", "field": "Date"},
            "y": {"type": "quantitative", "field": "Flights", "axis": {"titleColor":"white", "labelColor": "white","gridColor": "#547694"}}
          },
          "layer": [
            {
              "mark": {
                "type": "text",
                "stroke": "#4682b4",
                "strokeWidth": 5,
                "align": "right",
                "dx": -15,
                "dy": -15
              }
            },
            {
              "mark": {
                "type": "text", 
                "align": "right", 
                "fontWeight": "bold",
                "dx": -15, "dy": -15, "color": "white"}
            }
          ]
        },
        {
          "encoding": {
            "text": {"field": "plane.plane"},
            "x": {"type": "temporal", "field": "Date"},
            "y": {"type": "quantitative", "field": "Flights","axis": {"titleColor":"white", "labelColor": "white","gridColor": "#547694"}}
          },
          "layer": [
          {
            "mark": {
              "type": "text",
              "size": 30,
              "angle": 45}
          }
          ]
        }
      ]
    }
  ]
};