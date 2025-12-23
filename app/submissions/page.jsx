"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SubmissionsPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Supabase SELECT error:", error);
        return;
      }

      setRows(data || []);
    }
    load();
  }, []);

  return (
    <div style={{ padding: "24px" }}>
      <h2 style={{ marginBottom: "16px", fontSize: "22px" }}>
        📋 Form Submissions
      </h2>

      {/* Responsive wrapper */}
      <div style={{ overflowX: "auto" }}>
        <table
          style={{
            borderCollapse: "collapse",
            width: "100%",
            minWidth: "900px",
            textAlign: "center",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* TABLE HEADER */}
          <thead style={{ backgroundColor: "#f3f4f6", color: "black" }}>
            <tr>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Device</th>
              <th style={thStyle}>Latitude</th>
              <th style={thStyle}>Longitude</th>
              <th style={thStyle}>City</th>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Date</th>
            </tr>
          </thead>

          {/* TABLE BODY */}
          <tbody>
            {rows.map((row, index) => (
              <tr
                key={row.id}
                style={{
                  backgroundColor: index % 2 === 0 ? "#ffffff" : "#f9fafb",
                }}
              >
                <td style={tdStyle}>{row.email}</td>
                <td style={tdStyle}>{row.name}</td>
                <td style={tdStyle}>{row.device}</td>
                <td style={tdStyle}>{row.latitude ?? "-"}</td>
                <td style={tdStyle}>{row.longitude ?? "-"}</td>
                <td style={tdStyle}>{row.city ?? "-"}</td>
                <td style={tdStyle}>{row.country ?? "-"}</td>
                <td style={tdStyle}>
                  {new Date(row.created_at).toLocaleString()}
                </td>
              </tr>
            ))}

            {rows.length === 0 && (
              <tr>
                <td colSpan="8" style={{ padding: "16px", color: "#6b7280" }}>
                  No submissions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* Header cell style */
const thStyle = {
  padding: "12px",
  border: "1px solid #e5e7eb",
  fontWeight: "600",
  fontSize: "14px",
};

/* Data cell style */
const tdStyle = {
  padding: "10px",
  border: "1px solid #e5e7eb",
  fontSize: "14px",
};
