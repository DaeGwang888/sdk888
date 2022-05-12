import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


// Import main.css file
import './assets/css/main.css';
// Import fontAwesomeIcon6
import './assets/js/fontAwesomeIcon.js';

import axiosPlugin from 'vue-axios-cors';


Vue.use(axiosPlugin);
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';


Vue.config.productionTip = false

new Vue({
  render: h => h(App), // render function의 간소화 버전 // APP.vue연결 
}).$mount('#app') // id=app인 엘리먼트에 마운트 해라



/**1번->2번->3번->4번 
 * 
 * 1번
 * render: function (createElement){
 * return createElement(App);
 * }
 * 
 * 2번
 * render(createElement){
 * return createElement(App);
 * }
 * 
 * 3번
 * render (h) {
 * return h(App) 
 * }
 * 4번
 * render: h => h(App);
 * 
 * createElement 명령을 통해 반환된 객체가 -> Virtual DOM의 노드 -> VNode
 * render()함수-> Vue-> createElement함수를 인자로 받기-> VNode를 반환 구조 by main.js 
 */
