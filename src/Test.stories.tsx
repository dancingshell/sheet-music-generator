import React from "react";
import { storiesOf } from "@storybook/react";
import {Test} from "./Test";
storiesOf("ColorButton", module)
  .add("red",
    () => <Test text="red" />
  )
  .add("blue",
    () => <Test text="blue" />
  )
