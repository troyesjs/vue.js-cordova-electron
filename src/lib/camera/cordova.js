let img;
export function init(domElement, onFinished) {
  img = domElement;
  onFinished()
}

export function takePicture() {
    let options = {
      // Some common settings are 20, 50, and 100
      quality: 50,
      destinationType: Camera.DestinationType.FILE_URI,
      // In this app, dynamically set the picture source, Camera or photo gallery
      sourceType: Camera.PictureSourceType.CAMERA,
      encodingType: Camera.EncodingType.JPEG,
      mediaType: Camera.MediaType.PICTURE,
      allowEdit: true,
      correctOrientation: true  //Corrects Android orientation quirks
    }

    navigator.camera.getPicture(
      (imageUri) => img.src = imageUri,
      ()         => onFinished(new Error('Unable to optain picture: ' + error)),
      options
    )
}
