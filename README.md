# movie84

Esse projeto demonstra a utilização do Angular19 na criação de um aplicativo web que faz consultas com a api da TMDB (The Movie Database) para consulta de filmes, series e personalidades e Xano Para armazenar os comentários dos visitantes.

## Comece

### Crie as seguintes contas

#### Xano (Para armazenar comentários)
```shell
Nome da Tabela: TB_COMENTARIOS
Estrutura da tabela:
                  {
                  id: integer
                  created_at: timestamp
                  ID_FILME: integer
                  nmPessoa: text
                  comentario: text
                  dtInclusao: date
                  }
#Depois pegue o endereço da API gerada.
```

#### TMDB (The Movie Database)

```shell
Crie um chave de API na TMDB
Acesse para mais informações: https://developer.themoviedb.org/docs/getting-started
```

### Clone o repositório

```shell
git clone https://github.com/CCSoftwarern/movie84.git
cd movie84
```

### Instale pacotes npm

```shell
npm install
npm start
```

