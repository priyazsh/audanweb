import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook not configured" }, { status: 500 });
  }

  let body: { name: string; email: string; twitter?: string; product?: string; message: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, twitter, product, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const formattedTwitter = twitter
    ? twitter.startsWith("@") || twitter.startsWith("http")
      ? twitter
      : `@${twitter}`
    : "N/A";

  const embed = {
    title: "🚀 New Campaign Inquiry",
    color: 0x1a61fe, // AudanWeb blue
    fields: [
      { name: "👤 Name", value: name, inline: true },
      { name: "📧 Email", value: email, inline: true },
      { name: "🐦 Twitter / X", value: formattedTwitter, inline: true },
      { name: "🔗 Product / URL", value: product || "N/A", inline: false },
      { name: "💬 Message", value: message, inline: false },
    ],
    footer: { text: "AudanWeb · audanweb.xyz" },
    timestamp: new Date().toISOString(),
  };

  const discordPayload = {
    username: "AudanWeb Leads",
    avatar_url: "https://audanweb.xyz/favicon/apple-touch-icon.png",
    embeds: [embed],
  };

  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordPayload),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Discord webhook error:", res.status, text);
      return NextResponse.json({ error: "Failed to send to Discord" }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Webhook fetch error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
