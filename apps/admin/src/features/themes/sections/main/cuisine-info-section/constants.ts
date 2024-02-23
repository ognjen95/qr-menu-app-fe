import { ComponentType } from "../../enums";

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
  id: "3",

  title: "cuisine-info",
};
