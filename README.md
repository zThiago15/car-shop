## Descrição 📌
Trata-se de uma API de uma concessionária de veículos, onde é possível fazer o cadastro, modificação, exclusão e leitura de motos e carros. Utilizei a estrutura MSC(Model, Service, Controller) para construir a aplicação, junto com testes unitários para cada camada e conceitos de SOLID.

## Tecnologias 📌
* Node.js
* TypeScript
* Mongoose
* Zod
* Docker
* Testes unitários
  * Mocha
  * Chai
  * Sinon
  
## Rotas 📌

* Carros
    * GET/cars -> Retorna todos os carros registrados
    * GET /cars/:id -> Selecionar carro por ID
    * POST /cars -> Criar registro de um carro
    * PUT /cars/:id -> Editar informações de carro por ID
    * DELETE /cars/:id -> Deletar carro por ID

* Motos
    * GET/motorcycles -> Retorna todos as motos registradas
    * GET /motorcycles/:id -> Selecionar moto por ID
    * POST /motorcycles -> Criar registro de uma moto
    * PUT /motorcycles/:id -> Editar informações de carro por ID
    * DELETE /cars/:id -> Deletar moto por ID
