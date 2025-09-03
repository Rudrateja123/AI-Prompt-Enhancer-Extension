let indicator = null;

// This function creates and shows the floating box
function showIndicator() {
  if (indicator) return;
  indicator = document.createElement('div');
  indicator.textContent = 'Enhancing...';
  indicator.style.position = 'absolute';
  indicator.style.padding = '5px 10px';
  indicator.style.backgroundColor = 'white';
  indicator.style.color = 'black';
  indicator.style.border = '1px solid #ccc';
  indicator.style.borderRadius = '5px';
  indicator.style.zIndex = '9999';
  indicator.style.fontFamily = 'sans-serif';
  indicator.style.fontSize = '12px';

  const selection = window.getSelection();
  if (selection.rangeCount > 0) {
    const selectionRect = selection.getRangeAt(0).getBoundingClientRect();
    indicator.style.top = `${window.scrollY + selectionRect.bottom + 5}px`;
    indicator.style.left = `${window.scrollX + selectionRect.left}px`;
  }
  
  document.body.appendChild(indicator);
}

// This function removes the floating box
function hideIndicator() {
  if (indicator && document.body.contains(indicator)) {
    document.body.removeChild(indicator);
  }
  indicator = null;
}

// 3. Listens for the command from the background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "startEnhanceProcess") {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      // 4. Shows the indicator and sends the selected text to the background for processing
      showIndicator();
      chrome.runtime.sendMessage({ action: "enhanceText", text: selectedText }, (response) => {
        // 7. Receives the final result from the background
        hideIndicator();
        if (response.result) {
          document.execCommand('insertText', false, response.result);
        } else {
          alert("Failed to enhance prompt. Check the extension's service worker console for errors.");
        }
      });
    }
    // Acknowledge the message was received
    sendResponse({ status: "started" });
  }
  return true; // Keep the channel open for the async response.
});