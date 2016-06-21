/**
 *
 */
var Config = window.Config = {};
Config.skins = {};
Config.layouts = {};

// ----- skins -----------------------------------------------------------------
/**
 * blue/red
 */
Config.skins['skin-1'] = {
    action: 'set',
    type: 'skin',
    id: 'skin-1',
    data: {
        url: 'http://localhost:3001/skin/css/skins.css'
    }
};

/**
 * black/white
 */
Config.skins['skin-2'] = {
    action: 'set',
    type: 'skin',
    id: 'skin-2',
    data: {
        url: 'http://localhost:3001/skin/css/skins.css'
    }
};

/**
 * blue/red
 */
Config.skins['skin-3'] = {
    action: 'set',
    type: 'skin',
    id: 'skin-3',
    data: {
        url: 'http://localhost:3001/skin/css/skins.css'
    }
};

Config.currentSkin = 'skin-1';

// ----- layouts ---------------------------------------------------------------
/**
 * remote: default gui to control with skin app
 */
Config.layouts['layout-1'] = {
    action: 'set',
    type: 'layout',
    id: 'layout-1',
    data: {
        name: 'Skin',
        orientation: 'portrait',
        cols: 1,
        rows: 2,
        elements: [{
          type: "Text",
          id: "eyes",
          content: ''
          // url: "http://localhost:3001/earth/images/arrow_double.png"
        }, {
          type: "Text",
          id: "mouth",
          content: '(',
          // url: "http://localhost:3001/earth/images/arrow_double.png"
        }]
    }
};
