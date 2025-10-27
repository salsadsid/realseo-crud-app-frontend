"use client";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { FiCalendar } from "react-icons/fi";

export default function ClientForm({
  initialData = {},
  onSubmit,
  isLoading = false,
  error = null,
  isEditMode = false,
  onCancel,
}) {
  const [form, setForm] = React.useState({
    firstName: initialData?.firstName || "",
    lastName: initialData?.lastName || "",
    email: initialData?.email || "",
    phone: initialData?.phone || "",
    address: initialData?.address || "",
    companyName: initialData?.companyName || "",
    dob: initialData?.dob
      ? new Date(initialData.dob).toISOString().split("T")[0]
      : "",
    packageName: initialData?.packageName || "",
    comments: initialData?.comments || "",
  });

  React.useEffect(() => {
    if (initialData && Object.keys(initialData).length > 0) {
      setForm({
        firstName: initialData.firstName || "",
        lastName: initialData.lastName || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        address: initialData.address || "",
        companyName: initialData.companyName || "",
        dob: initialData.dob
          ? new Date(initialData.dob).toISOString().split("T")[0]
          : "",
        packageName: initialData.packageName || "",
        comments: initialData.comments || "",
      });
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = () => {
    const payload = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      phone: form.phone || null,
      address: form.address || null,
      companyName: form.companyName || null,
      dob: form.dob ? new Date(form.dob).toISOString() : null,
      packageName: form.packageName || null,
      comments: form.comments || null,
    };

    onSubmit(payload);
  };

  return (
    <Box sx={{ py: 4 }}>
      <Paper sx={{ p: 4, border: 0, boxShadow: "none" }}>
        <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
          {isEditMode ? "Edit Client" : "Add New Client"}
        </Typography>
        <Box
          sx={{
            width: 56,
            height: 4,
            bgcolor: "success.light",
            borderRadius: 1,
            mb: 4,
          }}
        />

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {isEditMode ? "Failed to update client" : "Failed to create client"}
          </Alert>
        )}

        <Box sx={{ mt: 2 }}>
          <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                First Name:
              </Typography>
              <TextField
                name="firstName"
                fullWidth
                variant="standard"
                placeholder="Xion"
                value={form.firstName}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Last Name:
              </Typography>
              <TextField
                name="lastName"
                fullWidth
                variant="standard"
                placeholder="Ashly"
                value={form.lastName}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Address:
              </Typography>
              <TextField
                name="address"
                fullWidth
                variant="standard"
                placeholder="Type your Address"
                value={form.address}
                onChange={handleChange}
              />
            </Box>
          </Stack>

          <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "text.secondary" }}
                icon={<FiCalendar />}
              >
                Date of Birth:
              </Typography>
              <TextField
                name="dob"
                fullWidth
                variant="standard"
                type="date"
                placeholder="10/10/1994"
                value={form.dob}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Contact Email:
              </Typography>
              <TextField
                name="email"
                fullWidth
                variant="standard"
                type="email"
                placeholder="Type your Email"
                value={form.email}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Contact Cell Number:
              </Typography>
              <TextField
                name="phone"
                fullWidth
                variant="standard"
                placeholder="Type your Cell No"
                value={form.phone}
                onChange={handleChange}
              />
            </Box>
          </Stack>

          <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Company Name
              </Typography>
              <TextField
                name="companyName"
                fullWidth
                variant="standard"
                placeholder="Type Here"
                value={form.companyName}
                onChange={handleChange}
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Package
              </Typography>
              <TextField
                name="packageName"
                fullWidth
                variant="standard"
                select
                displayEmpty
                value={form.packageName}
                onChange={handleChange}
                SelectProps={{
                  displayEmpty: true,
                }}
              >
                <MenuItem value="" disabled>
                  Select Package
                </MenuItem>
                <MenuItem value="basic">Basic</MenuItem>
                <MenuItem value="pro">Pro</MenuItem>
                <MenuItem value="pro plus">Pro Plus</MenuItem>
              </TextField>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="subtitle2"
                sx={{ mb: 1, color: "text.secondary" }}
              >
                Comments
              </Typography>
              <TextField
                name="comments"
                fullWidth
                variant="standard"
                placeholder="You'll get"
                value={form.comments}
                onChange={handleChange}
              />
            </Box>
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 2,
              mt: 6,
            }}
          >
            <Button
              variant="outlined"
              onClick={onCancel}
              sx={{ px: 4, py: 1, textTransform: "uppercase" }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={
                isLoading || !form.firstName || !form.lastName || !form.email
              }
              sx={{ px: 4, py: 1, textTransform: "uppercase" }}
            >
              {isLoading ? "Saving..." : "Submit"}
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}
