import React, {useState} from 'react';
import './piano.styles.scss'; 
import c from '../assets/68440__pinkyfinger__piano-c.wav'; 
import cs from '../assets/68441__pinkyfinger__piano-c.wav'; 
import d from '../assets/68442__pinkyfinger__piano-d.wav'; 
import e from '../assets/68443__pinkyfinger__piano-e.wav'; 
import eb from '../assets/68444__pinkyfinger__piano-eb.wav'; 
import f from '../assets/68445__pinkyfinger__piano-f.wav'; 
import fs from '../assets/68446__pinkyfinger__piano-f.wav'; 
import g from '../assets/68447__pinkyfinger__piano-g.wav'; 
import gs from '../assets/68448__pinkyfinger__piano-g.wav'; 
import a from '../assets/68437__pinkyfinger__piano-a.wav'; 
import b from '../assets/68438__pinkyfinger__piano-b.wav'; 
import bb from '../assets/68439__pinkyfinger__piano-bb.wav'; 

const playAudio = (i) => {
    let musicArray = [c,cs,d,e,eb,f,fs,g,gs,a,b,bb]; 
    const audio = musicArray.map(chord => {
        return new Audio(chord); 
    }); 
    return audio[i].play();
}


const Piano = () => {
    return (
        <div> 
        <div className='white-canvas'>
            <div className="key white" 
            onClick={ () => playAudio(0)}
            ></div>
            <div className="key black" onClick={ () => playAudio(1)}></div>
            <div className="key white" onClick={ () => playAudio(2)}></div>
            <div className="key black" onClick={ () => playAudio(3)}></div>
            <div className="key white" onClick={ () => playAudio(4)}></div> 
            <div className="key white" onClick={ () => playAudio(5)}></div> 
            <div className="key black" onClick={ () => playAudio(6)}></div>
            <div className="key white" onClick={ () => playAudio(7)}></div> 
            <div className="key black" onClick={ () => playAudio(8)}></div>
            <div className="key white" onClick={ () => playAudio(9)}></div> 
            <div className="key black" onClick={ () => playAudio(10)}></div>
            <div className="key white" onClick={ () => playAudio(11)}></div> 
        </div>
        </div>
    )
}
export default Piano;


