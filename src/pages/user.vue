<template>
	<div class="Hcontent">
		<header>
			<div class="h1">
				<p class="h1p"><img class="h1img" src="../assets/user_2.gif" /></p>
				<p class="h2p">
					<img class="h1img1" src="../assets/checkxz.gif" />
					<span class="h2sp">M</span>
					<span class="fright">管理信息，地址&lt;</span>
				</p>
			</div>
			<div class="h2">
				<div class="h2d">
					<p class="h2dp">￥0.00</p>
					<p class="h2dp1">礼品卡金额</p>
				</div>
				<div class="h2d">
					<p class="h2dp">0张</p>
					<p class="h2dp1">抵用卷</p>
				</div>
			</div>
		</header>
		<section>
			<div class="s1">
				<div class="s1d">
					<p class="s1dp"><span class="s1dsp">我的订单</span><span class="s1dsp1 fright">></span></p>
				</div>
				<div class="s2d">
					<div class="s2d_d">
						<p class="s2p1"><img class="s2img" src="../assets/icon/user_3.gif"/></p>
						<p class="s2p">待付款</p>
					</div>
					<div class="s2d_d">
						<p class="s2p1"><img class="s2img" src="../assets/icon/user_4.gif"/></p>
						<p class="s2p">待发货	</p>
					</div>
					<div class="s2d_d">
						<p class="s2p1"><img class="s2img" src="../assets/icon/user_5.gif"/></p>
						<p class="s2p">待收货</p>
					</div>
					<div class="s2d_d">
						<p class="s2p1"><img class="s2img" src="../assets/icon/user_6.gif"/></p>
						<p class="s2p">退款中</p>
					</div>
				</div>
			</div>
			<div class="s3">
				<div class="s3d">
					<p class="s3p"><img class="s3dimg" src="../assets/user_7.gif"/></p>
					<p class="s3p1">我的拼团</p>
				</div>
				<div class="s3d">
					<p class="s3p"><img class="s3dimg1" src="../assets/user_8.gif"/></p>
					<p class="s3p1">我的关注</p>
				</div>
				<div class="s3d">
					<p class="s3p"><img class="s3dimg2" src="../assets/user_9.gif"/></p>
					<p class="s3p1">成为营销师</p>
				</div>
				<div class="s3d">
					<p class="s3p"><img class="s3dimg3" src="../assets/user_10.gif"/></p>
					<p class="s3p1">商家合作</p>
				</div>
				<div class="s3d">
					<p class="s3p"><img class="s3dimg1" src="../assets/user_11.gif"/></p>
					<p class="s3p1">帮助与反馈</p>
				</div>
			</div>
		</section>
		<footer>
			<footer-com></footer-com>
		</footer>
	</div>
</template>

<script>
	import footer from '../components/footer'

	export default {
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		components: {
			'footer-com': footer
		},
		created: function() {
			console.log('vue实例化完成');
		}
	}
</script>

<style scoped="scoped">
	.Hcontent{
		min-height: 1850px;
	}
	footer{
		display: inline-block;
		width: 100%;
	}
	.s3dimg3{
		height: 74px;
	}
	.s3dimg2{
		height: 61px;
	}
	.s3dimg1{
		height: 76px;
	}
	.s3dimg{
		height: 66px;
	}
	.s3p1{
		height: 140px;
		line-height: 140px;
		font-size: 38px;
		color: #030303;
		
	}
	.s3d{
		padding-top: 58px;
		min-width: 270px;
		display: flex;
		flex-direction: column;
    	justify-content: flex-end;
    	border-bottom: 1px solid #e4e4e4;
    	
	}
	.s3{
		margin-top: 35px;
		
		background-color: white;
		display: flex;
		flex-wrap: wrap;
	}
	.s2p1{
		height: 104px;
		line-height: 104px;
	}
	.s2p{
		height: 84px;
		line-height: 84px;
		color: black;
	}
	.s2img{
		height: 50px;
	}
	.s2d{
		width: 100%;
		background-color: white;
		display: flex;
	}
	.s2d_d{
		flex: 1;
	}
	.s1dsp{
		font-size: 44px;
		color: black;
	}
	.s1dsp1{
		font-size: 34px;
		color: #afafaf;
	}
	.s1dp{
		padding: 0 36px;
		text-align: left;
		border-bottom: 1px solid #e3e3e3;
	}
	
	.s1dp>span{
		height: 142px;
		line-height: 142px;
	}
	
	.h1 {
		height: 490px;
		background: url(../assets/user_1.gif) no-repeat;
		background-size: cover;
	}
	
	.h1img {
		height: 80px;
	}
	
	.h1p {
		padding-top: 80px;
		text-align: left;
		text-indent: 35px;
	}
	
	.h2p {
		padding: 0 35px;
		padding-top: 95px;
		text-align: left;
	}
	
	.h2p>span{
		display: inline-block;
		height: 152px;
		line-height: 152px;
		font-size: 40px;
		color: white;
	}
	
	.h1img1 {
		width: 152px;
		height: 152px;
		border-radius: 50%;
		
		border: 3px solid #ffe7e3;
	}
	
	.h2sp{
		text-indent: 40px;
		
	}
	
	.imgd {
		
		display: inline-block;
		border-radius: 50%;
	}
	
	.h2{
		display: flex;
		background-color: white;
	}
	
	.h2d{
		flex: 1;
		height: 86px;
		margin: 30px 0;
	}
	.h2d:nth-child(2){
		border-left: 1px solid #e6e6e6;
	}
	
	section{
		margin-top: 33px;
		overflow: hidden;
	}
	
	section>div{
		background-color: white;
	}
</style>