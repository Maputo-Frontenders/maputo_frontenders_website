# Guia de Contribuição

Obrigado por considerar contribuir com o **Maputo Frontenders Website**! Seguimos algumas diretrizes simples para garantir que todos os contribuidores possam colaborar de maneira eficiente e prazerosa.

## Regras de Desenvolvimento

1. **Manipulação de Dados do Componente**:

   - Ao desenvolver um componente que requer dados, crie um arquivo de dados dentro da pasta do componente.
   - Após a aprovação da mesclagem, se o arquivo de dados específico do componente for considerado adequado, ele será integrado ao arquivo de dados principal.

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

## Regras de Commit

- Use as regras de [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/).
- Escreva descrições detalhadas sempre que possível.

## Issues

As issues são categorizadas de acordo com a complexidade e tipo:

- `good first issue`: Tarefas simples para novos contribuidores
- `bug`: Problemas ou erros no código
- `feature`: Novas funcionalidades
- `documentation`: Melhorias ou atualizações na documentação
- `enhancement`: Melhorias incrementais em funcionalidades existentes
- `performance`: Otimizações de desempenho
- `accessibility`: Melhorias na acessibilidade do site
- `security`: Problemas ou melhorias relacionados à segurança

Escolha uma issue, comente nela para avisar que está trabalhando nela e envie um PR quando finalizar.

## Dúvidas?

Se tiver alguma dúvida, abra uma issue ou entre em contato conosco a apartir de LINK DE DISCUSSÃO.

---

**Obrigado por contribuir com o projeto Maputo Frontenders!**
