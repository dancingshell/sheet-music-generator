import * as React from 'react';

export function Hello(props: {text: string}) {
  return <div style={{ color: "red" }}>Hello {props.text}</div>;
}
