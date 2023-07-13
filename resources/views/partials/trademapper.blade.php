@push('before_head')
    <link rel="stylesheet" href="/css/trademapper.css">
@endpush

@push('head')
    <link rel="stylesheet" href="/trademapper/build/styles/bootstrap-switch.min.css">
    <link rel="stylesheet" href="/trademapper/build/styles/bootstrap-slider.min.css">
@endpush

@push('after_head')
    <style>
        .map-wrapper {
        }
        .diagram {
            //margin-bottom: 10px;
            height: calc(100% - 380px);
        }
        .tab-panel-view {
            min-height: 400px;
        }
        .tooltip-quantity {
            font-size: 1.75em;
        }
        #maptooltip {
            border: none;
        }
    </style>
@endpush

@push('before_scripts')
    <script data-main="/trademapper/js/main" src="/trademapper/js/require.js"></script>
@endpush
<div class="diagram map-wrapper cf">
    <div class="map tmrow">
        <div class="inner cf">
            <aside id="info-panel" class="aside col hidden">
                <div class="header tmrow cf">
                    <header class="inner cf">
                        <div class="branding">
                            <h1 class="logo">
                                <img alt="trademapper" src="/trademapper/build/images/logo-on-dark.png"/>
                            </h1>
                        </div>
                    </header>
                </div>
            </aside>
            <div id="trademapper" class="map col"></div>
        </div>
    </div>
    @isset($information_box)
        <div class="information-box" style="background-color: {{ isset($legend_background) && $legend_background !== '' ? $legend_background : '#eeeeee' }}; border-color:  {{ isset($legend_stroke_colour) && $legend_stroke_colour !== '' ? $legend_stroke_colour : '#888888' }};">
            <div class="information-box-title">{{ $information_box['title'] }}</div>
            <div class="information-box-details">
                <div>{{ $information_box['details'] }}</div>
                <div class="information-box-details-year">{{ isset($information_box) && isset($information_box['year']) ? $information_box['year'] : '(2019)'}}</div>
            </div>
        </div>
    @endisset
</div>

