<template>
  <div>
    <!-- <app-header v-bind:하위 컴포넌트의 프롭스 속성 이름="상위 컴포넌트의 데이터 이름"></app-header> -->
    <app-header 
      v-on:renew="renewStr"
      v-bind:propsdata="str"></app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  data: function() {
    return {
      str: 'hi'
    }
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = 'HEADER';
    }
  },
}
</script>

<style>

</style>