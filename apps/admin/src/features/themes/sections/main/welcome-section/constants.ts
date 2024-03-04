import { ComponentType } from "../../../../../app/context/theme-context/enums";

export const WELCOME_SECTION_CONFIG = {
  components: [
    {
      props: {
        value: "Welcome to our Restaurant",
      },
      title: "Welcome title",
      type: ComponentType.H1,
    },
    {
      props: {
        value: "New restaurant in New York,",
      },
      title: "Welcome description 1",
      type: ComponentType.H4,
    },
    {
      props: {
        value: "USA.",
      },
      title: "Welcome description 2",
      type: ComponentType.H4,
    },
    {
      props: {
        alt: "image 1",
        className: "",
        id: "",
        name: "",
        onClick: "",
        placeholder: "",
        src: "https://static.cdn-upm.com/static/themes/ef8ba596-4579-11ed-8bca-525400080621/assets-4/generic8.jpg?v=8",
        type: "",
        value: "",
      },
      style: {
        height: "400",
        justifyContent: "",
        width: "400",
        zIndex: "",
      },
      title: "Header image",
      type: ComponentType.IMAGE,
    },
  ],
  description: "First content section",
  id: "2",
  title: "welcome",
};

export const WELCOME_PIZZA_SECTION = {
  components: [
    {
      props: {
        value: "Looking for the best Italian pizza? We’ve got it.",
      },
      title: "Welcome title",
      type: ComponentType.H1,
    },
    {
      props: {
        value:
          "Italian ingredients, Italian recipes, and our Italian chef - what can come from such a combination? Only truly Italian cuisine! If you love Italian flavors as much as we do, our restaurant is a must-visit on your culinary map.",
      },
      title: "Welcome description 1",
      type: ComponentType.H4,
    },
    {
      props: {
        value: "",
      },
      title: "Welcome description 2",
      type: ComponentType.H4,
    },
    {
      props: {
        alt: "image 1",
        className: "",
        id: "",
        name: "",
        onClick: "",
        placeholder: "",
        src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-polina-tankilevitch-4109111.jpg?v=0",
        type: "",
        value: "",
      },
      style: {
        height: "400",
        justifyContent: "",
        width: "400",
        zIndex: "",
      },
      title: "Header image",
      type: ComponentType.IMAGE,
    },
  ],
  description: "First content section",
  id: "2",
  title: "welcome",
};
