## Problema

A auditoria de acessibilidade aponta:

> Elements must only use permitted ARIA attributes
> `<div class="flex gap-1 mb-5" aria-label="5 de 5 estrelas">`

Um `<div>` genérico não aceita `aria-label` sem um `role` que permita nome acessível. Sem `role`, leitores de tela e agentes de IA ignoram o rótulo e a auditoria reprova.

Ocorrência única em `src/components/site/Testimonials.tsx` (linha 37).

## Correção

Em `src/components/site/Testimonials.tsx`, adicionar `role="img"` ao `<div>` que agrupa as 5 estrelas, e marcar os ícones internos como decorativos:

```tsx
<div className="flex gap-1 mb-5" role="img" aria-label="5 de 5 estrelas">
  {/* <Star ... aria-hidden="true" /> nos ícones filhos */}
</div>
```

Isso torna o `aria-label` válido (o grupo passa a ser uma imagem acessível única "5 de 5 estrelas") e evita que cada ícone seja anunciado individualmente.

## Escopo

- Alterar apenas `src/components/site/Testimonials.tsx`.
- Nenhuma mudança de estilo, layout ou lógica.