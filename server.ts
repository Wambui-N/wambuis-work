import { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import { CreatePageResponse } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({
  auth: process.env.NOTION_KEY,
});

// Basic email validation
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<{
    message: string;
    data?: CreatePageResponse;
    error?: any;
  }>,
) {
  if (req.method === "POST") {
    const { name, email, message, industry, website } = req.body;

    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ message: "Name and email are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    try {
      const response = await notion.pages.create({
        parent: {
          database_id: process.env.NOTION_DATABASE_ID as string,
        },
        properties: {
          Name: {
            title: [{ text: { content: name } }],
          },
          Email: {
            email: email, // Use email type if your Notion database supports it
          },
          Message: {
            rich_text: [{ text: { content: message || "" } }],
          },
          Industry: {
            rich_text: [{ text: { content: industry || "" } }],
          },
          Website: {
            url: website || undefined, // Use URL type if supported
          },
        },
      });

      res.status(200).json({ message: "Data added to Notion", data: response });
    } catch (error: any) {
      console.error("Error adding data to Notion:", error);
      res.status(500).json({
        message: "Failed to add data to Notion",
        error: error.message,
      });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
