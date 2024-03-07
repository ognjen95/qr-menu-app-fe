import { ComponentType } from "../../../../../app/context/theme-context/enums";

export const CUISINE_INFO_SECTION = {
  components: [
    {
      props: {
        alt: "image 1",
        className: "",
        id: "",
        name: "",
        onClick: "",
        placeholder: "",
        src: "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic2.jpg?v=8",
        type: "",
        value: "",
      },
      style: {
        height: "400",
        justifyContent: "",
        width: "400",
        zIndex: "",
      },
      title: "Main content image",
      type: ComponentType.IMAGE,
    },
    {
      props: {
        value: "Taste the world's cuisine",
      },
      title: "Welcome title",
      type: ComponentType.H4,
    },
    {
      props: {
        value: "It will delight you!",
      },
      title: "",
      type: ComponentType.H4,
    },
    {
      props: {
        value:
          "We are not afraid to experiment. Our Chef combines carefully selected ingredients and serves them on your plate in an out-of-the-ordinary form.",
      },
      title: "",
      type: ComponentType.H4,
    },
    {
      style: {
        color: "white",
      },
      props: {
        value: "Order now",
      },
      title: "",
      type: ComponentType.BUTTON,
    },
  ],
  description: "Second content section",
  id: "78",
  title: "cuisine-info",
};

export const CUISINE_INFO_PIZZA_SECTION = {
  components: [
    {
      props: {
        alt: "image 1",
        className: "",
        id: "",
        name: "",
        onClick: "",
        placeholder: "",
        src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-nataliya-vaitkevich-5792325.jpg?v=0",
        type: "",
        value: "",
      },
      style: {
        height: "400",
        justifyContent: "",
        width: "400",
        zIndex: "",
      },
      title: "Main image",
      type: ComponentType.IMAGE,
    },
    {
      props: {
        value: "Indulge in Delicious pizza",
      },
      title: "Cuisine info title",
      type: ComponentType.H4,
    },
    {
      props: {
        value: "Let yourself taste buds POP!",
      },
      title: "Cuisine info subtitle",
      type: ComponentType.H4,
    },
    {
      props: {
        value:
          "Our head chef combines carefully selected ingredients and presents them in beautiful forms.",
      },
      title: "Cuisine info description",
      type: ComponentType.H4,
    },
    {
      style: {
        color: "white",
      },
      props: {
        value: "Order now",
      },
      title: "",
      type: ComponentType.BUTTON,
    },
  ],
  description: "Second content section",
  id: "77",
  title: "cuisine-pizza-info",
};
