<template>
	<div class="Hcontent">
		<header>
			<div class="h1">
				<p class="h1p">购物车<span class="h1sp">编辑</span></p>
			</div>
		</header>
		<section>
			<template v-for="(item,index) in list">
				<div class="s1">
					<div class="shopname">
						<label :class="{xz:item.selectall}" @click="shopclick(index)" class="ckbox" :for="'xx'+item.Shopid"></label>
						<img class="cion" src="../assets/dpicon.gif" />
						<label class="shopl">{{item.Shopname}}</label>
					</div>
					<template v-for="(shop,indexa) in item.Splist">
						<div class="shopsp">
							<label :class="{xz:shop.select}" @click="spclick(index,indexa)" class="ckbox" :for="['xx'+index+'-'+indexa]"></label>
							<img class="sptp" src="../assets/spimg.gif" />
							<div class="spjs">
								<p class="spjsp">{{shop.title}}</p>
								<p class="spjsp1">{{shop.details}}</p>
								<p class="spjsp2">
									<label class="spjsp2l">￥{{shop.price}}</label>
									<button @click="jian(index,indexa)" class="jian">-</button>
									<span>{{shop.count}}</span>
									<button @click="jia(index,indexa)" class="jia">+</button>
								</p>
							</div>
						</div>
					</template>
				</div>
			</template>
			<div class="s3">
				<label class="ckbox" :class="{xz:quanxuan}" @click="qxf()" ></label>
				
				<button class="buy">结算</button>
				<div class="s3d">
					<p class="s3p">合计：<span class="s3sp">￥{{allprice}}</span></p>
					<p class="s3p1">不含运费</p>
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
		name: 'category',
		data() {
			return {
				msg: 'hahahaha',
				qx:true,
				buylist: [],
				list: [{
					
					selectall: true,
					Shopid: 1,
					Shopname: '土冒零食馆',
					Splist: [{
						select: true,
						id: 1,
						title: '真之味日式秋刀鱼',
						details: '净含量：500g;口味：香辣,五香,黑',
						price: 29.80,
						count: 1
					}, {
						select: true,
						id: 2,
						title: '真之味月式秋刀鱼',
						details: '净含量：500g;口味：香辣,五香,黑',
						price: 27.80,
						count: 1
					}, {
						select: true,
						id: 3,
						title: '真之味日式秋剑鱼',
						details: '净含量：500g;口味：香辣,五香,黑',
						price: 26.80,
						count: 1
					}]
				},{
					
					selectall: true,
					Shopid: 1,
					Shopname: '土冒零食馆2号店',
					Splist: [{
						select: true,
						id: 1,
						title: '假之味日式秋刀鱼',
						details: '净含量：500g;口味：香辣,五香,黑',
						price: 99.80,
						count: 1
					}, {
						select: true,
						id: 2,
						title: '假之味月式秋刀鱼',
						details: '净含量：500g;口味：香辣,五香,黑',
						price: 27.80,
						count: 1
					}, {
						select: true,
						id: 3,
						title: '假之味日式秋剑鱼',
						details: '净含量：500g;口味：香辣,五香,黑',
						price: 1.80,
						count: 1
					}]
				}]

			}

		},
		components: {
			'footer-com': footer
		},
		methods: {
			shopclick: function(index) {
				if(this.list[index].selectall) {
					this.list[index].selectall = false;
				} else {
					this.list[index].selectall = true;
				}
				let _this = this;
				this.list[index].Splist.forEach(function(item) {
					item.select = _this.list[index].selectall;
				});
				console.log(_this.list[index].selectall);

			},
			spclick: function(index, indexa) {
				if(this.list[index].Splist[indexa].select){
					this.list[index].Splist[indexa].select = false;
				} else {
					this.list[index].Splist[indexa].select = true;
				}
				
				let _this = this;
				let i = 0
				this.list[index].Splist.forEach(function(item){
					if(!item.select){
						i++;
					}
				});
				if(i!=0){
					this.list[index].selectall = false;
				} else {
					this.list[index].selectall = true;
				}
			},jia:function(index,indexa){
				this.list[index].Splist[indexa].count++;
			},jian:function(index,indexa){
				if(this.list[index].Splist[indexa].count>0){
					this.list[index].Splist[indexa].count--;
				}
			},qxf:function(){
				if(this.qx){
					this.qx = false;
				} else {
					this.qx = true;
				}
				for(let i = 0;i<this.list.length;i++){
					this.list[i].selectall = this.qx;
					for(let j = 0 ;j<this.list[i].Splist.length;j++){
						this.list[i].Splist[j].select = this.qx;
						
					}
				}
			}
			

		},
		computed: {
			allprice:function(){
				let price = 0;
				for(let i = 0;i<this.list.length;i++){
					for(let j = 0 ;j<this.list[i].Splist.length;j++){
						if(this.list[i].Splist[j].select){
							price = price+(this.list[i].Splist[j].count*this.list[i].Splist[j].price);
						}
						
					}
				}
				return price.toFixed(2); 
			},
			quanxuan:function(){
				let result = true;
				this.list.forEach(function(item){
					if(!item.selectall){
						result =  false
					}
				});
				return result;
			}
		},
		created: function() {
			this.buylist = JSON.parse(JSON.stringify(this.list));
		}
		/*watch: {
			'list.selectall': {
				handler() {
					console.log(111111111);
				},deep:true
			}
		}*/
	}
