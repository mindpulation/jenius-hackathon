import React, { useState, useEffect } from 'react';

function App() {  

  const [staListen, setStaListen] = useState(false);

  const [intern, setIntern] = useState("");

  const [final, setFinal] = useState("");

  const startListen = () => {
    setStaListen(true);    
  };

  const stopListen = () => {
    setStaListen(false);
  };

  useEffect(()=>{

    const Listen = window.webkitSpeechRecognition || window.SpeechRecognition;  
    const recog = new Listen();

    recog.continous = true;
    recog.interimResults = true;
    recog.lang = 'id-ID';
    
    if(staListen === true){

      console.log("Start");

      recog.start();      

      recog.onend = () => {
        setStaListen(false);
      }

    }

    else if(staListen === false){

      console.log("Stop");

      recog.stop();              

    }

    recog.onstart = () => {
      console.log("Listening");
    };

    let finalTranscript = "";

    recog.onresult = event => {

      console.log(event.results);

      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        
        const transcript = event.results[i][0].transcript;
        
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;

      }

      setIntern(interimTranscript);

      setFinal(finalTranscript);      


    }      

    recog.onerror = (err) => {

      console.log(err);      

      console.log("Error in recognition");      

      setStaListen(false);

    }

  },[staListen]);

  return (
    <div>
      <button onClick={startListen}>Action for Listening</button>
      <br></br> 
      <span id='interim' >{intern}</span>
      <br></br>
      <span id='final' >{final}</span>
      <br></br>
      <button onClick={stopListen}>Action for stop Listening</button>
    </div>
  );
}

export default App;
