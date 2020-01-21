<template>
  <div id="app">
    <app-title v-bind:data="_data.title"/>
    <app-filterlist v-bind:groups="uniqueItemsList" @newType="updateValue"/>
    <app-listbands 
      v-bind:groups="_data.mediaList" 
      v-bind:type="_data.type" 
      v-bind:showDetail="_data.showDetail" 
      @newVideo="updateVideo"
      @showDetail="showDetailValue" />
     <div class="video-window">
       <iconClose v-on:click="closeVideo()" class="btn-close-video"></iconClose>
       <LazyYoutubeVideo v-bind:url="videoCode" />
    </div>
      
  </div>
</template>

<script>
import media from './js/media.json'
import Toptitle from './components/heading.vue'
import listbands from './components/listbands.vue'
import filterlist from './components/filterlist.vue'
import iconClose from './assets/btn_close.svg';

export default {
  name: 'app',
  components: {
    'app-title': Toptitle,
    'app-listbands': listbands,
    'app-filterlist': filterlist,
    iconClose
  },
  data: function(){
    let _data = {
      title: 'Rockorama',
      mediaList : media.bands,
      type: '',
      showDetail: false,
      videoCode: ''
    }

    return _data;
  }, 
  methods:{
    updateValue(value){
      this.type = value;
    },
    showDetailValue(value){
      this.showDetail = value;
    },
    updateVideo(value){
      this.videoCode = value;
    },
    closeVideo(){
        // Show up video
        //  alert(document.querySelector('.ytp-play-button'))
        //document.querySelector('.video-window').style.opacity = '0';
        //document.querySelector('.video-window').style.visibility = 'hidden';
    },
    followList(obj){
      this.followList = [];
      this.followList.push(obj);
    }
  },
    computed: {
      uniqueItemsList: function(){
        const types = [];
        this.mediaList.forEach((item)=>{
          if(!types.includes(item.type)){
            types.push(item.type);
          }
        });
        return types;
      }
    }
}
</script>

<style lang="scss">
   @import 'main.scss';
</style>
