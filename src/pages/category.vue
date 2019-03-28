<template>
	<div class="Hcontent">
		<header>
			<div class="h1">
				<p class="h1p">全部分类</p>
			</div>
		</header>
		<section>
			<div class="s1 fleft">
				<div class="s1d ys">零食</div>
				<div class="s1d">零食</div>
				<div class="s1d">零食</div>
				<div class="s1d">零食</div>
				<div class="s1d">零食</div>
				<div class="s1d">零食</div>
			</div>
			<div class="s2 fleft">
				<div class="s2d">
					<div class="imgbox">
						<img class="flimg" src="../assets/tp3.gif"/>
					</div>
					<p class="s2p">休闲零食</p>
				</div>
				<div class="s2d">
					<div class="imgbox">
						<img class="flimg" src="../assets/tp3.gif"/>
					</div>
					<p class="s2p">休闲零食</p>
				</div>
				<div class="s2d">
					<div class="imgbox">
						<img class="flimg" src="../assets/tp3.gif"/>
					</div>
					<p class="s2p">休闲零食</p>
				</div>
				<div class="s2d">
					<div class="imgbox">
						<img class="flimg" src="../assets/tp3.gif"/>
					</div>
					<p class="s2p">休闲零食</p>
				</div>
				<div class="s2d">
					<div class="imgbox">
						<img class="flimg" src="../assets/tp3.gif"/>
					</div>
					<p class="s2p">休闲零食</p>
				</div>
				<div class="s2d">
					<div class="imgbox">
						<img class="flimg" src="../assets/tp3.gif"/>
					</div>
					<p class="s2p">休闲零食</p>
				</div>
				<div class="s2d">
					<div class="imgbox">
						<img class="flimg" src="../assets/tp3.gif"/>
					</div>
					<p class="s2p">休闲零食</p>
				</div>
				<div class="s2d">
					<div class="imgbox">
						<img class="flimg" src="../assets/tp3.gif"/>
					</div>
					<p class="s2p">休闲零食</p>
				</div>
			</div>
		</section>
		<footer>
			<!--<footer-com></footer-com>-->
		</footer>
	</div>
</template>

<script>
	import footer from '../components/footer'
	export default {
		name: 'category',
		data() {
			return {
				msg: 'hahahaha'
			}
			
		}/*,=]\
		components: {
			'footer-com': footer
		}*/
	}
</script>

<style>
	
	.s2d{
		width: 175px;
		margin: 55px;
		display: inline-block;
	}
	
	.s2p{
		font-size:34px;
		color: #020202;
		margin-top: 10px;
		
	}
	
	.flimg{
		width: 145px;
		height: 145px;
		border-radius: 50%;
	}
	
	.h1{
		border-bottom: 1px solid #e5e5e5;/*px*/
	}
	
	.imgbox{
		/*padding: 12px;*/
		text-align: center;
		border-radius: 50%;
		border: 1px solid #e1e1e1;
		height: 170px;
		line-height: 170px;
	}
	
	.h1p{
		font-size:48px;
		color: #020202;
		text-align: center;
		height: 125px;
		line-height: 125px;
		display: inline-block;
		
	}
	
	.ys{
		border-left: 7px solid #a61600!important;
		color: #a61600!important;
		background-color: white;
	}
	
	.s1{
		width: 200px;
		background-color: #efefef;
		font-size: 40px;
		color: #060606;
	}
	
	.s1d{
		border-left: 7px solid transparent;
		line-height: 170px;
		height: 170px;
		width: 191px;
		border-bottom: 1px solid #dfdfdf;/*px*/
	}
	
	.s2{
		width: 878px;
		text-align: left;
	}
	
	.Hcontent{
		background-color: transparent;
	}
</style>