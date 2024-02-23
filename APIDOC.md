## 接口名称: 获取 Category（根据是否登录）
URL : /api/category/list.   
方法：Get.   
URL 参数：无.   
响应成功：     
代码：200.   
内容：    
```
{
  {
    "id": 1,
    "name": “我的”,
    “wight”: “1”
  },
  {
    "id": 2,
    "name": “我的”,
    “wight”: “2”
  }
}
```

## 接口名称：获取 Category 下的links
URL : /api/links/{categoryid}
方法：Get.   
URL 参数：categoryid.   
响应成功：     
代码：200.   
内容：

```
{
  {
    "id": 1,
    “url”: “https://witcola.top”,
    “linkName” : “白可乐的博客”
    “wight”: 1,
    “icon”: ”icon”
  },
  {
    "id": 2,
    “url”: “https://github.com/itscola”,
    “linkName” : “Github Profile”
    “wight”: 2,
    “icon”: ”icon”
  }
}
```

## 接口名称：获取 link 信息
URL : /api/link/{id}
方法：Get.   
URL 参数：id.   
响应成功：     
代码：200.   
内容：

```
{
    "id": 1,
    “url”: “https://witcola.top”,
    “linkName” : “白可乐的博客”
    “wight”: 1,
    “icon”: ”icon”
}
```
响应失败：     
代码：403.   
内容：
```
{
    "error": "Access denied. You do not have the necessary permissions to access this resource."

}
```
代码：404.   
内容：

```
{
    "error": “link not found.”
}
```

## 接口名称：添加新的 link
URL : /api/link/add
方法：post.   
URL 参数：url, link name, category, wight, private, description.   
响应成功：     
代码：200.   
内容：

```
{
   “”
}
```
响应失败：     
代码：403.   
内容：
```
{
    "error": "Access denied. You do not have the necessary permissions to add this link.”

}
```

## 接口名称：移除 link
URL : /api/link/remove
方法：post.   
URL 参数：categoryid, id.   
响应成功：     
代码：200.   
内容：

```
{
   “”
}
```
响应失败：     
代码：403.   
内容：
```
{
    "error": "Access denied. You do not have the necessary permissions to add this link.”

}
```

## 接口名称：添加 cateogry
URL : /api/category/add
方法：post.   
URL 参数：name, wight, icon
响应成功：     
代码：200.   
内容：

```
{
   “”
}
```
响应失败：     
代码：403.   
内容：
```
{
    "error": "Access denied. You do not have the necessary permissions to add this link.”

}
```

## 接口名称：移除 cateogry
URL : /api/category/remove
方法：post.   
URL 参数：id
响应成功：     
代码：200.   
内容：

```
{
   “”
}
```
响应失败：     
代码：403.   
内容：
```
{
    "error": "Access denied. You do not have the necessary permissions to add this link.”

}
```

## 接口名称: 是否登录
URL : /api/user/isLogin
方法：Get.   
URL 参数：无.   
响应成功：     
代码：200.   
内容：    
```
{
  
}
```

## 接口名称: 是否是管理员
URL : /api/user/isAdmin
方法：Get.   
URL 参数：无.   
响应成功：     
代码：200.   
内容：    
```
{
  
}
```

## 接口名称: 是否是管理员
URL : /api/user/isAdmin
方法：Get.   
URL 参数：无.   
响应成功：     
代码：200.   
内容：    
```
{
  
}
```

## 接口名称: 登录
URL : /api/user/login
方法：Post.   
URL 参数：email, password.   
响应成功：     
代码：200.   
内容：    
```
{
  
}
```

## 接口名称: 退出登录
URL : /api/user/logout
方法：Get.   
URL 参数： 
响应成功：     
代码：200.   
内容：    
```
{
  
}
```

## 接口名称: 注册
URL : /api/user/reg
方法：Post.   
URL 参数： emal , password
响应成功：     
代码：200.   
内容：    
```
{
  
}
```

## 接口名称: 获取用户信息
URL : /api/user/whoami
方法：get.   
URL 参数：
响应成功：     
代码：200.   
内容：    
```
{
   “email”: “white_cola@witcola.com”,
   “isAdmin”: true,
   “”
}
```