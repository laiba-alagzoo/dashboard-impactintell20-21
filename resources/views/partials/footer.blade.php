@php
if (!isset($source_notes)) {
    $source_notes = "All estimates by DinarStandard Research & Advisory. Muslim consumer spend estimates & analysis by DinarStandard leveraging World Bank's CP 2017 consumer data as baseline reference. Projections base-lined using IMF Outlook from April 2020. Halal and related products exports based on ITC Trademap 2019 data. Investments (figures and individual deals) are based on a detailed scan of databases from CapitalIQ, Crunchbase, White & Case, KPMG and DinarStandard analysis from 1st August 2019 to 31st July 2020. Full methodology in appendix. OIC = Organization of Islamic Cooperation, 57 mostly Muslim-majority member countries.";
}
@endphp

<div class="footer">
    <div class="footer-left">
        <div class="footer-source-notes">Source Notes<i class="fas fa-caret-up footer-source-notes-icon"></i></div>
        <div class="footer-disclaimer">Not optimized for smaller screens</div>
        <div class="footer-source-notes-details">{!! $source_notes !!}</div>
    </div>
    <div class="footer-root-company">Brought to you by <a target="_blank" href="https://salaamgateway.com"><img class="footer-company-image" src="/trademapper/build/images/salaam-gateway-logo.svg"></a></div>
    <div class="footer-company">Powered By:<a target="_blank" href="http://impactintell.com/"><img class="footer-company-image" src="/trademapper/build/images/impact-intell-logo.svg"></a></div>
</div>
