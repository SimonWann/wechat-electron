# wechat-electron
首先，请安装依赖项 
## 安装依赖
    ```
    npm install
    ```
    或者您使用 yarn 的话，请使用
    ```
    yarn install
    ```
## linux 用户打包
```
npm run build:linux
```
该命令会在 项目文件夹的build 目录下生成打包好的文件
### deb-arm64
```
npm run build:linux-arm64
```
### deb-armv7l
```
npm run build:linux-armv7l
```
### deb-ia32
```
npm run build:linux32
```
