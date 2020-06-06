import noicon from "../img/nocion.png";
import adv from "../img/adv.png";

const tabsList = ["Сейчас в СМИ", "в Германии", "Рекомендуем"];
const newsData = [
  {
    icon: noicon,
    text: "Путин упростил получение автомобильных номеров",
  },
  {
    icon: noicon,
    text: "В команде Зеленского раскрыли план реформ на Украине",
  },
  {
    icon: noicon,
    text: "'Турпомощь' прокомментировала гибель десятков россиян в Анталье",
  },
  {
    icon: noicon,
    text: "Суд закрыл дело Демпартии США против России",
  },
  {
    icon: noicon,
    text: "На Украине призвали создать ракеты для удара по Москве",
  },
];
const currencyList = [
  { main: "USD MOEX", value: 63.52, diff: "+0.09" },
  { main: "EUR MOEX", value: 70.86, diff: "+0.14" },
  { main: "НЕФТЬ", value: 64.9, diff: "+1.63%" },
  { main: "USD MOEX", value: 95.52, diff: "+0.15" },
];

const icon = noicon;

const menuItems = [
  "Видео",
  "Картинки",
  "Новости",
  "Карты",
  "Макет",
  "Переводчик",
  "Эфир",
  "еще",
];

const adv_image = adv;

const weather = {
  main: "+17",
  morning: "+17",
  day: "+20",
};

const tv = [
  { time: "2.00", title: "ТНТ. Best", desc: "ТНТ International" },
  { time: "2.15", title: "Джинглики", desc: "Карусель INT" },
  { time: "2.00", title: "Наедине со всеми", desc: "Первый" },
];

const live = [
  { time: "➲", title: "Управление как искусство", desc: "Успех" },
  { time: "➲", title: "Ночь. Мир в это время", desc: "earthTV" },
  { time: "➲", title: "Андрей Вознесенский", desc: "Совершенно секретно" },
];

const visited = [
  { name: "Недвижимость", desc: "о сталинках" },
  { name: "Маркет", desc: "люстры и светильники" },
  { name: "Авто.ру", desc: "привод 4х4 до 500 000" },
];

export {
  currencyList,
  tabsList,
  newsData,
  icon,
  menuItems,
  adv_image,
  weather,
  tv,
  live,
  visited,
};
