# Banco-de-dados

```markdown
# Exemplo de Uso do Node.js e PostgreSQL

Este repositório contém exemplos de código em Node.js para interagir com um banco de dados PostgreSQL. Os exemplos incluem comandos para criar tabelas, inserir dados e atualizar dados no banco de dados.

## Pré-requisitos

- [Node.js](https://nodejs.org) (v12 ou superior)
- [PostgreSQL](https://www.postgresql.org) instalado e configurado

## Instalação

1. Clone este repositório:

   ```shell
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. Navegue para o diretório do projeto:

   ```shell
   cd seu-repositorio
   ```

3. Instale as dependências do projeto:

   ```shell
   npm install
   ```

4. Instale o pacote `pg` para interagir com o PostgreSQL:

   ```shell
   npm install pg
   ```

## Configuração

Antes de executar os comandos, você precisa configurar a conexão com o banco de dados. Certifique-se de fornecer as informações corretas para se conectar ao seu banco de dados PostgreSQL. Edite o arquivo `database.js` e atualize as configurações de acordo:

```javascript
const { Pool } = require('pg');

const pool = new Pool({
  user: 'seu-usuario',
  host: 'localhost',
  database: 'seu-banco-de-dados',
 
