import React from "react";
import { Text } from "./Text";

if (module.hot) {
  module.hot.accept();
}

export const App = () => {
  return (
    <>
      <p>
        Hello world! Edit and save this text and it WILL
        hot reload.
      </p>
      <Text />
    </>
  );
};
