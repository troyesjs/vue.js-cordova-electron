let img;
let video;
let canvas;

export function init(domElement, onFinished) {
  img = domElement;
  let parent = domElement.parentElement
  video  = document.createElement('video')
  canvas = document.createElement('canvas')

  video.style.display = 'none'
  canvas.style.display = 'none'
  canvas.width = 600
  canvas.height = 600
  parent.appendChild(video)
  parent.appendChild(canvas)

  navigator.getMedia = (navigator.getUserMedia ||
                        navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia ||
                        navigator.msGetUserMedia)

  navigator.getUserMedia({ video: true }, (stream) => {
    video.src = window.URL.createObjectURL(stream);
    video.onloadedmetadata = function (e) {
      onFinished()
    }
  }, onFinished);
}

export function takePicture() {
  canvas.getContext("2d").drawImage(video, 0, 0);
  img.src = canvas.toDataURL("image/png");
}
