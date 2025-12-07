export const addWalletfields = [
  {
    id: "name",
    name: "name",
    label: "Название кошелька (карта/наличные)",
    type: "text",
    required: true,
    placeholder: "Введите название кошелька",
  },
  {
    id: "amount",
    name: "amount",
    label: "Сумма",
    min: "0",
    inputMode: "decimal",
    type: "number",
    required: true,
    placeholder: "1000",
  },
  {
    id: "color",
    name: "color",
    label: "Цвет",
    type: "color-picker",
    required: false,
  },
];
