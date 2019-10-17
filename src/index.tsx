import * as React from 'react';

export default function Test(props: {text: string}) {
  return <div style={{ color: "red" }}>Hello {props.text}</div>;
}
