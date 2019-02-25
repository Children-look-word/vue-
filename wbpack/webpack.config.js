
var path=require('path');


module.exports={
	entry:path.join(__dirname,"./src/main.js"),
	output:{
		path:path.join(__dirname,"./dist"),
		filename:"bundle.js"	
	},
	module:{ //配置第三方 loader模块
		rules:[  //第三方模块的匹配规则     //引入 css 需要 下载 style-loader  css-loader 模块
			{test:/\.css$/,use:['style-loader','css-loader']}
		]
	}
}
