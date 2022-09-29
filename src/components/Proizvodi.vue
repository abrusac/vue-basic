<template>
<div>
    <b-container class="bv-example-row">
  <b-row>
    <b-col><b-card
    title="Tisak na papiru"
    img-src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/292386827_174807121682518_8436254218356886747_n.jpg?stp=dst-jpg_p526x296&_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=NyTKwxLKYJMAX-I-Jl-&_nc_ht=scontent-vie1-1.xx&oh=00_AT9B6gSxWU4fM5vRPtk_g6BJlQ8xzCzbEHEtaeuRtEZdwg&oe=6338813E"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 30rem;"
    class="mb-2"
  >
    <b-card-text>
      Personalizirana karta grada tiskana na visokokvalitetnom papiru u visokoj rezoluciji
    </b-card-text>
  </b-card></b-col>
    <b-col><b-card
    title="Drvena karta"
    img-src="https://scontent-vie1-1.xx.fbcdn.net/v/t39.30808-6/291630859_171907275305836_704401495271520267_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=WNUrG__Rr3IAX8R_lM0&_nc_ht=scontent-vie1-1.xx&oh=00_AT_5FtQwSL5-Wb9HZsNbb4flZ6Gzedyj2h5cua5XaJAiFg&oe=6338B5B2"
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 30rem;"
    class="mb-2"
  >
    <b-card-text>
      Karta grada na ručno rađenom drvenom panelu od jelovine
    </b-card-text>
  </b-card></b-col>
  </b-row>
</b-container>
<nav class="navbar navbar-expand-lg navbar-light bg-light"></nav>
<div class="alert alert-light" role="alert">
  <b-button href="#" class="btn btn-secondary btn-danger btn-lg" v-on:click="() => TogglePopup('buttonTrigger')">Naruči</b-button>
    <Popup v-if="popupTriggers.buttonTrigger">
    <h1><div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Naručiti možeš putem društvenih mreža. U kartici info nalazi se link na naš profil.</h4>
      </div></h1>
    </Popup>
</div>
</div>
</template>

<script>
import { ref } from 'vue'
import Popup from '@/components/Popup'

export default {
  setup () {
    const popupTriggers = ref({
      buttonTrigger: false
    })
    const TogglePopup = (trigger) => {
      popupTriggers.value[trigger] = !popupTriggers.value[trigger]
    }

    return {
      Popup,
      popupTriggers,
      TogglePopup
    }
  }
}
</script>
