import * as React from 'react';

export function Test(props: {text: string}) {
  return <div style={{ color: "red" }}>Hello {props.text}</div>;
}
