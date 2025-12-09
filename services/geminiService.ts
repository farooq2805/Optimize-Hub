import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedStrategy } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateMarketingStrategy = async (
  businessName: string,
  industry: string,
  targetAudience: string,
  marketingSpend: string
): Promise<GeneratedStrategy> => {
  try {
    const prompt = `
      Act as a world-class Digital Marketing Strategist based in Dubai.
      Create a concise, high-impact 3-point digital marketing strategy for a business with the following details:
      
      Business Name: ${businessName}
      Industry: ${industry}
      Target Audience: ${targetAudience}
      Estimated Monthly Marketing Budget: ${marketingSpend}
      Market: Dubai / UAE

      Focus on high-ROI activities suitable for the Dubai market (e.g., Luxury focus, Influencer reach, Local SEO) that align with the provided budget.
      Keep the tone professional, visionary, and persuasive.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: "A catchy title for the strategy proposal" },
            points: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "3 strategic bullet points"
            }
          },
          required: ["title", "points"]
        }
      }
    });

    const jsonText = response.text;
    if (!jsonText) {
      throw new Error("No response from AI");
    }

    return JSON.parse(jsonText) as GeneratedStrategy;

  } catch (error) {
    console.error("Error generating strategy:", error);
    return {
      title: "Strategy Generation Failed",
      points: ["Please try again later.", "Ensure your inputs are valid.", "Contact us for a manual consultation."]
    };
  }
};