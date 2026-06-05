import { createFileRoute } from "@tanstack/react-router";
import { AdminGate } from "@/components/admin/AdminGate";
import { PostEditor } from "@/components/admin/PostEditor";

export const Route = createFileRoute("/admin/posts/edit/$id")({
  component: EditPage,
});

function EditPage() {
  const { id } = Route.useParams();
  return <AdminGate><PostEditor postId={id} /></AdminGate>;
}
