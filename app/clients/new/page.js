"use client";
import ClientForm from "@/components/clients/ClientForm";
import { useAddClientMutation } from "@/services/clientApi";
import { useRouter } from "next/navigation";
import { useSnackbar } from "notistack";

export default function NewClientPage() {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();
  const [addClient, { isLoading, error }] = useAddClientMutation();

  const handleSubmit = async (payload) => {
    try {
      await addClient(payload).unwrap();
      enqueueSnackbar("Client created successfully", { variant: "success" });
      router.push("/clients");
    } catch (err) {
      console.error(err);
      enqueueSnackbar("Failed to create client", { variant: "error" });
    }
  };

  return (
    <ClientForm
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      isEditMode={false}
      onCancel={() => router.back()}
    />
  );
}
