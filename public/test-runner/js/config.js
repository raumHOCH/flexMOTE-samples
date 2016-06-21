;(function(window) {
    "use strict";

    /**
     *
     */
    var Config = window.Config = {};
    Config.server = 'http://localhost:3000/';
    Config.skins = {};
    Config.layouts = {};

    // ----- skins -------------------------------------------------------------
    /**
     * default skin
     */
    Config.skins['skin-1'] = {
        action: 'set',
        type: 'skin',
        id: 'skin-1',
        data: {
            url: 'http://localhost:3001/test-runner/css/skins.css'
        }
    };

    // ----- layouts -----------------------------------------------------------
    /**
     * default skin-app layout
     */
    Config.layouts['layout-1'] = {
        action: 'set',
        type: 'layout',
        id: 'layout-1',
        data: {
            name: 'Layout 1',
            orientation: 'landscape',
            cols: 5,
            rows: 7,
            elements: [

            // first row
            {
                type: "Button",
                id: "home",
                action: "home",
                label: "HOME"
            }, {
                type: "Text",
                id: "title",
                content: "Test Runner",
                cssClass: "blue",
                cols: 3
            }, {
                type: "Button",
                id: "close",
                label: "X",
                cssClass: "red"
            },

            // second row
            {
                type: "HTML",
                id: "content",
                content: '<p>Hello World!</p><p><strong>Lorem Ipsum</strong> foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat!</p><p>Hello World!</p><p><strong>Lorem Ipsum</strong> foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat!</p><p>Hello World!</p><p><strong>Lorem Ipsum</strong> foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat!</p><p>Hello World!</p><p><strong>Lorem Ipsum</strong> foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat! foo bar bat!</p>',
                cols: 5,
                rows: 5
            },

            // third row
            {
                type: "Text",
                id: "status",
                content: "Status.... (<p>XSS Test</p><script>alert('foo');)",
                cols: 3
            }, {
                type: "Debug",
                id: "debug"
            }, {
                type: "Link",
                id: "download",
                label: "PDF",
                url: "http://localhost:3001/test-runner/media/example.pdf"
            }]
        }
    };

})(window);
