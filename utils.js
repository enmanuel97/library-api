let Validator = require('validatorjs');

function bodyParser(req) {
  	return new Promise((resolve, reject) => {
		try {
		  	let body = "";

		  	req.on("data", (chunk) => {
				body += chunk.toString();
		  	});

		  	req.on("end", () => {
				resolve(body);
		  	});
		} catch (error) {
			console.log('error in body parser', error)
		  	reject(err);
		}
  	});
}

async function validator (body, rules, customMessages, callback) {
	let defaultMessages = {    
		'required': 'The :attribute field is required',
		'date': 'The :attribute field is not a valid date',
	}
	defaultMessages = { ...defaultMessages, ...customMessages }
    const validation = new Validator(body, rules, defaultMessages);

    validation.passes(() => callback(null, true));

    validation.fails(() => callback(validation.errors, false));
};

module.exports = {
  	bodyParser,
	validator
};
