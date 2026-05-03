import { GoogleGenAI } from "@google/genai";
import { Product } from "../types";
import { MENU_ITEMS } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function getRecommendations(cartItems: Product[]): Promise<Product[]> {
  if (cartItems.length === 0) {
    return MENU_ITEMS.filter(item => item.isPopular).slice(0, 3);
  }

  const prompt = `
    Based on these items in the cart: ${cartItems.map(i => i.name).join(', ')}.
    Recommend 3 additional items from this menu: ${MENU_ITEMS.map(i => i.name).join(', ')}.
    Focus on items that pair well (e.g., if they have a burger, suggest sides or drinks).
    Return ONLY the names of the 3 items as a comma-separated list.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    const recommendedNames = response.text?.split(',').map(n => n.trim()) || [];
    const recommendedItems = MENU_ITEMS.filter(item => 
      recommendedNames.some(name => item.name.toLowerCase().includes(name.toLowerCase()))
    );

    // Fallback if AI fails or returns non-existent items
    if (recommendedItems.length === 0) {
      return MENU_ITEMS.filter(item => !cartItems.find(c => c.id === item.id)).slice(0, 3);
    }

    return recommendedItems.slice(0, 3);
  } catch (error) {
    console.error("AI Recommendation Error:", error);
    return MENU_ITEMS.filter(item => !cartItems.find(c => c.id === item.id)).slice(0, 3);
  }
}
