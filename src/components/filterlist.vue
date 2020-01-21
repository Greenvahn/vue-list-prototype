<template>
    <select id="filter" v-on:change="filterThis" :value="type">
        <option value="">I feel like...</option>
        <!-- eslint-disable-next-line -->
        <option v-for="item in groups">{{item}}</option>
    </select>
</template>

<script>
export default {
  name: 'filter-list',
  props: {
      groups:{
        type: Array
      }
    },
    data() {
        return{
            type: ''
        }
    },
    methods: {
        filterThis(){
            this.type = event.target.value;
            this.$emit('newType', this.type);
        }
    }
}
</script>