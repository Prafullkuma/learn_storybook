import React from "react";
import { Primary } from "../Components/Button/Button.stories";
import { Large } from "../Components/Input/Input.stories";

export default {
  title: "form/subscription",
};

//Story within story
export const PrimarySubscription = () => (
  <>
    <Large />
    <Primary />
  </>
);
