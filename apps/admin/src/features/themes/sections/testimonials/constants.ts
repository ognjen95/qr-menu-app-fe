import { ComponentType } from "../../../../app/context/theme-context/enums";

export const TESTIMONIAL_SECTION = {
  components: [
    {
      props: {
        alt: "image 1",
        src: "https://static.cdn-upm.com/static/themes/5525a8cd-95a2-11ed-9ecf-525400080521/assets-2/pexels-rachel-claire-5865162.jpg?v=1",
        type: "",
        value: "",
      },
      style: {},
      title: "Background image",
      type: ComponentType.IMAGE,
    },
    {
      props: {
        alt: "image 1",
        src: "https://static.cdn-upm.com/static/themes/5525a8cd-95a2-11ed-9ecf-525400080521/assets-2/pexels-amirhossein-fattahi-15086590.jpg?v=1",
        type: "",
        value: "",
      },
      style: {},
      title: "Background image",
      type: ComponentType.IMAGE,
    },
    {
      props: {
        value:
          "'Passion and experience - in my opinion, that’s the recipe for our success. Without dedication and experience, we wouldn't have been able to create this place.'",
      },
      style: {
        color: "#fff",
      },
      title: "Message",
      type: ComponentType.H3,
    },
    {
      props: {
        value: "— Josh Timberlake, owner of SpicedUp",
      },
      title: "User who added testimonial",
      type: ComponentType.H4,
    },
  ],
  description: "Testimonial",
  id: "3",
  title: "testimonial",
};

export const REVIEW_SECTION = {
  components: [
    {
      props: {
        value:
          '"The ambiance was delightful, the staff were incredibly friendly, and the food was simply exquisite. Can\'t wait to come back again!"',
      },
      title: "Review text",
      type: ComponentType.H3,
    },
    {
      props: {
        alt: "image 1",
        src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-horizon-content-3915857.jpg?v=0",
        type: "",
        value: "",
      },
      style: {},
      title: "Image 1",
      type: ComponentType.IMAGE,
    },

    {
      props: {
        alt: "image 2",
        src: "https://static.cdn-upm.com/static/themes/6654c880-9584-11ed-9ecf-525400080521/assets-2/pexels-yassir-abbas-11111603.jpg?v=0",
        type: "",
        value: "",
      },
      style: {},
      title: "image 2",
      type: ComponentType.IMAGE,
    },
    {
      props: {
        value: "— Sarah  Walter, Food Blogger",
      },
      title: "User who added review",
      type: ComponentType.H4,
    },
  ],
  description: "Review",
  id: "3",
  title: "review",
};
