// Chart 1
var yearScale = d3.scaleLinear()
					.domain([1969, 1985])
					.range([0, 600]);
					
var monthScale = d3.scaleLinear()
					.domain([11, -1])
					.range([0, 300]);
					
var colorScale = d3.scaleLinear()
					.domain([0, 2500])
					.range(["rgb(255,255,255)", "rgb(0,127,127)"]);
					
var chart1 = d3.select("#chart1").append("svg")
				.attr("height", 300)
				.attr("width", 600)
				.selectAll("rect")
					.data(ukDriverFatalities)
					.enter().append("rect")
						.attr("width", function() {
							return 600/(1984-1969+1);
						})
						.attr("height", function() {
							return 300/12;
						})
						.attr("y", function(d, i) {
							return monthScale(d.month);
						})
						.attr("x", function(d) {
							return yearScale(d.year);
						})
						.style("fill", function(d) {
							return colorScale(d.count);
						});
						
// Chart 2
var yearScale2 = d3.scaleLinear()
					.domain([1968.5, 1984.5])
					.range([0, 600]);

var monthScale2 = d3.scaleLinear()
					.domain([11.5, -0.5])
					.range([0, 300]);
					
var countScale2 = d3.scaleLinear()
					.domain([0,2500])
					.range([0,15]);
					
var chart2 = d3.select("#chart2").append("svg")
				.attr("height", 300)
				.attr("width", 600)
				.style("background", "#fee")
				.selectAll("circle")
					.data(ukDriverFatalities)
					.enter().append("circle")
						.attr("cx", function(d) {
							return yearScale2(d.year);
						})
						.attr("cy", function(d) {
							return monthScale2(d.month);
						})
						.attr("r", function(d) {
							return countScale2(d.count); 
						})
						.style("stroke", function() {
							return "white";
						})
						.style("fill", function() {
							return "blue";
						});

// Chart 3
var heightScale = d3.scaleLinear()
					.domain([0, 2500])
					.range([0, 300]);
					
var yScale = d3.scaleLinear()
					.domain([2500, 0])
					.range([0, 300]);
					
var xScale = d3.scaleLinear()
					.domain([0, 192])
					.range([0, 600]);
					
var chart3 = d3.select("#chart3").append("svg")
				.attr("height", 300)
				.attr("width", 600)
				.style("fill", "#bbb")
				.style("background", "#fee")
				.selectAll("rect")
					.data(ukDriverFatalities)
					.enter().append("rect")
						.attr("width", function() {
							return Math.ceil(600 / ukDriverFatalities.length);
						})
						.attr("height", function(d) {
							return heightScale(d.count);
						})
						.attr("x", function(d, i) {
							return xScale(i);
						})
						.attr("y", function(d, i) {
							return yScale(d.count);
						});
						
// Scatterplot 1
var cxScale = d3.scaleLinear()
				.domain([200, 800])
				.range([50, 450]);
				
var cyScale = d3.scaleLinear()
				.domain([200, 800])
				.range([50, 450]);
				
var rScale = d3.scaleLinear()
				.domain([15, 35])
				.range([5, 10]);

var fillScale = d3.scaleLinear()
				.domain([1.0, 4.0])
				.range(["rgb(0,0,0)", "rgb(0,255,0)"]);
				
var scatterplot1 = d3.select("#scatterplot_1").append("svg")
					.attr("height", 500)
					.attr("width", 500)
					.style("background", "#ddd")
					.append("g")
						.attr("transform", "translate(0, 500) scale(1, -1)")
						.selectAll("circle")
							.data(scores)
							.enter().append("circle")
								.attr("cx", function(d) {
									return cxScale(d.SATM);
								})
								.attr("cy", function(d) {
									return cyScale(d.SATV);
								})
								.attr("r", function(d) {
									return rScale(d.ACT);
								})
								.style("stroke", function() {
									return "white";
								})
								.style("fill", function(d) {
									return fillScale(d.GPA);
								});