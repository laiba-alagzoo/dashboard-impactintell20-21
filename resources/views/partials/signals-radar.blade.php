@push('after_head')
    <style>
        .signal-chart {
            display: inline-block;
            width: 250px;
            height: 223px;
        }

        .point {
            /*mix-blend-mode: multiply;*/
        }

        .frame {
            fill: none;
            stroke: #000;
        }

        .axis text {
            font: 10px sans-serif;
        }

        .axis line {
            fill: none;
            stroke: #ebebeb;
        }

        .axis circle {
            fill: none;
            stroke: #dfe3e6;
        }

        .axis g:last-child circle {
            fill: #393E41;
            fill-opacity: 0.8;
        }

        .axis:last-of-type circle {
            stroke: #333;
        }

        .line {
            fill: none;
            stroke: orange;
            stroke-width: 3px;
        }

        .shadowed {
            text-shadow: 1px 1px 2px black;
            font-size: 0.9em;
        }

        .radar-label {
            font-weight: bold;
            font-size: 0.85em;
            text-transform: uppercase;
        }
    </style>
@endpush

@push('after_scripts')
    <script>
        (function () {
            if (typeof window.signalRadarCsv !== 'undefined' && typeof window.signalRadarSectors !== 'undefined') {
                d3.csv(window.signalRadarCsv)
                    .row(function (d) {
                        return {
                            sector: d['Sector'],
                            opportunity: d['Opportunity'],
                            signal: d['Signal'],
                            impact: d['Impact'],
                            degree: d['Degree'],
                            distance: d['Distance'],
                        }
                    })
                    .get(function (errors, rows) {
                        // http://stackoverflow.com/a/929107
                        let reMap = function (oldValue) {
                            let oldMin = 0,
                                oldMax = -359,
                                newMin = 0,
                                newMax = (Math.PI * 2),
                                newValue = (((oldValue - 90 - oldMin) * (newMax - newMin)) / (oldMax - oldMin)) + newMin;

                            return newValue;
                        };

                        // https://en.wikipedia.org/wiki/Polar_coordinate_system
                        // first is position clockwise, aka angular coordinate, polar angle, or azimuth. range from 0 - 359
                        // second is ring (range 0 to 1), aka Radial Coordinate.
                        // third is node size radius (center to edge)

                        const IMPACT_STRONG_SIZES = [14, 13, 12];
                        const IMPACT_WEAK_SIZES = [6, 5, 4];

                        const SIGNAL_TYPE = {
                            0: '#ffffff',
                            1: '#fdf000',
                        }

                        let sectorBetween = function (min, max) {
                            return Math.random() * (max - min) + min
                        };

                        let ImpactSize = function (input) {
                            switch (input) {
                                case 0:
                                case '0':
                                    return _.sample(IMPACT_WEAK_SIZES);
                                case 1:
                                case '1':
                                    return _.sample(IMPACT_STRONG_SIZES);
                            }
                        }

                        let SignalType = function (input) {
                            return SIGNAL_TYPE[input];
                        }

                        let sections = window.signalRadarSectors;

                        let data_radar = [];

                        for (let i = 0; i < rows.length; i++) {
                            data_radar.push(
                                [
                                    reMap(rows[i]['degree']),
                                    rows[i]['distance'],
                                    ImpactSize(rows[i]['impact']),
                                    rows[i]['opportunity'],
                                    SignalType(rows[i]['signal']),
                                    sections[rows[i]['sector']].rotate
                                ]
                            )
                        }

                        let zoom = d3.behavior.zoom()
                            .scaleExtent([1, 10])
                            .on("zoom", zoomed);

                        function zoomed() {
                            svg.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
                        }


                        function dragstarted(d) {
                            d3.event.sourceEvent.stopPropagation();
                            d3.select(this).classed("dragging", true);
                        }

                        function dragged(d) {
                            d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
                        }

                        function dragended(d) {
                            d3.select(this).classed("dragging", false);
                        }


                        let width = 250,
                            height = 216,
                            radius = Math.min(width, height) / 2 - 30; // radius of the whole chart

                        let ratio = 0.5;

                        let r = d3.scale.linear()
                            .domain([0, 1])
                            .range([0, radius]);

                        let svg = d3.select('.signal-chart').append('svg')
                            // .call(zoom)
                            .attr('width', width)
                            .attr('height', height)
                            .append('g')
                            .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

                        let gr = svg.append('g')
                            .attr('class', 'r axis')
                            .selectAll('g')
                            .data(r.ticks(5).slice(1))
                            .enter().append('g');

                        gr.append('circle')
                            .attr('r', r);

                        var ga = svg.append('g')
                            .attr('class', 'a axis')
                            .selectAll('g')
                            .data(Object.values(sections).map(function (a) {
                                return a.dMin
                            })) // line density  --> I just changed this from '60' to 120'
                            .enter().append('g')
                            .attr('transform', function (d) {
                                return 'rotate(' + (d - 90) + ')';   // --> I assume we can handle rotation here
                            });

                        ga.append('line')
                            .attr('x2', radius);

                        var gal = svg.append('g')
                            .attr('class', 'axis-label')
                            .selectAll('g')
                            .data(Object.values(sections)) // line density  --> I just changed this from '60' to 120'
                            .enter()
                            .append('g')
                            .attr('transform', function (d) {
                                return 'translate(' + d.x + ',' + d.y + ')' + ' rotate(' + d.rotate + ')' ;   // --> I assume we can handle rotation here
                            })
                        gal
                            .append('text')
                            .attr('class', function (d) {
                                return 'shadowed radar-label';
                            })
                            .attr('fill', function (d) {
                                return d.color;
                            })
                            .text(function (d) {
                                return d.title;
                            });

                        let line = d3.svg.line.radial()
                            .radius(function (d) {
                                return r(d[1]);
                            })
                            .angle(function (d) {
                                return -d[0] + Math.PI / 2;
                            });

                        svg.selectAll('point')
                            .data(data_radar)
                            .enter()
                            .append('circle')
                            .attr('class', 'point')
                            .attr('transform', function (d) {
                                //console.log(d);
                                var coors = line([d]).slice(1).slice(0, -1); // removes 'M' and 'Z' from string
                                return 'translate(' + coors + ')'
                            })
                            .attr('r', function (d) {
                                return d[2];
                            })
                            .attr('fill', function (d, i) {
                                return d[4];
                            }).on("click", function (d) {
                            return tooltip.style("visibility", "visible");
                        });

                        // adding labels
                        svg.selectAll('point')
                            .data(data_radar)
                            .enter()
                            .append("svg:text")
                            .attr('transform', function (d) {
                                let coors = line([d]).slice(1).slice(0, -1); // removes 'M' and 'Z' from string
                                let coorsX = parseFloat(coors.split(',')[0]) - (d[3].split('\\n')[0].length * 3); // subtracting just to set it in center
                                let coorsY = parseFloat(coors.split(',')[1]) - (d[2] + 6 + (d[3].split('\\n').length > 1 ? 14 : 0));
                                return 'translate(' + coorsX + ',' + coorsY + ')'
                            })
                            .attr('fill', function (d) {
                                return d[4];
                            })
                            .attr('class', function (d) {
                                return 'shadowed';
                            })
                            .append('svg:tspan')
                            .attr('x', 0)
                            .attr('dy', 2)
                            .text(function (d) {
                                return d[3].split('\\n')[0];
                            })
                            .append('svg:tspan')
                            .attr('x', 0)
                            .attr('dy', 14)
                            .text(function (d) {
                                return d[3].split('\\n')[1];
                            });
                    });
            }
        })();
    </script>
@endpush

<div>
    <div class="text-left box-sector-header">Signals of opportunities</div>
    <div class="text-center">
        <div class="signal-chart"></div>
    </div>
    <style>

    </style>
    <div class="signal-chart-legend">
        <div class="gray-big">
            <div class="custom-shape"></div>
            <div class="custom-label">Big<br>Impact</div>
        </div>
        <div class="gray-small">
            <div class="custom-shape"></div>
            <div class="custom-label">Small<br>Impact</div>
        </div>
        <div class="white-small">
            <div class="custom-shape"></div>
            <div class="custom-label">Weak<br>Signal</div>
        </div>
        <div class="yellow-small">
            <div class="custom-shape"></div>
            <div class="custom-label">Strong<br>Signal</div>
        </div>
    </div>
</div>
