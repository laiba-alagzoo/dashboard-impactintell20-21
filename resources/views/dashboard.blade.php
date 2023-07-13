@extends('_layout')

@php
    $nav_title = 'The Global Islamic Economy';
    $nav_icon = '<i class="fas fa-chart-line"></i>';
    $source_notes = 'All estimates by DinarStandard Research & Advisory except for Islamic Finance sector provided by Refinitiv Islamic Finance Indicators data 2019 (IFDI). Muslim consumer spend estimates & analysis by DinarStandard leveraging World Bank’s ICP 2017 consumer data as baseline reference. Projections baselined using IMF Outlook from April 2020. Halal and related products exports based on ITC Trademap 2019 data. Investments (figures and individual deals) are based on a detailed scan of databases from CapitalIQ, Crunchbase, White & Case, KPMG and DinarStandard analysis from 1st August 2019 to 31st July 2020. FDI figures based on UNCTAD 2019 data. Full methodology in appendix. OIC = Organization of Islamic Cooperation, 57 mostly Muslim-majority member countries.';
    $barchart_representation = 'Represented by $2.02 trillion of consumer spending by 1.9 billion Muslims across six real-economy sectors (2019 est.)';
    $barchart_color = '#eeeeee';
    $barchart_target = '';
    $barchart_after_target = '$2.88 trillion of Islamic finance assets (2019 est.)';
    $barchart_target_color = '#ffffff';
    $information_box = [
        'title' => '$255 billion',
        'details' => 'of Halal products (food, pharma, cosmetics) exports to OIC* countries'
    ];
    $investments_box = [
        'summary_total' => '$11.8 billion',
        'summary_text' => 'investments in 2019/20* <br>-13% growth YOY',
        'summary_color' => 'white',
        'highlights' => [
            "Global FDI*: down by up to 40% in 2020; further decrease by 5-10% in 2021; begin to recover in 2022",
            "However, Islamic economies with $3.2 trillion (2019) in sovereign wealth fund assets, enabling food security investments (KSA, UAE, Qatar)"
        ]
    ];
    $legend_background = "#e2dbdb";
    $legend_stroke_colour = "#000000";
@endphp

@push('head')
    <link rel="stylesheet" href="/trademapper/build/styles/bootstrap.min.css">
@endpush

@push('head')
    <style>
        body, .body-wrapper, .map-wrapper, .map.tmrow, #trademapper, .box-sector {
            background-color: #1f1d20;
        }
    </style>
@endpush

@push('after_before_scripts')
    <script src="https://d3js.org/d3.v3.js"></script>
@endpush

@push('before_scripts')
    <script>
        // Indicator
        window.sectorBarchartCsv = '/csv/aggregate-barchart.csv';
        window.sectorBarchartSettings = {
            valueNormMax: 140,
            valueRatio: 1,
            valuePrefix: '$',
            valueSuffix: 'billion',
        }
        window.indicatorRankingCsv = '/csv/aggregate-indicator.csv';
        window.indicatorSections = {
            Sections: {
                'Islamic Finance': {
                    title: 'Islamic Finance',
                    max: 80,
                },
                'Halal Food': {
                    title: 'Halal Food',
                    max: 80,
                },
                'Travel': {
                    title: 'Travel',
                    max: 80,
                },
                'Pharma & Cosmetics': {
                    title: 'Pharma & Cosmetics',
                    max: 80,
                },
                'Fashion': {
                    title: 'Fashion',
                    max: 80,
                },
                'Recreation': {
                    title: 'Recreation',
                    max: 80,
                },
            },
            base: {
                max: 80,
            },
        };
        window.signalRadarCsv = '/csv/aggregate-signal.csv';
        window.signalRadarSectors = {
            'Islamic Finance': {
                title: 'Islamic Finance',
                dMin: 1,
                dMax: 120,
                x: 35,
                y: -100,
                rotate: 40,
                color: '#ffffff',
            },
            'Halal Products': {
                title: 'Halal Products',
                dMin: 121,
                dMax: 240,
                x: -50,
                y: 100,
                rotate: 0,
                color: '#ffffff',
            },
            'Halal Lifestyle': {
                title: 'Halal Lifestyle',
                dMin: 241,
                dMax: 360,
                x: -120,
                y: -40,
                rotate: -40,
                color: '#ffffff',
            },
        };
        // window.impactLineCsv = '/csv/aggregate-growth.csv';
        window.tradeFlowCsv = '/csv/aggregate-tradeflow-v2.csv';
        window.tradeFlowConfig = {
            styles: {
                COUNTRY: "#303032",
                COUNTRY_TRADING: "#8a858b",
                COUNTRY_BORDER: "#575252",
                OCEAN: "#1f1d20",
                DISPUTED: "#1f1d20",
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
                LEGEND_BACKGROUND: "#e2dbdb",
                LEGEND_STROKE_COLOUR: "#000000",
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
                pathStartColour: "#ffffff",
                pathStartOpacity: "0.8",
                pathEndColour: "#ffffff",
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
                        @component('components.box', ['custom_class' => 'custom-2'])
                            @include('partials.indicator-ranking', ['no_custom' => true, 'benchmark' => true, 'custom_six' => true])
                        @endcomponent
                        @component('components.box', ['custom_class' => 'custom-1'])
                            @include('partials.investments', ['no_deals' => true])
                        @endcomponent
                        @component('components.box')
                            @include('partials.impact-line', ['aggregate_color' => '#eeeeee'])
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
