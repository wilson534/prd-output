# AI Prompt Laboratory

一个简单而强大的 AI 提示词实验室，包含前端界面和后端 API。

## 功能特性

- 🎯 简洁直观的用户界面
- 🚀 实时 AI 提示词处理
- 💡 模拟 AI 响应系统
- 📱 响应式设计，支持移动端
- ⚡ 快速部署和使用

## 技术栈

### 后端
- Node.js + Express
- CORS 支持
- RESTful API 设计

### 前端
- 原生 HTML/CSS/JavaScript
- 现代化 UI 设计
- 异步请求处理

## 快速开始

### 1. 安装依赖
```bash
npm install
```

### 2. 启动服务器
```bash
npm start
```

### 3. 访问应用
打开浏览器访问: http://localhost:3000

## API 接口

### POST /api/prompt
处理 AI 提示词请求

**请求体:**
```json
{
  "prompt": "你的提示词内容"
}
```

**响应:**
```json
{
  "success": true,
  "prompt": "你的提示词内容",
  "result": "AI 处理后的结果",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

### GET /api/health
健康检查接口

**响应:**
```json
{
  "status": "OK",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## 使用说明

1. 在输入框中输入你的 AI 提示词
2. 点击"Process Prompt"按钮或使用 Ctrl+Enter 快捷键
3. 等待 AI 处理结果显示在输出框中

## 扩展功能

当前版本使用模拟 AI 响应，你可以轻松扩展为：

- 接入 OpenAI GPT API
- 接入其他 AI 服务提供商
- 添加提示词历史记录
- 实现用户认证系统
- 添加提示词模板库

## 项目结构

```
project-1769767389334/
├── package.json          # 项目配置和依赖
├── server.js             # 后端服务器
├── public/
│   └── index.html        # 前端页面
└── README.md             # 项目说明
```

## 开发说明

这是一个基础的 AI 应用模型，为所有 AI 应用提供了标准的前后端交互模式。你可以基于此项目快速开发各种 AI 应用。

## 许可证

MIT License
