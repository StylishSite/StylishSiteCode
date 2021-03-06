###前言

笔者最近想找一个博客来记载一些web开发方面的知识，偶然发现简书的体系甚好，并且完美支持富文本和markdown的写法，所以就准备在简书扎根啦，正所谓 **兵马未动，粮草先行**，在此呢，先记录一下markdown的基本语法，方面忘记的时候来回顾一下，如此，甚好甚好～

###语法介绍

#####一、标题

标题的实现可以有两种形式，我们比较常用的是第一种

1. 使用#号标记
使用 # 号可表示 1-6 级标题，一级标题对应一个 # 号，二级标题对应两个 # 号，以此类推。

```
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

2. 使用 = 和 - 来标记一级和二级标题
= 和 - 标记语法格式如下：

```
我展示的是一级标题
=================

我展示的是二级标题
-----------------
```

**总结**：标题这块语法相对简单，我这里就不做演示了，大家可以自己试一下


#####二、字体

Markdown 可以使用以下几种字体：

```
*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___
```

显示效果如下：

---

*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___

---


#####三、分割线

你可以在一行中用三个以上的星号、减号、底线来建立一个分隔线，行内不能有其他东西。你也可以在星号或是减号中间插入空格。下面每种写法都可以建立分隔线：

```
***

* * *

*****

- - -

----------
```
显示效果如下：

***

* * *

*****

- - -

----------


#####四、删除线

如果段落上的文字要添加删除线，只需要在文字的两端加上两个波浪线 ~~ 即可，实例如下：

```
RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~
```

显示效果如下：

RUNOOB.COM
GOOGLE.COM
~~BAIDU.COM~~


#####五、下划线

下划线可以通过 HTML 的 <u> 标签来实现(好像在简书不支持)：

```
<u>带下划线文本</u>
```

显示效果如下：

<u>带下划线文本</u>


#####六、脚注

脚注是对文本的补充说明。Markdown 脚注的格式如下:

```
[^要注明的文本]
```

以下实例演示了脚注的用法：

```
创建脚注格式类似这样 [^注解]。

[^注解]: 古之立大事者 -- 不惟有超世之才，亦必有坚韧不拔之志！！！
```

显示效果如下：

创建脚注格式类似这样 [^RUNOOB]。

[^RUNOOB]: 古之立大事者 -- 不惟有超世之才，亦必有坚韧不拔之志！！！


#####七、列表

Markdown 支持有序列表和无序列表。

无序列表使用星号(*)、加号(+)或是减号(-)作为列表标记：

```
* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项
```

显示效果如下：

* 第一项
* 第二项
* 第三项

+ 第一项
+ 第二项
+ 第三项


- 第一项
- 第二项
- 第三项

有序列表使用数字并加上 . 号来表示，如：

```
1. 第一项
2. 第二项
3. 第三项
```

显示效果如下：

1. 第一项
2. 第二项
3. 第三项

**列表嵌套**：列表嵌套只需在子列表中的选项添加四个空格即可：

```
1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素
```

显示效果如下：

1. 第一项：
    - 第一项嵌套的第一个元素
    - 第一项嵌套的第二个元素
2. 第二项：
    - 第二项嵌套的第一个元素
    - 第二项嵌套的第二个元素


#####八、链接

链接使用方法如下：

```
[链接名称](链接地址)

或者

