
import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { menuConfig } from '../config';
const { SubMenu } = Menu;



function Slider() {

  const [ openKeys, setOpenKeys ] = useState(['sub1']);

  function onOpenChange(val) {
    if(val.length > 0) {
      const length =  val.length;
      const arr = [];
      arr.push(val[length-1]);
      setOpenKeys(arr);
    } else {
      setOpenKeys([]);
    }
  };

  return (
    <Menu mode="inline" openKeys={openKeys} defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} onOpenChange={onOpenChange} style={{ width: 256, height: '100%' }} >
      
      {
        menuConfig.map(item => (
          <SubMenu key={item.key} title={item.title}>
            {
              item.children.map(k => (
              <Menu.Item key={k.key}><Link to={k.path}>{k.title}</Link></Menu.Item>
              ))
            }
          </SubMenu>
        ))
      }
    </Menu>
  );
}

export default Slider