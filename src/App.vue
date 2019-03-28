<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

img,input,label,div{
	vertical-align: middle;
}

.Hcontent{
	max-width: 1080px;/*px*/
	margin: 0 auto;
	background-color: #f4f4f4;
}

body,h1,h2,h3,h4,h5,h6,ul,li,p{
	margin: 0;
	padding: 0;
}

ul,li{
	list-style: none;
}

img{
	border: 0;
}

.fleft{
	float: left;
}

.fright{
	float: right;
}

.icon{
	background: url(assets/icon/more.gif) no-repeat center 50px;
	background-size: 72px 64px;
}

.icon1{
	background: url(assets/icon/home.gif) no-repeat center 50px;
	background-size: 72px 64px;
}

.icon2{
	background: url(assets/icon/foodcj.gif) no-repeat center 50px;
	background-size: 72px 64px;
}

.icon3{
	background: url(assets/icon/frend.gif) no-repeat center 50px;
	background-size: 72px 64px;
}

.icon_f1{
	background: url(assets/ft1.gif) no-repeat center 11px;
	background-size: 60px 61px;
}

.icon_f2{
	background: url(assets/ft1.gif) no-repeat center 11px;
	background-size: 60px 61px;
}

.icon_f3{
	background: url(assets/icon/icon.gif) no-repeat center 11px;
	background-size: 60px 61px;
}

.icon_f4{
	background: url(assets/icon/icon1.gif) no-repeat center 11px;
	background-size: 60px 61px;
}

.icon_f5{
	background: url(assets/icon/icon2.gif) no-repeat center 11px;
	background-size: 60px 61px;
}
</style>
