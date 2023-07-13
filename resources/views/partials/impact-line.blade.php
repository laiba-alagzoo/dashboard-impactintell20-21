@php
if(!isset($section_color)) {
    $section_color = '#FFFFFF';
}
if(!isset($aggregate_color)) {
    $aggregate_color = '#000000';
}
@endphp

@push('after_head')
    <style>
        .line-chart .line-path-stroke {
            stroke: {{ $section_color }};
            stroke-width: 3px;
            fill: none;
        }

        .line-chart .line-path-stroke-all {
            stroke: {{ $aggregate_color }};
            stroke-width: 3px;
            fill: none;
        }

        .line-chart .axis text {
            fill: white;
            font-size: 0.75em;
            font-weight: bold;
            text-transform: uppercase;
            text-shadow: 1px 1px 2px black;
        }

        .line-chart-legends {
            display: flex;
        }

        .line-chart-legends .line-chart-legend ~ .line-chart-legend {
            margin-left: 8px;
        }

        .line-chart-legend {
            display: inline-flex;
            align-items: center;
            justify-content: flex-start;
        }

        .line-chart-legend .legend-name {
            display: inline-block;
            font-size: 0.6em;
            fill: white;
            color: white;
            text-shadow: 1px 1px 2px black;
            margin-left: 8px;
        }

        .line-chart-legend .legend-color {
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: #00ABDD;
            border-radius: 50%;
        }
    </style>
@endpush

