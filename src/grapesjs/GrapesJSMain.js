import React, { useEffect, useState } from "react"
import "grapesjs/dist/css/grapes.min.css"
import { loadGrapesJS } from "./grapesjsInitFunc"
import { LIB, NONE, STYLES, THREE } from "./const/previewState"

export const GrapesJSMain = () => {
  const [preview, setPreview] = useState(LIB)

  useEffect(() => {
    loadGrapesJS(previewHandler)
  }, [])

  const toggleopenPreview = state => setPreview(state)

  const previewHandler = editor => {
    editor.on("component:selected", () => toggleopenPreview(STYLES))
    editor.on("component:deselected", () => toggleopenPreview(LIB))
    editor.on("run:preview:before", () => toggleopenPreview(NONE))
  }

  return (
    <div className="main_grapesjs_container">
      <div className="panel__top" style={{ display: preview === NONE ? "none" : "flex" }}>
        <div className="panel__basic-actions"></div>
        <div className="panel__devices"></div>
        <button onClick={() => toggleopenPreview(NONE)}>preview</button>
        <button onClick={() => toggleopenPreview(LIB)}>library</button>
        <button onClick={() => toggleopenPreview(THREE)}>three</button>
        <div className="panel__switcher"></div>
      </div>
      <div className="main_grapesjs_content_container">
        <div className="editor-row">
          <div className="panel__right" style={{ display: preview === NONE ? "none" : "flex" }}>
            <div id="blocks" style={{ display: preview === LIB ? "block" : "none" }}></div>
            <div className="layers-container" style={{ display: preview === THREE ? "block" : "none" }}></div>
            <div className="styles-container" style={{ display: preview === STYLES ? "block" : "none" }}></div>
            <div className="traits-container" style={{ display: preview === STYLES ? "block" : "none" }}></div>
          </div>
          <div className="editor-canvas">
            {preview === NONE && <button onClick={() => toggleopenPreview(LIB)}>end</button>}
            <div id="gjs">
              <h1>Пример компонента</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
