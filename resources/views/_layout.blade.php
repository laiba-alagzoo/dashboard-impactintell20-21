<html lang="en">
<head>
    <meta charset="utf-8">

    @stack('before_head')
    <title>ImpactIntel - Dashboard</title>
    <style>
        html, body {
            margin: 0;
        }
        body {
        }
    </style>
    <link rel="stylesheet" href="/trademapper/resources/styles/font-awesome.css">
    @stack('head')
    @stack('after_head')
    <link rel="stylesheet" href="/css/app.css">
</head>
<body>

@yield('content')
@include('partials.footer')

@stack('before_scripts')
@stack('after_before_scripts')
<script src="{{ mix('/js/app.js') }}"></script>
@stack('scripts')
@stack('after_scripts')
</body>
</html>
