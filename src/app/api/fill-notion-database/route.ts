import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_KEY, // Notion Integration Token
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, industry, website } = body;
    if (!process.env.NOTION_DATABASE_ID) {
      throw new Error("NOTION_DATABASE_ID is not defined");
    }

    const response = await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID },
      properties: {
        Name: {
          title: [
            {
              text: { content: name },
            },
          ],
        },
        Email: {
          email: email, // Use email type
        },
        Message: {
          rich_text: [
            {
              text: { content: message },
            },
          ],
        },
        Industry: {
          rich_text: [
            {
              text: { content: industry },
            },
          ],
        },
        Website: {
          url: website, // Use url type
        },
      },
    });

    return NextResponse.json({
      message: "Data added to Notion successfully",
      data: response,
    });
  } catch (error) {
    console.error("Error adding data to Notion:", error);
    return NextResponse.json(
      {
        message: "Failed to add data to Notion",
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}
