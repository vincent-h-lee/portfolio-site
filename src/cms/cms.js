import CMS from "netlify-cms-app"

import IndexPagePreview from "./preview-templates/index-page-preview"
import "../styles/index.scss"

CMS.registerPreviewTemplate("index", IndexPagePreview)
