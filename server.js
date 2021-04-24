// fullfjärdad node.js server rest-api från scracth så man förstår vad som händer
// Började med denna https://www.youtube.com/watch?v=_1xa8Bsho6A&t=1s Traversy Media på Youtube. 
// Köpte denna kurs på UDEMY https://www.udemy.com/share/101WGiCUMecVdbQHQ=/ Som jag börjat gå igenom

//utan express

const http = require('http')
const {getProducts, getProduct, createProduct, updateProduct } = require('./controllers/productController')

//startar upp server/ skapar en server 

const server = http.createServer((req, res) => {

    // som innehåller text fil i form av html, hello world h1 tag
    /* res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.write(`<h1>Hello World </h1>`)
    res.end() */

    if(req.url === '/api/products' && req.method === 'GET') {
        getProducts(req, res)

    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'GET')
    {
        const id = req.url.split('/') [3]
        getProduct(req, res, id)
        /* res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(products)) */
    } else if (req.url === '/api/products' && req.method === 'POST'){
            createProduct(req, res)
            
    } else if (req.url.match(/\/api\/products\/([0-9]+)/) && req.method === 'PUT') {
        const id = req.url.split('/') [3]
        updateProduct(req, res, id)
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }
})

// skapar port som servern lyssnar på i detta fall port 5000

const PORT = process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`))


// testar själva att göra en api och skicka info

// const streetstyles = require('./data/streetstyles')

    /* if(req.url === '/api/streetstyles' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(streetstyles))
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.end(JSON.stringify({message: 'Route not found'}))
    }
 */