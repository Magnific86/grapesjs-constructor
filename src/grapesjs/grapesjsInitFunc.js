import Grapesjs from "grapesjs"
import { grapesjsConfig } from "./grapesjsConfig"
import { addBlock } from "./grapsjsFuncs/addBlockFunc"
import { addPanel } from "./grapsjsFuncs/addPanelFunc"
import { addCommand } from "./grapsjsFuncs/addCommandFunc"

export const loadGrapesJS = async handler => {
  const editor = await Grapesjs.init(grapesjsConfig)
  addBlock(editor)
  addPanel(editor)
  addCommand(editor)
  handler(editor)
}
