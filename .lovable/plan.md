## Problema identificado
A rota `/admin/login` chama o recurso de autenticação, mas o provedor global responsável por disponibilizá-lo não está montado na aplicação. Isso gera o erro `useAuth must be used within AuthProvider` antes do formulário aparecer.

## Correção
1. Envolver o conteúdo global da aplicação com o provedor de autenticação em `src/routes/__root.tsx`.
2. Preservar a estrutura atual do site, o provedor de consultas, cabeçalho, rodapé e demais rotas.
3. Abrir `/admin/login` e confirmar que o formulário carrega sem acionar a tela de erro.
4. Testar o login administrativo já configurado e confirmar o acesso ao painel.