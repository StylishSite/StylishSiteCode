import React from 'react';

import { List } from 'antd';


//函数定义
function scrollToAnchor(id) {
  if (id) {
    // 找到锚点
    let ele = document.getElementById(id);
    // 如果对应id的锚点存在，就跳转到锚点
    if(ele) { 
      ele.scrollIntoView({block: 'start', behavior: 'smooth'}); 
    }
  }
}
  // block:表示滚动到锚点的顶部或者底部，start/end
  // behavior:表示滚动的效果，auto/instant/smooth(滚动效果)

  // 1.将锚点用传统的name属性，改成id属性。这样我们就可以用document.getElementById方法方便的查询查询到锚点。
  // 2.将原来的红色按钮的href属性去掉，然后添加一个onClick方法。onClick方法传入一个锚点的id，然后用下面的函数来找到锚点并跳转到锚点。


export const RenderList = (data=[], title='标题') =>  {
  return (
    <List
      header={<div style={{ fontSize: '16px', color: '#000' }}>{title}-直通车</div>}
      footer={null}
      bordered
      dataSource={data}
      renderItem={(item, index) => (
        <List.Item key={index}>
      <span style={{ color: '#1890ff', cursor: 'pointer', textIndent: '12px' }} onClick={() => scrollToAnchor(item.id)}>{index+1}、{item.desc}</span>
        </List.Item>
      )}
  />
  )
}