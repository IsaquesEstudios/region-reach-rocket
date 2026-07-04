// Tipo canônico usado pelo front após ler da tabela externa.
// A tabela externa tem colunas: id, "Title", "Content", "Date", "Permalink",
// "Image URL", "Excerpt", "Categorias", "Author First Name", "Slug".
export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string | null;
  excerpt: string | null;
  image_url: string | null;
  date: string | null;
  permalink: string | null;
  categoria: string | null;
  author_name: string | null;
}

export interface PostListItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  image_url: string | null;
  date: string | null;
  categoria: string | null;
  author_name: string | null;
}

/**
 * Colunas cruas da tabela externa.
 * Mantém os nomes exatos, incluindo espaços.
 */
export interface RawPost {
  id: string;
  Title: string | null;
  Content: string | null;
  Date: string | null;
  Permalink: string | null;
  "Image URL": string | null;
  Excerpt: string | null;
  Categorias: string | null;
  "Author First Name": string | null;
  Slug: string | null;
}

export function mapRawPost(raw: RawPost): Post {
  return {
    id: raw.id,
    title: raw.Title ?? "",
    slug: raw.Slug ?? raw.id,
    content: raw.Content,
    excerpt: raw.Excerpt,
    image_url: raw["Image URL"],
    date: raw.Date,
    permalink: raw.Permalink,
    categoria: raw.Categorias,
    author_name: raw["Author First Name"],
  };
}
