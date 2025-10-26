"use client";
import { useGetClientsQuery } from "@/services/clientApi";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FiEdit } from "react-icons/fi";

function formatDate(value) {
  if (!value) return "-";
  const d = new Date(value);
  if (isNaN(d.getTime())) return value;
  return d.toLocaleDateString();
}

export default function ClientsPage() {
  const router = useRouter();
  const { data, error, isLoading, isFetching } = useGetClientsQuery();

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mb: 2 }}
      >
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          Clients
        </Typography>
        <Link href="/clients/new" style={{ textDecoration: "none" }}>
          <Button variant="contained">Add New Client</Button>
        </Link>
      </Stack>

      {isLoading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">Error loading clients</Alert>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Client Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Cell</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data && data.length ? (
                data.map((row) => {
                  const name = row.name || "-";
                  const address = row.address || "-";
                  const date = formatDate(row.createdAt) || "-";
                  const email = row.email || "-";
                  const cell = row.phone || "-";
                  const comments = row.comments || "-";
                  return (
                    <TableRow key={row.id} hover>
                      <TableCell>{name}</TableCell>
                      <TableCell>{address}</TableCell>
                      <TableCell>{date}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{cell}</TableCell>
                      <TableCell>{comments}</TableCell>
                      <TableCell align="right">
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() => router.push(`/clients/${row.id}/edit`)}
                        >
                          <FiEdit />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={7} align="center">
                    No clients found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {isFetching && !isLoading && (
        <Typography variant="caption" sx={{ mt: 1, display: "block" }}>
          Refreshing...
        </Typography>
      )}
    </Box>
  );
}
