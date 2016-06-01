module.exports = {
	save(key, value){
		localStorage.saveItem(key, value)
	},
	get(key){
		return localStorage.getItem(key)
	}
}
