"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class App extends React.Component {
    render() {
        return (React.createElement("div", { className: "App" },
            React.createElement("header", { className: "App-header" },
                React.createElement("img", { src: "/logo.svg", className: "App-logo", alt: "logo" }),
                React.createElement("h1", { className: "App-title" }, "Welcome to React")),
            React.createElement("p", null, this.props.children)));
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map