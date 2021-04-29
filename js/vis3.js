 var viz3 = {
     "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
     "title": {
       "text": ["Daily Flight Arrivals and Departures", "Mar 2019 - Jul 2019"],
       "frame": "group"
     },
     "background": "#dedede",
     "data": {
       "url": "data/flight_2019_sep.csv"
     },
     "vconcat": [
     {
     "width": 500,
     "height": 250,
     "encoding": {
           "x": {
             "field": "Day",
             "axis": {
               "title": null,
               "titlePadding": 25
             }, 
             "sort": ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
           },
           "y": {
             "type": "quantitative",
             "axis": {"title": "Average No. of Flights"}
           }
         },
       "layer": [
       {
         "params": [{
           "name": "day",
           "select": {"type": "point", "encodings": ["x"]}
         }],
         "transform": [
         {
             "joinaggregate": [{
                 "op": "sum", 
                 "field": "Departures",
                 "as": "sum_dep"
           }],
             "groupby": ["Date"]
          } 
          ,{
             "aggregate": [{
              "op": "mean",
              "field": "sum_dep",
              "as": "avg_dep"
             }],
             "groupby": ["Day"]
           }   
          ],
          "mark": {
              "type": "rect", 
              "width": {"band": 0.4},
              "xOffset": 14
            },
          "encoding": {
               "y": {"field": "avg_dep", "type": "quantitative"},
               "opacity": {
                 "condition": {
                   "param": "day",
                   "value": 1
                 },
                 "value": 0.2
               },
               "tooltip":[
                   {"field": "avg_dep", "title": "Departures", "format":".3"}
               ]
           }  
         },{
         "transform": [
         {
             "joinaggregate": [{
                 "op": "sum", 
                 "field": "Arrivals",
                 "as": "sum_arr"
           }],
             "groupby": ["Date"]
          } 
          ,{
             "aggregate": [{
              "op": "mean",
              "field": "sum_arr",
              "as": "avg_arr"
             }],
             "groupby": ["Day"]
           }      
          ],
          "mark": {
              "type": "rect", 
              "width": {"band": 0.4},
              "xOffset": -14
            },
          "encoding": {
               "y": {"field": "avg_arr", "type": "quantitative"},
               "color":{"value": "orange"},
               "opacity": {
                 "condition": {
                   "param": "day",
                   "value": 1
                 },
                 "value": 0.2
               },
               "tooltip":[
                   {"field": "avg_arr", "title": "Arrivals", "format":".3"}
               ]
           } 
         }
       ]
   },{
       "hconcat": [
       {
       
       "width": 600,"height": 400,
       "encoding": {
           "x": {
             "field": "Hours",
             "axis": {
               "ticks": false,
               "title": null,
               "titlePadding": 25,
               "labelAngle": -75
             }, 
             "bandPosition": 0.5,
             "sort": ["8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM","7PM", "8PM","9PM", "10PM", "11PM"]
           },
           "y": {
             "type": "quantitative",
             "scale": {"domain": [5, 50]},
             "axis": {
                 "title": "Distribution of Flight Arrivals",
                 "ticks": false
             }
           }
         },
       "layer": [
       {
         "params": [{
         "name": "hover",
         "select": {
           "type": "point",
           "encodings": ["x"],
           "on": "mouseover",
           "nearest": true
         }
       }], 
         "transform": [{
             "filter": {"param": "day"}
         }],
         "mark": {"type": "bar", "size": 5, "color": "#bbb"},
         "encoding": {
           "y": {"aggregate": "min", "field": "Arrivals", "type": "quantitative"},
           "y2": {"aggregate": "max", "field": "Arrivals", "type": "quantitative"},
           "tooltip": [
               {"field": "Arrivals", "aggregate": "min", "title": "Min"},
               {"field": "Arrivals", "aggregate": "max", "title": "Max"},
               {"field": "Arrivals", "aggregate": "q1", "title": "25 Percentile"},
               {"field": "Arrivals", "aggregate": "q3", "title": "75 Percentile"},
               {"field": "Arrivals", "aggregate": "median", "title": "Mean"}
           ],
           "opacity": {
               "condition": {
                   "param": "hover", "empty": false, "value": 1
                   }, 
                   "value": 0.5
           }
         }
       },{
         "transform": [{
             "filter": {"param": "day"}
         }],
         "mark": {"type": "bar", "size": 20, "color": "orange"},
         "encoding": {
           "y": {"aggregate": "q1", "field": "Arrivals", "type": "quantitative"},
           "y2": {"aggregate": "q3", "field": "Arrivals", "type": "quantitative"},
           "opacity": {
               "condition": {
                   "param": "hover", "empty": false, "value": 1
                   }, 
                   "value": 0.5
           }
         }
       },{
          "transform": [{
             "filter": {"param": "day"}
         }],  
             "mark": {"type": "tick", "color": "#c98a00"},
             "encoding": {
               "y": {"aggregate": "median", "field": "Arrivals", "type": "quantitative"}
             }
       
       }
      ]  
       
       
       },{
       
       
       "width": 600,"height": 400,
       "encoding": {
           "x": {
             "field": "Hours",
             "axis": {
               "ticks": false,
               "title": null,
               "titlePadding": 25,
               "labelAngle": -75
             }, 
             "bandPosition": 0.5,
             "sort": ["8AM", "9AM", "10AM", "11AM", "12AM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM","7PM", "8PM","9PM", "10PM", "11PM"]
           },
           "y": {
             "type": "quantitative",
             "scale": {"domain": [5, 50]},
             "axis": {
                 "title": "Distribution of Flight Departures",
                 "ticks": false
             }
           }
         },
       "layer": [
       {
         "params": [{
         "name": "hover",
         "select": {
           "type": "point",
           "encodings": ["x"],
           "on": "mouseover",
           "nearest": true
         }
       }], 
         "transform": [{
             "filter": {"param": "day"}
         }],
         "mark": {"type": "bar", "size": 5, "color": "#bbb"},
         "encoding": {
           "y": {"aggregate": "min", "field": "Departures", "type": "quantitative"},
           "y2": {"aggregate": "max", "field": "Departures", "type": "quantitative"},
           "tooltip": [
               {"field": "Departures", "aggregate": "min", "title": "Min"},
               {"field": "Departures", "aggregate": "max", "title": "Max"},
               {"field": "Departures", "aggregate": "q1", "title": "25 Percentile"},
               {"field": "Departures", "aggregate": "q3", "title": "75 Percentile"},
               {"field": "Departures", "aggregate": "median", "title": "Mean"}
           ],
           "opacity": {
               "condition": {
                   "param": "hover", "empty": false, "value": 1
                   }, 
                   "value": 0.5
           }
         }
       },{
         "transform": [{
             "filter": {"param": "day"}
         }],
         "mark": {"type": "bar", "size": 20, "color": "steelblue"},
         "encoding": {
           "y": {"aggregate": "q1", "field": "Departures", "type": "quantitative"},
           "y2": {"aggregate": "q3", "field": "Departures", "type": "quantitative"},
           "opacity": {
               "condition": {
                   "param": "hover", "empty": false, "value": 1
                   }, 
                   "value": 0.5
           }
         }
       },{
          "transform": [{
             "filter": {"param": "day"}
         }],  
             "mark": {"type": "tick", "color": "#3a486e"},
             "encoding": {
               "y": {"aggregate": "median", "field": "Departures", "type": "quantitative"}
             }
       
       }
      ]  
       
       }
      ]
    }
  ]
};