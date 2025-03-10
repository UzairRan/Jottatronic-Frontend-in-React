// src/components/DemoVideo.jsx
// src/components/DemoVideo.jsx
export default function DemoVideo() {
  return (
    <video controls>
      <source 
        src="/client-video.mp4" 
        type="video/mp4"
      />
    </video>
  );
}


// Audio Player
<button onClick={() => new Audio('https://docs.google.com/audio-file-id').play()}>
  Play Intro
</button> 