<链接地址>
```
例如：

```
这是一个链接 [百度](https://www.baiducom)

```

显示效果如下：

这是一个链接 [百度](https://www.baiducom)

直接使用链接地址：

 ```
<https://www.baiducom>
```

显示效果如下：

<https://www.baiducom>


链接也可以用变量来代替，文档末尾附带变量地址：

```
这个链接用 1 作为网址变量 [Google][1]
这个链接用 du 作为网址变量 [baidu][2]
然后在文档的结尾为变量赋值（网址）
```
显示效果如下：

这个链接用 1 作为网址变量 [Google][1]
这个链接用2 作为网址变量 [baidu][2]
然后在文档的结尾为变量赋值（网址）

  [1]: http://www.google.com/
  [2]: http://www.baidu.com/


#####九、图片

Markdown 图片语法格式如下：

```
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
```

* 开头一个感叹号 !
* 接着一个方括号，里面放上图片的替代文字
* 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 'title' 属性的文字。

使用实例：

```
![猫咪](https://upload-images.jianshu.io/upload_images/21292023-95d4d4da779d2ec1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![狗狗](https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1581510620269&di=1834d9a7fe222e90186c9bfde76adb7a&imgtype=0&src=http%3A%2F%2Fimg.juimg.com%2Ftuku%2Fyulantu%2F121005%2F219049-1210051Q25899.jpg "狗子")
```
显示结果如下：

![猫咪](https://upload-images.jianshu.io/upload_images/21292023-95d4d4da779d2ec1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

![狗狗](https://upload-images.jianshu.io/upload_images/21292023-e42dc5f348efc41b.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240 "狗子")

当然，你也可以像网址那样对图片网址使用变量:

```
这个链接用 1 作为网址变量! [狗子][1].
然后在文档的结尾为变量赋值（网址）

[1]: https://upload-images.jianshu.io/upload_images/21292023-95d4d4da779d2ec1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240
```

显示结果如下：

这个链接用 1 作为网址变量 ![狗子][gou].
然后在文档的结尾为变量赋值（网址）

[gou]: https://upload-images.jianshu.io/upload_images/21292023-95d4d4da779d2ec1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240

Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 <img> 标签（有的不支持此功能,比如简书，所以这里不再做示例展示）。

```
<img src="https://upload-images.jianshu.io/upload_images/21292023-95d4d4da779d2ec1.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240">

```


#####十、代码

如果是段落上的一个函数或片段的代码可以用反引号把它包起来（`），例如：

```
`console.log()` 函数
```

显示效果如下：

`console.log()` 函数

**代码区块**：用 ``` 包裹一段代码，并指定一种语言（也可以不指定）：

```
    ```javascript
     $(document).ready(function () {
       alert('RUNOOB');
     });
    ```
```

显示效果如下：

```
$(document).ready(function () {
    alert('RUNOOB');
});
```


#####十一、表格

Markdown 制作表格使用 | 来分隔不同的单元格，使用 - 来分隔表头和其他行。

语法格式如下：

```
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```

显示效果如下：

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

我们可以设置表格的对齐方式：

*  **-:**  设置内容和标题栏居右对齐。
*  **:-**  设置内容和标题栏居左对齐。
*  **:-:** 设置内容和标题栏居中对齐。
实例如下：

```
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

显示效果如下：

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |


#####十二、区块

Markdown 区块引用是在段落开头使用 > 符号 ，然后后面紧跟一个空格符号：

```
> 区块引用
> 简书
> 简述你的梦想
```

显示效果如下：

> 区块引用
> 简书
> 简述你的梦想

另外区块是可以嵌套的，一个 > 符号是最外层，两个 > 符号是第一层嵌套，以此类推：

```
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```

显示效果如下：

> 最外层
> > 第一层嵌套
> > > 第二层嵌套

区块中使用列表实例如下：

```
> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项
```

显示效果如下：

> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项

如果要在列表项目内放进区块，那么就需要在 > 前添加四个空格的缩进。

区块中使用列表实例如下：

```
* 第一项
    > 菜鸟教程
    > 学的不仅是技术更是梦想
* 第二项
```

显示效果如下：

* 第一项
    > 菜鸟教程
    > 学的不仅是技术更是梦想
* 第二项


#####十三、高级技巧

1、支持的 HTML 元素

不在 Markdown 涵盖范围之内的标签，都可以直接在文档里面用 HTML 撰写。

目前支持的 HTML 元素有：<kbd> <b> <i> <em> <sup> <sub> <br>等 ，如：

```
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

```

显示效果如下：

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

2、转义

Markdown 使用了很多特殊符号来表示特定的意义，如果需要显示特定的符号则需要使用转义字符，Markdown 使用反斜杠转义特殊字符：

```
**文本加粗** 
\*\* 正常显示星号 \*\*
```

显示效果如下：

**文本加粗** 
\*\* 正常显示星号 \*\*


Markdown 支持以下这些符号前面加上反斜杠来帮助插入普通的符号：

```
\   反斜线
`   反引号
*   星号
_   下划线
{}  花括号
[]  方括号
()  小括号
#   井字号
+   加号
-   减号
.   英文句点
!   感叹号
```

**结语**：以上就是我们比较会经常用到的语法啦，当然了，还有很多其他的功能，但是并不会很常用，比如插入公式，写流程图等等，大家有兴趣的可以自行研究一下，本片到这里就结束了，欢迎大家关注和收藏哦～







  