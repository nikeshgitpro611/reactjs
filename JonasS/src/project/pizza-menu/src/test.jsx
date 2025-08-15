import React, { useState } from "react";
import { Button, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Checkbox, Paper } from "@mui/material";

const sampleData = [
  { MYURN: "100001", currentLocation: "New York, NY", lastTriggerEvent: "Package Scanned", currentEvent: "In Transit", etaStatus: "Delayed", reasonForETAUnavailable: "Weather conditions" },
  { MYURN: "100002", currentLocation: "Los Angeles, CA", lastTriggerEvent: "Dispatched", currentEvent: "Out for Delivery", etaStatus: "On Time", reasonForETAUnavailable: null },
  { MYURN: "100003", currentLocation: "Chicago, IL", lastTriggerEvent: "Arrived at Facility", currentEvent: "Sorting", etaStatus: "Pending", reasonForETAUnavailable: "System update in progress" },
  { MYURN: "100004", currentLocation: "Houston, TX", lastTriggerEvent: "Delayed at Hub", currentEvent: "Processing", etaStatus: "Delayed", reasonForETAUnavailable: "High package volume" },
  { MYURN: "100005", currentLocation: "Phoenix, AZ", lastTriggerEvent: "Out for Delivery", currentEvent: "Delivered", etaStatus: "On Time", reasonForETAUnavailable: null },
  { MYURN: "100006", currentLocation: "Philadelphia, PA", lastTriggerEvent: "Facility Departure", currentEvent: "In Transit", etaStatus: "On Time", reasonForETAUnavailable: null },
  { MYURN: "100007", currentLocation: "San Antonio, TX", lastTriggerEvent: "Held at Facility", currentEvent: "Processing", etaStatus: "Delayed", reasonForETAUnavailable: "Customs clearance required" },
  { MYURN: "100008", currentLocation: "San Diego, CA", lastTriggerEvent: "Facility Arrival", currentEvent: "Sorting", etaStatus: "Pending", reasonForETAUnavailable: "Technical issue" },
  { MYURN: "100009", currentLocation: "Dallas, TX", lastTriggerEvent: "Package Scanned", currentEvent: "In Transit", etaStatus: "On Time", reasonForETAUnavailable: null },
  { MYURN: "100010", currentLocation: "San Jose, CA", lastTriggerEvent: "Dispatched", currentEvent: "Out for Delivery", etaStatus: "Delayed", reasonForETAUnavailable: "Traffic congestion" }
];

export default function MyURNApp() {
  const [selectedURNs, setSelectedURNs] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleCheckboxChange = (urn) => {
    setSelectedURNs((prev) =>
      prev.includes(urn) ? prev.filter((id) => id !== urn) : [...prev, urn]
    );
  };

  const triggerETA = () => {
    const updatedData = sampleData.map((item) =>
      selectedURNs.includes(item.MYURN)
        ? { ...item, lastTriggerEvent: "Triggered", currentEvent: "Processing", etaStatus: "Pending" }
        : item
    );
    setFilteredData(updatedData.filter((item) => selectedURNs.includes(item.MYURN)));
  };

  return (
    <div className="p-6">
      <Card>
        <CardContent>
          <TableContainer component={Paper}>
            <Button onClick={triggerETA} variant="contained" color="primary" className="mt-4">Trigger ETA</Button>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Select</TableCell>
                  <TableCell>MYURN</TableCell>
                  <TableCell>Current Location</TableCell>
                  <TableCell>Last Trigger Event</TableCell>
                  <TableCell>Current Event</TableCell>
                  <TableCell>ETA Status</TableCell>
                  <TableCell>Reason for ETA Unavailable</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleData.map((item) => (
                  <TableRow key={item.MYURN}>
                    <TableCell>
                      <Checkbox
                        checked={selectedURNs.includes(item.MYURN)}
                        onChange={() => handleCheckboxChange(item.MYURN)}
                      />
                    </TableCell>
                    <TableCell>{item.MYURN}</TableCell>
                    <TableCell>{item.currentLocation}</TableCell>
                    <TableCell>{item.lastTriggerEvent}</TableCell>
                    <TableCell>{item.currentEvent}</TableCell>
                    <TableCell>{item.etaStatus}</TableCell>
                    <TableCell>{item.reasonForETAUnavailable || "N/A"}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Button onClick={triggerETA} variant="contained" color="primary" className="mt-4">Trigger ETA</Button> */}
        </CardContent>
      </Card>

      {filteredData.length > 0 && (
        <Card className="mt-6">
          <CardContent>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>MYURN</TableCell>
                    <TableCell>Last Trigger Event</TableCell>
                    <TableCell>Current Event</TableCell>
                    <TableCell>ETA Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredData.map((item) => (
                    <TableRow key={item.MYURN}>
                      <TableCell>{item.MYURN}</TableCell>
                      <TableCell>{item.lastTriggerEvent}</TableCell>
                      <TableCell>{item.currentEvent}</TableCell>
                      <TableCell>{item.etaStatus}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
