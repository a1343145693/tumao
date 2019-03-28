<template>
	<div class="">
		<form>
			用户名<input type="text" v-model="namea"/>
			<br />
			密码<input type="password" required="required" v-model="pwda"/>
			<br />
			<input type="submit" value="登陆" @click="login" />
		</form>
	</div>
</template>

<script>
	import axios from 'axios'
	
	export default{
		name: 'index',
		data() {
			return {
				namea:'',
				pwda:''
			}
		},methods:{
			login:function(){
				axios({
					method:'get',
					url:'/users/login',
					data:{
						username:this.namea,
						password:this.pwda
					},
					params:{
						username:this.namea,
						password1:this.pwda 
					}
				}).then(function(result){
					console.log(result);
					alert(result.data.message);
				}).catch(function(err){
					console.log(err);
				})
			}
		}
	}
</script>

<style>
</style>