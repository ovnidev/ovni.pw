import React from "react"
import ReactDOM from "react-dom/client"
import Helmet from "react-helmet"
import Home from "@component/Pages/Home/Main"

import { createDefaultSettings } from '@logic/settings'
import { createDefaultFolder } from '@logic/folder'
import { createDefaultAlphabet } from '@logic/alphabet'

import "@i18n/i18n"

import "@style/base.css"
import "@style/fonts.css"
import "@style/theme.css"
import "@style/global.css"
import "@style/page.css"
import "@style/box.css"
import "@style/alert.css"

createDefaultAlphabet()
createDefaultFolder()
createDefaultSettings()

const analytics = {
  url: import.meta.env.VITE_ANALYTICS_URL,
  id: import.meta.env.VITE_ANALYTICS_ID
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {(analytics.url && analytics.id) && (
      <Helmet>
        <script defer src={ analytics.url } data-website-id={ analytics.id }></script>
      </Helmet>
    )}
    <Home />
  </React.StrictMode>,
)