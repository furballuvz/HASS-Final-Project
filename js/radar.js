$(window).on("load", function() {
	
	var xmlns = "http://www.w3.org/2000/svg";
	
	var radius = [
		100,
		140,
		180
	];

	var svg = document.querySelector('#radar');
	
	var wrapper = document.createElementNS(xmlns, 'g');
	wrapper.setAttributeNS(null, 'transform', "translate(659 343)");

	var lineGroup_1 = document.createElementNS(xmlns, 'g');
	lineGroup_1.setAttribute('class', 'line-1');
	var lineGroup_2 = document.createElementNS(xmlns, 'g');
	lineGroup_2.setAttribute('class', 'line-2');
	var lineGroup_3 = document.createElementNS(xmlns, 'g');
	lineGroup_3.setAttribute('class', 'line-3');

	var pointRadar_1 = createPointRadar(radius[0]);
	var pointRadar_2 = createPointRadar(radius[1]);
	var pointRadar_3 = createPointRadar(radius[2]);
	
	lineGroup_1.appendChild(pointRadar_1);
	lineGroup_2.appendChild(pointRadar_2);
	lineGroup_3.appendChild(pointRadar_3);
	
	createBulletRadar(lineGroup_1, radius[1]);
	createBulletRadar(lineGroup_2, radius[2]);
	createBulletRadar(lineGroup_3, radius[3]);

	wrapper.appendChild(lineGroup_1);
	wrapper.appendChild(lineGroup_2);
	wrapper.appendChild(lineGroup_3);

	svg.appendChild(wrapper);

	function createPointRadar(radius){
		var obj = document.createElementNS(xmlns, 'circle');
		obj.setAttributeNS(null, 'r', radius);
		obj.setAttributeNS(null, 'cx', 0);
		obj.setAttributeNS(null, 'cy', 0);
		obj.setAttributeNS(null, 'fill', "none");
		obj.setAttributeNS(null, 'stroke', "#fff");
		obj.setAttributeNS(null, 'stroke-width', "1");
		obj.setAttributeNS(null, 'stroke-opacity', ".2");

		return obj;
	}

	function createBulletRadar(group, radius, half){
						
		var plane1 = document.createElementNS(xmlns, 'path');
		plane1.setAttributeNS(null, 'd', 'M-403.8,234.9c-0.4,0-0.8,0.2-1.2,0.5c-0.3,0.3-0.6,0.8-0.8,1.4c-0.5,1.2-0.7,2.9-0.9,4.9    c-0.2,2-0.2,4.3-0.1,6.8c-5.5,2.3-16.7,6.9-17.6,8c-1.2,1.4-0.8,3-0.3,4l18.4-3.7c0.4,4.9,0.9,9.7,1.4,13.5    c-1.8,0.5-5.2,1.6-5.9,2.2c-1,0.9-1,3.8-1,3.8l7.5-0.6c0.2,1.2,0.3,2,0.3,2l0,0.1h0.1h0.1h0.1l0-0.1c0,0,0.1-0.7,0.3-2l7.5,0.6    c0,0,0-2.9-1-3.8c-0.7-0.6-4.1-1.7-5.9-2.2c0.5-3.8,1-8.6,1.4-13.5l18.2,3.7c0.5-1.1,0.9-2.6-0.3-4c-0.9-1-11.8-5.6-17.4-7.9    c0.1-2.5,0-4.9-0.1-6.9v0c-0.2-2-0.4-3.7-0.9-4.9c-0.2-0.6-0.5-1.1-0.8-1.4C-402.9,235.1-403.3,234.9-403.8,234.9L-403.8,234.9    L-203.8,134.9L-403.8,234.9L-203.8,134.9z');
		plane1.setAttribute('class', 'plane plane1');
		plane1.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(plane1);
		
		var plane2 = document.createElementNS(xmlns, 'path');
		plane2.setAttributeNS(null, 'd', 'M-816.6,496c-0.4,0.1-0.7,0.5-0.9,0.9c-0.2,0.4-0.3,1-0.2,1.6c0,1.3,0.4,3,0.9,4.9s1.4,4.1,2.3,6.4    c-4.3,4.1-13.1,12.4-13.6,13.8c-0.6,1.7,0.3,3.1,1.2,3.8l15.9-10c2.1,4.4,4.3,8.7,6.1,12.1c-1.5,1.1-4.3,3.4-4.7,4.2    c-0.6,1.2,0.4,3.9,0.4,3.9l6.8-3.2c0.6,1,1,1.8,1,1.8l0,0.1l0.1,0l0.1,0l0.1,0l0-0.1c0,0-0.2-0.7-0.4-2l7.2-2.1c0,0-1-2.7-2.3-3.2    c-0.9-0.3-4.4-0.1-6.3,0.1c-0.9-3.7-2.1-8.4-3.5-13.1l18.3-3.1c0.1-1.2-0.1-2.7-1.7-3.6c-1.2-0.6-13-1-19.1-1.1    c-0.8-2.4-1.8-4.6-2.6-6.4l0,0c-0.9-1.8-1.7-3.3-2.6-4.3c-0.4-0.5-0.9-0.8-1.2-1C-815.7,495.9-816.2,495.8-816.6,496L-816.6,496    l150.9-165L-816.6,496l150.9-165L-816.6,496z');
		plane2.setAttribute('class', 'plane plane2');
		plane2.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(plane2);
		
		var plane3 = document.createElementNS(xmlns, 'path');
		plane3.setAttributeNS(null, 'd', 'M-403.8,234.9c-0.4,0-0.8,0.2-1.2,0.5c-0.3,0.3-0.6,0.8-0.8,1.4c-0.5,1.2-0.7,2.9-0.9,4.9    c-0.2,2-0.2,4.3-0.1,6.8c-5.5,2.3-16.7,6.9-17.6,8c-1.2,1.4-0.8,3-0.3,4l18.4-3.7c0.4,4.9,0.9,9.7,1.4,13.5    c-1.8,0.5-5.2,1.6-5.9,2.2c-1,0.9-1,3.8-1,3.8l7.5-0.6c0.2,1.2,0.3,2,0.3,2l0,0.1h0.1h0.1h0.1l0-0.1c0,0,0.1-0.7,0.3-2l7.5,0.6    c0,0,0-2.9-1-3.8c-0.7-0.6-4.1-1.7-5.9-2.2c0.5-3.8,1-8.6,1.4-13.5l18.2,3.7c0.5-1.1,0.9-2.6-0.3-4c-0.9-1-11.8-5.6-17.4-7.9    c0.1-2.5,0-4.9-0.1-6.9v0c-0.2-2-0.4-3.7-0.9-4.9c-0.2-0.6-0.5-1.1-0.8-1.4C-402.9,235.1-403.3,234.9-403.8,234.9L-403.8,234.9    L-203.8,134.9L-403.8,234.9L-203.8,134.9z');
		plane3.setAttribute('class', 'plane plane3');
		plane3.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(plane3);
		
		var plane4 = document.createElementNS(xmlns, 'path');
		plane4.setAttributeNS(null, 'd', 'M-816.6,496c-0.4,0.1-0.7,0.5-0.9,0.9c-0.2,0.4-0.3,1-0.2,1.6c0,1.3,0.4,3,0.9,4.9s1.4,4.1,2.3,6.4    c-4.3,4.1-13.1,12.4-13.6,13.8c-0.6,1.7,0.3,3.1,1.2,3.8l15.9-10c2.1,4.4,4.3,8.7,6.1,12.1c-1.5,1.1-4.3,3.4-4.7,4.2    c-0.6,1.2,0.4,3.9,0.4,3.9l6.8-3.2c0.6,1,1,1.8,1,1.8l0,0.1l0.1,0l0.1,0l0.1,0l0-0.1c0,0-0.2-0.7-0.4-2l7.2-2.1c0,0-1-2.7-2.3-3.2    c-0.9-0.3-4.4-0.1-6.3,0.1c-0.9-3.7-2.1-8.4-3.5-13.1l18.3-3.1c0.1-1.2-0.1-2.7-1.7-3.6c-1.2-0.6-13-1-19.1-1.1    c-0.8-2.4-1.8-4.6-2.6-6.4l0,0c-0.9-1.8-1.7-3.3-2.6-4.3c-0.4-0.5-0.9-0.8-1.2-1C-815.7,495.9-816.2,495.8-816.6,496L-816.6,496    l150.9-165L-816.6,496l150.9-165L-816.6,496z');
		plane4.setAttribute('class', 'plane plane4');
		plane4.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(plane4);
		
		var plane5 = document.createElementNS(xmlns, 'path');
		plane5.setAttributeNS(null, 'd', 'M-1262.5,699.5c-0.4,0-0.8,0.2-1.2,0.5c-0.3,0.3-0.6,0.8-0.7,1.4c-0.4,1.2-0.7,3-0.8,4.9    c-0.2,2-0.1,4.3,0,6.8c-5.4,2.4-16.6,7.2-17.5,8.3c-1.1,1.4-0.8,3-0.2,4l18.4-4c0.5,4.9,1.1,9.6,1.6,13.5    c-1.8,0.5-5.2,1.7-5.9,2.3c-1,0.9-1,3.8-1,3.8l7.5-0.7c0.2,1.1,0.3,2,0.3,2l0,0.1l0.1,0l0.1,0l0.1,0l0-0.1c0,0,0.1-0.7,0.3-2    l7.5,0.5c0,0,0-2.9-1.1-3.8c-0.7-0.6-4.1-1.6-6-2.1c0.4-3.8,0.9-8.6,1.2-13.5l18.3,3.3c0.5-1.1,0.8-2.6-0.4-4    c-0.9-1-11.9-5.4-17.6-7.6c0.1-2.5-0.1-4.9-0.3-6.9l0,0c-0.2-2-0.5-3.7-1-4.9c-0.2-0.6-0.6-1.1-0.8-1.4    C-1261.6,699.7-1262.1,699.4-1262.5,699.5L-1262.5,699.5l198.2-103.4L-1262.5,699.5l198.2-103.4L-1262.5,699.5z');
		plane5.setAttribute('class', 'plane plane5');
		plane5.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(plane5);
						
		var plane6 = document.createElementNS(xmlns, 'path');
		plane6.setAttributeNS(null, 'd', 'M-1514.2,870c0.4,0,0.8-0.2,1.2-0.5c0.3-0.3,0.6-0.8,0.7-1.4c0.4-1.2,0.7-3,0.8-4.9c0.2-2,0.1-4.3,0-6.8 c5.4-2.4,16.6-7.2,17.5-8.3c1.1-1.4,0.8-3,0.2-4l-18.4,4c-0.5-4.9-1.1-9.6-1.6-13.5c1.8-0.5,5.2-1.7,5.9-2.3c1-0.9,1-3.8,1-3.8 l-7.5,0.7c-0.2-1.1-0.3-2-0.3-2v-0.1h-0.1h-0.1h-0.1v0.1c0,0-0.1,0.7-0.3,2l-7.5-0.5c0,0,0,2.9,1.1,3.8c0.7,0.6,4.1,1.6,6,2.1 c-0.4,3.8-0.9,8.6-1.2,13.5l-18.3-3.3c-0.5,1.1-0.8,2.6,0.4,4c0.9,1,11.9,5.4,17.6,7.6c-0.1,2.5,0.1,4.9,0.3,6.9l0,0 c0.2,2,0.5,3.7,1,4.9c0.2,0.6,0.6,1.1,0.8,1.4C-1515.1,869.8-1514.6,870.1-1514.2,870L-1514.2,870l-198.2,103.4L-1514.2,870 l-198.2,103.4L-1514.2,870z');
		plane6.setAttribute('class', 'plane plane6');
		plane6.setAttributeNS(null, 'fill', "#fff");
		group.appendChild(plane6);
						
	}

	
	function GetTodayDate() {
   		var tdate = new Date();
   		var dd = tdate.getDate(); //yields day
		
		if (dd < 10) {
		dd = '0' + dd;	
		}
		
   		var MM = tdate.getMonth(); //yields month
   		var yy = (tdate.getFullYear().toString()).substring(2); //yields year
   		var currentDate= dd + '/' +(MM+1)+ '/' + yy;
		
   		return currentDate;
	}
	
	var flights = [
		//FROM-TO;LAT;LON;ALT;VHOR;VVER;DATE;DEP;ARR
		'CGN — TXL;52.6444;12.432;4404.36;663.948;-35.1;'+GetTodayDate()+';8:45PM;10:00PM', 
		'BUD — WAW;50.963;5.6439;10355.6;786.528;-17.568;'+GetTodayDate()+';9:55AM;11:15AM',
		'JFK — LAX;40.0908;-79.2642;9738.36;801.18;22.3;'+GetTodayDate()+';4:55PM;8:25PM',
		'ATL — IAD;38.3366;-77.4488;2606.04;564.48;-17.568;'+GetTodayDate()+';9:55AM;11:43AM',
		'MAA — DEL;53.3469;43.6626;13106.4;855.54;-1.188;'+GetTodayDate()+';6:15AM;8:55AM',
		'CLT — SEA;38.8386;-84.6354;9151.62;840.816;1.188;'+GetTodayDate()+';7:30AM;10:15AM',
		'DFW — PIT;34.3752;-96.1747;9067.8;901.008;25.74;'+GetTodayDate()+';2:45PM;6:23PM',
		'LHR — EWR;54.3754;-12.1695;10370.8;713.628;28.44;'+GetTodayDate()+';6:00AM;9:25PM',
		'DFW — LAX;33.0532;-98.1702;5737.86;748.26;22.248;'+GetTodayDate()+';4:01PM;5:23PM',
		'BCN — CPH;51.3355;3.9496;9068.1;813.456;33.4;'+GetTodayDate()+';4:40PM;7:40PM',
		
		'TXL — CGN;52.6444;12.432;4404.36;663.948;-35.1;'+GetTodayDate()+';8:45PM;10:00PM', 
		'WAW — BUD;50.963;5.6439;10355.6;786.528;-17.568;'+GetTodayDate()+';9:55AM;11:15AM',
		'LAX — JFK;40.0908;-79.2642;9738.36;801.18;22.3;'+GetTodayDate()+';4:55PM;8:25PM',
		'IAD — ATL;38.3366;-77.4488;2606.04;564.48;-17.568;'+GetTodayDate()+';9:55AM;11:43AM',
		'DEL — MAA;53.3469;43.6626;13106.4;855.54;-1.188;'+GetTodayDate()+';6:15AM;8:55AM',
		'SEA — CLT;38.8386;-84.6354;9151.62;840.816;1.188;'+GetTodayDate()+';7:30AM;10:15AM',
		'PIT — DFW;34.3752;-96.1747;9067.8;901.008;25.74;'+GetTodayDate()+';2:45PM;6:23PM',
		'EWR — LHR;54.3754;-12.1695;10370.8;713.628;28.44;'+GetTodayDate()+';6:00AM;9:25PM',
		'LAX — DFW;33.0532;-98.1702;5737.86;748.26;22.248;'+GetTodayDate()+';4:01PM;5:23PM',
		'CPH — BCN;51.3355;3.9496;9068.1;813.456;33.4;'+GetTodayDate()+';4:40PM;7:40PM',
	];
	
	var randomArrayItem;
	var splitArray;
	var reverseArray = false;
	
	window.setInterval(function(){
				
		var intervalFoundPlane = false;
		
		// 50/50 chance
		if (Math.random() < 0.5) {
		reverseArray = true;	
		}

		randomArrayItem = flights[Math.floor(Math.random()*flights.length)];
		splitArray = randomArrayItem.split(';');

		$('body').find('.radar .data [data-point]').each(function() {
										
			var thisDataPoint = $(this).attr('data-point');
			$(this).text(splitArray[thisDataPoint]);
						
		});
						
		var planeArray = $('body').find('.plane');
		
		if (reverseArray === true) {
		planeArray = $('body').find('.plane').get().reverse();
		}
		
		$(planeArray).each(function() {
			
			if (intervalFoundPlane === true) {
			return true;	
			}
						
			if ($(this).css('display') !== 'none' && $(this).is(':visible') && $(this).css('opacity') > 0.75 && $(this).attr('fill') !== '#85a1c5') {
				$('.plane').attr('fill', '#ffffff');
				$(this).attr('fill', '#85a1c5');
				
				intervalFoundPlane = true;
			} else {
				return true;	
			}
					
		});

	}, 5000);
	
});