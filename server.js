const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static('.'));

// 模拟 AI 响应函数
function simulateAIResponse(prompt) {
  const responses = [
    `基于您的提示词"${prompt}"，我理解您想要探索这个主题。这是一个很有趣的想法，让我为您展开分析...`,
    `您的提示词"${prompt}"触发了我的思考。从多个角度来看，这个问题可以这样理解...`,
    `针对"${prompt}"这个提示，我建议从以下几个方面来考虑...`,
    `很好的提示词！"${prompt}"让我想到了相关的概念和应用场景...`
  ];
  
  const randomResponse = responses[Math.floor(Math.random() * responses.length)];
  return randomResponse + "\n\n这是模拟的 AI 响应结果。在实际应用中，这里会连接到真实的 AI 模型。";
}

// POST 接口处理 Prompt
app.post('/api/prompt', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt || prompt.trim() === '') {
      return res.status(400).json({ 
        error: '请提供有效的提示词' 
      });
    }

    // 模拟处理时间
    await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 2000));

    // 如果有 OpenAI API Key，可以使用真实的 AI 响应
    if (process.env.OPENAI_API_KEY) {
      try {
        const OpenAI = require('openai');
        const openai = new OpenAI({
          apiKey: process.env.OPENAI_API_KEY,
        });

        const completion = await openai.chat.completions.create({
          messages: [{ role: "user", content: prompt }],
          model: "gpt-3.5-turbo",
          max_tokens: 500,
        });

        return res.json({
          success: true,
          result: completion.choices[0].message.content,
          model: 'OpenAI GPT-3.5-turbo'
        });
      } catch (openaiError) {
        console.error('OpenAI API Error:', openaiError);
        // 如果 OpenAI 调用失败，回退到模拟响应
      }
    }

    // 使用模拟响应
    const result = simulateAIResponse(prompt);
    
    res.json({
      success: true,
      result: result,
      model: 'Simulated AI'
    });

  } catch (error) {
    console.error('Error processing prompt:', error);
    res.status(500).json({ 
      error: '处理提示词时发生错误',
      details: error.message 
    });
  }
});

// 健康检查接口
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    service: 'AI Prompt Laboratory'
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`🚀 AI Prompt Laboratory 服务器运行在 http://localhost:${PORT}`);
  console.log(`📝 API 端点: POST /api/prompt`);
  console.log(`💡 提示: 创建 .env 文件并添加 OPENAI_API_KEY 以使用真实的 AI 模型`);
});
