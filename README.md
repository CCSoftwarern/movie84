# movie84

Esse projeto demonstra a utilização do Angular19 na criação de um aplicativo web que faz consultas com a api da TMDB (The Movie Database) para consulta de filmes, series e personalidades e Backend da Xano Para armazenar os comentários dos visitantes.

## Começando

### Crie as seguintes contas

#### Xano (Para armazenar comentários)
```shell
Crie sua conta na Xano: https://www.xano.com/
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
```

#### TMDB (The Movie Database)

```shell
Crie um chave de API na TMDB
Acesse para mais informações: https://developer.themoviedb.org/docs/getting-started
```
#### Variáveis de sistema

```shell
Adicione suas chaves de api no arquivo em environment.ts dentro da pasta environments
    apiUrl: 'https://api.themoviedb.org',
    apiKey:  'sua api TMDB aqui',
    apiXano: 'sua api xano aqui'
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

## Telas

### Tela Principal.

[![2pmZS1f.md.jpg](https://iili.io/2pmZS1f.md.jpg)](https://freeimage.host/i/2pmZS1f)

### Detalhes do Filme/ Serie e demostração de comentário.

[![2pmm9kl.md.jpg](https://iili.io/2pmm9kl.md.jpg)](https://freeimage.host/i/2pmm9kl)

### Exibição de celebridades.

[![2pmpMHx.md.jpg](https://iili.io/2pmpMHx.md.jpg)](https://freeimage.host/i/2pmpMHx)

### Demonstração de resultado de pesquisa

[![2pmyzs1.md.jpg](https://iili.io/2pmyzs1.md.jpg)](https://freeimage.host/i/2pmyzs1)



