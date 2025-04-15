import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  alias: {
    react: "react", // 确保 Vite 正确解析 react 模块
    "react/jsx-runtime": "react/jsx-runtime", // 添加别名
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify(
      process.env.NODE_ENV || "production"
    ),
  },
  build: {
    lib: {
      entry: "src/components/waterfall/index.js", // 组件入口文件
      name: "WaterfallReact", // UMD全局变量名
      fileName: "WaterfallReact", // 输出文件名
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
