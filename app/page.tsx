'use client';
import { useRef } from 'react';

export default function Home() {
  function getImageInfo(event: React.ChangeEvent<HTMLInputElement>) {
    const image = new Image();
    const input = event.target;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      console.log(file);
      // image.src = input.files[0]
    }
    console.log(canvas);
  }

  const fileInput = useRef<HTMLInputElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);

  function handleClick() {
    if (fileInput.current) {
      fileInput.current.click();
    }
  }

  return (
    <main>
      <button onClick={handleClick}>cargar imagen</button>
      <input
        type='file'
        ref={fileInput}
        style={{ display: 'none' }}
        onChange={getImageInfo}
        accept='image/*'
      />
      <canvas ref={canvas}></canvas>
    </main>
  );
}
