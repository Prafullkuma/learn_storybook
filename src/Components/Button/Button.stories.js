import React from "react";
import Button from "./index";

export default {
  title: "Form/Button",
  component: Button,
  args: {
    children: "Button", // Args at component level remember:Args at story level overwrite on component level
  },
};

// for understanding
// export const Primary = () => <Button variant="primary">Primary</Button>;
// export const Secondary = () => <Button variant="secondary">Secondary</Button>;
// export const Success = () => <Button variant="success">Success</Button>;
// export const Danger = () => <Button variant="danger">Danger</Button>;

//Used Approach
const Template = (args) => <Button {...args} />;

export const PrimaryA = Template.bind({});

PrimaryA.args = {
  variant: "primary", // args at story level
  children: "primary args",
};

export const SecondaryA = Template.bind({});

SecondaryA.args = {
  variant: "secondary",
  children: "secondary args",
};

export const LongPrimaryArgs = Template.bind({});

LongPrimaryArgs.args = {
  ...PrimaryA.args,
  children: "Long Primary Argss",
};
