@extends('_layout')

@php
    $nav_title = 'Media & Recreation';
    $nav_icon = 'media-recreation.svg';
    $source_notes = 'All estimates by DinarStandard Research & Advisory. Muslim consumer spend estimates & analysis by DinarStandard leveraging World Bank\'s ICP 2017 consumer data as baseline reference. Projections base-lined using IMF Outlook from April 2020. Halal and related products exports based on ITC Trademap 2019 data. Investments (figures and individual deals) are based on a detailed scan of databases from CapitalIQ, Crunchbase, White & Case, KPMG and DinarStandard analysis from 1st August 2019 to 31st July 2020. Full methodology in appendix. OIC = Organization of Islamic Cooperation, 57 mostly Muslim-majority member countries.';
    $information_box = [
        'title' => '$21 billion',
        'details' => 'of media & recreation exports to OIC* countries'
    ];

    $investments_box = [
        'summary_total' => '$121 million',
        'summary_text' => 'in recorded media & recreation investments 2019/20*',
        'highlights' => [
            "UAE-based Almentor.net, offering Arabic videobased education, raised $4.5 million, led by Sawari Ventures.",
            "Indonesian Gojek’s video streaming service, GoPlay, independently raised $15 million from Golden Gate Ventures and ZWC Partners. "
        ]
    ];
    $barchart_representation = 'Represented by $222 billion of spending by 1.9 billion Muslims on media & recreation (2019 est.)';
    $barchart_color = '#20491d';
    $barchart_target = 'Top 5 media & recreation Muslim consumer markets (2019)';
    $barchart_target_color = '#222222';
    $legend_background = "#a6e064";
    $legend_stroke_colour = "#457e13";
@endphp

@push('head')
    <link rel="stylesheet" href="/trademapper/build/styles/bootstrap.min.css">
@endpush

@push('head')
    <style>
        body, .body-wrapper, .map-wrapper, .map.tmrow, #trademapper, .box-sector {
            background-color: #398434;
        }
    </style>
@endpush

@push('after_before_scripts')
    <script src="https://d3js.org/d3.v3.js"></script>
@endpush

@push('before_scripts')
    <script>
        // Investment deals
        window.investmentDeals = '/csv/media-investments-deals.csv';
        // Indicator
        window.sectorBarchartCsv = '/csv/media-barchart.csv';
        window.sectorBarchartSettings = {
            valueNormMax: 35,
            valueRatio: 1,
            valuePrefix: '$',
            valueSuffix: 'billion',
        }
        window.signalRadarCsv = '/csv/media-signal.csv';
        window.signalRadarSectors = {
            'Government': {
                title: 'Government',
                dMin: 1,
                dMax: 120,
                x: 30,
                y: -95,
                rotate: 0,
                color: '#ffffff',
            },
            'Business/Investment': {
                title: 'Business/Investment',
                dMin: 121,
                dMax: 360,
                x: -115,
                y: 95,
                rotate: 0,
                color: '#ffffff',
            },
        };
        window.indicatorRankingCsv = '/csv/media-indicator.csv';
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
            },
            base: {
                max: 80,
            },
        };
        window.impactLineCsv = '/csv/media-growth.csv';
        window.tradeFlowCsv = '/csv/media-tradeflow-v2.csv';
        window.tradeFlowConfig = {
            styles: {
                COUNTRY: "#306f2c",
                COUNTRY_TRADING: "#20491d",
                COUNTRY_BORDER: "#296126",
                OCEAN: "#398434",
                DISPUTED: "#398434",
                ARROW_WIDE: "#f5f00a",
                ARROW_WIDE_OPACITY: "1",
                ARROW_NARROW: "#f5f00a",
                ARROW_NARROW_OPACITY: "1.0",
                ARROW_NARROW_PLAIN: "#f5f00a",
                ARROW_NARROW_PLAIN_OPACITY: "1.0",
                TRADE_ORIGIN: "#000000",
                TRADE_EXPORTER: "#000000",
                TRADE_IMPORTER: "#f5f00a",
                TRADE_TRANSIT: "#20AF9F",
                LEGEND_TEXT: "#333333",
                LEGEND_BACKGROUND: "#a6e064",
                LEGEND_STROKE_COLOUR: "#457e13",
                LEGEND_STROKE_WIDTH: "1",
                DEFAULT_LAYER_COLOURS: [
                    "#1f9f2f",
                    "#a27d29",
                    "#b5132d",
                ],
                LAYER_COLOURS: {},
                FONT_FAMILY: "'Helvetica Neue',Helvetica,Arial,sans-serif",
            },
            arrowColours: {
                opacity: 0.9,
                pathStartColour: "#000000",
                pathStartOpacity: "0.8",
                pathEndColour: "#000000",
                pathEndOpacity: "0.4"
            },
            pointTypeSize: {
                origin: 5.5,
                exporter: 4,
                transit: 2.5,
                importer: 2
            },
            width: 1440,
            height: 580,
        };
    </script>
@endpush
@push('after_scripts')
    <script>
        // Try to load when `window.tm` is available
        let loading = setInterval(function () {
            if (typeof window.tm !== 'undefined' && typeof window.tradeFlowCsv !== 'undefined') {
                window.tm.loadCsvByLink(window.tradeFlowCsv);
                clearInterval(loading);
            }
        }, 200);
    </script>
@endpush

@section('content')
    <div class="body-wrapper">
        @include('partials.navbar')
        <div class="wrapper">
            <div class="container-fluid">
                <div class="row">
                    @include('partials.trademapper')
                    @include('partials.trademapper-options', ['hide' => true])
                    <div class="boxes">
                        @component('components.box')
                            @include('partials.signals-radar')
                        @endcomponent
                        @component('components.box')
                            @include('partials.indicator-ranking')
                        @endcomponent
                        @component('components.box', ['custom_class' => 'custom-1'])
                            @include('partials.investments')
                        @endcomponent
                        @component('components.box')
                            @include('partials.impact-line')
                        @endcomponent
                        @component('components.box')
                            @include('partials.sector-barchart')
                        @endcomponent
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
