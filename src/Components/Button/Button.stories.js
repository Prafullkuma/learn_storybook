import React from "react";
// import Center from "../Center/Center";
import Button from "./index";

export default {
  title: "Form/Button",
  component: Button,
  // decorators: [(story) => <Center>{story()}</Center>], // component level decorators  if add this we need to add on every comopnent storybook to reducers this we have global decorators in preview.js
};

//with decorators
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// without decorators
// export const Primary = () => (
//   <Center>
//     <Button variant="primary">Primary</Button>;
//   </Center>
// );
// export const Secondary = () => (
//   <Center>
//     <Button variant="secondary">Secondary</Button>
//   </Center>
// );
// export const Success = () => (
//   <Center>
//     <Button variant="success">Success</Button>
//   </Center>
// );
// export const Danger = () => (
//   <Center>
//     <Button variant="danger">Danger</Button>
//   </Center>
// );
