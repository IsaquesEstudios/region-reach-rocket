## Objetivo
Manter apenas o login administrativo, sem área de cliente ou cadastro público.

## Implementação
1. Criar a primeira conta administrativa com o e-mail informado e atribuir permissão de administrador.
2. Ajustar `/admin/login` para exibir somente o formulário **Entrar**, removendo a opção pública de criar conta.
3. Manter o redirecionamento para `/admin`, onde estarão posts, categorias, tags e usuários.
4. Confirmar que usuários sem permissão administrativa não conseguem acessar as telas restritas.
5. Testar login, acesso ao painel e saída da conta.

## Acesso final
- Endereço: `/admin/login`
- Usuário inicial: `marcuspaz080@gmail.com`
- A senha informada será usada apenas para criar a conta e não será gravada no código.