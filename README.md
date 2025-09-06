# My Personal AI Prompt Enhancer 🚀

A simple, powerful Chrome extension designed to streamline AI workflows by converting natural language into high-quality, structured prompts with a single keyboard shortcut.

**[Link to Live Demo]** <--- *(coming soon)*


---

## ℹ️ About This Project

This is a personal browser extension built to solve a common problem for heavy AI users: the time-consuming process of refining simple ideas into detailed prompts that AI models can understand effectively. Instead of switching between different tools, this extension allows you to enhance your text directly within any text box on any website.

**Key Features:**
* ⚡ **Instant Prompt Enhancement:** Select your text and use a keyboard shortcut to instantly transform it.
* 🌐 **Seamless Integration:** Works on any website with a text input field (ChatGPT, Google Gemini, Perplexity, etc.).
* 💬 **User-Friendly Feedback:** A floating "Enhancing..." indicator provides real-time feedback during the API call.
* 🧠 **Powered by Gemini:** Uses the Google Gemini API for fast and high-quality text generation.

### ⚠️ Important Note

This is a **personal, non-commercial project**. It is not an official product and does not have any associated costs or charges. It is provided as-is for anyone interested in using or modifying it.

## 🛠️ Installation

This extension is not on the Chrome Web Store. To install it for personal use, you need to load it manually in Developer Mode.

1.  **Download the Code:** Click the green `<> Code` button on this GitHub page and select **"Download ZIP"**.
2.  **Unzip the File:** Extract the contents of the downloaded ZIP file into a permanent folder on your computer (e.g., `C:\Users\YourUser\Documents\AI-Prompt-Tool`).
3.  **Open Chrome Extensions:** Open Google Chrome, navigate to `chrome://extensions`.
4.  **Enable Developer Mode:** In the top-right corner, turn on the **"Developer mode"** toggle.
5.  **Load the Extension:** Click the **"Load unpacked"** button that appears on the top-left.
6.  **Select the Folder:** In the file selection window, navigate to and select the folder where you unzipped the files.

The extension is now installed! The final step is to add your secret API key.

## ⚙️ How to Use
**1. Get Your Gemini API Key:**

1.  Go to **[Google AI Studio](https://aistudio.google.com/app/apikey)**.
2.  Click **"Create API key in new project"**.
3.  Copy the generated API key.
4.  Paste this key into the `GEMINI_API_KEY` field in your `config.js` file.


**2. Set Your API Key (Important Security Step):**

This project uses a `config.js` file to hold your secret API key. This file is listed in `.gitignore`, so it is not included in this repository and your key will remain private. You must create this file yourself.

* In the project folder, create a new file and name it **`config.js`**.
* Open this new `config.js` file and add the following single line, replacing the placeholder with your own Google Gemini API key:
    ```javascript
    export const API_KEY = 'YOUR_GEMINI_API_KEY_HERE';
    ```
* Save the `config.js` file.
* Go back to `chrome://extensions` and click the **reload icon** on the extension card for the changes to take effect.

**3. Using the Shortcut:**

* Go to any website with a text box.
* Type your simple prompt (e.g., "explain blockchain").
* Select the text with your mouse.
* Press the shortcut **`Alt+C`**.
* Wait for the "Enhancing..." indicator to disappear, and your text will be replaced with a high-quality prompt.

## 🔧 Customization

You can easily modify the keyboard shortcut to your preference.

1.  Navigate to `chrome://extensions/shortcuts`.
2.  Find the "My Personal Prompt Enhancer" in the list.
3.  Click the pencil icon next to the current shortcut and type your new desired key combination.
## 📄 License

This project is licensed under the MIT License.