</script>

<style scoped="scoped">
	.buy {
		padding: 0;
		background-color: #b41801;
		width: 216px;
		color: white;
		height: 100%;
		border: 0;
		float: right;
	}
	
	.s3d {
		display: inline-block;
		float: right;
		padding: 20px 36px;
	}
	
	.s3sp {
		font-size: 36px;
		color: #b41500;
	}
	
	.s3p {
		font-size: 34px;
		color: black;
		line-height: 50px;
	}
	
	.s3p1 {
		line-height: 50px;
		font-size: 36px;
		color: #c6c6c6;
	}
	
	.spjsp2l {
		margin-right: 90px;
		font-size: 36px;
	}
	
	.jia {
		color: #ac2100;
		border: 1px solid #875757;
		background-color: white;
		border-radius: 50%;
		height: 50px;
		width: 50px;
		padding: 0;
		margin: 0 50px;
	}
	
	.jian {
		font-weight: 400;
		color: #a6a6a6;
		border: 1px solid #d4d4d4;
		border-radius: 50%;
		background-color: white;
		height: 50px;
		width: 50px;
		margin: 0 50px;
		padding: 0;
	}
	
	.spjsp2>label {
		color: #a01905;
		font-size: 33px;
	}
	
	.spjsp1 {
		font-size: 38px;
		color: #7f7f7f;
		padding: 65px 0;
	}
	
	.spjsp {
		font-size: 38px;
		color: black;
	}
	
	.spjs {
		display: inline-block;
		margin-left: 0px;
	}
	
	.sptp {
		height: 287px;
	}
	
	.shopsp {
		text-align: left;
		padding: 27px 0;
	}
	
	.shopl {
		font-size: 38px;
		padding-left: 31px;
		color: #000000;
	}
	
	.shopname {
		text-align: left;
		border-top: 1px solid #e4e4e4;
		border-bottom: 1px solid #e4e4e4;
		height: 140px;
		line-height: 140px;
	}
	
	.xz {
		background: url(../assets/checkxz.gif) no-repeat center center;
		background-size: 25px;
	}
	
	input[type=checkbox] {
		/*display: none;*/
	}
	
	.cion {
		height: 46px;
	}
	
	.ckbox {
		margin: 0 35px;
		display: inline-block;
		width: 50px;
		height: 50px;
		border: 1px solid #bcbcbc;
		border-radius: 50%;
	}
	
	.s1 {
		background-color: white;
		margin-top: 30px;
	}
	
	.s1:nth-child(1) {
		margin-top: 0;
	}
	
	section>div:nth-last-child(2) {
		padding-bottom: 260px;
	}
	
	.h1sp {
		position: absolute;
		right: 40px;
	}
	
	.h1 {
		border-bottom: 1px solid #e5e5e5;
		/*px*/
	}
	
	.h1p {
		font-size: 48px;
		color: #020202;
		text-align: center;
		height: 125px;
		line-height: 125px;
		display: inline-block;
		width: 100%;
	}
	
	section {
		background-color: #f4f4f4;
		padding-top: 30px;
		position: relative;
	}
	
	.s3 {
		height: 140px;
		background-color: white;
		position: fixed;
		bottom: 125px;
		line-height: 140px;
		width: 100%;
		text-align: left;
	}
	
	.Hcontent {
		background-color: transparent;
	}
</style>