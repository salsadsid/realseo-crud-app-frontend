"use client";
import ClientForm from "@/components/clients/ClientForm";
import {
  useGetClientByIdQuery,
  useUpdateClientMutation,
} from "@/services/clientApi";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import { useParams, useRouter } from "next/navigation";

export default function EditClientPage() {
  const params = useParams();
  const router = useRouter();
  const clientId = params.id;

  const {
    data: client,
    isLoading: isFetching,
    error: fetchError,
  } = useGetClientByIdQuery(clientId);
  const [updateClient, { isLoading, error }] = useUpdateClientMutation();

  const handleSubmit = async (payload) => {
    try {
      await updateClient({ id: clientId, ...payload }).unwrap();
      router.push("/clients");
    } catch (err) {
      console.error(err);
    }
  };

  if (isFetching) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (fetchError) {
    return (
      <Alert severity="error" sx={{ m: 2 }}>
        Error loading client
      </Alert>
    );
  }

  return (
    <ClientForm
      initialData={client}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      error={error}
      isEditMode={true}
      onCancel={() => router.back()}
    />
  );
}
