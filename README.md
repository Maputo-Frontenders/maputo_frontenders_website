# Website da Comunidade Maputo Frontenders

Bem-vindo ao projeto do website da comunidade Maputo Frontenders! Este documento descreve as diretrizes de desenvolvimento e regras para garantir consistência, eficiência e colaboração dentro do projeto.

## Estrutura de Arquivos

A estrutura de arquivos do projeto é a seguinte:

- components/
  - | |-- Header/
  - | |-- header.tsx
  - | | |-- HeaderData.ts (se aplicável)
- pages/
  - | |-- app/
  - | | |-- index.tsx


## Regras de Desenvolvimento

1. **Manipulação de Dados do Componente**:
    - Ao desenvolver um componente que requer dados, crie um arquivo de dados dentro da pasta do componente.
    - Após a aprovação da mesclagem, se o arquivo de dados específico do componente for considerado adequado, ele será integrado ao arquivo de dados principal.

2. **Pull Requests**:
    - Antes de abrir um pull request (PR), certifique-se de que não há conflitos com o branch principal.
    - Os PRs devem ser descritivos e concisos, resumindo as alterações feitas.

3. **Commits Convencionais**:
    - Utilize [Commits Convencionais](https://www.conventionalcommits.org/) para mensagens de commit. Siga as diretrizes fornecidas no site.

4. **Acesso ao Design no Figma**:
    - Pedidos de acesso ao design no Figma podem ser feitos entrando em contato com o gerente do projeto ou membro designado da equipe.

## Como Começar

1. Clone o repositório:

    ```bash
    git clone <url_do_repositório>
    ```

2. Instale as dependências:

    ```bash
    yarn install
    ```

3. Inicie o servidor de desenvolvimento:

    ```bash
    yarn dev
    ```

4. Faça as alterações necessárias e crie um novo branch para sua funcionalidade/correção:

    ```bash
    git checkout -b feature/sua-funcionalidade
    ```

5. Após concluir as alterações, faça commit seguindo as diretrizes de Commits Convencionais:

    ```bash
    git commit -m "feat: adicionar nova funcionalidade"
    ```

6. Envie suas alterações para o repositório forkado:

    ```bash
    git push origin feature/sua-funcionalidade
    ```

7. Abra um pull request no repositório principal.

## Colaboração

A colaboração é fundamental para o sucesso deste projeto. Sinta-se à vontade para pedir ajuda, fornecer feedback ou sugerir melhorias em qualquer estágio do processo de desenvolvimento.

Vamos construir juntos um website incrível para a nossa comunidade!

Se tiver alguma dúvida ou precisar de mais assistência, não hesite em entrar em contato com os mantenedores do projeto.
