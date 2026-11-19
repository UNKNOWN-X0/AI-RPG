// Personal browser app: the player's key stays in memory and goes only to the chosen provider.
const CLAUDE_MODEL = "claude-sonnet-5-5";

// Claude is the default. The others speak the OpenAI chat-completions format,
// so players with a free-tier key from one of them can play too.
const PROVIDERS = {
  anthropic: { label: "Anthropic Claude (paid key)", kind: "anthropic", model: CLAUDE_MODEL, keyUrl: "https://console.anthropic.com/" },
  gemini: { label: "Google Gemini (free tier)", kind: "openai", baseUrl: "https://generativelanguage.googleapis.com/v1beta/openai", model: "gemini-3.8-flash", keyUrl: "https://aistudio.google.com/apikey" },
  openrouter: { label: "OpenRouter (free models)", kind: "openai", baseUrl: "https://openrouter.ai/api/v1", model: "openrouter/free", keyUrl: "https://openrouter.ai/keys" },
  custom: { label: "Other OpenAI-compatible service", kind: "openai", baseUrl: "", model: "", keyUrl: "" },
};

// The provider in use, with the player's model or endpoint overrides applied.
function activeProvider() {
  const chosen = gameState.provider || {};
  const preset = PROVIDERS[chosen.id] || PROVIDERS.anthropic;
  return {
    ...preset,
    model: (chosen.model || "").trim() || preset.model,
    baseUrl: ((chosen.baseUrl || "").trim() || preset.baseUrl || "").replace(/\/+$/, ""),
  };
}

async function callClaudeAPI(messages) {
  const provider = activeProvider();
  if (provider.kind === "openai") return callOpenAICompatible(messages, provider);
  return callAnthropic(messages);
}

async function callOpenAICompatible(messages, provider) {
  if (!provider.baseUrl || !provider.model)
    throw new Error("Enter the service's address and model name.");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60000);
  try {
    const response = await fetch(`${provider.baseUrl}/chat/completions`, {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${gameState.apiKey}`,
      },
      body: JSON.stringify({ model: provider.model, max_tokens: 1024, messages }),
    });
    let data;
    try {
      data = await response.json();
    } catch (error) {
      if (controller.signal.aborted) throw error;
      throw new Error(`API returned an unreadable response (HTTP ${response.status}).`);
    }
    if (!response.ok) {
      throw new Error(data?.error?.message || `API request failed (HTTP ${response.status}).`);
    }
    const content = data?.choices?.[0]?.message?.content;
    const text = Array.isArray(content)
      ? content.map((part) => (typeof part?.text === "string" ? part.text : "")).join("\n")
      : typeof content === "string" ? content : "";
    if (!text.trim()) throw new Error("The AI returned no text. Please try again.");
    return text;
  } catch (error) {
    if (controller.signal.aborted) throw new Error("The request timed out. Please try again.");
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function callAnthropic(messages) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60000);
  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
        "x-api-key": gameState.apiKey,
        "anthropic-version": "2023-06-01",
        "anthropic-dangerous-direct-browser-access": "true",
      },
      body: JSON.stringify({ model: CLAUDE_MODEL, max_tokens: 1024, messages }),
    });
    let data;
    try {
      data = await response.json();
    } catch (error) {
      if (controller.signal.aborted) throw error;
      throw new Error(
        `API returned an unreadable response (HTTP ${response.status}).`,
      );
    }
    if (!response.ok) {
      throw new Error(
        data?.error?.message || `API request failed (HTTP ${response.status}).`,
      );
    }
    const text = (Array.isArray(data?.content) ? data.content : [])
      .filter(
        (block) => block.type === "text" && typeof block.text === "string",
      )
      .map((block) => block.text)
      .join("\n");
    if (!text.trim())
      throw new Error("The AI returned no text. Please try again.");
    return text;
  } catch (error) {
    if (controller.signal.aborted)
      throw new Error("The request timed out. Please try again.");
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}
