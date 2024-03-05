import { ComponentType } from "../../../../../app/context/theme-context/enums";

export const FIXED_BG_IMAGE_SECTION = {
  components: [
    {
      props: {
        alt: "image 1",
        src: "/images/pub-food.png",
        type: "",
        value: "",
      },
      style: {},
      title: "Background image",
      type: ComponentType.IMAGE,
    },
    {
      props: {
        value: "Visit us!",
      },
      title: "",
      type: ComponentType.H1,
    },
    {
      props: {
        value:
          "We are waiting you from Monday to Sunday! You can also place your order online",
      },
      style: {
        color: "white",
        fontSize: "",
      },
      title: "",
      type: ComponentType.P,
    },
    {
      props: {
        value: "Book now",
      },
      style: {
        color: "white",
      },
      title: "",
      type: ComponentType.BUTTON,
    },
  ],
  description: "Second content section",
  id: "6",
  title: "fixed-bg-image",
};

export const FIXED_BG_IMAGE_SECTION_PIZZA_SECTION = {
  components: [
    {
      props: {
        alt: "image 1",
        src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-bahar-zahedi-5254926.jpg?v=0",
        type: "",
        value: "",
      },
      style: {},
      title: "Background image",
      type: ComponentType.IMAGE,
    },
    {
      props: {
        value: "A feast for pizza lovers",
      },
      title: "Title",
      type: ComponentType.H1,
    },
    {
      props: {
        value: "Visit us to see what authentic pizza tastes like",
      },
      style: {
        color: "white",
        fontSize: "",
      },
      title: "Description",
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
  ],
  description: "Second content section",
  id: "6",
  title: "fixed-bg-image",
};

export const FIXED_BG_IMAGE_SECTION_PIZZA_2_SECTION = {
  components: [
    {
      props: {
        alt: "image 1",
        src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-horizon-content-3915857.jpg?v=0",
        type: "",
        value: "",
      },
      style: {},
      title: "Background image",
      type: ComponentType.IMAGE,
    },
    {
      props: {
        value: "Order a delicious pizza for yourself!",
      },
      title: "Title",
      type: ComponentType.H1,
    },
    {
      props: {
        value:
          "Drop in from Monday to Sunday! You can also order all of your favorite dishes online.",
      },
      style: {
        color: "white",
        fontSize: "",
      },
      title: "Description",
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
  ],
  description: "Second content section",
  id: "6",
  title: "fixed-bg-image",
};
