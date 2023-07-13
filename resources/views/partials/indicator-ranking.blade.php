@php
    if (!isset($benchmark)) {
        $benchmark = false;
    }
@endphp
@push('head')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/radar-chart-d3@1.2.0/src/radar-chart.min.css">
@endpush

@push('scripts')
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
@endpush

@push('after_head')
    <style>
        .chart-components .radar-chart .area {
            fill-opacity: 0;
            stroke: white;
        }

        .chart-components .radar-chart.focus .area {
            fill-opacity: 0;
        }

        .chart-components .radar-chart.focus .area.focused {
            fill-opacity: 0.4;
        }

        .chart-components .radar-chart .level {
            stroke: white;
        }

        .chart-components .radar-chart .axis .legend {
            fill: white;
            font-weight: bold;
            text-transform: uppercase;
            text-shadow: 1px 1px 2px black;
        }

        @if(!isset($no_custom) || (isset($no_custom) && $no_custom === false))

        .chart-components .radar-chart .axis .legend.left {
            transform: rotateZ(270deg) translate(calc(50% - 16px), calc(-50% + 10px));
            transform-origin: center;
        }

        .chart-components .radar-chart.three .axis .legend.left {
            transform: rotateZ(60deg) translate(calc(50% + -45px), calc(25% + -10px));
        }

        .chart-components .radar-chart .axis .legend.right {
            transform: rotateZ(90deg) translate(calc(-50% + 35px), calc(-50% + 10px));
            transform-origin: center;
        }

        .chart-components .radar-chart.three .axis .legend.right {
            transform: rotateZ(-60deg) translate(calc(-50% + 50px), calc(25% + -10px));
        }

        @elseif(isset($custom_six) && $custom_six === true)

        .chart-components .radar-chart .axis:nth-child(12) .legend {
            transform: translate(0px, 0px);
        }

        .chart-components .radar-chart .axis:nth-child(13) .legend {
            transform: translate(-40px, 45px) rotate(-45deg);
        }

        .chart-components .radar-chart .axis:nth-child(14) .legend {
            transform: translate(100px, 17px) rotate(45deg);
        }

        .chart-components .radar-chart .axis:nth-child(15) .legend {
            transform: translate(0px, -5px);
        }

        .chart-components .radar-chart .axis:nth-child(16) .legend {
            transform: translate(-46px, 151px) rotate(-45deg);
        }

        .chart-components .radar-chart .axis:nth-child(17) .legend {
            transform: translate(97px, -89px) rotate(45deg);
        }

        @endif

        .indicator-diagram {
            position: relative;
            width: 300px;
        }

        .chart-components {
            position: relative;
            display: flex;
            width: 270px;
        }

        .chart-legends {
            position: absolute;
            top: 40px;
            right: 0;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column;
            width: 80px;
            margin-left: 8px;
        }

        .line-chart-legend {
            display: flex;
            align-items: flex-start;
            justify-content: center;
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

        .dropdown-countries-container {
            text-align: center;
            margin-top: 14px;
        }

        .dropdown-countries {
            background-color: #424242;
            color: white;
            width: 162px;
            height: 24px;
            margin: 0 auto;
            font-size: 13px;
        }

        .select2 {
            text-align: left;
        }
    </style>
@endpush

@push('after_before_scripts')
    <script src="https://cdn.jsdelivr.net/npm/radar-chart-d3@1.2.0/src/radar-chart.min.js"></script>
@endpush

@push('after_scripts')
    <script>
        (function () {
            let rowsInMem = [];
            let countries = [];
            let countriesNames = [];
            let legends = [];
            let selectedCountry = '';

            if (typeof window.indicatorRankingCsv !== 'undefined') {
                if (typeof window.indicatorSections === 'undefined') {
                    window.indicatorSections = {
                        Sections: {
                            Financial: {
                                title: 'Financial',
                                max: 80,
                            },
                            Social: {
                                title: 'Social',
                                max: 80,
                            },
                            Awareness: {
                                title: 'Awareness',
                                max: 80,
                            },
                            Governance: {
                                title: 'Governance',
                                max: 4,
                            },
                        },
                        base: {
                            max: 80,
                        },
                    };
                }

                let colors = function (i) {
                    return [
                        '#ffffff',
                        '#ffcd48',
                        '#7f2b01',
                        '#59ff00',
                        '#00e5fa',
                        '#ff0051',
                    ][i];
                }

                d3.csv(window.indicatorRankingCsv)
                    .row(function (d) {
                        return {
                            className: d['Country'] + ' ' + d['Alpha'],
                            data: d
                        };
                    })
                    .get(function (errors, rows) {
                        // Get the sections keys
                        rowsInMem = rows;
                        console.log(rows);
                        countries = _.map(_.map(rows, 'data'), 'Alpha');
                        countriesNames = _.map(_.map(rows, 'data'), 'Country');
                        CountryOptions();
                        CleanAndRenderGraph();
                    });

                let CleanAndRenderGraph = function () {
                    // Clean
                    jQuery('.chart-legends').html('');
                    jQuery('.chart-container').html('');

                    let allMax = [];
                    for (let key in window.indicatorSections.Sections) {
                        if (window.indicatorSections.Sections.hasOwnProperty(key)) {
                            window.indicatorSections.Sections[key].max = _.max(_.map(_.map(rowsInMem, 'data'), function (a) {
                                return parseInt(a[key])
                            }));
                            allMax.push(window.indicatorSections.Sections[key].max);
                        }
                    }
                    window.indicatorSections.base.max = _.max(allMax);

                    // add axies
                    for (let i = 0; i < rowsInMem.length; i++) {
                        let axes = [];
                        for (let key in window.indicatorSections.Sections) {
                            if (window.indicatorSections.Sections.hasOwnProperty(key)) {
                                let value = window.indicatorSections.base.max - ((rowsInMem[i].data[key] - 1) * (window.indicatorSections.base.max / window.indicatorSections.Sections[key].max))
                                axes.push(
                                    {axis: window.indicatorSections.Sections[key].title, value: value}
                                )
                            }
                        }
                        rowsInMem[i].axes = axes;
                    }

                    // from high to low
                    let sorted_rows = rowsInMem.sort(function (a, b) {
                        return parseInt(a.data['Overall']) - parseInt(b.data['Overall']);
                    });

                    let top_5_rows_og = sorted_rows.slice(0, 5);

                    // Is the selected country
                    if (selectedCountry !== '') {
                        let a = sorted_rows.find(function (a) {
                            return selectedCountry === a.data['Country'];
                        });
                        top_5_rows_og.push(a);
                    }

                    // from low to high for rendering reasons
                    let top_5_rows_for_rendering = top_5_rows_og.sort(function (a, b) {
                        return parseInt(b.data['Overall']) - parseInt(a.data['Overall']);
                    });

                    // Clean legends
                    legends = [];

                    for (let i = 0; i < top_5_rows_og.length; i++) {
                        legends.push({
                            name: top_5_rows_og[i].data['Country'],
                            Overall: top_5_rows_og[i].data['Overall'],
                            Awareness: top_5_rows_og[i].data['Awareness'],
                            Financial: top_5_rows_og[i].data['Financial'],
                            Governance: top_5_rows_og[i].data['Governance'],
                            Social: top_5_rows_og[i].data['Social'],
                            color: colors(i),
                        });
                    }

                    RenderLegends();
                    let chart = RadarChart.chart();
                    let svg = d3.select('.chart-container').append('svg')
                        .attr('width', 190)
                        .attr('height', 190);

                    // retrieve config
                    chart.config({});

                    // all options with default values
                    chart.config({
                        containerClass: 'radar-chart' + (Object.keys(window.indicatorSections.Sections).length === 3 ? ' three' : ''), // target with css, the default stylesheet targets .radar-chart
                        w: 190,
                        h: 190,
                        factor: 0.8,
                        factorLegend: 1,
                        levels: 10,
                        maxValue: 0,
                        minValue: 0,
                        radians: 2 * Math.PI,
                        color: function (i) {
                            return colors(i);
                        },
                        axisLine: true,
                        axisText: true,
                        circles: false, //II no circle on points
                        radius: 5,
                        open: false,
                        axisJoin: function (d, i) {
                            return d.className || i;
                        },
                        transitionDuration: 300
                    });

                    svg.append('g').classed('focus', 1).datum(top_5_rows_for_rendering).call(chart);
                };

                let RenderLegends = function () {
                    console.log('legends', legends);

                    let reversed_legends = legends.sort(function (a, b) {
                        return parseInt(a['Overall']) - parseInt(b['Overall'])
                    });

                    for (let x = 0; x < reversed_legends.length; x++) {
                        let e = document.createElement('div');
                        e.setAttribute('class', 'line-chart-legend');
                        e.innerHTML = '<div class="legend-color" style="background-color: ' + reversed_legends[x]['color'] + '"></div><div class="legend-name">' + reversed_legends[x]['Overall'] + '. ' + reversed_legends[x]['name'] + '</div>';
                        document.querySelector('.chart-legends').appendChild(e);
                    }
                };

                let CountryOptions = function () {
                    for (let i = 0; i < countriesNames.length; i++) {
                        jQuery('.dropdown-countries').append('<option value="' + countriesNames[i] + '">' + countriesNames[i] + '</option>');
                    }
                };

                jQuery(window).ready(function ($) {
                    jQuery('.dropdown-countries').change(function () {
                        selectedCountry = jQuery(this).val();
                        console.log('selectedCountry', selectedCountry);
                        if (typeof selectedCountry === 'string' && selectedCountry !== '' && selectedCountry !== 'Country') {
                            CleanAndRenderGraph();
                        }
                    });
                });
            }
        })();
    </script>
@endpush

<div class="indicator-diagram">
    @if($benchmark === true)
        <div class="text-left box-sector-header">Government Benchmarks</div>
    @else
        <div class="text-left box-sector-header">Government Leaders</div>
    @endif
    <div class="chart-components">
        <div class="text-center chart-container"></div>
    </div>
    <div class="chart-legends"></div>

    <div class="dropdown-countries-container">
        <select class="dropdown-countries">
            <option>Country</option>
        </select>
    </div>
</div>
