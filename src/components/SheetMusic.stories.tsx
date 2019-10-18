import React from "react";
import {storiesOf} from "@storybook/react";
import { SheetMusic, Sheet, NoteConfig }from "./SheetMusic";

storiesOf("Sheet Music", module)
  .add("Empty",
    () => <SheetMusic notes={[]}/>
  )
  .add('Sheet', () => <Sheet />)
  .add("One Note",
    () => {
    const notes: NoteConfig[] = [
      {
        note: 1
      },
      {
        note: 5
      },
      {
        note: 7
      }
    ];
      return (
        <SheetMusic notes={notes}/>
      )
    }
  );
