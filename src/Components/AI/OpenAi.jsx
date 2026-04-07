import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  max-width: 900px;
  margin: auto;
  padding: 50px;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: white;
  border-radius: 20px;
`;

const Title = styled.h2`
  text-align: center;
  background: linear-gradient(to right, #06b6d4, #6366f1);
  -webkit-background-clip: text;
  color: transparent;
`;

const Input = styled.textarea`
  width: 100%;
  padding: 15px;
  border-radius: 12px;
  border: none;
  margin-top: 15px;
  font-size: 16px;
`;

const Button = styled.button`
  margin-top: 15px;
  padding: 12px 20px;
  border-radius: 12px;
  border: none;
  background: linear-gradient(135deg, #6366f1, #06b6d4);
  color: white;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    transform: scale(1.05);
  }
`;

const ResponseBox = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #020617;
  border-radius: 12px;
  min-height: 100px;
`;

const OpenAi = () => {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const callAI = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://api.openai.com/v1/responses", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4.1-mini",
          input: prompt,
        }),
      });

      const data = await response.json();
      setResult(data.output[0].content[0].text);
    } catch (err) {
      setResult("Error fetching AI response");
    }

    setLoading(false);
  };

  return (
    <Container>
      <br/>
      <Title>🚀 AI Assistant</Title>

      <Input
        rows="4"
        placeholder="Ask anything..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <Button onClick={callAI}>
        {loading ? "Generating..." : "Generate"}
      </Button>

      <ResponseBox>
        {result || "Your AI response will appear here..."}
      </ResponseBox>
    </Container>
  );
};

export default OpenAi;