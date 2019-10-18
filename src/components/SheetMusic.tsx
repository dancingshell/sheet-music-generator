import * as React from 'react';

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
      {props.notes.map((noteConfig: NoteConfig, index) => {
        return (
          <div {...props} key={index}>{noteMap[noteConfig.note]}</div>
        )
      })}
    </>
  )
}
