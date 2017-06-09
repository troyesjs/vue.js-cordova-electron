<template>
  <div class="camera">
    <button id="takePicture" @click="takePicture">Take a picture !</button><br>
    <img id="camera"></img>
  </div>
</template>

<script>
import camera from '../../lib/camera'

export default {
  name: 'camera',
  mounted() {
    camera.init(document.getElementById('camera'), (err) => {
        if (err) {
          return console.log('Error mounting the camera: ' + err.message)
        }
    })
  },
  methods: {
    takePicture() {
      camera.takePicture()
    }
  }
}
</script>
