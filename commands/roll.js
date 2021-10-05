// Start a roll session
const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

const embed = new MessageEmbed()
	.setColor('#000000')
	.setTitle('')
	.setDescription('Press "Start" to begin.')
	.setTimestamp()
	.setFooter('');

const row = new MessageActionRow();

const startButton = new MessageButton()
	.setCustomId('start')
	.setLabel('Start')
	.setStyle('PRIMARY');

const editButton = new MessageButton()
	.setCustomId('edit')
	.setLabel('Settings')
	.setStyle('SECONDARY');

const cancelButton = new MessageButton()
	.setCustomId('cancel')
	.setLabel('Cancel')
	.setStyle('DANGER');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('roll')
		.setDescription('Start a roll session.'),
	async execute(interaction) {

		const avatar = interaction.user.avatarURL();

		row.addComponents(
			startButton,
			editButton,
			cancelButton,
		);

		embed.setTitle(`${ interaction.user.username }'s roll session`)
			.setFooter(`${ interaction.user.tag }`, avatar);

		try {
			interaction.reply({
				ephemeral: true,
				embeds: [embed],
				components: [row],
			});
		}
		catch (error) {
			console.log(error);
		}
	},
};
