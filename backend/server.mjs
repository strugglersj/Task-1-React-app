import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());

// Mock Data
const candidates = [
  { id: 1, name: "Samyak Jain", skills: "JavaScript, React", experience: 5 },
  { id: 2, name: "Nikita Bansal", skills: "Python, Django", experience: 3 },
  { id: 3, name: "Manan Jain", skills: "Java, Spring Boot", experience: 4 },
  { id: 4, name: "Dhruv Agrarwal", skills: "C++, Qt", experience: 2 },
  { id: 5, name: "Prakshal Jain", skills: "Ruby, Rails", experience: 6 },
  { id: 6, name: "Kartik Saksena", skills: "Go, Kubernetes", experience: 3 },
  { id: 7, name: "Princi Agarwal", skills: "PHP, Laravel", experience: 5 },
  { id: 8, name: "Ribha Nishal", skills: "Swift, iOS", experience: 4 },
  { id: 9, name: "Khushi Agarwal", skills: "Kotlin, Android", experience: 2 },
  { id: 10, name: "Khushi Singh", skills: "HTML, CSS", experience: 1 },
];

// Endpoint
app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
