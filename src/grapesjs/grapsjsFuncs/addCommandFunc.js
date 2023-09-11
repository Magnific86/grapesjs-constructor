export const addCommand = editor => {
  editor.Commands.add("show-layers", {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row")
    },
    getLayersEl(row) {
      return row.querySelector(".layers-container")
    },

    run(editor) {
      const lmEl = this.getLayersEl(this.getRowEl(editor))
      lmEl.style.display = ""
    },
    stop(editor) {
      const lmEl = this.getLayersEl(this.getRowEl(editor))
      lmEl.style.display = "none"
    },
  })
  editor.Commands.add("show-styles", {
    getRowEl(editor) {
      return editor.getContainer().closest(".editor-row")
    },
    getStyleEl(row) {
      return row.querySelector(".styles-container")
    },

    run(editor) {
      const smEl = this.getStyleEl(this.getRowEl(editor))
      smEl.style.display = ""
    },
    stop(editor) {
      const smEl = this.getStyleEl(this.getRowEl(editor))
      smEl.style.display = "none"
    },
  })
  editor.Commands.add("show-traits", {
    getTraitsEl(editor) {
      const row = editor.getContainer().closest(".editor-row")
      return row.querySelector(".traits-container")
    },
    run(editor) {
      this.getTraitsEl(editor).style.display = ""
    },
    stop(editor) {
      this.getTraitsEl(editor).style.display = "none"
    },
  })
  editor.Commands.add("set-device-desktop", {
    run: editor => editor.setDevice("Desktop"),
  })
  editor.Commands.add("set-device-tablet", {
    run: editor => editor.setDevice("Tablet"),
  })
  editor.Commands.add("set-device-mobile", {
    run: editor => editor.setDevice("Mobile"),
  })
}
