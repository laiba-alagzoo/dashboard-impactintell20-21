@php
if (!isset($nav_title)) {
    $nav_title = 'Halal Pharmaceuticals';
}
if (!isset($nav_icon)) {
    $nav_icon = '<i class="fal fa-prescription-bottle"></i>';
}

$nav_links = [
    [
        "title" => "Islamic<br>Finance",
        "link" => route('finance'),
        "percentage" => "5%",
        "color" => "#1775AF",
        "amount_range_start" => "$2.88 tn",
        "amount_range_end" => "$3.69 tn"
    ],
    [
        "title" => "Halal<br>Food",
        "link" => route('halal-food'),
        "percentage" => "3.5%",
        "color" => "#F15A22",
        "amount_range_start" => "$1.17 tn",
        "amount_range_end" => "$1.38 tn"
    ],
    [
        "title" => "Modest<br>Fashion",
        "link" => route('fashion'),
        "percentage" => "2.4%",
        "color" => "#9066AD",
        "amount_range_start" => "$277 bn",
        "amount_range_end" => "$311 bn"
    ],
    [
        "title" => "Media &<br>Recreation",
        "link" => route('media'),
        "percentage" => "3.9%",
        "color" => "#3E843E",
        "amount_range_start" => "$222 bn",
        "amount_range_end" => "$270 bn"
    ],
    [
        "title" => "Muslim-<br>Friendly Travel",
        "link" => route('travel'),
        "percentage" => "1.4%",
        "color" => "#1F9FA1",
        "amount_range_start" => "$194 bn",
        "amount_range_end" => "$208 bn"
    ],
    [
        "title" => "Halal<br>Pharmaceuticals",
        "link" => route('pharma'),
        "percentage" => "2.3%",
        "color" => "#E2932E",
        "amount_range_start" => "$94 bn",
        "amount_range_end" => "$105 bn"
    ],
    [
        "title" => "Halal<br>Cosmetics",
        "link" => route('cosmetics'),
        "percentage" => "2.9%",
        "color" => "#D25B91",
        "amount_range_start" => "$66 bn",
        "amount_range_end" => "$76 bn"
    ]
];
@endphp
@push('after_head')
    <style>
        .navbar-spacing {
            padding-bottom: 50px;
            width: 100%;
        }
    </style>
@endpush
<nav class="navbar navbar-fixed-top">
    <div class="impact-nav">
        <a class="impact-nav-home" href="{{ route('dashboard') }}">
            <div class="">
                <i class="far fa-home-lg-alt"></i>
            </div>
        </a>
        <div class="impact-nav-title">
            <div class="impact-nav-title-icon">
                @if(strpos($nav_icon, '.svg') !== false)
                    <img src="/trademapper/build/images/icons/{{ $nav_icon }}">
                @else
                    {!! $nav_icon !!}
                @endif
            </div>
            <div class="impact-nav-title-text">
                <div class="impact-nav-title-text-top">{!! $nav_title !!}</div>
                <div class="impact-nav-title-text-bottom">Dashboard</div>
            </div>
        </div>
        <div class="impact-nav-links">
            @foreach($nav_links as $nav_link)
            <div class="impact-nav-link-container">
                <a href="{!! $nav_link['link'] !!} ">
                    <div class="impact-nav-links-item" style="background-color: {{ $nav_link['color'] }}">
                        <div class="impact-nav-links-item-title">{!! $nav_link['title'] !!}</div>
                        <div class="impact-nav-links-item-amount">
                            <div class="impact-nav-links-item-amount-top">{{ $nav_link["amount_range_start"] }}</div>
                            <div class="impact-nav-links-item-amount-bottom">/{{ $nav_link["amount_range_end"] }}</div>
                        </div>
                    </div>
                </a>
                <div class="impact-nav-links-item more" style="background-color: {{ $nav_link['color'] }}">
                    <div class="impact-nav-links-item-details">
                        <div class="details-amount-range">
                            <div class="amount-range-start">{{ $nav_link["amount_range_start"] }}</div>
                            <div class="amount-range-end">/{{ $nav_link["amount_range_end"] }}</div>
                        </div>
                        <div class="details-year-range">
                            <span class="start-year">2019/</span>
                            <span class="end-year">2024</span>
                        </div>
                        <div class="details-percentage">{{ $nav_link["percentage"] }}</div>
                        <div class="details-source">CAGR forecast to 2024</div>
                    </div>
                </div>
            </div>
            @endforeach
        </div>

    </div>
    <div class="container-fluid">
{{--        <!-- Brand and toggle get grouped for better mobile display -->--}}
{{--        <div class="navbar-header">--}}
{{--            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">--}}
{{--                <span class="sr-only">Toggle navigation</span>--}}
{{--                <span class="icon-bar"></span>--}}
{{--                <span class="icon-bar"></span>--}}
{{--                <span class="icon-bar"></span>--}}
{{--            </button>--}}
{{--            <a class="navbar-brand" href="{{ route('dashboard') }}">ImpactIntel</a>--}}
{{--        </div>--}}



        <!-- Collect the nav links, forms, and other content for toggling -->
{{--        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">--}}
{{--            <ul class="nav navbar-nav">--}}
{{--                <li class="{{ (request()->is('sectors/finance')) ? 'active' : '' }}">--}}
{{--                    <a href="{{ route('finance') }}">Islamic Finance</a>--}}
{{--                </li>--}}
{{--                <li class="{{ (request()->is('/')) ? 'active' : '' }}">--}}
{{--                    <a href="{{ route('dashboard') }}">Dashboard</a>--}}
{{--                </li>--}}
{{--                <li class="{{ (request()->is('sectors/halal-food')) ? 'active' : '' }}">--}}
{{--                    <a href="{{ route('halal-food') }}">Halal Food</a>--}}
{{--                </li>--}}
{{--                <li class="{{ (request()->is('sectors/pharma')) ? 'active' : '' }}">--}}
{{--                    <a href="{{ route('pharma') }}">Halal Pharmaceuticals</a>--}}
{{--                </li>--}}
{{--                <li class="{{ (request()->is('sectors/cosmetics')) ? 'active' : '' }}">--}}
{{--                    <a href="{{ route('cosmetics') }}">Halal Cosmetics</a>--}}
{{--                </li>--}}
{{--                <li class="{{ (request()->is('sectors/fashion')) ? 'active' : '' }}">--}}
{{--                    <a href="{{ route('fashion') }}">Modest Fashion</a>--}}
{{--                </li>--}}
{{--                <li class="{{ (request()->is('sectors/media')) ? 'active' : '' }}">--}}
{{--                    <a href="{{ route('media') }}">Media & Recreation</a>--}}
{{--                </li>--}}
{{--                <li class="{{ (request()->is('sectors/travel')) ? 'active' : '' }}">--}}
{{--                    <a href="{{ route('travel') }}">Muslim-Friendly Travel</a>--}}
{{--                </li>--}}

{{--            </ul>--}}
{{--            <ul class="nav navbar-nav navbar-right">--}}
{{--                <li class="dropdown">--}}
{{--                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Info</a>--}}
{{--                    <ul class="dropdown-menu">--}}
{{--                        <li><a href="#">ImpactIntel</a></li>--}}
{{--                        <li role="separator" class="divider"></li>--}}
{{--                        <li><a href="#">About</a></li>--}}
{{--                    </ul>--}}
{{--                </li>--}}
{{--            </ul>--}}
{{--        </div><!-- /.navbar-collapse -->--}}
    </div><!-- /.container-fluid -->
</nav>
<div class="navbar-spacing"></div>
