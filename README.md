# JavaScript 模块化演示


1. Browser
	演示普通浏览器直接支持的模式，分文件，没有模块。

2. Nodejs
	演示 Nodejs 支持的模块化方式。

3. BrowserCommonJS
	在浏览器中使用 CommonJS。

4. AMD_Requirejs
	AMD，使用 RequireJS 的方式进行加载。

5. CMD_Seajs
	CMD，使用 SeaJS 的方式进行加载。

6. BrowserCommonJSWebpack
	通过 Webpack 打包后，在浏览器中查看。

7. WebpackJSImgCSS
	演示 Webpack 打包 JS、CSS 和 图片的方式。这里没有使用配置文件，命令行中需要指定依赖的模块：
	```bash
	npm install
	webpack main.js bundle.js --module-bind 'jpg=url-loader' -p
	```

