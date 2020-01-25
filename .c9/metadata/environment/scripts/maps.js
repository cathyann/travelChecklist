{"filter":false,"title":"maps.js","tooltip":"/scripts/maps.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":59,"column":50},"end":{"row":59,"column":60},"action":"insert","lines":["101.621923"],"id":164}],[{"start":{"row":62,"column":9},"end":{"row":62,"column":10},"action":"remove","lines":["5"],"id":165}],[{"start":{"row":62,"column":9},"end":{"row":62,"column":10},"action":"insert","lines":["3"],"id":166}],[{"start":{"row":67,"column":59},"end":{"row":67,"column":74},"action":"remove","lines":["_canvasyOptions"],"id":167}],[{"start":{"row":67,"column":59},"end":{"row":67,"column":60},"action":"insert","lines":["\""],"id":168}],[{"start":{"row":67,"column":61},"end":{"row":67,"column":62},"action":"insert","lines":[")"],"id":169}],[{"start":{"row":74,"column":1},"end":{"row":74,"column":2},"action":"insert","lines":["]"],"id":170},{"start":{"row":74,"column":2},"end":{"row":74,"column":3},"action":"insert","lines":["]"]}],[{"start":{"row":74,"column":2},"end":{"row":74,"column":3},"action":"remove","lines":["]"],"id":171},{"start":{"row":74,"column":1},"end":{"row":74,"column":2},"action":"remove","lines":["]"]},{"start":{"row":74,"column":0},"end":{"row":74,"column":1},"action":"remove","lines":["}"]}],[{"start":{"row":76,"column":61},"end":{"row":77,"column":0},"action":"insert","lines":["",""],"id":172},{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"insert","lines":["",""]},{"start":{"row":78,"column":0},"end":{"row":78,"column":1},"action":"insert","lines":["}"]}],[{"start":{"row":78,"column":1},"end":{"row":79,"column":0},"action":"insert","lines":["",""],"id":173},{"start":{"row":79,"column":0},"end":{"row":80,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":80,"column":0},"end":{"row":90,"column":29},"action":"insert","lines":["var infowindow =  new google.maps.InfoWindow({","\tcontent: 'Hello World!',","\tmap: map","});","","var marker = new google.maps.Marker({","\tposition: homeLatlng, ","\tmap: map","});","","infowindow.open(map, marker);"],"id":174}],[{"start":{"row":78,"column":0},"end":{"row":78,"column":1},"action":"remove","lines":["}"],"id":175},{"start":{"row":77,"column":0},"end":{"row":78,"column":0},"action":"remove","lines":["",""]},{"start":{"row":76,"column":61},"end":{"row":77,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":88,"column":29},"end":{"row":89,"column":0},"action":"insert","lines":["",""],"id":176},{"start":{"row":89,"column":0},"end":{"row":90,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":90,"column":0},"end":{"row":90,"column":1},"action":"insert","lines":["}"],"id":178}],[{"start":{"row":89,"column":0},"end":{"row":90,"column":0},"action":"insert","lines":["",""],"id":179}],[{"start":{"row":90,"column":0},"end":{"row":92,"column":3},"action":"insert","lines":["google.maps.event.addListener(marker, 'click', function() {","\tinfowindow.open(map, this);","});"],"id":180}],[{"start":{"row":62,"column":8},"end":{"row":62,"column":9},"action":"remove","lines":["1"],"id":181}],[{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"remove","lines":["2"],"id":182},{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"remove","lines":["1"]}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["3"],"id":183}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"remove","lines":["3"],"id":184}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["1"],"id":185},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["2"]}],[{"start":{"row":62,"column":8},"end":{"row":62,"column":9},"action":"remove","lines":["3"],"id":186}],[{"start":{"row":62,"column":8},"end":{"row":62,"column":9},"action":"insert","lines":["1"],"id":187},{"start":{"row":62,"column":9},"end":{"row":62,"column":10},"action":"insert","lines":["2"]}],[{"start":{"row":9,"column":2},"end":{"row":27,"column":15},"action":"remove","lines":["var labels = \"ABCDEFGHIJKLMONPQRSTUVWXYZ\";","","            var locations = [","                {lat: 3.118301, lng: 101.678614}, ","                {lat: 3.126782, lng: 101.616256}, ","                {lat: 3.072895, lng: 101.607598},","                {lat: 3.099667, lng: 101.643819}","                ];","","            var markers = locations.map(function(location, i) {","                return new google.maps.Marker({","                    position: location,","                    label: labels[i % labels.length]","                });","            });","","            var markerCluster = new MarkerClusterer(map, markers, {","                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'","            });"],"id":188}],[{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"remove","lines":[" "],"id":189},{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"remove","lines":[" "]},{"start":{"row":8,"column":2},"end":{"row":9,"column":0},"action":"remove","lines":["",""]},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"remove","lines":[" "]}],[{"start":{"row":9,"column":12},"end":{"row":74,"column":1},"action":"remove","lines":["","","  var marker = new google.maps.Marker({","    position: {lat: 3.118301, lng: 101.678614},","    map: map,","    title: 'My Money Master Sdn. Bhd',","    ","    position: {lat: 3.126782, lng: 101.616256},","    map: map,","    title: 'Al-Tamij Money Changer - Atria Shopping Gallery',","    ","    position: {lat: 3.126782, lng: 101.616256},","    map: map,","    title: 'Spectrum Forex Money Changer Sunway Pyramid',","    ","    position: {lat: 3.126782, lng: 101.616256},","    map: map,","    title: 'KL Remit Exchange Sdn Bhd',","  });","  ","  marker.addListener('mouseover', function() {","    infowindow.open(map, marker);","  });","  ","   marker.addListener('mouseout', function() {","    infowindow.close(map, marker);","  });","}","","","function initialize() {","\tvar homeLatlng = new google.maps.LatLng(3.108568,101.621923);","","\tvar myOptions = {","\t\tzoom: 12,","\t\tcenter: homeLatlng,","\t\tmapTypeId: google.maps.MapTypeId.ROADMAP","\t};","","\tvar map = new google.maps.Map(document.getElementById(\"map\"));","","\tvar infowindow =  new google.maps.InfoWindow({","\t\tcontent: 'Hello World!',","\t\tmap: map,","\t\tposition: homeLatlng","\t});","","","google.maps.event.addDomListener(window, 'load', initialize);","","var infowindow =  new google.maps.InfoWindow({","\tcontent: 'Hello World!',","\tmap: map","});","","var marker = new google.maps.Marker({","\tposition: homeLatlng, ","\tmap: map","});","","infowindow.open(map, marker);","","google.maps.event.addListener(marker, 'click', function() {","\tinfowindow.open(map, this);","});","}"],"id":190}],[{"start":{"row":9,"column":0},"end":{"row":27,"column":61},"action":"insert","lines":["function initialize() {","\tvar homeLatlng = new google.maps.LatLng(51.476706,0);","","\tvar myOptions = {","\t\tzoom: 15,","\t\tcenter: homeLatlng,","\t\tmapTypeId: google.maps.MapTypeId.ROADMAP","\t};","","\tvar map = new google.maps.Map(document.getElementById(\"map_canvasyOptions);","","\tvar infowindow =  new google.maps.InfoWindow({","\t\tcontent: 'Hello World!',","\t\tmap: map,","\t\tposition: homeLatlng","\t});","}","","google.maps.event.addDomListener(window, 'load', initialize);"],"id":191}],[{"start":{"row":10,"column":41},"end":{"row":10,"column":50},"action":"remove","lines":["51.476706"],"id":193},{"start":{"row":10,"column":41},"end":{"row":10,"column":49},"action":"insert","lines":["3.108568"]}],[{"start":{"row":10,"column":50},"end":{"row":10,"column":51},"action":"remove","lines":["0"],"id":194}],[{"start":{"row":10,"column":50},"end":{"row":10,"column":60},"action":"insert","lines":["101.621923"],"id":195}],[{"start":{"row":18,"column":73},"end":{"row":18,"column":74},"action":"remove","lines":["s"],"id":196},{"start":{"row":18,"column":72},"end":{"row":18,"column":73},"action":"remove","lines":["n"]},{"start":{"row":18,"column":71},"end":{"row":18,"column":72},"action":"remove","lines":["o"]},{"start":{"row":18,"column":70},"end":{"row":18,"column":71},"action":"remove","lines":["i"]},{"start":{"row":18,"column":69},"end":{"row":18,"column":70},"action":"remove","lines":["t"]},{"start":{"row":18,"column":68},"end":{"row":18,"column":69},"action":"remove","lines":["p"]},{"start":{"row":18,"column":67},"end":{"row":18,"column":68},"action":"remove","lines":["O"]},{"start":{"row":18,"column":66},"end":{"row":18,"column":67},"action":"remove","lines":["y"]},{"start":{"row":18,"column":65},"end":{"row":18,"column":66},"action":"remove","lines":["s"]},{"start":{"row":18,"column":64},"end":{"row":18,"column":65},"action":"remove","lines":["a"]},{"start":{"row":18,"column":63},"end":{"row":18,"column":64},"action":"remove","lines":["v"]}],[{"start":{"row":18,"column":62},"end":{"row":18,"column":63},"action":"remove","lines":["n"],"id":197},{"start":{"row":18,"column":61},"end":{"row":18,"column":62},"action":"remove","lines":["a"]},{"start":{"row":18,"column":60},"end":{"row":18,"column":61},"action":"remove","lines":["c"]},{"start":{"row":18,"column":59},"end":{"row":18,"column":60},"action":"remove","lines":["_"]}],[{"start":{"row":18,"column":59},"end":{"row":18,"column":60},"action":"insert","lines":["\""],"id":198}],[{"start":{"row":18,"column":61},"end":{"row":18,"column":62},"action":"insert","lines":[")"],"id":199}],[{"start":{"row":27,"column":64},"end":{"row":27,"column":65},"action":"remove","lines":[" "],"id":203},{"start":{"row":27,"column":63},"end":{"row":27,"column":64},"action":"remove","lines":[" "]},{"start":{"row":27,"column":62},"end":{"row":27,"column":63},"action":"remove","lines":[" "]},{"start":{"row":27,"column":61},"end":{"row":27,"column":62},"action":"remove","lines":[" "]},{"start":{"row":27,"column":60},"end":{"row":27,"column":61},"action":"remove","lines":[";"]}],[{"start":{"row":27,"column":60},"end":{"row":27,"column":61},"action":"insert","lines":["{"],"id":204}],[{"start":{"row":27,"column":64},"end":{"row":27,"column":69},"action":"remove","lines":["     "],"id":213},{"start":{"row":27,"column":64},"end":{"row":28,"column":0},"action":"insert","lines":["",""]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "],"id":214},{"start":{"row":27,"column":64},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":27,"column":64},"end":{"row":27,"column":65},"action":"insert","lines":["}"],"id":215}],[{"start":{"row":27,"column":64},"end":{"row":29,"column":0},"action":"insert","lines":["","    ",""],"id":216}],[{"start":{"row":28,"column":4},"end":{"row":28,"column":5},"action":"insert","lines":["i"],"id":217},{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"insert","lines":["n"]},{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["i"]}],[{"start":{"row":28,"column":4},"end":{"row":28,"column":7},"action":"remove","lines":["ini"],"id":218},{"start":{"row":28,"column":4},"end":{"row":28,"column":16},"action":"insert","lines":["initialize()"]}],[{"start":{"row":28,"column":15},"end":{"row":28,"column":34},"action":"insert","lines":["3.108568,101.621923"],"id":219}],[{"start":{"row":28,"column":35},"end":{"row":28,"column":36},"action":"insert","lines":[";"],"id":220}],[{"start":{"row":27,"column":58},"end":{"row":27,"column":59},"action":"remove","lines":["e"],"id":221},{"start":{"row":27,"column":57},"end":{"row":27,"column":58},"action":"remove","lines":["z"]},{"start":{"row":27,"column":56},"end":{"row":27,"column":57},"action":"remove","lines":["i"]},{"start":{"row":27,"column":55},"end":{"row":27,"column":56},"action":"remove","lines":["l"]},{"start":{"row":27,"column":54},"end":{"row":27,"column":55},"action":"remove","lines":["a"]},{"start":{"row":27,"column":53},"end":{"row":27,"column":54},"action":"remove","lines":["i"]},{"start":{"row":27,"column":52},"end":{"row":27,"column":53},"action":"remove","lines":["t"]},{"start":{"row":27,"column":51},"end":{"row":27,"column":52},"action":"remove","lines":["i"]},{"start":{"row":27,"column":50},"end":{"row":27,"column":51},"action":"remove","lines":["n"]},{"start":{"row":27,"column":49},"end":{"row":27,"column":50},"action":"remove","lines":["i"]}],[{"start":{"row":27,"column":49},"end":{"row":27,"column":50},"action":"insert","lines":["f"],"id":222},{"start":{"row":27,"column":50},"end":{"row":27,"column":51},"action":"insert","lines":["u"]},{"start":{"row":27,"column":51},"end":{"row":27,"column":52},"action":"insert","lines":["n"]},{"start":{"row":27,"column":52},"end":{"row":27,"column":53},"action":"insert","lines":["c"]},{"start":{"row":27,"column":53},"end":{"row":27,"column":54},"action":"insert","lines":["t"]},{"start":{"row":27,"column":54},"end":{"row":27,"column":55},"action":"insert","lines":["i"]},{"start":{"row":27,"column":55},"end":{"row":27,"column":56},"action":"insert","lines":["o"]},{"start":{"row":27,"column":56},"end":{"row":27,"column":57},"action":"insert","lines":["n"]}],[{"start":{"row":27,"column":57},"end":{"row":27,"column":58},"action":"insert","lines":[" "],"id":223}],[{"start":{"row":27,"column":58},"end":{"row":27,"column":60},"action":"insert","lines":["()"],"id":224}],[{"start":{"row":27,"column":57},"end":{"row":27,"column":58},"action":"remove","lines":[" "],"id":225}],[{"start":{"row":27,"column":60},"end":{"row":27,"column":61},"action":"insert","lines":[" "],"id":226}],[{"start":{"row":27,"column":59},"end":{"row":27,"column":60},"action":"remove","lines":[")"],"id":227}],[{"start":{"row":29,"column":1},"end":{"row":29,"column":2},"action":"insert","lines":[")"],"id":228}],[{"start":{"row":29,"column":2},"end":{"row":29,"column":3},"action":"insert","lines":[";"],"id":229}],[{"start":{"row":25,"column":0},"end":{"row":25,"column":1},"action":"remove","lines":["}"],"id":230}],[{"start":{"row":29,"column":3},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":231},{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"insert","lines":["",""]},{"start":{"row":31,"column":0},"end":{"row":31,"column":1},"action":"insert","lines":["}"]}],[{"start":{"row":31,"column":0},"end":{"row":31,"column":1},"action":"remove","lines":["}"],"id":232},{"start":{"row":30,"column":0},"end":{"row":31,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":1},"action":"insert","lines":["}"],"id":233}],[{"start":{"row":26,"column":1},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":234}],[{"start":{"row":30,"column":3},"end":{"row":31,"column":0},"action":"remove","lines":["",""],"id":235}],[{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"remove","lines":["5"],"id":236},{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"remove","lines":["1"]}],[{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["1"],"id":237},{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["2"]}],[{"start":{"row":30,"column":3},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":238}],[{"start":{"row":29,"column":4},"end":{"row":29,"column":36},"action":"remove","lines":["initialize(3.108568,101.621923);"],"id":239},{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"remove","lines":["    "]},{"start":{"row":28,"column":64},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":28,"column":49},"end":{"row":28,"column":59},"action":"remove","lines":["function()"],"id":240},{"start":{"row":28,"column":49},"end":{"row":28,"column":50},"action":"insert","lines":["i"]},{"start":{"row":28,"column":50},"end":{"row":28,"column":51},"action":"insert","lines":["n"]},{"start":{"row":28,"column":51},"end":{"row":28,"column":52},"action":"insert","lines":["i"]}],[{"start":{"row":28,"column":49},"end":{"row":28,"column":52},"action":"remove","lines":["ini"],"id":241},{"start":{"row":28,"column":49},"end":{"row":28,"column":61},"action":"insert","lines":["initialize()"]}],[{"start":{"row":29,"column":2},"end":{"row":29,"column":3},"action":"remove","lines":[";"],"id":242},{"start":{"row":29,"column":1},"end":{"row":29,"column":2},"action":"remove","lines":[")"]},{"start":{"row":29,"column":0},"end":{"row":29,"column":1},"action":"remove","lines":["}"]},{"start":{"row":28,"column":66},"end":{"row":29,"column":0},"action":"remove","lines":["",""]},{"start":{"row":28,"column":65},"end":{"row":28,"column":66},"action":"remove","lines":[" "]},{"start":{"row":28,"column":64},"end":{"row":28,"column":65},"action":"remove","lines":[" "]},{"start":{"row":28,"column":63},"end":{"row":28,"column":64},"action":"remove","lines":[" "]},{"start":{"row":28,"column":62},"end":{"row":28,"column":63},"action":"remove","lines":["{"]},{"start":{"row":28,"column":61},"end":{"row":28,"column":62},"action":"remove","lines":[" "]}],[{"start":{"row":28,"column":61},"end":{"row":28,"column":62},"action":"insert","lines":[")"],"id":243},{"start":{"row":28,"column":62},"end":{"row":28,"column":63},"action":"insert","lines":[";"]}],[{"start":{"row":29,"column":0},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":244}],[{"start":{"row":30,"column":0},"end":{"row":40,"column":29},"action":"insert","lines":["var infowindow =  new google.maps.InfoWindow({","\tcontent: 'Hello World!',","\tmap: map","});","","var marker = new google.maps.Marker({","\tposition: homeLatlng, ","\tmap: map","});","","infowindow.open(map, marker);"],"id":245}],[{"start":{"row":40,"column":29},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":246},{"start":{"row":41,"column":0},"end":{"row":42,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":42,"column":0},"end":{"row":44,"column":3},"action":"insert","lines":["google.maps.event.addListener(marker, 'mouseover', function() {","\tinfowindow.open(map, this);","});"],"id":247}],[{"start":{"row":44,"column":3},"end":{"row":45,"column":0},"action":"insert","lines":["",""],"id":248},{"start":{"row":45,"column":0},"end":{"row":46,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":46,"column":0},"end":{"row":48,"column":3},"action":"insert","lines":["google.maps.event.addListener(marker, 'mouseout', function() {","\tinfowindow.close();","});"],"id":249}],[{"start":{"row":48,"column":3},"end":{"row":49,"column":0},"action":"insert","lines":["",""],"id":250},{"start":{"row":49,"column":0},"end":{"row":50,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":50,"column":0},"end":{"row":107,"column":1},"action":"insert","lines":["function initialize() {","\tvar i;","\tvar arrDestinations = [","\t\t{","\t\t\tlat: 50.815155, ","\t\t\tlon: -0.137072, ","\t\t\ttitle: \"Brighton Pier\", ","\t\t\tdescription: \"Brighton Palace Pier dates to 1899\"","\t\t},","\t\t{","\t\t\tlat: 50.822638, ","\t\t\tlon: -0.137361, ","\t\t\ttitle: \"Brighton Pavilion\", ","\t\t\tdescription: \"The Pavilion was built for the Prince of Wales in 1787\"","\t\t},","\t\t{","\t\t\tlat: 50.821226, ","\t\t\tlon: -0.139372, ","\t\t\ttitle: \"English's\", ","\t\t\tdescription: \"English's Seafood Restaurant and Oyster Bar\"","\t\t}","\t];","\t","\tvar myOptions = {","\t\tzoom: 15,","\t\tcenter: new google.maps.LatLng(50.820645,-0.137376),","\t\tmapTypeId: google.maps.MapTypeId.ROADMAP","\t};","\t","\tvar map = new google.maps.Map(document.getElementById(\"map_canvas\"), myOptions);","\t","\tvar infowindow =  new google.maps.InfoWindow({","\t\tcontent: ''","\t});","\t","\t// loop over our array","\tfor (i = 0; i < arrDestinations.length; i++) {","\t\t// create a marker","\t\tvar marker = new google.maps.Marker({","\t\t\ttitle: arrDestinations[i].title,","\t\t\tposition: new google.maps.LatLng(arrDestinations[i].lat, arrDestinations[i].lon),","\t\t\tmap: map","\t\t});","\t\t","\t\t// add an event listener for this marker","\t\tbindInfoWindow(marker, map, infowindow, \"<p>\" + arrDestinations[i].description + \"</p>\");  ","\t}","}","","function bindInfoWindow(marker, map, infowindow, html) { ","\tgoogle.maps.event.addListener(marker, 'click', function() { ","\t\tinfowindow.setContent(html); ","\t\tinfowindow.open(map, marker); ","\t}); ","} ","","google.maps.event.addDomListener(window, 'load', initialize);","<"],"id":251}],[{"start":{"row":107,"column":0},"end":{"row":107,"column":1},"action":"remove","lines":["<"],"id":252},{"start":{"row":106,"column":61},"end":{"row":107,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":42,"column":61},"end":{"row":42,"column":62},"action":"insert","lines":[")"],"id":253}],[{"start":{"row":42,"column":61},"end":{"row":42,"column":62},"action":"remove","lines":[")"],"id":254}],[{"start":{"row":54,"column":8},"end":{"row":54,"column":17},"action":"remove","lines":["50.815155"],"id":255},{"start":{"row":54,"column":8},"end":{"row":54,"column":16},"action":"insert","lines":["3.118301"]}],[{"start":{"row":55,"column":8},"end":{"row":55,"column":17},"action":"remove","lines":["-0.137072"],"id":256},{"start":{"row":55,"column":8},"end":{"row":55,"column":18},"action":"insert","lines":["101.678614"]}],[{"start":{"row":56,"column":11},"end":{"row":56,"column":24},"action":"remove","lines":["Brighton Pier"],"id":257},{"start":{"row":56,"column":11},"end":{"row":56,"column":35},"action":"insert","lines":["My Money Master Sdn. Bhd"]}],[{"start":{"row":56,"column":38},"end":{"row":57,"column":52},"action":"remove","lines":["","\t\t\tdescription: \"Brighton Palace Pier dates to 1899\""],"id":258}],[{"start":{"row":59,"column":8},"end":{"row":59,"column":17},"action":"remove","lines":["50.822638"],"id":259},{"start":{"row":59,"column":8},"end":{"row":59,"column":16},"action":"insert","lines":["3.126782"]}],[{"start":{"row":60,"column":8},"end":{"row":60,"column":17},"action":"remove","lines":["-0.137361"],"id":260},{"start":{"row":60,"column":8},"end":{"row":60,"column":18},"action":"insert","lines":["101.616256"]}],[{"start":{"row":61,"column":11},"end":{"row":61,"column":28},"action":"remove","lines":["Brighton Pavilion"],"id":261},{"start":{"row":61,"column":11},"end":{"row":61,"column":58},"action":"insert","lines":["Al-Tamij Money Changer - Atria Shopping Gallery"]}],[{"start":{"row":61,"column":61},"end":{"row":62,"column":72},"action":"remove","lines":["","\t\t\tdescription: \"The Pavilion was built for the Prince of Wales in 1787\""],"id":262}],[{"start":{"row":64,"column":8},"end":{"row":64,"column":17},"action":"remove","lines":["50.821226"],"id":263},{"start":{"row":64,"column":8},"end":{"row":64,"column":16},"action":"insert","lines":["3.072895"]}],[{"start":{"row":65,"column":8},"end":{"row":65,"column":17},"action":"remove","lines":["-0.139372"],"id":264},{"start":{"row":65,"column":8},"end":{"row":65,"column":18},"action":"insert","lines":["101.607598"]}],[{"start":{"row":66,"column":11},"end":{"row":66,"column":20},"action":"remove","lines":["English's"],"id":265},{"start":{"row":66,"column":11},"end":{"row":66,"column":54},"action":"insert","lines":["Spectrum Forex Money Changer Sunway Pyramid"]}],[{"start":{"row":66,"column":57},"end":{"row":67,"column":61},"action":"remove","lines":["","\t\t\tdescription: \"English's Seafood Restaurant and Oyster Bar\""],"id":266}],[{"start":{"row":67,"column":3},"end":{"row":68,"column":0},"action":"insert","lines":["",""],"id":267},{"start":{"row":68,"column":0},"end":{"row":68,"column":2},"action":"insert","lines":["\t\t"]}],[{"start":{"row":68,"column":2},"end":{"row":72,"column":3},"action":"insert","lines":["{","\t\t\tlat: 3.072895, ","\t\t\tlon: 101.607598, ","\t\t\ttitle: \"Spectrum Forex Money Changer Sunway Pyramid\", ","\t\t}"],"id":268}],[{"start":{"row":67,"column":3},"end":{"row":67,"column":4},"action":"insert","lines":[","],"id":269}],[{"start":{"row":69,"column":8},"end":{"row":69,"column":16},"action":"remove","lines":["3.072895"],"id":270},{"start":{"row":69,"column":8},"end":{"row":69,"column":16},"action":"insert","lines":["3.099667"]}],[{"start":{"row":70,"column":8},"end":{"row":70,"column":18},"action":"remove","lines":["101.607598"],"id":271},{"start":{"row":70,"column":8},"end":{"row":70,"column":18},"action":"insert","lines":["101.643819"]}],[{"start":{"row":71,"column":11},"end":{"row":71,"column":54},"action":"remove","lines":["Spectrum Forex Money Changer Sunway Pyramid"],"id":272},{"start":{"row":71,"column":11},"end":{"row":71,"column":36},"action":"insert","lines":["KL Remit Exchange Sdn Bhd"]}],[{"start":{"row":76,"column":9},"end":{"row":76,"column":10},"action":"remove","lines":["5"],"id":273}],[{"start":{"row":76,"column":9},"end":{"row":76,"column":10},"action":"insert","lines":["2"],"id":274}],[{"start":{"row":77,"column":33},"end":{"row":77,"column":52},"action":"remove","lines":["50.820645,-0.137376"],"id":275},{"start":{"row":77,"column":33},"end":{"row":77,"column":52},"action":"insert","lines":["3.108568,101.621923"]}],[{"start":{"row":81,"column":65},"end":{"row":81,"column":66},"action":"remove","lines":["s"],"id":276},{"start":{"row":81,"column":64},"end":{"row":81,"column":65},"action":"remove","lines":["a"]},{"start":{"row":81,"column":63},"end":{"row":81,"column":64},"action":"remove","lines":["v"]},{"start":{"row":81,"column":62},"end":{"row":81,"column":63},"action":"remove","lines":["n"]},{"start":{"row":81,"column":61},"end":{"row":81,"column":62},"action":"remove","lines":["a"]},{"start":{"row":81,"column":60},"end":{"row":81,"column":61},"action":"remove","lines":["c"]},{"start":{"row":81,"column":59},"end":{"row":81,"column":60},"action":"remove","lines":["_"]}],[{"start":{"row":88,"column":0},"end":{"row":88,"column":1},"action":"insert","lines":["/"],"id":277},{"start":{"row":88,"column":1},"end":{"row":88,"column":2},"action":"insert","lines":["*"]},{"start":{"row":88,"column":2},"end":{"row":88,"column":3},"action":"insert","lines":["*"]}]]},"ace":{"folds":[],"scrolltop":1283.5,"scrollleft":0,"selection":{"start":{"row":88,"column":3},"end":{"row":88,"column":3},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":33,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1579948269374,"hash":"8ba55df5ea5d9ec94458f03c59fb893e63611945"}