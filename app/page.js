'use client'
import { useState, useEffect } from 'react'
import Image from "next/image";

export default function Home() {
  // useEffect(() => {
  //   window.onload = function() {
  //     var model = undefined;
  //     cocoSsd.load().then(function (loadedModel) {
  //       model = loadedModel;
  //       // Show demo section now model is ready to use.
  //       demosSection.classList.remove('invisible');
  //     })
  //     .catch( err => {
  //       console.log('cocossd error', err)
  //     });
  //   };
  // },[])

  return (
    <main>
      <h1>Multiple object detection using pre trained model in TensorFlow.js</h1>

      <p>Wait for the model to load before clicking the button to enable the webcam - at which point it will become visible to use.</p>

      <section id="demos" className="invisible">

        <p>Hold some objects up close to your webcam to get a real-time classification! When ready click "enable webcam" below and accept access to the webcam when the browser asks (check the top left of your window)</p>

        <div id="liveView" className="camView">
          <button id="webcamButton">Enable Webcam</button>
          <video id="webcam" autoPlay muted width="640" height="480"></video>
        </div>
      </section>
    </main>
  );
}
