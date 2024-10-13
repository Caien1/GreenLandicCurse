# Discord Bot Project

This Discord bot project is built using `discord.js` and features a variety of commands and event handlers. The bot supports commands for interacting with users, managing voice channels, and fetching data. It also includes a script for deploying commands and handling bot events.

## Features

### Commands

1. **`/deals`**
   - **Description:** Lists games on sale.
   - **Options:**
     - `maxprice` (required): Returns deals with a price less than or equal to this value.
   
   - **Functionality:** Fetches and displays game deals from an external API.



2. **`/hi`**
   - **Description:** An introduction.
   - **Response:** "I am a bot with infinite potential."

3. **`/leave`**
   - **Description:** Disconnects the bot from the voice channel.
   - **Functionality:** Checks if the bot is connected to a voice channel and disconnects if it is.

4. **`/play`**
   - **Description:** For now it just joins the voice music bot to be implemented here
   - **Options:**
     - `url` (required): The YouTube URL of the song.
   - **Functionality:** Joins the user's voice channel. (Note: Currently, the implementation for playing audio is incomplete.)

5. **`/quote`**
   - **Description:** Displays a random quote.
   - **Functionality:** Fetches a random quote from an external API and displays it.

6. **`/server`**
   - **Description:** Provides information about the server.
   - **Functionality:** Displays the server's name and member count.

7. **`/user`**
   - **Description:** Provides information about the user.
   - **Functionality:** Displays the username and join date of the user who ran the command.

### Event Handlers

1. **`InteractionCreate`**
   - **Description:** Handles interactions and executes the appropriate command.
   - **Functionality:** Executes the command corresponding to the interaction or handles errors.

2. **`ClientReady`**
   - **Description:** Logs a message when the bot is ready.
   - **Functionality:** Logs the bot's username and tag when the bot successfully connects to Discord.
3. **`cheeser`**
   - well this is hosted on renderer, figure out why it needs an web server on your own

### Command Deployment

The `deploy-commands.js` script is used to deploy and refresh the bot's slash commands in a specific guild. It reads command files from the `commands` directory, prepares them for deployment, and registers them with Discord's API.

**Setup and Run:**

1. **Ensure Environment Variables are Set:**
   - Create a `.env` file in the root directory with the following content:
     ```
     DISCORD_TOKEN=YOUR_BOT_TOKEN
     ID=YOUR_CLIENT_ID
     SERVER=YOUR_GUILD_ID
     ```

2. **Run the Command Deployment Script:**
   ```bash
   node deploy-commands.js
   node index.js
   ```
   
**Adding your own commands to the bot**
   - Clone the bot to your local machine
     ```bash
     git clone https://github.com/Caien1/GreenLandicCurse.git
     ```
   - Navigate to the `commands` folder there you have a choice to either make a new folder for commands you want to implement 
     
      

   
