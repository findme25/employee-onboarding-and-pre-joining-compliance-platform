import { useEffect, useState } from "react";
import api from "../services/api";

function Documents() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    const res = await api.get("/documents");
    setDocuments(res.data);
  };

  return (
    <div>
      <h1>Documents</h1>

      <table border="1">
        <thead>
          <tr>
            <th>Document Type</th>
            <th>Status</th>
            <th>File</th>
            <th>Employee ID</th>
          </tr>
        </thead>

        <tbody>
          {documents.map((doc) => (
            <tr key={doc._id}>
              <td>{doc.documentType}</td>
              <td>{doc.status}</td>
              <td>{doc.filePath}</td>
              <td>{doc.employeeId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Documents;