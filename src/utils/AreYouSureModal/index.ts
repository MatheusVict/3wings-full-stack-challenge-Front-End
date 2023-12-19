/* eslint-disable @typescript-eslint/no-unused-vars */
import Swal from "sweetalert2";

interface AreYouSureModalProps {
  id: string;
  title: string;
  content: string;
  onConfirmMessage: string;
  onConfirm: (id: string) => Promise<void>;
}

export async function areYouSureModal({
  content,
  onConfirm,
  title,
  id,
  onConfirmMessage,
}: AreYouSureModalProps) {
  const result = await Swal.fire({
    title: title,
    text: content,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: onConfirmMessage,
  });
  if (result.isConfirmed) {
    onConfirm(id)
      .then(() => {
        Swal.fire("Deletado!", "Sua postagem foi deletado.", "success");
      })
      .catch((error: unknown) => {
        Swal.fire("Erro!", `Sua postagem nã foi deletado. ${error}`, "error");
      });
  }
}
