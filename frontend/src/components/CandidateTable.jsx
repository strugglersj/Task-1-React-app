import React, { useState, useEffect } from "react";
import "./san.css";
import background from "./Bg.jpg"; // Adjust the path based on your file structure

const CandidateTable = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("http://localhost:5000/api/candidates")
      .then((response) => response.json())
      .then((data) => setCandidates(data))
      .catch((error) => console.error("Error fetching candidates:", error));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const handleSort = () => {
    const sortedCandidates = [...candidates].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.experience - b.experience;
      } else {
        return b.experience - a.experience;
      }
    });
    setCandidates(sortedCandidates);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery) ||
      candidate.skills.toLowerCase().includes(searchQuery)
  );

  const headerStyle = {
    border: "1px solid #ddd",
    padding: "10px",
    backgroundColor: "#3B9EBF", // Updated to the new color
    color: "#ffffff", // White text
    fontWeight: "bold",
    textAlign: "center",
  };

  const candidateListHeadingStyle = {
    color: "#1C4E5E", // Darker shade of the background color
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)", // Adding text shadow for better contrast
  };

  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
        boxSizing: "border-box", // Ensures padding is inside the border
      }}
    >
      <div className="center1">
        <h1 style={candidateListHeadingStyle}>Candidate List</h1>
      </div>
      <div className="center2">
        <input
          type="text"
          placeholder="Search by name or skills"
          onChange={handleSearch}
          style={{
            margin: "10px",
            padding: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc", // Removed background color
            fontSize: "16px", // Adjust font size for better readability
          }}
        />
        <button
          onClick={handleSort}
          style={{
            padding: "10px 20px",
            borderRadius: "4px",
            backgroundColor: "#3B9EBF", // Matching new header color
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sort by Experience ({sortOrder === "asc" ? "Ascending" : "Descending"})
        </button>
      </div>
      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            backgroundColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent white
            backdropFilter: "blur(8px)", // Blurred background effect
            borderRadius: "8px",
            padding: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <thead>
            <tr>
              <th style={headerStyle}>Name</th>
              <th style={headerStyle}>Skills</th>
              <th style={headerStyle}>Years of Experience</th>
            </tr>
          </thead>
          <tbody>
            {filteredCandidates.map((candidate) => (
              <tr key={candidate.id}>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {candidate.name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {candidate.skills}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>
                  {candidate.experience}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CandidateTable;
