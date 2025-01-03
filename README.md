# Wallstreet DAO Telegram Bot

Welcome to the **Wallstreet DAO Telegram Bot**, your Web3-savvy dolphin buddy, **Critters**! 🐬 This bot is designed to guide users through the Wallstreet DAO community, offering them easy access to tasks, resources, events, and more.

The bot allows users to interact with various functionalities such as onboarding tasks, tours of the website, member contacts, and event updates. All wrapped up in a splash of Web3 fun and dolphin energy! 🌊✨

## Features

- **/start**: Initiates the bot and greets the user with an interactive welcome message and dolphin sticker.
- **/help**: Provides a list of available commands and how users can navigate the bot.
- **/todo**: Displays the onboarding tasks and instructions for completing them.
- **/tour**: Offers a step-by-step tour of the Wallstreet DAO website with interactive messaging and GIFs.
- **/members**: Provides contact information for key members of Wallstreet DAO.
- **/events**: Displays upcoming events for Wallstreet DAO.
- **/resources**: Sends learning resources for users to dive deeper into Web3.
- **/feedback**: Allows users to send feedback directly to the team.
- **/status**: Tracks the progress of user tasks and marks them as complete.

## Prerequisites

- **Node.js**: Ensure that you have Node.js installed on your system. You can download it from [here](https://nodejs.org/).
- **Telegram Bot Token**: You need a Telegram Bot Token to interact with the Telegram API. You can create a bot on Telegram by chatting with the [BotFather](https://core.telegram.org/bots#botfather).
- **dotenv**: The bot uses environment variables to keep sensitive information like the bot token safe.

## Installation

1. **Clone the repository**:

```bash
git clone https://github.com/your-username/wallstreet-dao-telegram-bot.git
cd wallstreet-dao-telegram-bot
```

2. **Install dependencies**:

```bash
npm install
```

3. **Set up environment variables**:

Create a `.env` file in the root of your project and add the following:

```env
BOT_TOKEN=your-telegram-bot-token-here
```

Replace `your-telegram-bot-token-here` with your actual Telegram Bot Token.

4. **Run the bot**:

```bash
npm start
```

The bot will now be up and running. It will respond to users and guide them through various interactions.

## Folder Structure

```
/wallstreet-dao-telegram-bot
│
├── assets/                  # Contains GIFs and other media used in the bot
│   ├── home.gif
│   ├── blog.gif
│   ├── proj.gif
│   ├── event.gif
│   ├── new.gif
│   ├── game.gif
│   └── mint.gif
│
├── node_modules/            # Node.js modules (installed by npm)
│
├── .env                     # Environment variables (e.g., Telegram bot token)
├── package.json             # NPM package descriptor
└── bot.js                   # Main bot logic and commands
```

## Commands

### `/start`
- Starts the bot and greets the user.
  
### `/help`
- Displays a list of available commands and their descriptions.

### `/todo`
- Displays the list of onboarding tasks the user must complete.

### `/tour`
- Initiates a website tour with step-by-step messages and GIFs.

### `/members`
- Provides contact information for key members of Wallstreet DAO.

### `/events`
- Displays upcoming events for Wallstreet DAO.

### `/resources`
- Shares Web3-related resources for users to explore.

### `/feedback`
- Allows users to send feedback to the Wallstreet DAO team.

### `/status`
- Tracks task completion status and marks them as complete.

### `/next`
- Navigates the user to the next step in the tour.

### `/exit`
- Allows the user to exit the tour at any time.
