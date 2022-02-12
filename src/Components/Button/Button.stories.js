import React from "react";
import Button from "./index";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    variant: { control: "text" },
    children: { control: "text" },
    onClick: { action: "clicked" },
  },
};

// for understanding
// export const Primary = () => <Button variant="primary">Primary</Button>;
// export const Secondary = () => <Button variant="secondary">Secondary</Button>;
// export const Success = () => <Button variant="success">Success</Button>;
// export const Danger = () => <Button variant="danger">Danger</Button>;

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variant: "primary",
  children: "Button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: "secondary",
  children: "Secondary",
};
