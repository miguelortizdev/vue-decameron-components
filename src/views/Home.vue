<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <Scrollspy
     :items="[{title: 'Hero', id: 'hero'}, {title: 'Form Card', id: 'form-card'}]"
      :container-id="'main-content'"
    ></Scrollspy>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/hello-world/HelloWorld.vue'; // @ is an alias to /src
import Scrollspy from '@/components/scrollspy/Scrollspy.vue';

@Component({
  components: {
    HelloWorld,
    Scrollspy,
  },
})
export default class Home extends Vue {}
</script>
