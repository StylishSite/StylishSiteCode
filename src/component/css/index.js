import React from 'react';
import { cssList } from '../config';
import { RenderList } from '../../common/list';

function Css() {
  return (
    <div>
        {
          RenderList(cssList, 'CSS相关概念')
        }
        <div style={{ height: '3000px' }} id='css1'>冒点测试</div>
    </div>
  )
}

export default Css;