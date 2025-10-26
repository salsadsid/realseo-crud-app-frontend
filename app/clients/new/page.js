"use client";
import ClientForm from "@/components/clients/ClientForm";
import { useAddClientMutation } from "@/services/clientApi";
import { useRouter } from "next/navigation";

export default function NewClientPage() {
  const router = useRouter();
  const [addClient, { isLoading, error }] = useAddClientMutation();

  const handleSubmit = async (payload) => {
    try {
      await addClient(payload).unwrap();
      router.push("/clients");
    } catch (err) {
      console.error(err);
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
