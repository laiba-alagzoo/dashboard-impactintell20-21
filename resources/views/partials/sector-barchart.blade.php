@php
if (!isset($barchart_color)) {
    $barchart_color = '#5f89ad';
}
if (!isset($barchart_representation)) {
    $barchart_representation = 'Represented by $94 billion of spending by 1.9 billion Muslims on pharmaceuticals (2019 est.)';
}
if (!isset($barchart_target)) {
    $barchart_target = 'Top 5 Pharmaceuticals Muslim consumer markets (2019)';
}
if (!isset($barchart_target_color)) {
    $barchart_target_color = '#282828';
}
if (!isset($only_barchart)) {
    $only_barchart = false;
}
if (!isset($sectorBarchartCsv_variable)) {
    $sectorBarchartCsv_variable = 'sectorBarchartCsv';
}

@endphp

@push('after_head')
    <style>
        .barchart .axis {
            font-size: 13px;
        }

        .barchart .axis path,
        .barchart .axis line {
            fill: none;
            display: none;
        }

        .barchart text {
            fill: white;
            font-weight: bold;
            text-shadow: 1px 1px 2px black;
        }

        .barchart .label {
            font-size: 13px;
        }

        .barchart-representation {
            color: #FFFFFF;
            font-size: 14px;
            letter-spacing: 0;
            line-height: 16px;
            margin-bottom: 10px;
        }

        .barchart-target {
            color: {{ $barchart_target_color }};
            font-size: 12px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: 14px;
        }

    </style>
@endpush

@push('after_scripts')
    <script type="text/javascript">
        if (typeof window.sectorBarchartSettings === 'undefined') {
            window.sectorBarchartSettings = {
                valueNormMax: 100,
                valueRatio: 1,
                valuePrefix: '$',
                valueSuffix: 'b',
            }
        }

        if (window['{{$sectorBarchartCsv_variable}}']) {
            d3.csv(window['{{$sectorBarchartCsv_variable}}'])
                .row(function (d) {
                    return {
                        name: d['Name'],
                        value: d['Value'],
                        color: d['Color'] || '{{$barchart_color}}',
                    };
                })
                .get(function (errors, rows) {
                    //sort bars based on value

                    max = _.max(_.map(rows ,'value'));

                    // normalize the value
                    rows = rows.map(function (a) {
                        return {
                            name: a.name,
                            value: a.value,
                            valueNorm: (a.value / max) * window.sectorBarchartSettings.valueNormMax,
                            color: a.color,
                        }
                    });

                    rows = rows.sort(function (a, b) {
                        return d3.ascending(a.valueNorm, b.valueNorm);
                    });

                    //set up svg using margin conventions - we'll need plenty of room on the left for labels
                    let gMargin = {
                        top: 15,
                        right: 25,
                        bottom: 15,
                        left: 80
                    };

                    let gWidth = 280 - gMargin.left - gMargin.right,
                        gHeight = 180 - gMargin.top - gMargin.bottom;

                    let svg = d3.select(".barchart").append("svg")
                        .attr("width", gWidth + gMargin.left + gMargin.right)
                        .attr("height", gHeight + gMargin.top + gMargin.bottom)
                        .append("g")
                        .attr("transform", "translate(" + gMargin.left + "," + gMargin.top + ")");

                    let x = d3.scale.linear()
                        .range([0, gWidth])
                        .domain([0, d3.max(rows, function (d) {
                            return d.valueNorm;
                        })]);

                    let y = d3.scale.ordinal()
                        .rangeRoundBands([gHeight, 0], .1)
                        .domain(rows.map(function (d) {
                            return d.name;
                        }));

                    //make y axis to show bar names
                    let yAxis = d3.svg.axis()
                        .scale(y)
                        //no tick marks
                        .tickSize(0)
                        .orient("left");

                    let gy = svg.append("g")
                        .attr("class", "y axis")
                        .call(yAxis)

                    let bars = svg.selectAll(".bar")
                        .data(rows)
                        .enter()
                        .append("g")

                    //append rects
                    bars.append("rect")
                        .attr("class", "bar")
                        .attr("y", function (d) {
                            return y(d.name);
                        })
                        .attr("height", y.rangeBand())
                        .attr("x", 0)
                        .attr("width", function (d) {
                            return x(d.value);
                        })
                        .attr("fill", function (d) {
                            return d.color;
                        });

                    //add a value label to the right of each bar
                    bars.append("text")
                        .attr("class", "label")
                        //y position of the label is halfway down the bar
                        .attr("y", function (d) {
                            return y(d.name) + y.rangeBand() / 2 + 4;
                        })
                        //x position is 3 pixels to the right of the bar
                        .attr("x", function (d) {
                            return x(d.value) + 3;
                        })
                        .text(function (d) {
                            return window.sectorBarchartSettings.valuePrefix
                                + '' + parseFloat((d.value * window.sectorBarchartSettings.valueRatio).toFixed(2)) + ' '
                                + window.sectorBarchartSettings.valueSuffix;
                        });
                })
        }
    </script>
@endpush
<div>
    @if($only_barchart === false)
        <div class="text-left box-sector-header">{{ $nav_title }}</div>
        <div class="text-left barchart-representation">{!! $barchart_representation !!}</div>
        <div class="text-left barchart-target">{!! $barchart_target !!}</div>
    @endif
    <div class="barchart"></div>
    @if(isset($barchart_after_target) && $only_barchart === false)
        <div class="text-left barchart-target">{!! $barchart_after_target !!}</div>
    @endif
</div>
