// const product = 'Socks'

const app = Vue.createApp({
	data() {
		return {
			product: 'Mouth',
			description: 'Im only human after all!',
			test() {
				return 'yoo'
			},
			test2: function () {
				return 'yoo2'
			}
		}
	}
});
