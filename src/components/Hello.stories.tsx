import React from "react";
import {storiesOf} from "@storybook/react";
import {Hello} from "./Hello";

storiesOf("Hello", module)
  .add("Dotti",
    () => <Hello text="Dotti"/>
  )
  .add("Turner",
    () => <Hello text="Turner"/>
  );
