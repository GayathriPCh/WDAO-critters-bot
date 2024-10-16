const TelegramBot = require('node-telegram-bot-api');
const path = require('path');

// Load environment variables
require('dotenv').config();

// Create a bot instance using the token from the .env file
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });


// Store user tasks completion status
const userTasks = {};
const tourStep = {};

// Command to start the bot
bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🐬 Splash! Hey, I’m Critters, your Web3-savvy dolphin buddy here at Wallstreet DAO! 🌊 Ready to dive into the decentralized deep? Type /help, and I’ll swim you through everything on-chain step by step');
    const stickerId = 'CgACAgQAAxkBAAIBdGcPoz9uaSpe-jjSdIW55E9YYw2vAALABQACEOysUUWB1VAUa7mmNgQ'; // Replace with your actual sticker file_id
    bot.sendSticker(chatId, stickerId);
});

// Command to show help
bot.onText(/\/help/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `
        🐬 Squeak squeak! Welcome to the Wallstreet DAO, my friend! 🌊 Here’s your splashy command list to ride the waves:

/todo: Dive into your tasks and see what’s swimming around! 💧
/tour: Let me give you a fin-tastic tour of our site—let’s splash through it together! 🌐
/members-contact: Wanna catch up with the pod? I got the deets on our crew! 🐋
/events: Check out what’s poppin’ in the sea of DAO events! 🏆
/resources: Grab some rad learning materials to boost your brainwaves! 📚
/feedback: Got thoughts? Splash ‘em my way—I’m all ears! 🗣️
/status: Let me know when you’ve made waves with your tasks! 🏁
Let’s surf the Web3 currents together! Click-click, splash-splash! 🌊🐬
    `);
    const stickerId = 'CgACAgQAAxkBAAIBpGcPrwJQeQhrBmNd4UzRyfvvUHuVAAJLBQACEO_1UuGl7lFJN6WtNgQ'; // Replace with your actual sticker file_id
    bot.sendSticker(chatId, stickerId);
});

// Command for onboarding tasks
bot.onText(/\/todo/, (msg) => {
    const chatId = msg.chat.id;
    const tasks = `
       🐬 Hey there, my Web3 buddy! Ready to dive into the awesome world of Wallstreet DAO? Here’s your splashin’ list of onboarding tasks to get you swimming in no time:

1️⃣ Claim your NFT on the Sepolia Testnet! (Just hit me with: /status nft-completed)
2️⃣ Follow our socials to catch all the latest vibes! (Send me: /status socials-completed)
3️⃣ Join our community events and make some waves! (Just say: /status events-completed)

Don’t forget to update me with the right keyword after you tackle each task! Let’s get you connected to the Web3 ocean!
    `;
    bot.sendMessage(chatId, tasks);
    const stickerId = 'CgACAgQAAxkBAAIBe2cPpBApu7qOW-b6CBmZO9WgpPT9AAI7AwACw0QMU7Z2VzE_oQPZNgQ'; // Replace with your actual sticker file_id
    bot.sendSticker(chatId, stickerId);
});

// Command to provide website tour
bot.onText(/\/tour/, (msg) => {
    const chatId = msg.chat.id;
    tourStep[chatId] = 1; // Start at the first step
    sendTourMessage(chatId);
});

