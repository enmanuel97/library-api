const { getBooks, getBook, createBook, updateBook, deleteBook } = require('../controllers/bookController')

module.exports = (req, res) => {
	if(req.url === '/api/books' && req.method === 'GET') {
		getBooks(req, res);
	} else if(req.url.match(/\/api\/books\/\w+/) && req.method === 'GET') {
		const id = req.url.split('/')[3];
		getBook(req, res, id);
	} else if(req.url === '/api/books' && req.method === 'POST') {
		createBook(req, res);
	} else if(req.url.match(/\/api\/books\/\w+/) && (req.method === 'PUT' || req.method === 'PATCH')) {
		const id = req.url.split('/')[3];
		updateBook(req, res, id);
	} else if(req.url.match(/\/api\/books\/\w+/) && req.method === 'DELETE') {
		const id = req.url.split('/')[3];
		deleteBook(req, res, id);
	}
}
