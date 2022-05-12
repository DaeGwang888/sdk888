
<template>
  <div id="app">
    <Header msg="환영합니다!"/>
    <MainList />
    <HomeMulti />
    <Footer />
  </div>
  
</template>



<script>
import Header from './components/template/HeaderLayout';
import Footer from './components/template/FooterLayout';
import HomeMulti from '../src/views/HomeMulti';
import MainList from '../src/views/MainList';



export default {
  name: 'App',
  components: {
    Header,
    Footer,
    HomeMulti,
    MainList,

  }
}
</script>