function sendTourMessage(chatId) {
    const step = tourStep[chatId];
    switch (step) {
        case 1:
            bot.sendMessage(chatId, ' 🌊 Welcome to the Wallstreet DAO website tour! Type next to dive deeper into the web3 waters or exit if you want to splash back to the surface! 💎🦄');
            const stickerId1 = 'CgACAgQAAxkBAAIBhmcPqTzgPIzkbDvSvTD-8PzTf6IAAxgDAAKPXhVTwgnmdosuJ5c2BA'; // Replace with your actual sticker file_id
            bot.sendSticker(chatId, stickerId1);
            break;
        case 2:
            bot.sendMessage(chatId, '🐬 Hey there, web3 explorer! 🌊 Our homepage is a vibrant splash of neon colors, built with the cool Wagmi framework to make your experience smooth and seamless! 💻✨\n Right at the top, you’ll find our slick Connect Wallet feature, letting you dive into the crypto world effortlessly. 🎒💰\n The homepage is your treasure map, showcasing all the exciting sections of our site, including our latest projects, community events, and resources! Plus, we’ve got an intro video waiting for you—perfect for getting to know what Wallstreet DAO is all about! 🎥🌈\nCheck it out here: [Link to homepage].\nSo, are you ready to explore this neon wonderland? Just type next to keep the adventure going!');
            // Send homepage GIF
            const homepageGifPath = path.join(__dirname, 'assets', 'home.gif'); // Your local GIF path
            bot.sendAnimation(chatId, homepageGifPath)
                .catch(error => console.error('Error sending homepage GIF:', error));
            break;
            case 3:
                bot.sendMessage(chatId, '🐬 Get surfing on our blogs! 🌊 Get started here , even if you have zero idea on Web3, well that is why blogs exist-to get you started!');
                // Send homepage GIF
                const blogpageGifPath = path.join(__dirname, 'assets', 'blog.gif'); // Your local GIF path
                bot.sendAnimation(chatId, blogpageGifPath)
                    .catch(error => console.error('Error sending homepage GIF:', error));
                break;
        case 4:
            bot.sendMessage(chatId, '🐬 Alright, my fellow builders! 🌊 Check out our Projects Showcase page! This is where the magic happens! 🚀✨\n If you’ve got a project that you’ve built and want to share it with the world, we’ve made it super easy for you! Just fill out the form on the page, and we’ll feature your work right here! Let’s keep the buidl spirit alive for the web3 revolution! 🌟🤖\n Come check it out: [Link to projects page] and show us what youve got!');
            // Send project showcase GIF
            const projectGifPath = path.join(__dirname, 'assets', 'proj.gif'); // Your local GIF path
            bot.sendAnimation(chatId, projectGifPath)
                .catch(error => console.error('Error sending project showcase GIF:', error));
            break;
        case 5:
            bot.sendMessage(chatId, '🐬 Yo, event enthusiasts! 🌊 Dive into our Events Calendar and see whats happening in our community! 🎉✨ From meetups to webinars, we’ve got a lineup packed with opportunities for you to learn, connect, and grow!\nWhether youre looking to catch up on the latest in web3 or just want to vibe with fellow builders, theres something for everyone! Dont miss out on the fun—check it out here: [Link to events calendar]! Let’s make waves together! 🌊🚀 ');
           // Send events GIF
           const eventsGifPath = path.join(__dirname, 'assets', 'event.gif'); // Your local GIF path
           bot.sendAnimation(chatId, eventsGifPath)
               .catch(error => console.error('Error sending events GIF:', error));
           break;
        case 6:
                bot.sendMessage(chatId, '🐬 Hey, savvy sailors of the web3 seas! 🌊 Swing by our News Page for the latest buzz and updates in the crypto world! 📰✨ Whether its trends, breakthroughs, or community highlights, weve got the scoop to keep you in the loop!\n Stay informed, stay ahead, and let’s ride the waves of innovation together! 🌊📈 Check it out here: [Link to news page]! Dive into the deets!');
                // Send news GIF
            const newsGifPath = path.join(__dirname, 'assets', 'new.gif'); // Your local GIF path
            bot.sendAnimation(chatId, newsGifPath)
                .catch(error => console.error('Error sending news GIF:', error));
            break;
        case 7:
            bot.sendMessage(chatId, '🐬 Yo, fellow builders! 🎮 Feeling a bit swamped by all the BUIDLing? Take a breather and check out our Games Page! 🎉\nWeve got a lineup of fun games to help you unwind and recharge those creative batteries! 🌟💡 So dive in, play a bit, and come back ready to conquer the web3 waves!\nGame on here: [Link to games page]! 🐬🎈');
            // Send games GIF
            const gamesGifPath = path.join(__dirname, 'assets', 'game.gif'); // Your local GIF path
            bot.sendAnimation(chatId, gamesGifPath)
                .catch(error => console.error('Error sending games GIF:', error));
            break;
        case 8:
                bot.sendMessage(chatId, '🐬 And finally the much awaited NFT minting page!🎉\n Mint your first club membership NFT here: [Link to games page]! 🐬🎈');
                // Send games GIF
                const nftGifPath = path.join(__dirname, 'assets', 'mint.gif'); // Your local GIF path
                bot.sendAnimation(chatId, nftGifPath)
                    .catch(error => console.error('Error sending games GIF:', error));
                break;
        case 9:
            bot.sendMessage(chatId, '🐬 You made it through the tour! 🎉 Hope you’re feeling pumped about all the cool stuff we’ve got! If you need anything else or wanna explore more, just hit me up with /help! Let’s ride the web3 wave together! 🌊✨');
            const stickerId2 = 'CgACAgQAAxkBAAIBimcPqfEhxfQIghs1_e2a2MyqvNw-AAJrAwACWV79UdmtoEEHQPk1NgQ'; // Replace with your actual sticker file_id
            bot.sendSticker(chatId, stickerId2);
            delete tourStep[chatId]; // Remove the user's tour step
            return;
        
        default:
            bot.sendMessage(chatId, '🐬 You made it through the tour! 🎉 Hope you’re feeling pumped about all the cool stuff we’ve got! If you need anything else or wanna explore more, just hit me up with /help! Let’s ride the web3 wave together! 🌊✨');
            bot.sendSticker(chatId, stickerId2);
            delete tourStep[chatId]; // Remove the user's tour step
            return;
    }
}

