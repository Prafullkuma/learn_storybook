import React from "react";
import Input from "./index";

export default {
  title: "Form/Input",
  component: Input,
};

export const Small = () => <Input size="small" placeholder="Search" />;
export const Medium = () => <Input size="medium" placeholder="Search" />;
export const Large = () => <Input size="large" placeholder="Search" />;
