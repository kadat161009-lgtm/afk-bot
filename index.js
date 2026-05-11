const mineflayer = require('mineflayer')

function createBot() {

  const bot = mineflayer.createBot({
    host: 'Sinhtonminecraft100.aternos.me',
    port: 25565,
    username: 'AFK_Bot',
    auth: 'offline'
  })

  bot.on('login', () => {
    console.log('Bot joined')
  })

  setInterval(() => {

    const actions = ['jump', 'forward', 'back']

    const action =
      actions[Math.floor(Math.random() * actions.length)]

    bot.setControlState(action, true)

    setTimeout(() => {
      bot.setControlState(action, false)
    }, 2000)

  }, 30000)

  bot.on('end', () => {
    setTimeout(() => {
      createBot()
    }, 10000)
  })
}

createBot()
