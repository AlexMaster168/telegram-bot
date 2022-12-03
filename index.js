const TelegramBot = require("node-telegram-bot-api")

const token = "Your Telegramm token"
const bot = new TelegramBot(token, {polling: true})
const webAppUrl = "https://telegram-client-bot.netlify.app/"

bot.on('message', async msg => {
    const chatId = msg.chat.id
    const text = msg.text

    if (text === "/start") {
       await bot.sendMessage(chatId,'Ниже появится кнопка заполни форму', {
           reply_markup: {
               keyboard: [
                   [{text: "Заполнить форму", web_app: {url: webAppUrl}}]
               ]
           }
       })

        await bot.sendMessage(chatId,'Заходи в наш интернет магазин', {
            reply_markup: {
                keyboard: [
                    [{text: "Сделать заказ", web_app: {url: webAppUrl}}]
                ]
            }
        })
    }
})
