package com.cl.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 服务项目
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2024-03-10 21:24:25
 */
@TableName("fuwuxiangmu")
public class FuwuxiangmuEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public FuwuxiangmuEntity() {
		
	}
	
	public FuwuxiangmuEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 服务项目
	 */
					
	private String fuwuxiangmu;
	
	/**
	 * 封面
	 */
					
	private String fengmian;
	
	/**
	 * 服务时间
	 */
					
	private String fuwushijian;
	
	/**
	 * 预约须知
	 */
					
	private String yuyuexuzhi;
	
	/**
	 * 服务内容
	 */
					
	private String fuwuneirong;
	
	/**
	 * 收藏数量
	 */
					
	private Integer storeupnum;
	
	/**
	 * 点击次数
	 */
					
	private Integer clicknum;
	
	/**
	 * 志愿者账号
	 */
					
	private String zhiyuanzhezhanghao;
	
	/**
	 * 志愿者姓名
	 */
					
	private String zhiyuanzhexingming;
	
	/**
	 * 手机号码
	 */
					
	private String shoujihaoma;
	
	/**
	 * 状态
	 */
					
	private String zhuangtai;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：服务项目
	 */
	public void setFuwuxiangmu(String fuwuxiangmu) {
		this.fuwuxiangmu = fuwuxiangmu;
	}
	/**
	 * 获取：服务项目
	 */
	public String getFuwuxiangmu() {
		return fuwuxiangmu;
	}
	/**
	 * 设置：封面
	 */
	public void setFengmian(String fengmian) {
		this.fengmian = fengmian;
	}
	/**
	 * 获取：封面
	 */
	public String getFengmian() {
		return fengmian;
	}
	/**
	 * 设置：服务时间
	 */
	public void setFuwushijian(String fuwushijian) {
		this.fuwushijian = fuwushijian;
	}
	/**
	 * 获取：服务时间
	 */
	public String getFuwushijian() {
		return fuwushijian;
	}
	/**
	 * 设置：预约须知
	 */
	public void setYuyuexuzhi(String yuyuexuzhi) {
		this.yuyuexuzhi = yuyuexuzhi;
	}
	/**
	 * 获取：预约须知
	 */
	public String getYuyuexuzhi() {
		return yuyuexuzhi;
	}
	/**
	 * 设置：服务内容
	 */
	public void setFuwuneirong(String fuwuneirong) {
		this.fuwuneirong = fuwuneirong;
	}
	/**
	 * 获取：服务内容
	 */
	public String getFuwuneirong() {
		return fuwuneirong;
	}
	/**
	 * 设置：收藏数量
	 */
	public void setStoreupnum(Integer storeupnum) {
		this.storeupnum = storeupnum;
	}
	/**
	 * 获取：收藏数量
	 */
	public Integer getStoreupnum() {
		return storeupnum;
	}
	/**
	 * 设置：点击次数
	 */
	public void setClicknum(Integer clicknum) {
		this.clicknum = clicknum;
	}
	/**
	 * 获取：点击次数
	 */
	public Integer getClicknum() {
		return clicknum;
	}
	/**
	 * 设置：志愿者账号
	 */
	public void setZhiyuanzhezhanghao(String zhiyuanzhezhanghao) {
		this.zhiyuanzhezhanghao = zhiyuanzhezhanghao;
	}
	/**
	 * 获取：志愿者账号
	 */
	public String getZhiyuanzhezhanghao() {
		return zhiyuanzhezhanghao;
	}
	/**
	 * 设置：志愿者姓名
	 */
	public void setZhiyuanzhexingming(String zhiyuanzhexingming) {
		this.zhiyuanzhexingming = zhiyuanzhexingming;
	}
	/**
	 * 获取：志愿者姓名
	 */
	public String getZhiyuanzhexingming() {
		return zhiyuanzhexingming;
	}
	/**
	 * 设置：手机号码
	 */
	public void setShoujihaoma(String shoujihaoma) {
		this.shoujihaoma = shoujihaoma;
	}
	/**
	 * 获取：手机号码
	 */
	public String getShoujihaoma() {
		return shoujihaoma;
	}
	/**
	 * 设置：状态
	 */
	public void setZhuangtai(String zhuangtai) {
		this.zhuangtai = zhuangtai;
	}
	/**
	 * 获取：状态
	 */
	public String getZhuangtai() {
		return zhuangtai;
	}

}
