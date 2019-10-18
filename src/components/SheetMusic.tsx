import * as React from 'react';
import styled from 'styled-components';

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: black;
`;

const InvisibleLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: red;
`;

const Space = styled.div`
  width: 100%;
  height: 8px;
`;

const noteMap = [
  'A',
  'A#',
  'B',
  'C',
  'C#',
  'D',
  'D#',
  'E',
  'F',
  'F#',
  'G',
  'G#'
];

type Note = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 ;
export interface NoteConfig {
  note: Note,
  hold?: .25,
  // rest: boolean,
  // octave
}

interface SheetMusicProps {
  notes: NoteConfig[],
  clef?: 'treble' | 'bass'
  timeSignature?: '4/4'
  // musicKey: 'C',
}

export function SheetMusic(props: SheetMusicProps) {
  return (
    <>
      <Sheet/>
      {props.notes.map((noteConfig: NoteConfig, index) => {
        return (
          <div {...props} key={index}>{noteMap[noteConfig.note]}</div>
        )
      })}
    </>
  )
}

export function Sheet() {
  const topInvisibleLines = [];
  for (let i = 0; i < 5; i++) {
    topInvisibleLines.push(<Space />);
    if (i < 4) {
      topInvisibleLines.push(<InvisibleLine />);
    }
  }
  const mainSheet = [];
  for (let i = 0; i < 5; i++) {
    mainSheet.push(<Line />);
    if (i < 4) {
      mainSheet.push(<Space />);
    }
  }
  const bottomInvisibleLines = [];
  for (let i = 0; i < 5; i++) {
    bottomInvisibleLines.push(<Space />);
    if (i < 4) {
      bottomInvisibleLines.push(<InvisibleLine />);
    }
  }
  return (
    <>
      { topInvisibleLines }
      { mainSheet }
      { bottomInvisibleLines }
    </>
  )
}
