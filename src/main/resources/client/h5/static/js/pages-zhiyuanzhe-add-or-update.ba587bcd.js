(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-zhiyuanzhe-add-or-update"],{3984:function(e,r,t){"use strict";t.r(r);var i=t("e99b"),n=t("8f07");for(var a in n)"default"!==a&&function(e){t.d(r,e,(function(){return n[e]}))}(a);t("d8ee");var o,u=t("f0c5"),s=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"565fbbb4",null,!1,i["a"],o);r["default"]=s.exports},"3a1e":function(e,r,t){var i=t("71e4");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=t("4f06").default;n("646838fc",i,!0,{sourceMap:!1,shadowMode:!1})},"61be":function(e,r,t){"use strict";var i=t("4ea4");Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0,t("a481"),t("c5f6"),t("f559"),t("456d"),t("ac6a"),t("28a5"),t("96cf");var n=i(t("3b8d")),a=i(t("e2b1")),o=i(t("064f")),u=i(t("bd56")),s={data:function(){return{cross:"",ruleForm:{zhiyuanzhezhanghao:"",zhiyuanzhemima:"",tupian:"",zhiyuanzhexingming:"",xingbie:"",shoujihaoma:"",fuwushijian:"",fuwuxiangmu:""},xingbieOptions:[],xingbieIndex:0,user:{},ro:{zhiyuanzhezhanghao:!1,zhiyuanzhemima:!1,tupian:!1,zhiyuanzhexingming:!1,xingbie:!1,shoujihaoma:!1,fuwushijian:!1,fuwuxiangmu:!1}}},components:{wPicker:a.default,xiaEditor:o.default,multipleSelect:u.default},watch:{},onLoad:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(r){var t,i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=uni.getStorageSync("nowTable"),e.next=3,this.$api.session(t);case 3:if(i=e.sent,this.user=i.data,this.xingbieOptions="男,女".split(","),this.ruleForm.userid=uni.getStorageSync("userid"),r.refid&&(this.ruleForm.refid=r.refid,this.ruleForm.nickname=uni.getStorageSync("nickname")),!r.id){e.next=14;break}return this.ruleForm.id=r.id,e.next=12,this.$api.info("zhiyuanzhe",this.ruleForm.id);case 12:i=e.sent,this.ruleForm=i.data;case 14:if(this.cross=r.cross,!r.cross){e.next=54;break}n=uni.getStorageSync("crossObj"),e.t0=regeneratorRuntime.keys(n);case 18:if((e.t1=e.t0()).done){e.next=54;break}if(a=e.t1.value,"zhiyuanzhezhanghao"!=a){e.next=24;break}return this.ruleForm.zhiyuanzhezhanghao=n[a],this.ro.zhiyuanzhezhanghao=!0,e.abrupt("continue",18);case 24:if("zhiyuanzhemima"!=a){e.next=28;break}return this.ruleForm.zhiyuanzhemima=n[a],this.ro.zhiyuanzhemima=!0,e.abrupt("continue",18);case 28:if("tupian"!=a){e.next=32;break}return this.ruleForm.tupian=n[a].split(",")[0],this.ro.tupian=!0,e.abrupt("continue",18);case 32:if("zhiyuanzhexingming"!=a){e.next=36;break}return this.ruleForm.zhiyuanzhexingming=n[a],this.ro.zhiyuanzhexingming=!0,e.abrupt("continue",18);case 36:if("xingbie"!=a){e.next=40;break}return this.ruleForm.xingbie=n[a],this.ro.xingbie=!0,e.abrupt("continue",18);case 40:if("shoujihaoma"!=a){e.next=44;break}return this.ruleForm.shoujihaoma=n[a],this.ro.shoujihaoma=!0,e.abrupt("continue",18);case 44:if("fuwushijian"!=a){e.next=48;break}return this.ruleForm.fuwushijian=n[a],this.ro.fuwushijian=!0,e.abrupt("continue",18);case 48:if("fuwuxiangmu"!=a){e.next=52;break}return this.ruleForm.fuwuxiangmu=n[a],this.ro.fuwuxiangmu=!0,e.abrupt("continue",18);case 52:e.next=18;break;case 54:this.styleChange(),this.$forceUpdate();case 56:case"end":return e.stop()}}),e,this)})));function r(r){return e.apply(this,arguments)}return r}(),methods:{styleChange:function(){this.$nextTick((function(){document.querySelectorAll(".radioText").forEach((function(e){e.removeAttribute("style");var r={color:"#666666"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".radioTextActive").forEach((function(e){e.removeAttribute("style");var r={color:"#666"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".checkText").forEach((function(e){e.removeAttribute("style");var r={color:"#666666"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".checkTextActive").forEach((function(e){e.removeAttribute("style");var r={color:"#666"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".uni-radio-input").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".uni-radio-input-checked").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #5fb959",borderRadius:"0",color:"#fff",background:"#5fb959"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".uni-checkbox-input").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #999999",borderRadius:"0",background:"#ffffff"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))})),document.querySelectorAll(".uni-checkbox-input-checked").forEach((function(e){e.removeAttribute("style");var r={border:"2rpx solid #5fb959",color:"#fff",borderRadius:"0",background:"#5fb959"};Object.keys(r).forEach((function(t){e.style[t]=r[t]}))}))}))},xingbieChange:function(e){this.xingbieIndex=e.target.value,this.ruleForm.xingbie=this.xingbieOptions[this.xingbieIndex]},tupianTap:function(){var e=this;this.$api.upload((function(r){e.ruleForm.tupian="file/"+r.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=(0,n.default)(regeneratorRuntime.mark((function e(){var r,t,i,n,a,o,u,s,l,h;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(this.ruleForm.zhiyuanzhezhanghao){e.next=3;break}return this.$utils.msg("志愿者账号不能为空"),e.abrupt("return");case 3:if(this.ruleForm.zhiyuanzhemima){e.next=6;break}return this.$utils.msg("志愿者密码不能为空"),e.abrupt("return");case 6:if(this.ruleForm.zhiyuanzhexingming){e.next=9;break}return this.$utils.msg("志愿者姓名不能为空"),e.abrupt("return");case 9:if(!this.ruleForm.shoujihaoma||this.$validate.isMobile(this.ruleForm.shoujihaoma)){e.next=12;break}return this.$utils.msg("手机号码应输入手机格式"),e.abrupt("return");case 12:if(!this.cross){e.next=29;break}if(uni.setStorageSync("crossCleanType",!0),a=uni.getStorageSync("statusColumnName"),o=uni.getStorageSync("statusColumnValue"),""==a){e.next=29;break}if(r||(r=uni.getStorageSync("crossObj")),a.startsWith("[")){e.next=25;break}for(u in r)u==a&&(r[u]=o);return s=uni.getStorageSync("crossTable"),e.next=23,this.$api.update("".concat(s),r);case 23:e.next=29;break;case 25:t=Number(uni.getStorageSync("userid")),i=r["id"],n=uni.getStorageSync("statusColumnName"),n=n.replace(/\[/,"").replace(/\]/,"");case 29:if(!i||!t){e.next=52;break}return this.ruleForm.crossuserid=t,this.ruleForm.crossrefid=i,l={page:1,limit:10,crossuserid:t,crossrefid:i},e.next=35,this.$api.list("zhiyuanzhe",l);case 35:if(h=e.sent,!(h.data.total>=n)){e.next=42;break}return this.$utils.msg(uni.getStorageSync("tips")),uni.removeStorageSync("crossCleanType"),e.abrupt("return",!1);case 42:if(!this.ruleForm.id){e.next=47;break}return e.next=45,this.$api.update("zhiyuanzhe",this.ruleForm);case 45:e.next=49;break;case 47:return e.next=49,this.$api.add("zhiyuanzhe",this.ruleForm);case 49:this.$utils.msgBack("提交成功");case 50:e.next=60;break;case 52:if(!this.ruleForm.id){e.next=57;break}return e.next=55,this.$api.update("zhiyuanzhe",this.ruleForm);case 55:e.next=59;break;case 57:return e.next=59,this.$api.add("zhiyuanzhe",this.ruleForm);case 59:this.$utils.msgBack("提交成功");case 60:case"end":return e.stop()}}),e,this)})));function r(){return e.apply(this,arguments)}return r}(),optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var r=new Date,t=r.getFullYear(),i=r.getMonth()+1,n=r.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,n=n>9?n:"0"+n,"".concat(t,"-").concat(i,"-").concat(n)},toggleTab:function(e){this.$refs[e].show()}}};r.default=s},"71e4":function(e,r,t){var i=t("24fb");r=i(!1),r.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.content[data-v-565fbbb4]{min-height:calc(100vh - 44px);box-sizing:border-box}',""]),e.exports=r},"8f07":function(e,r,t){"use strict";t.r(r);var i=t("61be"),n=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(r,e,(function(){return i[e]}))}(a);r["default"]=n.a},d8ee:function(e,r,t){"use strict";var i=t("3a1e"),n=t.n(i);n.a},e99b:function(e,r,t){"use strict";var i,n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("v-uni-view",{staticClass:"content"},[t("v-uni-view",{style:{width:"100%",padding:"0 0 0 0",position:"relative",background:"#ffffff",height:"100%"}},[t("v-uni-form",{staticClass:"app-update-pv",style:{width:"100%",padding:"24rpx 24rpx 24rpx 24rpx",background:"#ffffff",display:"block",height:"auto"}},[t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("志愿者账号")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.zhiyuanzhezhanghao,placeholder:"志愿者账号"},model:{value:e.ruleForm.zhiyuanzhezhanghao,callback:function(r){e.$set(e.ruleForm,"zhiyuanzhezhanghao",r)},expression:"ruleForm.zhiyuanzhezhanghao"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("志愿者密码")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.zhiyuanzhemima,placeholder:"志愿者密码"},model:{value:e.ruleForm.zhiyuanzhemima,callback:function(r){e.$set(e.ruleForm,"zhiyuanzhemima",r)},expression:"ruleForm.zhiyuanzhemima"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.tupianTap.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("图片")]),e.ruleForm.tupian?t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:e.baseUrl+e.ruleForm.tupian.split(",")[0],mode:"aspectFill"}}):t("v-uni-image",{staticClass:"avator",style:{width:"80rpx",borderRadius:"100%",objectFit:"cover",display:"block",height:"80rpx"},attrs:{src:"../../static/gen/upload.png",mode:"aspectFill"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("志愿者姓名")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.zhiyuanzhexingming,placeholder:"志愿者姓名"},model:{value:e.ruleForm.zhiyuanzhexingming,callback:function(r){e.$set(e.ruleForm,"zhiyuanzhexingming",r)},expression:"ruleForm.zhiyuanzhexingming"}})],1),t("v-uni-view",{staticClass:"select",style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("性别")]),t("v-uni-picker",{style:{width:"100%",flex:"1",height:"auto"},attrs:{value:e.xingbieIndex,range:e.xingbieOptions},on:{change:function(r){arguments[0]=r=e.$handleEvent(r),e.xingbieChange.apply(void 0,arguments)}}},[t("v-uni-view",{staticClass:"uni-input",style:{width:"100%",lineHeight:"80rpx",fontSize:"28rpx",color:"#666666"}},[e._v(e._s(e.ruleForm.xingbie?e.ruleForm.xingbie:"请选择性别"))])],1)],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("手机号码")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.shoujihaoma,placeholder:"手机号码"},model:{value:e.ruleForm.shoujihaoma,callback:function(r){e.$set(e.ruleForm,"shoujihaoma",r)},expression:"ruleForm.shoujihaoma"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("服务时间")]),t("v-uni-input",{style:{border:"0px solid #eeeeee",padding:"0px 24rpx 0px 24rpx",margin:"0 0 0 0",color:"#666666",borderRadius:"8rpx",flex:"1",background:"#ffffff00",fontSize:"28rpx",lineHeight:"80rpx",height:"80rpx"},attrs:{disabled:e.ro.fuwushijian,placeholder:"服务时间"},model:{value:e.ruleForm.fuwushijian,callback:function(r){e.$set(e.ruleForm,"fuwushijian",r)},expression:"ruleForm.fuwushijian"}})],1),t("v-uni-view",{style:{padding:"4rpx 0 4rpx 0",margin:"0 0 24rpx 0",borderColor:"#eeeeee",alignItems:"center",borderWidth:"0px 0px 2rpx 0px",background:"none",display:"flex",width:"100%",borderStyle:"solid",height:"auto"}},[t("v-uni-view",{staticClass:"title",style:{width:"160rpx",padding:"0 20rpx 0 0",lineHeight:"80rpx",fontSize:"28rpx",color:"#333333",textAlign:"right"}},[e._v("服务项目")]),t("v-uni-textarea",{style:{border:"0px solid #eeeeee",padding:"24rpx 24rpx 24rpx 24rpx",margin:"0 0 0 0",color:"#000000",borderRadius:"8rpx",flex:"1",background:"none",fontSize:"28rpx",height:"240rpx"},attrs:{placeholder:"服务项目"},model:{value:e.ruleForm.fuwuxiangmu,callback:function(r){e.$set(e.ruleForm,"fuwuxiangmu",r)},expression:"ruleForm.fuwuxiangmu"}})],1),t("v-uni-view",{staticClass:"btn",style:{width:"100%",justifyContent:"center",display:"flex",height:"auto"}},[t("v-uni-button",{staticClass:"bg-red",style:{border:"0px solid #eeeeee",padding:"0 0 0 0",margin:"0 4% 0 0",color:"#fff",borderRadius:"60rpx",background:"#d84fa9",width:"30%",lineHeight:"80rpx",fontSize:"28rpx",height:"80rpx"},on:{click:function(r){arguments[0]=r=e.$handleEvent(r),e.onSubmitTap.apply(void 0,arguments)}}},[e._v("提交")])],1)],1)],1)],1)},a=[];t.d(r,"b",(function(){return n})),t.d(r,"c",(function(){return a})),t.d(r,"a",(function(){return i}))}}]);