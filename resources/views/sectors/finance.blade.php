@extends('_layout')

@php
    $nav_title = 'Islamic Finance';
    $nav_icon = 'islamic-finance.svg';
    $source_notes = 'Islamic Finance sector sizing data provided by Refinitiv Islamic Finance Indicators data 2019 (IFDI). All other estimates including \'signals\' by DinarStandard Research & Advisory. Investments (figures and individual deals) are based on a detailed scan of databases from CapitalIQ, Crunchbase, White & Case, KPMG and DinarStandard analysis from 1st August 2019 to 31st July 2020. FDI figures based on UNCTAD 2019 data. Full methodology in appendix. OIC = Organization of Islamic Cooperation, 57 mostly Muslim-majority member countries.';
    $information_box = [
        'title' => '$2.88 trillion',
        'details' => 'in Islamic finance assets globally'
    ];
    $investments_box = [
        'summary_total' => '$4.93 billion',
        'summary_text' => 'in recorded Islamic finance investments 2019/20*',
        'highlights' => [
            "USA: Robo-advisory platform, Wahed Invest, raising $25 million in a venture capital round led by Saudi Aramco Entrepreneurship Ventures.",
            "UAE: Noor Bank was acquired by Dubai Islamic Bank to become one of the largest Islamic banks, with assets exceeding $75 billion."
        ]
    ];
    $barchart_representation = 'Represented by $2.88 trillion in Islamic finance assets globally (2019 est.)';
    $barchart_color = '#1e3f65';
    $barchart_target = 'Top 10 countries by Islamic finance assets (2019)';
    $barchart_target_color = '#222222';
    $legend_background = "#6496e0";
    $legend_stroke_colour = "#133a7e";
@endphp

@push('head')
    <link rel="stylesheet" href="/trademapper/build/styles/bootstrap.min.css">
@endpush

@push('head')
    <style>
        body, .body-wrapper, .map-wrapper, .map.tmrow, #trademapper, .box-sector {
            background-color: #3470b5;
        }
    </style>
@endpush

@push('after_before_scripts')
    <script src="https://d3js.org/d3.v3.js"></script>
@endpush

@push('before_scripts')
    <script>
        // Investment deals
        window.investmentDeals = '/csv/finance-investments-deals.csv';
        // Indicator
        window.sectorBarchartCsv = '/csv/finance-barchart.csv';
        window.sectorBarchartSettings = {
            valueNormMax: 150,
            valueRatio: 1,
            valuePrefix: '$',
            valueSuffix: 'billion',
        }
        window.signalRadarCsv = '/csv/finance-signal.csv';
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
        window.indicatorRankingCsv = '/csv/finance-indicator.csv';
        window.tradeFlowCsv = '/csv/finance-tradeflow-assets.csv';
        window.tradeFlowConfig = {
            styles: {
                COUNTRY: "#2c5e9a",
                COUNTRY_TRADING: "#1e3f65",
                COUNTRY_BORDER: "#264e80",
                OCEAN: "#3470b5",
                DISPUTED: "#2c5e9a",
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
                LEGEND_BACKGROUND: "#6496e0",
                LEGEND_STROKE_COLOUR: "#133a7e",
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
