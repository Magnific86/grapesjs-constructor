export const styleManager = {
  appendTo: ".styles-container",
  sectors: [
    {
      name: "Редактор",
      open: true,
      buildProps: ["color", "background-color", "width", "height", "padding", "font-size"],
      properties: [
        // options: integer | radio | select | color | slider | file | composite | stack
        {
          type: "color",
          name: "Цвет",
          property: "color",
          defaults: "#000",
        },
        {
          type: "color",
          name: "Задний фон",
          property: "background-color",
          defaults: "#000",
        },
        {
          type: "integer",
          name: "Ширина",
          property: "width",
          units: ["px", "%", "em", "rem"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Высота",
          property: "height",
          units: ["px", "%", "em", "rem"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Отступы",
          property: "padding",
          units: ["px", "%", "em", "rem"],
          defaults: "auto",
          min: 0,
        },
        {
          type: "integer",
          name: "Размер шрифта",
          property: "font-size",
          units: ["px", "%", "em", "rem"],
          defaults: "32px",
          min: 0,
        },
      ],
    },
    {
      name: "Дополнительно",
      open: false,
      buildProps: ["box-shadow", "transform"],
      properties: [
        {
          id: "box-shadow-prop",
          property: "box-shadow",
          name: "Тень",
        },
        {
          id: "transform-prop",
          property: "transform",
          name: "Анимация",
        },
      ],
    },
  ],
}
