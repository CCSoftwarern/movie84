# Movie84

Este projeto ilustra a utilização do Angular 19 para a criação de um aplicativo web que consulta a API da TMDB (The Movie Database). O aplicativo permite a busca e visualização de informações sobre filmes, séries e personalidades. Além disso, utilizamos o backend da Xano para armazenar os comentários dos visitantes.

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
    apiKey:  'sua apikey TMDB aqui',
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



