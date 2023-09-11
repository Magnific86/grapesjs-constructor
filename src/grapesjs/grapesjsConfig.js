import { panels } from "./configParts/panels"
import { blockManager } from "./configParts/blockManager"
import { styleManager } from "./configParts/styleManager"
import { deviceManager } from "./configParts/deviceManager"

export const grapesjsConfig = {
  container: "#gjs",
  fromElement: true,
  height: "100%",
  width: "auto",
  storageManager: false,
  blockManager,
  layerManager: {
    appendTo: ".layers-container",
  },
  traitManager: {
    appendTo: ".traits-container",
  },
  selectorManager: {
    appendTo: ".styles-container",
  },
  styleManager,
  deviceManager,
  panels,
}
