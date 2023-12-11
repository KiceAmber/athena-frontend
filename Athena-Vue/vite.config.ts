import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path";
import AutoImport from "unplugin-auto-import/vite" // 自动导入
import Components  from "unplugin-vue-components/vite" // 组建注册
import { ElementPlusResolver } from "unplugin-vue-components/resolvers"
import Icons from "unplugin-icons/vite" // icon 相关
import  IconsResolver  from 'unplugin-icons/resolver' // icon 相关

// https://vitejs.dev/config/
export default defineConfig({
   resolve: {  
      alias: {  
        "@": path.resolve(__dirname, 'src'), // 路径别名  
      },  
      extensions: ['.js', '.json', '.ts'] // 使用路径别名时想要省略的后缀名，可以自己 增减  
   },  

  plugins: [
    vue(),
    AutoImport({
        resolvers: [
            // 自动导入 Element Plus 相关函数，如 ElMessage
            ElementPlusResolver(),
            // 自动导入图标组件
            IconsResolver({
                prefix: "Icon",
            })
        ]
    }),
    Components({
        resolvers: [
            // 自动导入 Element Plus 组件
            ElementPlusResolver(),
            // 自动注册图标组件
            IconsResolver({
                enabledCollections: [ "ep" ], // 重点
            })
        ]
    }),
    Icons({
        autoInstall: true,
    })
  ],
})
