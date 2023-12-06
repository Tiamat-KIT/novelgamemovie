import {staticFile} from 'remotion'
import {Audio} from 'remotion'
import { AbsoluteFill, Sequence } from "remotion";
import { First } from "./First";
import { Second } from "./Second";
import { Third } from './Third';

export default function AllMovies(){
  const oneMovie = 1193
  return(
    <AbsoluteFill>
      <Audio loop  src={staticFile("/cafe.mp3")} />
      <Sequence>
        <First />
      </Sequence>
      <Sequence from={oneMovie}>
        <Second />
      </Sequence>
      <Sequence from={oneMovie * 2}>
        <Third />
      </Sequence>
    </AbsoluteFill>
  ) 
}