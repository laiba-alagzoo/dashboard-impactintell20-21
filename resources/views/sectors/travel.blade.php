@extends('_layout')

@php
    $nav_title = 'Muslim-Friendly Travel';
    $nav_icon = 'muslim-friendly-travel.svg';
    $sector_barchart_info = '';
    $sector_barchart_info = '';
    $source_notes = 'All estimates by DinarStandard Research & Advisory. Muslim outbound travel spend estimates & analysis by leveraging UNWTO and World Bank data as baseline. Projections base-lined using UNWTO forecasts. Investments (figures and individual deals) are based on a detailed scan of databases from CapitalIQ, Crunchbase, White & Case, KPMG and DinarStandard analysis from 1st August 2019 to 31st July 2020. Full methodology in appendix. OIC = Organization of Islamic Cooperation, 57 mostly Muslim-majority member countries.';
    $information_box = [
        'title' => '$194 billion',
        'details' => 'in outbound travel spending by 1.9 billion Muslims'
    ];
    $investments_box = [
        'summary_total' => '$340 million',
        'summary_text' => 'in recorded travel sector investments 2019/20*',
        'highlights' => [
            "Indonesian OTA Traveloka secured a $250 million from Qatar Investment Authority and Singapore’s GIC.",
            "UK: HalalBooking, which allows users to book Muslim-friendly hotels and villas, raised $2.5 million."
        ]
    ];
    $barchart_representation = 'Represented by $194 billion in outbound travel spending by 1.9 billion Muslims (2019 est.)';
    $barchart_color = '#235a59';
    $barchart_target = 'Top 5 Muslim travel destination countries (2019, inbound est. Muslim travelers)';
    $barchart_target_color = '#222222';
    $legend_background = "#64e0c3";
    $legend_stroke_colour = "#137e5c";
@endphp

@push('head')
    <link rel="stylesheet" href="/trademapper/build/styles/bootstrap.min.css">
@endpush

@push('head')
    <style>
        body, .body-wrapper, .map-wrapper, .map.tmrow, #trademapper, .box-sector {
            background-color: #3ea1a0;
        }
    </style>
@endpush

@push('after_before_scripts')
    <script src="https://d3js.org/d3.v3.js"></script>
@endpush

@push('before_scripts')
    <script>
        // Investment deals
        window.investmentDeals = '/csv/travel-investments-deals.csv';
        // Indicator
        window.sectorBarchartCsv = '/csv/travel-barchart.csv';
        window.sectorBarchartSettings = {
            valueNormMax: 0.011,
            valueRatio: 1000,
            valuePrefix: '$',
            valueSuffix: 'million',
        }
        window.signalRadarCsv = '/csv/travel-signal.csv';
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
        window.indicatorRankingCsv = '/csv/travel-indicator.csv';
        window.impactLineCsv = '/csv/travel-growth.csv';
        window.tradeFlowCsv = '/csv/travel-tradeflow-spending-only.csv';
        window.tradeFlowConfig = {
            styles: {
                COUNTRY: "#358987",
                COUNTRY_TRADING: "#235a59",
                COUNTRY_BORDER: "#307272",
                OCEAN: "#3ea1a0",
                DISPUTED: "#3ea1a0",
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
                LEGEND_BACKGROUND: "#64e0c3",
                LEGEND_STROKE_COLOUR: "#137e5c",
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
                exporter: 0,
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
