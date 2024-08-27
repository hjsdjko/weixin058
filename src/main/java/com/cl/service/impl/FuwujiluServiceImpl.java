package com.cl.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.cl.utils.PageUtils;
import com.cl.utils.Query;


import com.cl.dao.FuwujiluDao;
import com.cl.entity.FuwujiluEntity;
import com.cl.service.FuwujiluService;
import com.cl.entity.view.FuwujiluView;

@Service("fuwujiluService")
public class FuwujiluServiceImpl extends ServiceImpl<FuwujiluDao, FuwujiluEntity> implements FuwujiluService {
	
	
    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<FuwujiluEntity> page = this.selectPage(
                new Query<FuwujiluEntity>(params).getPage(),
                new EntityWrapper<FuwujiluEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<FuwujiluEntity> wrapper) {
		  Page<FuwujiluView> page =new Query<FuwujiluView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
	@Override
	public List<FuwujiluView> selectListView(Wrapper<FuwujiluEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public FuwujiluView selectView(Wrapper<FuwujiluEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}

    @Override
    public List<Map<String, Object>> selectValue(Map<String, Object> params, Wrapper<FuwujiluEntity> wrapper) {
        return baseMapper.selectValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectTimeStatValue(Map<String, Object> params, Wrapper<FuwujiluEntity> wrapper) {
        return baseMapper.selectTimeStatValue(params, wrapper);
    }

    @Override
    public List<Map<String, Object>> selectGroup(Map<String, Object> params, Wrapper<FuwujiluEntity> wrapper) {
        return baseMapper.selectGroup(params, wrapper);
    }




}
