//引入一个包
//path包，主要用于拼接路径
const path=require('path')
const HTMLWebpackPlugin= require('html-webpack-plugin')
//引入clean包
const {CleanWebpackPlugin}=require('clean-webpack-plugin')
//webpack中的所有配置信息都应该写在这里
module.exports={
     //指定入口文件
     entry:'./src/index.ts',
     //指定打包文件所在目录
     output:{
        //指定打包文件的目录
        path:path.resolve(__dirname,'dist'),
        //指定打包后的文件名
        filename:"bundle.js"
     },
     //指定webpack打包时要使用的模块
     module:{
        //指定要加载的规则
        rules:[
            {
                //test 指定规则生效的文件
                test:/\.ts$/,
                use:[
                  // 配置babel
                  // {
                  //    loader:'babel-loader',
                  //    options:{
                  //       presets:[
                  //          [
                  //             '@babel/preset-env',
                  //             {
                  //                //要兼容的目标浏览器
                  //                target:{
                  //                   'chorme':'80'
                  //                },
                  //                //指定corejs的版本
                  //                "corejs":"3",
                  //                //usage按需加载
                  //                "useBuiltIns":"usage"
                  //             }
                  //          ]
                  //       ]
                  //    }
                  // },
                  'ts-loader'
               ],
                //要排除的文件
                exclude:/node-modules/,
            },
            //配置less文件处理
            {
               test:/\.less$/,
               use:[
                  "style-loader",
                   "css-loader",
                  "less-loader"
               ]
            }
        ]
     },
     mode:'development',
     //配置插件
     plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:'./src/index.html'
        })
     ],
     //用来设置引用模块
     resolve:{
        extensions:['.ts','.js']
     }
}