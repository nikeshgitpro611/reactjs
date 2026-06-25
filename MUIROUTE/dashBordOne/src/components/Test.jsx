import React, { useState } from "react";
import { Box, Typography, Select, MenuItem, Button, Card, CardContent } from "@mui/material";

const dummyUsers = [
  { id: 1, name: "Nikesh", role: "Admin" },
  { id: 2, name: "Riya", role: "User" },
  { id: 3, name: "Raj", role: "HR" },
];

const roles = ["Admin", "User", "HR"];

export default function RoleManagement() {
  const [users, setUsers] = useState(dummyUsers);

  const handleRoleChange = (id, newRole) => {
    setUsers(users.map(u => (u.id === id ? { ...u, role: newRole } : u)));
  };

  const handleSave = () => {
    alert("Roles saved to DB (mock)");
  };

  return (
    <Box sx={{ p: 4 , width: '600px', margin: '0 180px' }}>
      <Typography variant="h5" mb={2}>Role Management</Typography>
      {users.map(user => (
        <Card key={user.id} sx={{ mb: 2 }}>
          <CardContent sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Typography>{user.name}</Typography>
            <Select
              value={user.role}
              onChange={(e) => handleRoleChange(user.id, e.target.value)}
              sx={{ minWidth: 150 }}
            >
              {roles.map(r => (
                <MenuItem key={r} value={r}>{r}</MenuItem>
              ))}
            </Select>
          </CardContent>
        </Card>
      ))}
      <Button variant="contained" onClick={handleSave}>Save Changes</Button>
    </Box>
  );
}
