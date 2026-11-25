import { useEffect, useState } from "react";
import api from "../services/api";

function Verification() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    const res = await api.get("/documents");
    setDocuments(res.data);
  };

  const verifyDocument = async (id) => {
    await api.patch(`/documents/verify/${id}`);
    fetchDocuments();
  };

  const rejectDocument = async (id) => {
    await api.patch(`/documents/reject/${id}`, {
      remarks: "Rejected by HR",
    });

    fetchDocuments();
  };

  return (
    <div>
      <h1>Verification</h1>

      {documents.map((doc) => (
        <div key={doc._id}>
          <p>
            {doc.documentType} - {doc.status}
          </p>

          <button
            onClick={() =>
              verifyDocument(doc._id)
            }
          >
            Verify
          </button>

          <button
            onClick={() =>
              rejectDocument(doc._id)
            }
          >
            Reject
          </button>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Verification;