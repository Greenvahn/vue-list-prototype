<template>
  <ul class="container">
  <!-- eslint-disable-next-line -->
    <li
    v-for="item in groups"
    v-show="type === '' || type === item.type" 
    class="band-item" v-bind:class="{ active: item.showDetail }" v-bind:style="{ backgroundImage: 'url(../img/' + item.image + ')', backgroundRepeat: 'none' }">
    
        <div class="face-item">
          <h3 :class="{ toWhite: item.whiteText }">{{item.title}}</h3>
          <div class="interactions">
            <button class="btn-plus" v-on:click="item.showDetail = !item.showDetail" data-tooltip="Show more">
              <iconShow v-show="!item.showDetail" class="icon-show"></iconShow>
              <iconHide v-show="item.showDetail" class="icon-hide"></iconHide>
            </button>
          </div>
        </div>
    
        <div class="des-item" v-show="item.showDetail">
          <div class="band-wrapper">
            <p class="band-text" :class="{ toWhite: item.whiteText }">{{item.description}}</p>
            <div class="play-cover">
              <!-- <button class="btn-play" v-on:click="playVideo(item.videoCode)"><iconPlay></iconPlay></button> -->
              <a class="btn-play" target="_blank" :href="`https://www.youtube.com/watch?v=${item.videoCode}`"><iconPlay></iconPlay></a>
            </div>
          </div>
          <div class="band-track">
            <button class="btn-track" v-bind:class="{ selected: item.isSelected }" v-on:click="updateFollow(!item.isSelected, item.id); item.isSelected = !item.isSelected;">
              <span class="icon"><iconTick v-show="item.isSelected"></iconTick><iconFollow v-show="!item.isSelected"></iconFollow></span>
              <span class="button-text">{{ !item.isSelected ? item.button.follow : item.button.following }}</span>
            </button>
            <button class="btn-add" v-bind:class="{ added: item.isAdded }" v-on:click="updateList(!item.isAdded, item.id); item.isAdded = !item.isAdded;">
              <span class="icon"><iconTick v-show="item.isAdded"></iconTick><iconAdd v-show="!item.isAdded"></iconAdd></span>
              <span class="button-text">{{ !item.isAdded ? item.button.add : item.button.added }}</span>
            </button>
          </div>
        </div>

        <div class="overlay"></div>

    </li>
  </ul>
</template> 

<script>
import iconShow from '../assets/btn_plus.svg';
import iconHide from '../assets/btn_min.svg';
import iconTick from '../assets/tick.svg';
import iconFollow from '../assets/follow.svg';
import iconAdd from '../assets/add.svg';
import iconPlay from '../assets/btn_play.svg';


export default {
  name: 'groups',
  components: {
    // Loads icons
      iconShow, 
      iconHide,
      iconTick,
      iconFollow,
      iconAdd,
      iconPlay
    // show-hide
  },
  props: {
      groups:{
        type: Array,
        required: true
      },
      type:{
        type: String,
        required: true
      }
    },
    data() {
        return{
            // toggle classes
            followStatus: '',
            isSelected:'',
            isAdded: '' ,
            videoURL: ''
        }
    },
    methods:{
        updateFollow(value,id){
            this.isSelected = value;
            this.$emit(id, this.isSelected);
        },
        updateList(value,id){
            this.isAdded = value;
            this.$emit(id, this.isAdded);
        },
        // playVideo(value){
        //   this.videoURL = 'https://www.youtube.com/watch?v='+value;
        //   this.$emit('newVideo', this.videoURL);

        //   // Show up video
        //   document.querySelector('.video-window').style.opacity = '1';
        //   document.querySelector('.video-window').style.visibility = 'visible';

        //   document.querySelector('.y-video__button').click();
        //   //document.querySelector('.ytp-play-button').click();
          
        // } 

    }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  //@import 'listbands.scss';

  .video-window {
    position: absolute;
    top: 50%;
    height: 50%;
  }
</style>
