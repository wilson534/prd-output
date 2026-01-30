const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 模拟 AI 响应函数
function simulateAIResponse(prompt) {
  // 简单的模拟响应逻辑
  const responses = {
    'hello': 'Hello! How can I help you today?',
    'what is ai': 'AI (Artificial Intelligence) is the simulation of human intelligence in machines.',
    'write a poem': 'Roses are red,\nViolets are blue,\nAI is amazing,\nAnd so are you!',
    'default': `Based on your prompt: "${prompt}", here's a thoughtful response. This is a simulated AI response that demonstrates how the system processes and responds to user inputs.`
  };
  
  const lowerPrompt = prompt.toLowerCase();
  for (const key in responses) {
    if (lowerPrompt.includes(key)) {
      return responses[key];
    }
  }
  
  return responses.default;
}

// POST 接口处理 Prompt
app.post('/api/prompt', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }
    
    // 模拟处理时间
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 模拟 AI 响应
    const result = simulateAIResponse(prompt);
    
    res.json({
      success: true,
      prompt: prompt,
      result: result,
      timestamp: new Date().toISOString()
    });
    
  } catch (error) {
    console.error('Error processing prompt:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// 健康检查接口
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`AI Prompt Laboratory server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} to view the application`);
});
