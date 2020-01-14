import React from 'react';
import { Icon } from 'antd';
import logo from '../asserts/logo.jpeg';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <div>
        <img src={logo} alt='暂无图片' style={{ width: '52px', height: '52px', borderRadius: '4px' }}/>
        <i style={{ color: '#000', fontSize: '16px', marginLeft: '16px' }}>Stylish WebSite</i>
      </div>
      <div>
        <span>本次更新时间：2020年1月12号</span>
        <a href='https://github.com/StylishSite/StylishSiteCode'><Icon style={{ color: '#333', fontSize: '20px', marginLeft: '16px' }}  type="github" /></a>
      </div>
    </div>
  )
}

export default Header;