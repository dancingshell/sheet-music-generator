import * as React from "react";
import {Test} from "../Test";
import * as renderer from 'react-test-renderer';

test("Component should show 'red' text 'Hello World'", () => {
  const component = renderer.create(<Test text="World" />);
  const testInstance = component.root;

  expect(testInstance.findByType(Test).props.text).toBe("World");

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