// Handle next command in tour
bot.onText(/next/, (msg) => {
    const chatId = msg.chat.id;
    if (tourStep[chatId]) {
        tourStep[chatId]++;
        sendTourMessage(chatId);
    } else {
        bot.sendMessage(chatId, 'You are not currently on a tour. Start one with /tour.');
    }
});

// Handle exit command in tour
bot.onText(/exit/, (msg) => {
    const chatId = msg.chat.id;
    if (tourStep[chatId]) {
        delete tourStep[chatId]; // Remove the user's tour step
        bot.sendMessage(chatId, '🐬 Oh no! Looks like you’ve exited the tour! 😢 If you want to dive back in or need help with anything else, just type /help, and I’ll be right here to guide you! 🌊✨');
    } else {
        bot.sendMessage(chatId, 'You are not currently on a tour. Start one with /tour.');
    }
});

// Command for member contacts
bot.onText(/\/members/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `
       🐬 So, you wanna chat with the OGs, huh? Here’s the squad you can hit up:
Alice - @alice_handle
Bob - @bob_handle
Charlie - @charlie_handle
Need to chat? Slide into our DMs at contact@wallstreetdao.org! Let’s keep the vibes flowing! krkrkrkrkr! 🌊✨
    `);
    const stickerId3 = 'CgACAgQAAxkBAAIBjGcPqmiMh9fEb7JlGP1yqlU4qsBFAAL6AwACt04cUHNa5GgLir_wNgQ'; // Replace with your actual sticker file_id
            bot.sendSticker(chatId, stickerId3);
});

// Command for upcoming events
bot.onText(/\/events/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `
        🐬 Alright, fam! Here’s what’s coming up in the Wallstreet DAO scene:

Event 1: [Date & Time] 🚀
Event 2: [Date & Time] 🌟
Event 3: [Date & Time] 💡
Wanna level up your game? Type /resources to snag some educational goodies related to these events! Let’s buidl together! krkrkrkrkr!
    `);
    const stickerId4 = 'CgACAgQAAxkBAAIBjmcPqpuw6h3bDbwXqXsitwPJ5XD0AAJwBAACcDFUUEyI93aA-dXpNgQ'; // Replace with your actual sticker file_id
            bot.sendSticker(chatId, stickerId4);
});
// Command for socials
bot.onText(/\/socials/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `
        🌟 Yo, you’re all set to stay in the loop! Follow us on our socials:
📖 Medium: Get the latest insights and articles.
https://medium.com/@wallstreetclub_83221
📸 Instagram: Catch the vibes and behind-the-scenes action.
https://www.instagram.com/wall_street_klh/
💼 LinkedIn: Connect with our pro network.
https://www.linkedin.com/company/wallsteet-dao-club-klh/about/
🐦 Twitter: Stay updated with our quick bites of info.
https://x.com/members36136
🔗 Linktree: Find all our updated groups in one spot.
https://linktr.ee/WallstreetdaoKLH
📱 Telegram Group: Join our chat for real-time updates and community buzz.
https://t.me/+i9-EhRH1zYI5MTg1
💬 Discord: Dive into discussions and connect with fellow builders!
📹 YouTube: Explore our videos for tutorials, insights, and more.
Now that you’re plugged in, let’s keep the energy flowing! 🌊
https://www.youtube.com/@wallstreetdao
    `);
    const stickerId5 = 'CgACAgQAAxkBAAIBkGcPqtsin3M3-5gU7d7TN_SH9_7uAALKBAACii9lUOekrLzHYmJrNgQ'; // Replace with your actual sticker file_id
            bot.sendSticker(chatId, stickerId5);
});

