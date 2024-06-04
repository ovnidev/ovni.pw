import React from "react"
import ReactDOM from "react-dom/client"
import Home from "@component/Home/Main"

import "@i18n/i18n"

import "@style/base.css"
import "@style/fonts.css"
import "@style/theme.css"
import "@style/sidebar.css"
import "@style/global.css"
import "@style/page.css"
import "@style/settings.css"
import "@style/modal.css"
import "@style/box.css"
import "@style/alert.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
)