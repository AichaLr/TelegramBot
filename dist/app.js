"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * const { Telegraf } = require("telegraf");
const bot = new Telegraf("5797875324:AAEKAMVIVpEs_sIgUJAf7h6Fyp2ssKV3P9o");
const Markup = require("telegraf");
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => {
  ctx.reply("Send /start to receive a greeting");
  ctx.reply("Send /keyboard to receive a message with a keyboard");
  ctx.reply("Send /quit to stop the bot");
});

bot.command("quit", (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id);
  // Context shortcut
  ctx.leaveChat();
});
bot.command("keyboard", (ctx) => {
  ctx.reply(
    "Keyboard",
    Markup.inlineKeyboard([
      Markup.button.callback("First option", "first"),
      Markup.button.callback("Second option", "second"),
    ])
  );
});
bot.on("text", (ctx) => {
  ctx.reply(
    "You choose the " +
      (ctx.message.text === "first" ? "First" : "Second") +
      " Option!"
  );
});
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));

 */
const telegraf_1 = require("telegraf");
const Markup = require("telegraf");
const bot = new telegraf_1.Telegraf("5797875324:AAEKAMVIVpEs_sIgUJAf7h6Fyp2ssKV3P9o"
//process.env.BOT_TOKEN as string
);
bot.start((ctx) => {
    ctx.reply("Hello " + ctx.from.first_name + "!");
});
bot.help((ctx) => {
    ctx.reply("Send /start to receive a greeting");
    ctx.reply("Send /keyboard to receive a message with a keyboard");
    ctx.reply("Send /quit to stop the bot");
});
bot.command("quit", (ctx) => {
    // Explicit usage
    ctx.telegram.leaveChat(ctx.message.chat.id);
    // Context shortcut
    ctx.leaveChat();
});
bot.command("keyboard", (ctx) => {
    ctx.reply("Keyboard", Markup.inlineKeyboard([
        Markup.button.callback("First option", "first"),
        Markup.button.callback("Second option", "second"),
    ]));
});
bot.on("text", (ctx) => {
    ctx.reply("You choose the " +
        (ctx.message.text === "first" ? "First" : "Second") +
        " Option!");
});
bot.launch();
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
//# sourceMappingURL=app.js.map