// Command for resources
bot.onText(/\/resources/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, `
       🐬 Diving into some knowledge, are we? Here are some awesome resources to keep you ahead of the game:

Resource 1: [Link] 📚
Resource 2: [Link] 🌊
Resource 3: [Link] 🎓
Got some thoughts or suggestions to share? Type /feedback and let’s make this community even better! krkrkrkrkr!
    `);
    const stickerId6 = 'CgACAgQAAxkBAAIBkmcPrKNGuYVTygEMtHOY4yn5hLbxAAK9BAAC-OKEUovF6eJ2HXJ_NgQ'; // Replace with your actual sticker file_id
            bot.sendSticker(chatId, stickerId6);
});

// Command for feedback
bot.onText(/\/feedback/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, '🐬 Hey, I’m all ears! Got thoughts or suggestions? Hit me up and let’s chat!');
    const stickerId7 = 'CgACAgQAAxkBAAIBmGcPrdf14ZrFN97di9qIbTFKtOi8AAIoAwACx6YsU_usRbuqX82tNgQ'; // Replace with your actual sticker file_id
            bot.sendSticker(chatId, stickerId7);
});

// Handle feedback message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg);

    
    // Check if the message is not a command and if it follows a feedback prompt
    // Also, make sure the user is not currently on a tour
    if (msg.text && !msg.text.startsWith('/') && !tourStep[chatId]) {
        bot.sendMessage(chatId, `🐬 Ayy, I hear ya loud and clear! You said: "${msg.text}". That feedback is gold! Keep it coming, and let’s keep building this epic community together! 🎉 If you wanna dive deeper, why not fill out this form with your thoughts? [Link to feedback form]`);
    }
});


// Handle task completion status updates
bot.onText(/\/status (.+)/, (msg, match) => {
    const chatId = msg.chat.id;

    // Log the received status keyword for debugging
    console.log('Received /status command:', match[1]);

    // Check if match exists
    if (!match[1]) {
        bot.sendMessage(chatId, 'Please provide a keyword after /status. Example: /status nft-completed');
        return;
    }

    const taskCompleted = match[1].trim().toLowerCase();

    if (!userTasks[chatId]) {
        userTasks[chatId] = {
            nftCompleted: false,
            socialsCompleted: false,
            eventsCompleted: false
        };
    }

    switch (taskCompleted) {
        case 'nft-completed':
            userTasks[chatId].nftCompleted = true;
            bot.sendMessage(chatId, '🎉 Awesome job on snagging your NFT! You’re officially part of the crew! 🌊 Now, lets keep the good vibes rolling—type /socials to dive into our social media and give us a follow! Cant wait to see you there!');
            break;
        case 'socials-completed':
            userTasks[chatId].socialsCompleted = true;
            bot.sendMessage(chatId, '🎉 Sweet! You’ve joined the fam on our socials! Now, let’s keep this momentum going—type /events to check out what cool happenings are coming up! 🚀');
            break;
        case 'events-completed':
            userTasks[chatId].eventsCompleted = true;
            bot.sendMessage(chatId, '🎉 Bam! You just rocked those community events! Ready to dive deeper? Hit up /help for all the deets on what else you can do! 🌊');
            const stickerId = 'CgACAgQAAxkBAAIBfWcPpWMoTkoHKk5iytjJIJGxlE8eAAK1BAAC-l1sUr3Xjvsr9qYqNgQ'; // Replace with your actual sticker file_id
    bot.sendSticker(chatId, stickerId);
            break;
        default:
            bot.sendMessage(chatId, 'Invalid status update. Please use one of the following keywords: nft-completed, socials-completed, events-completed.');
            return;
    }

    // Display current task completion status
    const currentStatus = `
        Your current task status:
        - NFT Completed: ${userTasks[chatId].nftCompleted ? '✅' : '❌'}
        - Socials Completed: ${userTasks[chatId].socialsCompleted ? '✅' : '❌'}
        - Events Completed: ${userTasks[chatId].eventsCompleted ? '✅' : '❌'}
    `;
    bot.sendMessage(chatId, currentStatus);
});

// Start the bot
console.log('Bot is running...');