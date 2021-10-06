// List of user preferences
const preferences = new Map([
	['gender', 'Female'],
	['source', 'Anime'],
]);

module.exports = {
	getPreference(preference) {
		return preferences.get(preference);
	},

	setPreference(target, preference) {
		return preferences.set(target, preference);
	},
};