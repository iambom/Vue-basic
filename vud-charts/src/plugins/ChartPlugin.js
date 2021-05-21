import Chart from 'chart.js';
import Vue from 'vue';

export default {
    install(vue) {
        console.log('chart plugin loaded');
        // prototype 특정 메서드나 객체 속성을 확장할 때 사용
        // $_ 는 vue.js에서 공식적으로 권고하는 플러그인 함수의 prefix
        Vue.prototype.$_Chart = Chart;

        // BarChart.vue & LineChart.vue ... 어디서든지 this.$_Chart 접근 가능
        // this.$_Chart
    }
}