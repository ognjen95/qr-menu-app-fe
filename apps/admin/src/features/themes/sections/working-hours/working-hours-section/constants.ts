import { ComponentType } from "../../enums";

export const WORKING_HOURS_SECTION = {
  components: [
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
  title: "working-hours",
};
