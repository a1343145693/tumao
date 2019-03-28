<template>
	<div class="Hcontent">
		<header>
			<div class="h1">
				<Icon class="back fleft" type="ios-arrow-back" />

				<span class="fright h1sp">
						<Icon type="md-heart" />
						<Icon type="md-heart-outline" />
						<Icon type="ios-log-in" />
						<Icon type="ios-basket-outline" />
						<Icon type="ios-cart-outline" />
						<Icon type="ios-chatbubbles-outline" />
						<Icon type="ios-text-outline" />
				</span>
				<p class="h1p"><span>商品详情</span></p>
			</div>
		</header>
		<section>
			<div class="s1">
				<img class="s1img" src="../../static/product/product_1.gif"/>
				<p class="s1p">广西巴马特产 长寿油 养生火麻油礼盒 250ml*2</p>
				<p class="s1p1">原生态养生火麻油，大石山中的天然火麻，经物理初榨而成</p>
				<p class="s1p2"><span class="s1sp">￥139.00</span><span class="s1sp1">￥146.00</span></p>
				<div class="s1d">
					<p class="s1p3">运费：￥5.00 /产地：巴马</p>
					<p class="s1p4"><span>7</span>天无理由<span>保</span>食品安全险<span>直</span>产地直供</p>
				</div>
				<p class="s1p5"><span>配送至   浙江    杭州市  </span><Icon class="fright" type="ios-arrow-forward" /></p>
				
				
			</div>
			<div class="s2">
				<img class="s2img" src="../../static/product/product_2.gif"/>
				<ul class="s2ul">
					<li><span>产品特色</span><span>野生火麻 物理压榨</span></li>
					<li><span>保质期</span><span>18个月</span></li>
					<li><span>净含量</span><span>250ml*2</span></li>
					<li><span>包装方式</span><span>瓶装</span></li>
					<li><span>口味</span><span>原生态</span></li>
					<li><span>存储方式</span><span>置于干燥，阴凉处</span></li>
					<li><span>食材</span><span>火麻油</span></li>
				</ul>
				<img class="s2img" src="../../static/product/product_3.gif" />
				<p class="s2p"><img src=""/><span>全国特色参观</span><span>进入店铺<Icon type="ios-arrow-forward" /></span></p>
				<img class="s2img" src="../../static/product/product_4.gif" />
				<img class="s2img" src="../../static/product/product_5.gif" />
			</div>
		</section>
		<footer>
			<footer-com></footer-com>
		</footer>
	</div>
</template>

<script>
	import Carousel from 'vue-m-carousel'
	import footer from '../components/footer'

	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				back: 'ios-arrow-back'
			}
		},
		components: {
			Carousel
			
		},
		created: function() {
			console.log('vue实例化完成');
		}
	}
</script>

<style scoped="scoped">
	.s2p{
		height: 150px;
		line-height: 150px;
		
	}
	.s2ul{
		font-size: 36px;
		color: #707070;
		text-align: left;
	}
	
	.s2ul>li{
		height: 72px;
		line-height: 72px;
	}
	
	.s2ul>li>span:nth-child(1){
		display: inline-block;
		width: 390px;
		text-indent: 110px;
	}
	
	.s2img{
		width: 1080px;
	}
	.s2{
		margin-top: 29px;
		background-color: white;
	}
	.s1p5{
		
		text-align: left;
		padding: 0 35px;
	}
	.s1p5>i{
		height: 144px;
		line-height: 144px;
		font-size: 64px;
		color: #ababab;
	}
	.s1p5>span{
		display: inline-block;
		height: 144px;
		line-height: 144px;
		font-size: 34px;
		color: #1a1a1a;
	}
	.s1p4>span{
		display: inline-block;
		vertical-align: middle;
		line-height: 38px;
		border: 2px solid #dab877;
		width: 38px;
		height: 38px;
		border-radius: 50%;
		background-color: #e7c27a;
		color: #fdf6e9;
		font-size: ;
	}
	
	.s1p4{
		font-size: 28px;
		line-height: 80px;
		color: #b3b3b3;
	}
	.s1p3{
		color: #CCCCCC;
		line-height: 80px;
		font-size: 32px;
	}
	.s1d{
		margin: 0px 45px;
		padding: 24px 0;
		background-color: #f4f4f4;
	}
	.s1sp1{
		font-size: 22px;
		color: #cccccc;
		text-decoration: line-through;
	}
	.s1sp{
		font-size: 38px;
		color: #b41800;
	}
	.s1p2{
		
	}
	.s1{
		background-color: white;
	}
	.s1p1{
		font-size: 38px;
		color: #707070;
		padding: 0 110px;
		padding-bottom: 60px;
	}
	.s1p{
		padding: 60px 105px;
		font-size: 48px;
		color: #484848;
	}
	.s1img{
		width: 1080px;
	}
	.h1sp {
		position: absolute;
		right: 40px;
	}
	
	.h1sp>i {
		font-size: 50px;
	}
	
	.h1p {
		font-size: 52px;
		height: 127px;
		line-height: 127px;
	}
	
	.h1 i {
		color: #1a1a1a;
		height: 127px;
		line-height: 127px;
	}
	
	.back {
		font-size: 94px;
		position: absolute;
		left: 60px;
		top: 0;
	}
	
	.h1 {
		height: 127px;
		background-color: white;
	}
</style>