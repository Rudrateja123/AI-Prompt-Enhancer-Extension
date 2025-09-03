import { API_KEY } from './config.js';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;

// This function performs the API call
async function getEnhancedPrompt(selectedText) {
  const metaPrompt = `You are an expert prompt engineer. Take the following user's text and transform it into a clear, detailed, and structured prompt suitable for another AI. Preserve the user's original intent. Add context, specify the desired format, and remove ambiguity. Return ONLY the refined prompt and nothing else.
  
  USER'S TEXT: "${selectedText}"
  
  REFINED PROMPT:`;
  
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "contents": [{ "parts": [{ "text": metaPrompt }] }] })
    });
    if (!response.ok) throw new Error(`API Error: ${response.status}`);
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Enhancer Error:", error);
    return null;
  }
}

// 1. Listens for the shortcut command from the user
chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "enhance-prompt") {
    // 2. Tries to send a message to the content script on the active page
    chrome.tabs.sendMessage(tab.id, { action: "startEnhanceProcess" }, (response) => {
      // This is a fallback for dynamic sites like Gemini
      if (chrome.runtime.lastError) {
        console.log("Content script not ready, reloading tab and retrying.");
        // If the message fails, reload the tab and try sending the message again
        chrome.tabs.reload(tab.id, {}, () => {
          setTimeout(() => { // Wait a moment for the reload to complete
             chrome.tabs.sendMessage(tab.id, { action: "startEnhanceProcess" });
          }, 500);
        });
      }
    });
  }
});

// 5. Listens for a message from the content script containing the text to enhance
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "enhanceText") {
    // 6. Calls the API and sends the final result back to the content script
    getEnhancedPrompt(request.text).then(enhancedText => {
      sendResponse({ result: enhancedText });
    });
    return true; // Required for asynchronous responses
  }
});