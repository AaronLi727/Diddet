const Commando = require('discord.js-commando');
const client = new Commando.Client({
  commandPrefix: '!',
  owner: '170667250070716419',
  disableEveryone: true,
  unknownCommandResponse: false
});
const {prefix, token,} = require('./auth.json');
const auth = require('./auth.json');
const ytdl = require("ytdl-core");

client.registry.registerGroup("random", "Random");
client.registry.registerGroup("voice", "Voice");
client.registry.registerGroup("league", "League");
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + "/commands"); //storing commands in this directory 

const queue = new Map();


 
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});
   
client.on("message", async message => {
  if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  const serverQueue = queue.get(message.guild.id);
  if (message.content.startsWith(`${prefix}play`)) {
    execute(message, serverQueue);
    return;
   } else if (message.content.startsWith(`${prefix}skip`)) {
    skip(message, serverQueue);
    return;
   } else if (message.content.startsWith(`${prefix}stop`)) {
    stop(message, serverQueue);
    return;
   } else {
   
   }
});

async function execute(message, serverQueue) {
	const args = message.content.split(' ');

	const voiceChannel = message.member.voiceChannel;
	if (!voiceChannel) return message.channel.send('You Must Be In VC To Play Music!');
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send('Require Permission To Connect And Speak!');
	}

	const songInfo = await ytdl.getInfo(args[1]);
	const song = {
		title: songInfo.title,
		url: songInfo.video_url,
	};

	if (!serverQueue) {
		const queueContruct = {
			textChannel: message.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true,
		};

		queue.set(message.guild.id, queueContruct);

		queueContruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
      play(message.guild, queueContruct.songs[0]);
      return message.channel.send(`${song.title} Is Now Playing!`);
		} catch (err) {
			console.log(err);
			queue.delete(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		return message.channel.send(`${song.title} Added to Queue!`);
	}

}


function skip(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You Must Be In VC To Skip The Music!');
	if (!serverQueue) return message.channel.send('No Songs To Skip!');
	serverQueue.connection.dispatcher.end();
}

function stop(message, serverQueue) {
	if (!message.member.voiceChannel) return message.channel.send('You Must Be In VC To Stop The Music!');
	serverQueue.songs = [];
	serverQueue.connection.dispatcher.end();
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);
	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', () => {
			console.log('Music ended!');
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => {
			console.error(error);
    });
  
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  
}


client.login(auth.token);