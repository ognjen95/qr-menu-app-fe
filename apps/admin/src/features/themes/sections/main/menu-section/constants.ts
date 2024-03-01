import { ComponentType } from "../../enums";

export const MENU_SECTION = {
  components: [
    {
      title: "Menu item image 1",
      type: ComponentType.IMAGE,
      props: {
        src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-alberta-studios-9792460.jpg?v=0",
      },
    },
    {
      props: {
        value: "Bologna",
      },
      title: "",
      type: ComponentType.H2,
    },
    {
      props: {
        value: "Mushrooms, cheese, tomatoes, Arugula",
      },
      title: "",
      type: ComponentType.P,
    },
    {
      title: "Menu item image 2",
      type: ComponentType.IMAGE,
      props: {
        src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-marcelo-oliveira-santana-6697469.jpg?v=0",
      },
    },
    {
      props: {
        value: "Italia",
      },
      title: "",
      type: ComponentType.H2,
    },
    {
      props: {
        value: "Peperoni, Arugula, onions, parmezan",
      },
      title: "",
      type: ComponentType.P,
    },
    {
      title: "Menu item image 3",
      type: ComponentType.IMAGE,
      props: {
        src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-yassir-abbas-11111603.jpg?v=0",
      },
    },
    {
      props: {
        value: "Clienta",
      },
      title: "",
      type: ComponentType.H3,
    },
    {
      props: {
        value: "A pizza with custom toppings",
      },
      title: "",
      type: ComponentType.P,
    },
    {
      props: {
        value: "Order now",
      },
      style: {
        color: "white",
      },
      title: "Order now button",
      type: ComponentType.BUTTON,
    },
    {
      props: {
        value: "Latest additions to our menu",
      },
      title: "",
      type: ComponentType.H1,
    },
  ],
  description: "Second content section",
  id: "4",
  title: "menu",
};
