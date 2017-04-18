$(document).ready(function() {
	var teethStr = getCookie("teeth");

	console.log(teethStr);

	var teethArray = JSON.parse(teethStr);
	var teethNum = new Array(15);
	teethNum.fill(0);
	var max = 0;
	var min = 16;
    var totaldiff = 15;
	for (i = 0; i < teethArray.length; i++) {
		console.log(teethArray[i].measurement);
		teethNum[teethArray[i].measurement - 1] ++;
		if(teethArray[i].measurement < min){
			min = teethArray[i].measurement;
		}
		if(teethArray[i].measurement > max){
			max = teethArray[i].measurement;
		}
        for(j = i; j < teethArray.length; j++){
            if(teethArray[i].imgfilename === teethArray[j].imgfilename && i != j){
                totaldiff --;
            }
        }
	}
	document.getElementById('max').innerHTML = max + ' millimeters';
	document.getElementById('min').innerHTML = min + ' millimeters';
  //document.getElementById('difftypes').innerHTML = totaldiff;

	var ctx = document.getElementById("myChart").getContext("2d");
	var data = {
		labels: ["1 mm", "2 mm", "3 mm", "4 mm", "5 mm", "6 mm", "7 mm", "8 mm", "9 mm", "10 mm", "11 mm", "12 mm", "13 mm", "14 mm", "15 mm"],
		datasets: [
		{
			label: "Overall Distribution",
			fillColor: "rgba(220,220,200,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,2220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [0,2,10,11,38,47,38,18,11,23,7,10,2,2,1]
		},
		{
			label: "User's Distribution",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [teethNum[0],teethNum[1],teethNum[2],teethNum[3],teethNum[4],teethNum[5],teethNum[6],
			teethNum[7],teethNum[8],teethNum[9],teethNum[10],teethNum[11],teethNum[12],teethNum[13],teethNum[14]]
		}
		]
	};
	var legendTemplateElements = "";
	for (var i=0; i < data.datasets.length; i++)
		legendTemplateElements += '<li><span style="background-color:'+data.datasets[i].strokeColor+'">&nbsp;&nbsp;</span>'+ (typeof data.datasets[i].label !== 'undefined') ? data.datasets[i].label : '' + '</li>';
	var options = {
		scaleShowGridLines : true,
		scaleShowHorizontalLines: true,
		scaleShowVerticalLines: true,
		bezierCurve: true,
		bezierCurveTension: 0.5,
		pointDot: true,
		datasetFill: true
	};
	var myLineChart = new Chart(ctx).Bar(data, options);

	//percantages chart
	var pctx = document.getElementById("pChart").getContext("2d");
	var pdata = {
		labels: ["1 mm", "2 mm", "3 mm", "4 mm", "5 mm", "6 mm", "7 mm", "8 mm", "9 mm", "10 mm", "11 mm", "12 mm", "13 mm", "14 mm", "15 mm"],
		datasets: [
		{
			label: "Overall Distribution",
			fillColor: "rgba(220,220,200,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,2220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [0,1,5,5,17,21,17,8,5,10,3,5,1,1,.4]
		},
		{
			label: "User's Distribution",
			fillColor: "rgba(151,187,205,0.2)",
			strokeColor: "rgba(151,187,205,1)",
			pointColor: "rgba(151,187,205,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(151,187,205,1)",
			data: [(teethNum[0]/15)*100,(teethNum[1]/15)*100,(teethNum[2]/15)*100,(teethNum[3]/15)*100,(teethNum[4]/15)*100,(teethNum[5]/15)*100,(teethNum[6]/15)*100,(teethNum[7]/15)*100,(teethNum[8]/15)*100,(teethNum[9]/15)*100,(teethNum[10]/15)*100,(teethNum[11]/15)*100,(teethNum[12]/15)*100,(teethNum[13]/15)*100,(teethNum[14]/15)*100]
		}
		]
	};
	var legendTemplateElements = "";
	for (var i=0; i < data.datasets.length; i++)
		legendTemplateElements += '<li><span style="background-color:'+data.datasets[i].strokeColor+'">&nbsp;&nbsp;</span>'+ (typeof data.datasets[i].label !== 'undefined') ? data.datasets[i].label : '' + '</li>';
	var myPChart = new Chart(pctx).Bar(pdata, options);
	document.getElementById('legendDiv').innerHTML = myLineChart.generateLegend();
	var newCtx = document.getElementById('newChart').getContext('2d');
	
	var newData = [
		{
			value: 7,
			color: '#00008B',//darkblue,
			highlight: '#0000FF',//blue,
			label: 'Soupfin Shark'
		},
		{
			value: 4,
			color: '#006400',//darkgreen,
			highlight: '#008000',//green,
			label: 'Lemon Shark'
		},
		{
			value: 3,
			color: '#FFD700',//gold,
			highlight: '#FFFF00',//yellow,
			label: 'Unidentified'
		},
		{
			value: 1,
			color: '#DC143C',//crimson,
			highlight: '#FF0000',//red,
			label: 'Isurus Hastalis'
		}
	];
	var myVeryNewChart = new Chart(newCtx).Pie(newData);

});

//function found at http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i=0; i<ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
	}
	return "";
}
