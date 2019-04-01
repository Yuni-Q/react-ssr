"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const App_1 = require("./App");
require("./App.css");
require("./index.css");
const registerServiceWorker_1 = require("./registerServiceWorker");
const initialDataDom = document.querySelector('#initial-data');
let data = '';
if (initialDataDom !== null) {
    const dataJson = initialDataDom.getAttribute('data-json');
    if (dataJson !== null) {
        data = dataJson;
    }
}
ReactDOM.render(React.createElement(App_1.default, null, data), document.getElementById('root'));
registerServiceWorker_1.default();
//# sourceMappingURL=index.js.map