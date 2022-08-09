const db = require('../database/db');
const { bodyParser, validator } = require('../utils')

async function getBooks(req, res) {
    try {
        const books = await db.Books.findAll({
            where: {
                deleted_at: null
            }
        })

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(books))
    } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ message: 'Bad Request' }))
    }
}

async function getBook(req, res, id) {
    try {
        const book = await db.Books.findByPk(id)
       
        if(!book) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Book Not Found' }))
        } else {

            const urlDevided = req.url.replace('/api/books/', '').split('/');
            
            if(urlDevided.length > 1) {
                // get book pages
                const page = await db.Pages.findByPk(urlDevided[2])
                if(!page) {
                    res.writeHead(404, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify({ message: 'Page Not Found' }))
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    res.end(JSON.stringify([book, page]))
                }
            } else {
                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify(book))
            }
        }
    } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ message: 'Bad Request' }))
    }
}

async function createBook(req, res) {
    try {
        var rules = {
            title: 'required',
            resume: 'required',
            publiched_at: 'required|date'
        }
        const body      = await bodyParser(req)
        let bodyData    = body ? JSON.parse(body) : {};

        await validator(bodyData, rules, {}, async (err, status) => {
            if (!status) { 
                res.writeHead(400, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify(err))  
            } else {

                const { title, resume, publiched_at } = JSON.parse(body)

                const book = {
                    title,
                    resume,
                    publiched_at: Date.parse(publiched_at)
                }

                const newBook = await db.Books.create(book).catch(err => console.log('Insert error', err))
                
                res.writeHead(201, { 'Content-Type': 'application/json' })
                return res.end(JSON.stringify(newBook))  
            }
        }).catch(err => console.log(err))
    } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ message: 'Bad Request' }))
    }
}

async function updateBook(req, res, id) {
    try {
        const book = await db.Books.findByPk(id)

        if(!book) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Book Not Found' }))
        } else {
            var rules = {
                title: 'required',
                resume: 'required',
                publiched_at: 'required|date'
            }
            const body      = await bodyParser(req)
            let bodyData    = body ? JSON.parse(body) : {};
    
            await validator(bodyData, rules, {}, async (err, status) => {
                if (!status) { 
                    res.writeHead(400, { 'Content-Type': 'application/json' })
                    return res.end(JSON.stringify(err))  
                } else {
                    const { title, resume, publiched_at } = JSON.parse(body)

                    const bookData = {
                        title: title || book.title,
                        resume: resume || book.resume,
                        publiched_at: Date.parse(publiched_at) || book.publiched_at
                    }
                
                    const updBook = await book.update(bookData).catch(err => console.log('Update error', err))
                
                    res.writeHead(200, { 'Content-Type': 'application/json' })
                    return res.end(JSON.stringify(updBook)) 
                }
            }).catch(err => console.log(err))
        }
    } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ message: 'Bad Request' }))
    }
}

async function deleteBook(req, res, id) {
    try {
        const book = await db.Books.findByPk(id)

        if(!book) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Book Not Found' }))
        } else {
            if(book.deleted_at) {
                res.writeHead(404, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: 'Book Not Found' }))
            } else {

                await book.update({ deleted_at: new Date() }).catch(err => console.log('Delete error', err))

                res.writeHead(200, { 'Content-Type': 'application/json' })
                res.end(JSON.stringify({ message: `Book ${id} removed` }))
            }
        }
    } catch (error) {
        res.writeHead(400, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify({ message: 'Bad Request' }))
    }
}

module.exports = {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
}