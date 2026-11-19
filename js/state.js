// Game State
const gameState = {
  apiKey: "",
  provider: { id: "anthropic", model: "", baseUrl: "" },
  adventureStarted: false,
  player: {
    health: 100,
    maxHealth: 100,
    attack: 10,
    defense: 5,
    gold: 50,
    inventory: ["rusty sword", "wooden shield"],
  },
  conversationHistory: [],
};
