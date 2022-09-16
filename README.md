# Renxt

## Requisitos da aplicação.

```
Legenda:
    RF = Requisitos funcionais
    RNF = Requisitos não funcionais
    RN = Regra de negócio
```

<!--  -->
### Cadastro de Carro

##### RF

- Deve ser possível:
    - Cadastrar um novo carro.

##### RNF

##### RN

- O carro deve ser cadastrado com disponibilidade.
- *O usuário responsável pelo cadastro deve ser um usuário admin.
- Não deve ser possível:
    - Cadastrar um carro com uma placa já existente.

<!--  -->
### Listagem de Carro

##### RF

- Deve ser possível:
    - Listar todos os carros disponíveis:
        - pelo nome da categoria.
        - pelo nome da marca.
        - pelo nome do carro.

##### RNF

##### RN

- O usuário não precisa estar logado no sistema.

<!--  -->
### Cadastro de Especificações no carro

##### RF

- Deve ser possível:
    - Cadastrar uma especificação para um carro.
    - Listar todas as especificações.
    - Listar todos os carros.

##### RNF

##### RN

- O usuário responsável pelo cadastro deve ser um usuário admin.
- Não deve ser possível:
    - Cadastrar uma especificação para um carro já cadastrado.
    - Cadastrar uma especificação já existente para o mesmo carro.

<!--  -->
### Cadastro de imagens do carro

##### RF

- Deve ser possível:
    - Cadastrar a imagem do carro.
    - Listar todos os carros.

##### RNF

- Utilizar o multer para upload dos arquivos

##### RN

- O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
- O usuário responsável pelo cadastro deve ser um usuário admin.

<!--  -->
### Aluguel de carro

##### RF

- Deve ser possível:
    - Cadastrar um aluguel.

##### RNF

- Utilizar o multer para upload dos arquivos

##### RN

- O aluguel deve ter duração mínima de 24 horas.
- Não deve ser possível:
    - Cadastrar um novo aluguel caso já exista um aberto:
        - para o mesmo usuário.
        - para o mesmo carro.

