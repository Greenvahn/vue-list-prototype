import Vue from 'vue';
import media from './media.json';

export const list = new Vue({
    el: '#media-list',
    data: {
      title: 'Rockorama',
      mediaList: media,
      type: ''
    },
    methods: {
      toggleDetails: function(media){
        if(event.target.hasC == 'LI'){
          media.showDetail = !media.showDetail
        }
      },
      filterList: function(){
        this.type = event.target.value;
      },
      addToList: function(){

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
  });