@push('after_scripts')
    <script type="text/javascript">

        let requests = [];
        let legends = [];

        let parseDate = d3.time.format("%Y").parse;
        let margin = {left: 10, right: 10, top: 40, bottom: 40};
        let width = 280 - margin.left - margin.right;
        let height = 250 - margin.top - margin.bottom;
        let min = 0;
        let max = 0;
        let xNudge = 35;
        let yNudge = 20;
        let minDate = new Date();
        let maxDate = new Date();

        requests.push(d3.csv('/csv/aggregate-growth.csv').row(function (d) {
            return {year: parseDate(d['Year'].slice(0, 4)), growth: Number(d['Growth'].trim())};
        }));

        if (typeof window.impactLineCsv !== 'undefined') {
            requests.push(d3.csv(window.impactLineCsv).row(function (d) {
                return {year: parseDate(d['Year'].slice(0, 4)), growth: Number(d['Growth'].trim())};
            }));
        }

        Promise.all(requests).then(function (results) {

            let renderChart = function (aggregatedRows, sectionRows) {
                let allRows = [];

                // Combine all sections
                if (typeof sectionRows !== 'undefined') {
                    allRows = _.concat(aggregatedRows, sectionRows);
                } else {
                    allRows = aggregatedRows;
                }

                max = d3.max(allRows, function (d) {
                    return d.growth;
                });
                min = d3.min(allRows, function (d) {
                    return d.growth;
                });
                minDate = d3.min(allRows, function (d) {
                    return d.year;
                });
                maxDate = d3.max(allRows, function (d) {
                    return d.year;
                });

                let y = d3.scale.linear()
                    .domain([min, max])
                    .range([height, 0]);

                let x = d3.time.scale()
                    .domain([minDate, maxDate])
                    .range([0, width - xNudge]);

                let yAxis = d3.svg.axis()
                    .orient("left")
                    .scale(y)
                    .ticks(8)
                    .tickSize(-width, 0)
                    .tickPadding(10)
                    .tickFormat(function (a) {
                        return '% ' + (a * 100).toFixed(0);
                    });

                let xAxis = d3.svg.axis()
                    .orient("bottom")
                    .scale(x)
                    .tickSize(0, 0)
                    .tickPadding(15)
                    .tickFormat(function (a) {
                        return a.getFullYear() + '-' + (a.getFullYear() + 1).toString().slice(2, 4);
                    });

                let line = d3.svg.line()
                    .x(function (d) {
                        return x(d.year);
                    })
                    .y(function (d) {
                        return y(d.growth);
                    })
                    .interpolate("linear");

                let svg = d3.select(".line-chart").append("svg").attr("id", "svg").attr("height", (height + 60) + 'px').attr("width", width + 'px');
                let chartGroup = svg.append("g").attr("class", "chartGroup").attr("transform", "translate(" + xNudge + "," + yNudge + ")");

                if (typeof sectionRows !== 'undefined') {
                    chartGroup
                        .append("g")
                        .append("path")
                        .attr("class", "line-path-stroke")
                        .attr("d", function (d) {
                            return line(sectionRows);
                        });

                    let labels = svg
                        .selectAll("labels")
                        .data(sectionRows)
                        .enter()
                        .append("g")
                        .attr("width", "20px")
                        .attr("height", "20px")
                        .attr("opacity", 0)
                        .attr("transform", function(d) {
                            return "translate(" + (xNudge + x(d.year) + 10) + "," + (yNudge + y(d.growth) + 10) + ")"
                        })
                        .on('mouseover', function (d) {
                            d3.select(this)
                                .attr('opacity', 1)
                        })
                        .on('mouseout', function (d) {
                            d3.select(this)
                                .attr('opacity', 0)
                        });
                    // .attr("x", function(d) { return x(d.year) })
                    // .attr("y", function(d) { return y(d.growth) })

                    labels.append("rect")
                        .attr("width", "30")
                        .attr("height", "20")
                        .attr("fill", "white")
                        .attr("opacity", 1)
                        .attr("stroke", "none")
                        .attr("x", function (d, idx, node) {
                            // if (idx === 0) {
                            //     return 0;
                            // }
                            if (idx === (aggregatedRows.length - 1)) {
                                return -40
                            }
                            return -15;
                        })
                        .attr("y", function (d, idx, node) {
                            return -10;
                        });

                    labels.append("text")
                        .attr("fill", "black")
                        .attr("x", function (d, idx, node) {
                            if (idx === (aggregatedRows.length - 1)) {
                                return -35 ;
                            }
                            return -((d.growth * 100).toFixed(1).length * 6)/2 ;
                        })
                        .attr("y", function (d, idx) {
                            return 5;
                        })
                        .text(function (d) {
                            return (d.growth * 100).toFixed(1);
                        });
                }

                chartGroup
                    .append("g")
                    .append("path")
                    .attr("class", "line-path-stroke-all")
                    .attr("d", function (d) {
                        return line(aggregatedRows);
                    })

                chartGroup.append("g")
                    .attr("class", "axis x")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

                chartGroup.append("g")
                    .attr("class", "axis y")
                    .call(yAxis);

                // Add the line
                let infos = svg.selectAll("infos")
                    .data(aggregatedRows)
                    .enter()
                    .append("g")
                    .attr("width", "20px")
                    .attr("height", "20px")
                    .attr("opacity", 0)
                    .attr("transform", function(d) {
                       return "translate(" + (xNudge + x(d.year) + 10) + "," + (yNudge + y(d.growth) + 10) + ")"
                    })
                    .on('mouseover', function (d) {
                        d3.select(this)
                            .attr('opacity', 1)
                    })
                    .on('mouseout', function (d) {
                        d3.select(this)
                            .attr('opacity', 0)
                    });
                    // .attr("x", function(d) { return x(d.year) })
                    // .attr("y", function(d) { return y(d.growth) })

                infos.append("rect")
                    .attr("width", "30")
                    .attr("height", "20")
                    .attr("fill", "white")
                    .attr("opacity", 1)
                    .attr("stroke", "none")
                    .attr("x", function (d, idx, node) {
                        // if (idx === 0) {
                        //     return 0;
                        // }
                        if (idx === (aggregatedRows.length - 1)) {
                            return -40
                        }
                        return -15;
                    })
                    .attr("y", function (d, idx, node) {
                        return -25;
                    });

                infos.append("text")
                    .attr("fill", "black")
                    .attr("x", function (d, idx, node) {
                        if (idx === (aggregatedRows.length - 1)) {
                            return -35 ;
                        }
                        return -((d.growth * 100).toFixed(1).length * 6)/2 ;
                    })
                    .attr("y", function (d, idx) {
                        return -10;
                    })
                    .text(function (d) {
                        return (d.growth * 100).toFixed(1);
                    });

            };

            let renderLegends = function () {
                for (let x = 0; x < legends.length; x++) {
                    let e = document.createElement('div');
                    e.setAttribute('class', 'line-chart-legend');
                    e.innerHTML = '<div class="legend-color" style="background-color: ' + legends[x]['color'] + '"></div><div class="legend-name">' + legends[x]['name'] + '</div>';
                    document.querySelector('.line-chart-legends').appendChild(e);
                }
            }

            results[0].get(function (errors, aggregatedRows) {
                // add legend
                legends.push({
                    name: 'Aggregated',
                    color: '{{$aggregate_color}}'
                })
                if (results.length > 1) {
                    results[1].get(function (errors, sectionRows) {
                        legends.push({
                            name: '{{$nav_title}}',
                            color: '{{$section_color}}'
                        });
                        renderChart(aggregatedRows, sectionRows);
                        renderLegends();
                    });
                } else {
                    renderChart(aggregatedRows, undefined);
                    renderLegends();
                }
            });
        });
    </script>
@endpush
<div>
    <div class="text-left box-sector-header">COVID-19 Impact Projections</div>
    <div class="text-center line-chart"></div>
    <div class="line-chart-legends"></div>
</div>
