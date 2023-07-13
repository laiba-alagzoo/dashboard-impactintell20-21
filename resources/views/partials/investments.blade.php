@php
if (!isset($no_deals)) {
    $no_deals = false;
}
@endphp

@push('after_head')
    <style>

    </style>
@endpush

@push('after_scripts')

@endpush

@isset($investments_box)
<div class="investments-box">
    <div class="text-left box-sector-header">Investments</div>
    <div class="text-left">
        <div class="investments-box-summary" @isset($investments_box['summary_color']) style="color: {{ $investments_box['summary_color'] }}" @endisset>
            <div class="investments-box-summary-total">{!! $investments_box['summary_total'] !!}</div>
            <div class="investments-box-summary-text">{!! $investments_box['summary_text'] !!}</div>
        </div>
        <div class="investments-box-highlights">
            @foreach($investments_box['highlights'] as $highlight)
                <div class="investments-box-highlights-text">{{ $highlight }}</div>
            @endforeach
        </div>
    </div>
    @if($no_deals === false)
        <div class="">
            @include('partials.investments-deals-stackchart')
        </div>
    @endif
</div>
@endisset
