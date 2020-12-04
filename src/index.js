import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

import JobsList from "./components/jobsList";
console.log(window.navigator.language.split("-")[0]);
let language = "";
if (window.navigator.language.split("-")[0] === 'es') {
    language = localeEsMessages
}
else {
    language = localeEnMessages
}
ReactDOM.render(
    <IntlProvider locale={window.navigator.language.split("-")[0]} messages={language}>
        <JobsList />
    </IntlProvider>
    , document.getElementById("root")

);