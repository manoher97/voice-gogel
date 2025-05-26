import React, {useState} from 'react';
import './App.css';
import './index.css'


const Voice=()=>{
      const [tscript,setTscript]= useState("");
      const [darkMode,setDarkMode]=useState(false);
      
      const SpeechRecognition = window.SpeechRecognition ||window.webkitSpeechRecognition;

        if(!SpeechRecognition){
            alert("your browser does not suport this");
            return null;
        }

      const voiceover=new SpeechRecognition();
        voiceover.continuous = false;
        voiceover.lang ='en-US';

      const voiceSynth=window.speechSynthesis;

      const startRecord=()=>{
         voiceover.start();
      }


      voiceover.onresult = (event)=>{
        const record= event.results[0][0].transcript.toLowerCase();
        setTscript(record);
        handelCommand(record);
      }

      const handelCommand=(record)=>{
        if(record.includes("dark mode")){
            setDarkMode(true)
        }else if(record.includes("light mode")){
            setDarkMode(false)
        }else if(record.includes("read")){
            speakText("This id the content being read aloud")
        }
      };

      const speakText= (text)=>{
        const underTex= new SpeechSynthesisUtterance(text);
        voiceSynth.speak(underTex);
      }
      const deletText = ()=>{
        setTscript("")
      }
    return (
        <div className={darkMode ? "dark" : "light"} style={{padding:"30px"}}>
           <h1>Hi This is Voice Control Web</h1>
            <button onClick={startRecord} className='btn'>Start Record</button>
            <button onClick={()=>speakText(tscript)} className='btn'>Read Text</button>
            <button onClick={deletText} className='btn'>Delet Text</button>
            <p><b>Transcript  :</b> {tscript}</p>
        </div>
    );
}
export default Voice;


