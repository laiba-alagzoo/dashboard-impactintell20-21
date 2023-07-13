@php
@endphp

@push('after_head')
    <style>
        .chart rect {
            /*  fill: steelblue;*/
        }

        .chart text {
            fill: #ffffff;
            font: 10px sans-serif;
            font-weight: bold;
            text-anchor: start;
        }

        .chart .deal-country {
            fill: #ffffff;
            font: 9px sans-serif;
            font-weight: bold;
            text-anchor: start;
        }

        .chart {
            border: 1px solid #ffffff;
            background-color: transparent;
        }

        .mini-title {
            color: #FFFFFF;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 0;
            line-height: 20px;
        }
        .mini-description {
            color: #FFFFFF;
            font-size: 12px;
            letter-spacing: 0;
            line-height: 10px;
            margin-bottom: 8px;
        }

    </style>
@endpush

@push('after_scripts')
    <script type="text/javascript">
        if (typeof window.investmentDeals !== 'undefined') {
            d3.csv(window.investmentDeals)
                .row(function (d) {
                    return {country: d['Top Countries'], deals: Number(d['Deals'].trim())};
                })
                .get(function (errors, rows) {
                    let data = rows;

                    data.sort(function (a, b) {
                        if (a['country'] !== 'Other') {
                            return b['deals'] - a['deals']
                        } else {
                            return a['deals'];
                        }
                    });

                    let deals_only = _.map(data, 'deals');

                    let dWidth = "100%",
                        dHeight = 40,
                        goal = 600,
                        perc_so_far = 0;

                    let total_time = d3.sum(deals_only);
                    let bar_x = 0;
                    let chart = d3.select(".deal-chart")
                        .append("svg")
                        .attr("class", "chart")
                        .attr("width", dWidth)
                        .attr("height", dHeight);

                    // Resetting
                    bar_x = 0;

                    let chart_width = parseInt(chart.style("width"));

                    let color = function (i) {
                        return [
                            '#222222',
                            '#444444',
                            '#666666',
                            '#888888',
                            '#AAAAAA',
                        ][i];
                    };
                    let bar = chart.selectAll("g")
                        .data(data)
                        .enter().append("g");

                    bar.append("rect")
                        .attr("width", function (d) {
                            return ((d.deals / total_time) * 100) + "%";
                        })
                        .attr("x", function (d) {
                            var prev_perc = perc_so_far;
                            var this_perc = 100 * (d.deals / total_time);
                            perc_so_far = perc_so_far + this_perc;
                            console.debug("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
                            return prev_perc + "%";
                        })
                        .attr("height", dHeight)
                        .attr("fill", function (d, i) {
                            if (d.country !== 'Other') {
                                return (color(i))
                            } else {
                                return 'transparent';
                            }
                        });

                    // Resetting
                    perc_so_far = 0;
                    perc_country_so_far = 0;

                    bar.append("svg:text")
                        .attr("dx", function (d) {
                            var prev_perc = perc_so_far;
                            var this_perc = 100 * (d.deals / total_time);
                            perc_so_far = perc_so_far + this_perc;
                            console.debug("perc_so_far:" + perc_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
                            return (prev_perc + 1) + "%";
                        })
                        .attr("dy", "1.35em")
                        .append("svg:tspan")
                        .attr("x", "0")
                        .text(function (d) {
                            return d.deals;
                        })
                        .append("svg:tspan")
                        .attr("class", "deal-country")
                        .attr("x", function (d) {
                            var prev_perc = perc_country_so_far;
                            var this_perc = 100 * (d.deals / total_time);
                            perc_country_so_far = perc_country_so_far + this_perc;
                            console.debug("perc_so_far:" + perc_country_so_far + "; this_perc:" + this_perc + "; prev_perc:" + prev_perc + ";");
                            return (prev_perc + 1) + "%";
                        })
                        .attr("dy", "1.35em")
                        .text(function (d) {
                            return d.country;
                        });

                    d3.select(window).on('resize', resize);

                    function resize() {
                        let rWidth = parseInt(chart
                            .style("width"));
                    }
                });
        }
    </script>
@endpush

<div class="mini-title">Deals</div>
<div class="mini-description">Top countries with # of related deals</div>
<div class="deal-chart"></div>
