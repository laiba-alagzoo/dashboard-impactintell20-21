<div class="col-md-12 {{ $hide ? 'hidden' : '' }}">
    <div id="slider">
        <div id="change-over-time"></div>
    </div>
</div>
<div class="col-md-12 {{ $hide ? 'hidden' : '' }}">
    <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="panel panel-default" role="info">
            <div class="panel-heading" role="tab" id="headingInfo">
                <h4 class="panel-title">
                    <a role="button" href="#info" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="info">
                        Get Started
                    </a>
                </h4>
            </div>
            <div id="info" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingInfo">
                <div class="panel-body">
                    <section class="tabpane-actionbox">
                        <h1>Trade data</h1>
                        <p>To get started, upload your data in <abbr title="Comma separated values">CSV</abbr> format.
                        </p>
                        <div class="user-actions">
                            <form id="tm-file-select"></form>
                        </div>
                    </section>
                    <section class="tabpane-actionbox">
                        <h1>Map layers</h1>
                        <p>Add up to three layers to your map in <a href="https://github.com/topojson/topojson"
                                                                    title="The TopoJSON format">TopoJSON format</a>.
                            <strong>Use files &lt; 1Mb in size; larger files cause performance issues.</strong> Layers
                            must be in <abbr title="World Geodetic System 1984">WGS84</abbr>. Convert and simplify map
                            files at <a href="http://mapshaper.org">mapshaper</a>.</p>
                        <div class="user-actions">
                            <form id="tm-layer-select"></form>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="panel panel-default" role="filters">
            <div class="panel-heading" role="tab" id="headingFilters">
                <h4 class="panel-title">
                    <a role="button" href="#filters" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="filters">
                        Filters
                    </a>
                </h4>
            </div>
            <div id="filters" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFilters">
                <div class="panel-body">
                    <section>
                        <form id="form-filters">
                        </form>
                    </section>
                </div>
            </div>
        </div>
        <div class="panel panel-default" role="export">
            <div class="panel-heading" role="tab" id="headingExport">
                <h4 class="panel-title">
                    <a role="button" href="#export" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="export">
                        Export
                    </a>
                </h4>
            </div>
            <div id="export" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingExport">
                <div class="panel-body">
                    <section>
                        <p>You can export the current view for use in other applications. Choose your preferred format
                            below.</p>
                    </section>

                    <section class="tabpane-actionbox">
                        <h1>PNG</h1>
                        <p>PNG is a common image format that can be used by programs such as Word and PowerPoint.</p>
                        <button type="button" class="btn btn-primary btn-export" id="tm-png-export">Export PNG</button>
                    </section>

                    <section class="tabpane-actionbox">
                        <h1>SVG</h1>
                        <p><a href="https://en.wikipedia.org/wiki/Scalable_Vector_Graphics"
                              title="Scalable vector graphic" target="_blank">SVG</a> is a scalable vector file format
                            which can be imported by programs such as Photoshop, or converted to other image file
                            formats.</p>
                        <button type="button" class="btn btn-primary btn-export" id="tm-svg-export">Export SVG</button>
                    </section>

                    <section class="tabpane-actionbox">
                        <h1>Animated GIF</h1>
                        <p>Export an animation of your data if it spans multiple years. The animation can then be added
                            to presentations or shared on social media.</p>
                        <button type="button" class="btn btn-primary btn-export" id="tm-video-export">Export GIF
                        </button>
                    </section>
                </div>
            </div>
        </div>
        <div class="panel panel-default" role="options">
            <div class="panel-heading" role="tab" id="headingOptions">
                <h4 class="panel-title">
                    <a role="button" href="#options" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="options">
                        Options
                    </a>
                </h4>
            </div>
            <div id="options" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOptions">
                <div class="panel-body">
                    <!-- Options Tab - Start Editable tab text-->
                    <h1 class="tab-pane-title">Options</h1>
                    <p>options panel form</p>
                    <!-- Options Tab - End Editable tab text-->
                </div>
            </div>
        </div>
        <div class="panel panel-default" role="help">
            <div class="panel-heading" role="tab" id="helpOptions">
                <h4 class="panel-title">
                    <a role="button" href="#help" data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="help">
                        Help
                    </a>
                </h4>
            </div>
            <div id="help" class="panel-collapse collapse" role="tabpanel" aria-labelledby="helpOptions">
                <div class="panel-body">
                    <!-- Help Tab - Start Editable tab text-->
                    <section>
                        <p>For more information please read our detailed <a
                                href="https://trademapper.github.io/trademapper-js/" target="_blank">guide to using
                                TradeMapper</a>.</p>
                    </section>
                    <section class="tabpane-actionbox">
                        <h1>Disclaimer</h1>
                        <p>TradeMapper accepts no liability whatsoever for any loss or damage howsoever arising from
                            third party websites.</p>
                        <p>The map shown is from data from <a href="http://www.naturalearthdata.com/">naturalearthdata.com</a>
                            and doesn't imply an opinion of the legal status of borders/territories.</p>
                    </section>
                    <section class="tabpane-actionbox">
                        <h1>Citation</h1>
                        <cite>TRAFFIC (2018) TradeMapper – a tool for visualising trade data. Available at <a
                                href="http:www.trademapper.co.uk">www.trademapper.co.uk</a></cite>
                    </section>
                    <section>
                        <p><strong>Built by: </strong><a title="Aptivate website" href="http://www.aptivate.org">Aptivate</a>
                            <strong>Code: </strong><a title="Code repository"
                                                      href="https://github.com/trademapper/trademapper-js">GitHub</a>
                        </p>
                    </section>
                </div>
            </div>
        </div>
    </div>
</div>
