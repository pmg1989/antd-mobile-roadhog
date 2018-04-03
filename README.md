## react project starter with antd-mobile 2.x, roadhog, redux, immutable


### 目录结构

```bash
├── /dist/           # 项目发布输出目录
├── /src/            # 项目源码目录
│ ├── /public/       # 公共文件模块，编译时copy至dist目录
│ ├── /components/   # UI组件模块
│ │ ├── index.js     # 全局 export default 入口
│ ├── /constants/    # constant 常量配置模块
│ │ ├── index.js     # 常量配置配置入口
│ ├── /container/             # 容器组件模块
│ │ └── App/index.js          # APP入口
│ ├── /reducers/       # reducer模块
│ │ ├── index.js     # reducer模块入口
│ ├── /services/     # 数据接口模块
│ ├── /svg/          # svg文件目录
│ ├── /themes/       # 项目公共样式目录
│ ├── /mock/         # 数据mock
│ ├── /utils/        # 工具函数
│ │ ├── app.js       # 跟APP交互配置
│ │ ├── rem.js       # 浏览器适配配置
│ │ ├── config.js    # 项目常规配置
│ │ ├── request.js   # 异步请求函数
│ ├── routes.js      # 路由配置
│ ├── index.js       # 入口文件
│ └── entry.dev.ejs  # 开发环境下html入口文件  
│ └── entry.ejs      # 发布环境下html入口文件     
├── package.json     # 项目信息
├── .eslintrc        # Eslint配置
└── .roadhogrc.js    # roadhog配置
└── webpack.config.js# webpack相关配置
```

Include below common usage:

- custom svg config
- rem config
- custom theme config

### dev

```
npm install
npm start
```

http://localhost:8002/

