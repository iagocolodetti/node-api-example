module.exports = {
    swaggerDefinition: {
        info: {
            title: 'node-api-example',
            description: 'Exemplo simples de CRUD API utilizando banco de dados MySQL com Node.js',
            contact: {
                name: 'Iago Colodetti',
                url: 'https://github.com/iagocolodetti/node-api-example'
            },
            version: '1.1'
        }
    },
    apis: ['./src/routes.js']
}
