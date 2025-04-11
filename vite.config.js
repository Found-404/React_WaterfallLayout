import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  alias: {
    react: "react", // 确保 Vite 正确解析 react 模块
    "react/jsx-runtime": "react/jsx-runtime", // 添加别名
  },
  build: {
    lib: {
      entry: "src/index.js", // 组件库入口文件
      name: "Waterfall-React", // UMD全局变量名
      fileName: "Waterfall-React", // 输出文件名
    },
    rollupOptions: {
      external: ["react", "react-dom"], // 避免打包React
      output: {
        globals: {
          react: "React", // UMD全局变量映射
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
