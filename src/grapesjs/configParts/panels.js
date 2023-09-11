export const panels = {
  buttons: {
    titles: {
      preview: 'Preview',
      fullscreen: 'Fullscreen',
      // 'sw-visibility': 'View components',
      // 'export-template': 'View code',
      // 'open-sm': 'Open Style Manager',
      // 'open-tm': 'Settings',
      // 'open-layers': 'Open Layer Manager',
      // 'open-blocks': 'Open Blocks',
    },
  },
  defaults: [
    {
      id: "layers",
      el: ".panel__right",
      resizable: {
        maxDim: 1200,
        minDim: 100,
        cr: 1,
        keyWidth: "flex-basis",
      },
    },
    {
      id: "panel-devices",
      el: ".panel__devices",
      buttons: [
        {
          id: "device-desktop",
          label: "Desktop",
          command: "set-device-desktop",
          active: true,
          togglable: false,
        },
        {
          id: "device-tablet",
          label: "Tablet",
          command: "set-device-tablet",
          togglable: false,
        },
        {
          id: "device-mobile",
          label: "Mobile",
          command: "set-device-mobile",
          togglable: false,
        },
      ],
    },
  ],
}
