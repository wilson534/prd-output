# AI 提示词实验室

一个简单而强大的 AI 提示词测试平台，支持模拟响应和真实 AI 模型调用。

## 功能特性

- 🎯 **简洁界面**: 清晰的输入输出界面，专注于提示词实验
- 🤖 **智能响应**: 支持模拟 AI 响应和真实 OpenAI API 调用
- ⚡ **实时处理**: 快速响应，支持 Ctrl+Enter 快捷提交
- 📱 **响应式设计**: 完美适配桌面和移动设备
- 🔧 **易于部署**: 简单的 Node.js 后端，无需复杂配置

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 配置环境变量 (可选)

复制环境变量模板：
```bash
cp .env.example .env
```

如果要使用真实的 OpenAI API，请在 `.env` 文件中设置：
```
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. 启动服务

开发模式：
```bash
npm run dev
```

生产模式：
```bash
npm start
```

### 4. 访问应用

打开浏览器访问：http://localhost:3000

## API 接口

### POST /api/prompt

提交提示词并获取 AI 响应。

**请求体：**
```json
{
  "prompt": "你的提示词内容"
}
```

**响应：**
```json
{
  "success": true,
  "result": "AI 的响应内容",
  "model": "使用的模型名称"
}
```

### GET /api/health

健康检查接口。

## 使用说明

1. 在输入框中输入您的提示词
2. 点击"发送提示词"按钮或使用 Ctrl+Enter 快捷键
3. 等待 AI 处理并查看响应结果
4. 尝试不同类型的提示词来探索 AI 的能力

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (原生)
- **后端**: Node.js, Express
- **AI 集成**: OpenAI API (可选)

## 部署建议

### 本地开发
直接使用 `npm run dev` 启动开发服务器。

### 生产部署
1. 设置环境变量
2. 使用 PM2 或类似工具管理进程
3. 配置反向代理 (Nginx)
4. 启用 HTTPS

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
