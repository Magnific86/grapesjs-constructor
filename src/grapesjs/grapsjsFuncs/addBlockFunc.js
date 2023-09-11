import { CustomDatePicker } from "../../components/CustomDatePicker"
import * as ReactDOMServer from "react-dom/server"

export const addBlock = editor => {
  const blockManager = editor.Blocks

  blockManager.add("h1-cmp", {
    label: "заголовок",
    content: "<h1>Обычный заголовок...</h1>",
    category: "Типография",
  })
  blockManager.add("h3-cmp", {
    label: "абзац",
    content: "<h3>Обычный абзац...</h3>",
    category: "Типография",
  })
  blockManager.add("p-cmp", {
    label: "текст",
    content: "<p>Введите обычный текст здесь...</p>",
    category: "Типография",
  })

  blockManager.add("img-cmp", {
    label: "Картинка",
    select: true,
    activate: true,
    content: { type: "image" },
    category: "Медиа",
  })

  blockManager.add("video-cmp", {
    select: true,
    activate: true,
    label: "Видео",
    content: { type: "video" },
    category: "Медиа",
  })

  blockManager.add("button-cmp", {
    label: "Кнопка",
    content: "<button>нажмите</button>",
    category: "Действия",
  })

  blockManager.add("input-cmp", {
    label: "Инпут",
    content: "<input />",
    attributes: { type: "text" },
    category: "Действия",
  })

  blockManager.add("select-cmp", {
    label: "Селект",
    content: "<input />",
    attributes: { type: "select", title: "select title" },
    category: "Действия",
  })

  blockManager.add("datepicker-cmp", {
    label: "Календарь",
    content: ReactDOMServer.renderToStaticMarkup(<CustomDatePicker />),
    category: "Действия",
  })
}
