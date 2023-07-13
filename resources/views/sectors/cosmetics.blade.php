@extends('_layout')

@php
    $nav_title = 'Halal Cosmetics';
    $nav_icon = 'halal-cosmetics.svg';
    $source_notes = 'All estimates by DinarStandard Research & Advisory. Muslim consumer spend estimates & analysis by DinarStandard leveraging World Bank\'s ICP 2017 consumer data as baseline reference. Projections base-lined using IMF Outlook from April 2020. Halal and related products exports based on ITC Trademap 2019 data. Investments (figures and individual deals) are based on a detailed scan of databases from CapitalIQ, Crunchbase, White & Case, KPMG and DinarStandard analysis from 1st August 2019 to 31st July 2020. Full methodology in appendix. OIC = Organization of Islamic Cooperation, 57 mostly Muslim-majority member countries.';
    $information_box = [
        'title' => '$16 billion',
        'details' => 'of cosmetics exports to OIC* countries'
    ];
    $investments_box = [
        'summary_total' => '$125 million',
        'summary_text' => 'in halal-related cosmetics investments 2019/20*',
        'highlights' => [
            "Indonesia’s online cosmetics marketplace, Sociolla raised $98 million in series D and E co-led by Temasek and EV Growth.",
            "Turkey’s cosmetics company, Özen Kisisel Bakim Ürünleri Üretim A.S. was acquired by Japan’s Daio Paper Corporation for $26.7 million."
        ]
    ];
    $barchart_representation = 'Represented by $66 billion of spending by 1.9 billion Muslims on cosmetics (2019 est.)';
    $barchart_color = '#75224f';
    $barchart_target = 'Top 5 cosmetics Muslim consumer markets (2019)';
    $barchart_target_color = '#222222';
    $legend_background = "#e064c5";
    $legend_stroke_colour = "#7e1370";
@endphp

@push('head')
    <link rel="stylesheet" href="/trademapper/build/styles/bootstrap.min.css">
@endpush

@push('head')
    <style>
        body, .body-wrapper, .map-wrapper, .map.tmrow, #trademapper, .box-sector {
            background-color: #cd3d8d;
        }
    </style>
@endpush

@push('after_before_scripts')
    <script src="https://d3js.org/d3.v3.js"></script>
@endpush

@push('before_scripts')
    <script>
        // Investment deals
        window.investmentDeals = '/csv/cosmetics-investments-deals.csv';
        // Indicator
        window.sectorBarchartCsv = '/csv/cosmetics-barchart.csv';
        window.sectorBarchartSettings = {
            valueNormMax: 8,
            valueRatio: 1,
            valuePrefix: '$',
            valueSuffix: 'billion',
        }
        window.signalRadarCsv = '/csv/cosmetics-signal.csv';
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
        window.indicatorRankingCsv = '/csv/pharma-cosmetics-indicator.csv';
        window.impactLineCsv = '/csv/cosmetics-growth.csv';
        window.tradeFlowCsv = '/csv/cosmetics-tradeflow-v2.csv';
        window.tradeFlowConfig = {
            styles: {
                COUNTRY: "#ae3378",
                COUNTRY_TRADING: "#75224f",
                COUNTRY_BORDER: "#952965",
                OCEAN: "#cd3d8d",
                DISPUTED: "#cd3d8d",
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
                LEGEND_BACKGROUND: "#e064c5",
                LEGEND_STROKE_COLOUR: "#7e1370",
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
