<template>
<view class="content">
	<view class="box" :style='{"width":"100%","padding":"0 0 0 0","position":"relative","background":"#ffffff","height":"100%"}'>
		<view :style='{"width":"100%","padding":"24rpx 24rpx 24rpx 24rpx","background":"#ffffff","display":"block","height":"auto"}'>
			<view :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>用户账号</view>
				<input :style='{"border":"0px solid #cccccc","padding":"0px 24rpx 0px 24rpx","margin":"0 0 0 0","color":"#666666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx","height":"64rpx"}' disabled="true"  v-model="ruleForm.yonghuzhanghao" placeholder="用户账号"></input>
			</view>
			<view :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>用户姓名</view>
				<input :style='{"border":"0px solid #cccccc","padding":"0px 24rpx 0px 24rpx","margin":"0 0 0 0","color":"#666666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx","height":"64rpx"}'   v-model="ruleForm.yonghuxingming" placeholder="用户姓名"></input>
			</view>
			<view v-if="tableName=='yonghu'" :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="yonghuxingbieChange" :value="yonghuxingbieIndex" :range="yonghuxingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666666"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" @tap="yonghutouxiangTap" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>头像</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.touxiang" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.touxiang" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='yonghu'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>联系电话</view>
				<input :style='{"border":"0px solid #cccccc","padding":"0px 24rpx 0px 24rpx","margin":"0 0 0 0","color":"#666666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx","height":"64rpx"}'   v-model="ruleForm.lianxidianhua" placeholder="联系电话"></input>
			</view>
			<view :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='zhiyuanzhe'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>志愿者账号</view>
				<input :style='{"border":"0px solid #cccccc","padding":"0px 24rpx 0px 24rpx","margin":"0 0 0 0","color":"#666666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx","height":"64rpx"}' disabled="true"  v-model="ruleForm.zhiyuanzhezhanghao" placeholder="志愿者账号"></input>
			</view>
			<view :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='zhiyuanzhe'" @tap="zhiyuanzhetupianTap" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>图片</view>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-if="ruleForm.tupian" style="margin: 0;" class="avator" :src="baseUrl+ruleForm.tupian" mode=""></image>
				<image :style='{"width":"80rpx","borderRadius":"100%","objectFit":"cover","display":"block","height":"80rpx"}' v-else class="avator" style="margin: 0;" src="../../static/gen/upload.png" mode=""></image>
			</view>
			<view :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='zhiyuanzhe'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>志愿者姓名</view>
				<input :style='{"border":"0px solid #cccccc","padding":"0px 24rpx 0px 24rpx","margin":"0 0 0 0","color":"#666666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx","height":"64rpx"}'   v-model="ruleForm.zhiyuanzhexingming" placeholder="志愿者姓名"></input>
			</view>
			<view v-if="tableName=='zhiyuanzhe'" :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' class=" select">
				<view :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}' class="title">性别</view>
				<picker :style='{"width":"100%","flex":"1","height":"auto"}'  @change="zhiyuanzhexingbieChange" :value="zhiyuanzhexingbieIndex" :range="zhiyuanzhexingbieOptions">
					<view :style='{"width":"100%","lineHeight":"80rpx","fontSize":"28rpx","color":"#666666"}' class="uni-input picker-select-input">{{ruleForm.xingbie?ruleForm.xingbie:"请选择性别"}}</view>
				</picker>
			</view>
			<view :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='zhiyuanzhe'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>手机号码</view>
				<input :style='{"border":"0px solid #cccccc","padding":"0px 24rpx 0px 24rpx","margin":"0 0 0 0","color":"#666666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx","height":"64rpx"}'   v-model="ruleForm.shoujihaoma" placeholder="手机号码"></input>
			</view>
			<view :style='{"padding":"0px 0 0px 0","margin":"0 0 24rpx 0","borderColor":"#eeeeee","alignItems":"center","borderRadius":"0px 0 0 0px","borderWidth":"0px 0px 2rpx 0px","background":"#fff","display":"flex","width":"100%","borderStyle":"solid","height":"auto"}' v-if="tableName=='zhiyuanzhe'" class="">
				<view class="title" :style='{"width":"160rpx","padding":"0 20rpx 0 0","lineHeight":"80rpx","fontSize":"28rpx","color":"#333333","textAlign":"right"}'>服务时间</view>
				<input :style='{"border":"0px solid #cccccc","padding":"0px 24rpx 0px 24rpx","margin":"0 0 0 0","color":"#666666","borderRadius":"0px","flex":"1","background":"none","fontSize":"28rpx","height":"64rpx"}'   v-model="ruleForm.fuwushijian" placeholder="服务时间"></input>
			</view>
			<view :style='{"width":"100%","margin":"40rpx 0 0 0","justifyContent":"center","display":"flex","height":"auto"}' class="btn">
				<button @tap="update()" class="cu-btn lg" :style='{"border":"0","padding":"0 0 0 0","margin":"0 20rpx 0 20rpx","color":"#fff","borderRadius":"60rpx","background":"#d84fa9","width":"240rpx","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}'>保存</button>
				<button @tap="logout()" class="cu-btn lg" :style='{"border":"0","padding":"0 0 0 0","margin":"0 20rpx 0 20rpx","color":"#fff","borderRadius":"60rpx","background":"#5fb959","width":"240rpx","lineHeight":"80rpx","fontSize":"28rpx","height":"80rpx"}'>退出登录</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>
    import multipleSelect from "@/components/momo-multipleSelect/momo-multipleSelect";
	export default {
		data() {
			return {
				ruleForm: {
				},
				tableName:"",
				yonghuxingbieOptions: [],
				yonghuxingbieIndex: 0,
				zhiyuanzhexingbieOptions: [],
				zhiyuanzhexingbieIndex: 0,
			}
		},
        components: {
            multipleSelect
        },
		computed: {
			baseUrl() {
				return this.$base.url;
			}
		},
		async onLoad() {
			let table = uni.getStorageSync("nowTable");
			let res = await this.$api.session(table);
			this.ruleForm = res.data;
			this.tableName = table;
			// 自定义下拉框值
			if(this.tableName=='yonghu'){
				this.yonghuxingbieOptions = "男,女".split(',');
				this.yonghuxingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.yonghuxingbieIndex = index;
					}
				});
			}
			// 自定义下拉框值
			if(this.tableName=='zhiyuanzhe'){
				this.zhiyuanzhexingbieOptions = "男,女".split(',');
				this.zhiyuanzhexingbieOptions.forEach((item, index) => {
					if(item==this.ruleForm.xingbie) {
						this.zhiyuanzhexingbieIndex = index;
					}
				});
			}
			this.styleChange()
            this.$forceUpdate()
		},
		methods: {
            // 下拉变化
            yonghuxingbieChange(e) {
                    this.yonghuxingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.yonghuxingbieOptions[this.yonghuxingbieIndex]
            },
			yonghutouxiangTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.touxiang = 'file/' + res.file;
					_this.$forceUpdate();
				});
			},
			zhiyuanzhetupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.tupian = 'file/' + res.file;
					_this.$forceUpdate();
				});
			},
            // 下拉变化
            zhiyuanzhexingbieChange(e) {
                    this.zhiyuanzhexingbieIndex = e.target.value
                    this.ruleForm.xingbie = this.zhiyuanzhexingbieOptions[this.zhiyuanzhexingbieIndex]
            },

            toggleTab(str) {
                this.$refs[str].show();
            },

			styleChange() {
				this.$nextTick(()=>{
					document.querySelectorAll('.radioText').forEach(el => {
					  el.removeAttribute('style')
					  const icon = {"color":"#666666"}
					  Object.keys(icon).forEach((key) => {
						el.style[key] = icon[key]
					  })
					})
					document.querySelectorAll('.radioTextActive').forEach(el => {
					  el.removeAttribute('style')
					  const icon = {"color":"#333"}
					  Object.keys(icon).forEach((key) => {
						el.style[key] = icon[key]
					  })
					})
					document.querySelectorAll('.checkText').forEach(el => {
					  el.removeAttribute('style')
					  const icon = {"color":"#666666"}
					  Object.keys(icon).forEach((key) => {
						el.style[key] = icon[key]
					  })
					})
					document.querySelectorAll('.checkTextActive').forEach(el => {
					  el.removeAttribute('style')
					  const icon = {"color":"#333"}
					  Object.keys(icon).forEach((key) => {
						el.style[key] = icon[key]
					  })
					})
					document.querySelectorAll('.uni-radio-input').forEach(el => {
					  el.removeAttribute('style')
					  const icon = {"border":"2rpx solid #999999","borderRadius":"0","background":"#ffffff"}
					  Object.keys(icon).forEach((key) => {
						el.style[key] = icon[key]
					  })
					})
					document.querySelectorAll('.uni-radio-input-checked').forEach(el => {
					  el.removeAttribute('style')
					  const icon = {"border":"2rpx solid #5fb959","borderRadius":"0","color":"#fff","background":"#5fb959"}
					  Object.keys(icon).forEach((key) => {
						el.style[key] = icon[key]
					  })
					})
					document.querySelectorAll('.uni-checkbox-input').forEach(el => {
					  el.removeAttribute('style')
					  const icon = {"border":"2rpx solid #999999","borderRadius":"0","background":"#ffffff"}
					  Object.keys(icon).forEach((key) => {
						el.style[key] = icon[key]
					  })
					})
					document.querySelectorAll('.uni-checkbox-input-checked').forEach(el => {
					  el.removeAttribute('style')
					  const icon = {"border":"2rpx solid #5fb959","color":"#fff","borderRadius":"0","background":"#5fb959"}
					  Object.keys(icon).forEach((key) => {
						el.style[key] = icon[key]
					  })
					})
				})
			},
			// 获取uuid
			getUUID () {
				return new Date().getTime();
			},
			logout() {
				uni.clearStorageSync()
				uni.reLaunch({
					url:'/pages/index/index'
				})
			},
			
			// 注册
			async update() {
				if((!this.ruleForm.yonghuzhanghao) && `yonghu` == this.tableName){
					this.$utils.msg(`用户账号不能为空`);
					return
				}
				if((!this.ruleForm.mima) && `yonghu` == this.tableName){
					this.$utils.msg(`密码不能为空`);
					return
				}
				if((!this.ruleForm.yonghuxingming) && `yonghu` == this.tableName){
					this.$utils.msg(`用户姓名不能为空`);
					return
				}
				if(`yonghu` == this.tableName && this.ruleForm.lianxidianhua&&(!this.$validate.isMobile(this.ruleForm.lianxidianhua))){
					this.$utils.msg(`联系电话应输入手机格式`);
					return
				}
				if((!this.ruleForm.zhiyuanzhezhanghao) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`志愿者账号不能为空`);
					return
				}
				if((!this.ruleForm.zhiyuanzhemima) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`志愿者密码不能为空`);
					return
				}
				if((!this.ruleForm.zhiyuanzhexingming) && `zhiyuanzhe` == this.tableName){
					this.$utils.msg(`志愿者姓名不能为空`);
					return
				}
				if(`zhiyuanzhe` == this.tableName && this.ruleForm.shoujihaoma&&(!this.$validate.isMobile(this.ruleForm.shoujihaoma))){
					this.$utils.msg(`手机号码应输入手机格式`);
					return
				}
				let table = uni.getStorageSync("nowTable");
				await this.$api.update(table, this.ruleForm);
				this.$utils.msgBack('修改成功');;
			},

		}
	}
</script>

<style lang="scss" scoped>
	.content {
		min-height: calc(100vh - 44px);
		box-sizing: border-box;
	}
</style>
