import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/lf30_editor_kwr9sggp.json';


export default function LottieControl(){

  const defaultOptions = {

    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
    preserveAspectRatio: 'lf30_editor_kwr9sggp'

    }
    
  };

    return (
    <div>
        <Lottie options={defaultOptions} height={400} width={400}/>
    </div>
    );
 
};










