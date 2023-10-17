const currenciesConfig = {
	'BTC': {
		'min': 0.2, 'max': 180, 'name': 'Bitcoin', 'type': 'crypto', 'imgName': 'bitcoin',
	},
	'DOG': {
		'min': 0.3, 'max': 190, 'name': 'DOGE', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'LIT': {
		'min': 0.4, 'max': 200, 'name': 'Litecoin', 'type': 'crypto','imgName': 'curr_placeholder',
	}, 'BNB': {
		'min': 0.2, 'max': 180, 'name': 'BNB', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'TRON': {
		'min': 0.2, 'max': 180, 'name': 'TRON', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'BTC Cash': {
		'min': 0.2, 'max': 180, 'name': 'Bitcoin Cash', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'ETH': {
		'min': 0.2, 'max': 180, 'name': 'ETH', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Rip': {
		'min': 0.2, 'max': 180, 'name': 'Ripple', 'type': 'crypto','imgName': 'curr_placeholder',
	}, 'Mon': {
		'min': 0.2, 'max': 180, 'name': 'Monero', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Alg': {
		'min': 0.2, 'max': 180, 'name': 'ALGO', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Sol': {
		'min': 0.2, 'max': 180, 'name': 'SOL', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Pol': {
		'min': 0.2, 'max': 180, 'name': 'Polygon', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Zc': {
		'min': 0.2, 'max': 180, 'name': 'Zcash', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Stel': {
		'min': 0.2, 'max': 180, 'name': 'Stellar', 'type': 'crypto','imgName': 'curr_placeholder',
	},
	'Shib': {
		'min': 0.2, 'max': 180, 'name': 'SHIB', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Lun': {
		'min': 0.2, 'max': 180, 'name': 'Luna', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Dash': {
		'min': 0.2, 'max': 180, 'name': 'Dash', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Tet TRC20': {
		'min': 0.2, 'max': 180, 'name': 'Tether TRC20', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'USD Coin': {
		'min': 0.2, 'max': 180, 'name': 'USD Coin TRC20', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'USDC': {
		'min': 0.2, 'max': 180, 'name': 'USDC', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Tether SOL': {
		'min': 0.2, 'max': 180, 'name': 'Tether SOL', 'type': 'crypto','imgName': 'curr_placeholder',

	}, 'Sber': {
		'min': 0.2, 'max': 180, 'name': 'Sberbank RU', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'Visa/MC kzt': {
		'min': 0.2, 'max': 180, 'name': 'Visa/MC kzt', 'type': 'payment','imgName': 'curr_placeholder',

	}, 'Visa/MC RU': {
		'min': 0.2, 'max': 180, 'name': 'Visa/MC RU', 'type': 'payment','imgName': 'curr_placeholder',

	}, 'HalykB': {
		'min': 0.2, 'max': 180, 'name': 'Halyk Bank', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'СБП': {
		'min': 0.2, 'max': 180, 'name': 'СБП', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'RNCB': {
		'min': 0.2, 'max': 180, 'name': 'RNCB', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'VTB': {
		'min': 0.2, 'max': 180, 'name': 'VTB', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'Gaz': {
		'min': 0.2, 'max': 180, 'name': 'Gazprombank', 'type': 'banks','imgName': 'curr_placeholder',

	},
	'Alfa': {
		'min': 0.2, 'max': 180, 'name': 'Alfabank', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'Kaspi': {
		'min': 0.2, 'max': 180, 'name': 'Kaspi Bank', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'Otk': {
		'min': 0.2, 'max': 180, 'name': 'Otkritie', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'Ros': {
		'min': 0.2, 'max': 180, 'name': 'RosBank', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'Bereke': {
		'min': 0.2, 'max': 180, 'name': 'Bereke Bank KZT', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'MIR': {
		'min': 0.2, 'max': 180, 'name': 'MIR', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'Home Credit': {
		'min': 0.2, 'max': 180, 'name': 'Home Credit', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'QIWI': {
		'min': 0.2, 'max': 180, 'name': 'QIWI', 'type': 'payment','imgName': 'curr_placeholder',

	}, 'Jusan': {
		'min': 0.2, 'max': 180, 'name': 'Jusan', 'type': 'banks','imgName': 'curr_placeholder',

	}, 'ЮMoney': {
		'min': 0.2, 'max': 180, 'name': 'ЮMoney', 'type': 'payment','imgName': 'curr_placeholder',

	}, 'Tether ERC20': {
		'min': 0.2, 'max': 180, 'name': 'Tether ERC20', 'type': 'crypto','imgName': 'curr_placeholder',

	}
}

const giveCurrencyesList = {
	'All': ['BTC','ABC']
}

export default currenciesConfig;

