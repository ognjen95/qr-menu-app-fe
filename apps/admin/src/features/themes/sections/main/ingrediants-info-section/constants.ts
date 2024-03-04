import { ComponentType } from "../../../../../app/context/theme-context/enums";

export const INGREDIANTS_INFO_SECTION = {
  components: [
    {
      props: {
        value: "Original cuisine",
      },
      title: "",
      type: ComponentType.H4,
    },
    {
      props: {
        value: "Only the best seasonal ingredients",
      },
      title: "",
      type: ComponentType.H2,
    },
    {
      props: {
        value:
          "You are only one step away from a real feast for the eyes and palate. We offer delicious dishes based on the best recipes from around the world. These are unique flavor compositions that will satisfy everyone.",
      },
      title: "",
      type: ComponentType.P,
    },
    {
      props: {
        alt: "image 1",
        className: "",
        id: "",
        name: "",
        onClick: "",
        placeholder: "",
        src: "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/cook.jpg?v=8",
        type: "",
        value: "",
      },
      style: {
        height: "400",
        width: "400",
      },
      title: "second content image",
      type: ComponentType.IMAGE,
    },
  ],
  description: "Second content section",
  id: "5",

  title: "ingredients-info",
};
