@php
if(!isset($custom_class)) {
    $custom_class = '';
}
@endphp
<div class="box-sector {{ $custom_class }}">
    {{ $slot }}
</div>
