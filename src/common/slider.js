
import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { menuConfig } from '../config';



function Slider() {

  const path = window.location.hash.replace('#','');


  const [ key, setKey ] = useState([path]);

  function handleClick(val) {
    setKey(val.keyPath)
  }

  return (
    <Menu onClick={handleClick}
    style={{ width: 256, height: '100%', position: 'fixed', left: 0, top: 64 }}
    selectedKeys={key}
    mode="inline"
  >
    {
      menuConfig.map(k => (
        <Menu.ItemGroup key={k.key} title={k.title}>
          {
            k.children.map(v => (
              <Menu.Item key={v.key}>
                <Link to={v.key} >{v.title}</Link>
              </Menu.Item>
            ))
          }
        </Menu.ItemGroup>
      ))
    }
    </Menu>
  );
}

export default Slider