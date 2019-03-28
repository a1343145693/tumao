<template>
	<div>
		<form>
			用户名<input type="text" v-model="namea"/>
			<br />
			密码<input type="password" v-model="pwda"/>
			<br />
			<input type="button" value="注册" @click="zhuche" />
		</form>
		
	</div>
</template>

<script>
	export default{
		name: 'index',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App',
				namea:'',
				pwda:''
			}
		},methods:{
			zhuche:function(){
				console.log(this.namea);
				console.log(this.pwda);
				this.axios({
					method:'post',
					url:'/api/users/zhuche',
					data:{
						username:this.namea,
						password:this.pwda
					}
				}).then(function(res){
					console.log(res);
					alert(res.data.message);
				}).catch(function(err){
					console.log(err);
				})
			}
		}
	}
</script>

<style>
</style>