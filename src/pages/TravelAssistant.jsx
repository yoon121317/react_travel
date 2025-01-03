import React, { useState } from "react";
import OpenAI from "openai";

function TravelFestivalAssistant() {
  // OpenAI 클라이언트 초기화
  const client = new OpenAI({
    apiKey: process.env.REACT_APP_API_KEY, // 환경 변수로 설정된 OpenAI API 키
    dangerouslyAllowBrowser: true, // 브라우저 환경에서 클라이언트 사용 허용
  });

  const [input, setInput] = useState(""); // 사용자 입력
  const [response, setResponse] = useState(""); // OpenAI 응답
  const [loading, setLoading] = useState(false); // 로딩 상태
  // API 호출 핸들러
  const handleGenerate = async () => {
    if (!input.trim()) {
      alert("질문을 입력하세요.");
      return;
    }

    setLoading(true);
    setResponse("");

    try {
      const chatCompletion = await client.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant specializing in travel and festival information. Provide concise, engaging, and accurate responses.",
          },
          { role: "user", content: input },
        ],
        model: "gpt-4", // GPT-4 모델 사용
      });

      setResponse(chatCompletion.choices[0].message.content);
    } catch (error) {
      console.error("Error fetching response:", error);
      setResponse("An error occurred while fetching the response.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", textAlign: "center" }}>
      <h1>Travel & Festival Assistant</h1>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask about travel destinations, festival details, or itineraries!"
        rows="5"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      ></textarea>
      <button
        onClick={handleGenerate}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#FFF",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
        }}
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Info"}
      </button>
      <div style={{ marginTop: "20px", textAlign: "left" }}>
        {response && (
          <div
            style={{
              backgroundColor: "#F9F9F9",
              padding: "15px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          >
            <h3>Response:</h3>
            <p>{response}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TravelFestivalAssistant;
