/**
 * To use per-deployment configuration overrides, copy this file as 'configextra.js' and override any
 * setting as required. All settings in config.js can be overriden.
 */
define({
    trackingId: null,
    styles: {
        COUNTRY: "#bd7b1e",
        COUNTRY_TRADING: "#815307",
        COUNTRY_BORDER: "#b5751b",
        OCEAN: "#de9126",
        DISPUTED: "#4a4a4a",
        ARROW_WIDE: "#f5f00a",
        ARROW_WIDE_OPACITY: "1",
        ARROW_NARROW: "#f5f00a",
        ARROW_NARROW_OPACITY: "1.0",
        ARROW_NARROW_PLAIN: "#f5f00a",
        ARROW_NARROW_PLAIN_OPACITY: "1.0",

        // colours for nodes; if these are changed here, the corresponding
        // variables at the top of the trademapper.scss file should also be edited
        TRADE_ORIGIN: "#000000",
        TRADE_EXPORTER: "#000000",
        TRADE_IMPORTER: "#f5f00a",
        TRADE_TRANSIT: "#20AF9F",

        LEGEND_TEXT: "#333333",
        LEGEND_BACKGROUND: "#e0a464",
        LEGEND_STROKE_COLOUR: "#7e5213",
        LEGEND_STROKE_WIDTH: "1",


        // these are the default colours used for layers
        DEFAULT_LAYER_COLOURS: [
            "#1f9f2f",
            "#a27d29",
            "#b5132d",
        ],

        // the values in here are set by the user when uploading topojson layers
        LAYER_COLOURS: {},

        FONT_FAMILY: "'Helvetica Neue',Helvetica,Arial,sans-serif",
    },
    arrowColours: {
        // opacity for the highlighted path
        opacity: 0.9,
        pathStartColour: "#ffffff",
        pathStartOpacity: "0.8",
        pathEndColour: "#ffffff",
        pathEndOpacity: "0.4"
    },
    pointTypeSize: {
        origin: 5.5,
        exporter: 4,
        transit: 2.5,
        importer: 2
    },

});
