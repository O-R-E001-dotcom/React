
// import { useState } from "react";

// function StudentGrades() {
    

//     const students = [
//         {name: 'Lamine Yamal', score: 85, subject: 'Football'},
//         {name: 'Taylor Swift', score: 90, subject: 'Music'},
//         {name: 'Connor Bedard', score: 40, subject: 'Hockey'}
//     ];

//     const [filter, setFilter] = useState('All');
//     const filteredStudents = students.filter((student => {
//         if (filter === "Passed") return student.score >= 50;
//         if (filter === "Failed") return student.score <= 50;
//         return true;
//     }));

//     const passedStudents = students.filter((s) => s.score>= 50).length
//     const failedStudents = students.filter((s) => s.score <= 50).length
   
//     return (
//         <div>
//             <div>
//                 {['All', 'Passed', 'Failed'].map((btn) => (
//                     <button 
//                         key={btn}
//                         onClick={() => setFilter(btn)}
//                         style={{
//                             padding: "8px 16px",
//                             borderRadius: "20px",
//                             border: filter === btn ? "none" : "1px solid #ccc",
//                             backgroundColor: filter === btn ? "#03624b" : "#fff",
//                             color: filter === btn ? "#fff" : "#03624b",
//                             cursor: "pointer",
//                             fontWeight: "500",
//                             transition: "all 0.2s ease",
//                         }}
//                     >{btn}</button>
//                 ))}
//             </div>
//             <h2 style={{
//                 marginLeft: '10px'
//             }}>
//                 List of students:</h2>
//             <ul>
//                 {students.map((student, index) => (
//                     <li key={index}
//                         style={{display: "flex",
//                                 justifyContent: "space-evenly",
//                                 width: '40%',
//                                 padding: "10px",
//                                 margin: "8px 0",
//                                 background: "#f1c2e8ff",
//                                 borderRadius: "8px",
//                                 boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
//                                 padding: '5px'
//                         }}>
//                         <span><strong>{student.name}</strong> - {student.subject}</span>
//                         <span style={{color: student.score >= 50 ? "green" : "red"}}>
//                             {student.score >= 50 ? " ✅PASS" : "❌RED"}
//                         </span>
//                     </li>
//                 ))}
//             </ul>

//             <h3 style={{backgroundColor: "whitesmoke", 
//                         textAlign: 'start', 
//                         padding: '10px',
//                         width: '40%',
//                         marginLeft: '5px'}}>Total Students: {students.length} | Passed: {passedStudents} | Failed: {failedStudents}</h3>

//         </div>
//     )
// }

// export default StudentGrades;

import { useState } from "react";

function StudentGrades() {
  const students = [
    {name: 'Lamine Yamal', score: 85, subject: 'Football'},
    {name: 'Taylor Swift', score: 90, subject: 'Music'},
    {name: 'Connor Bedard', score: 40, subject: 'Hockey'}
  ];

  const [filter, setFilter] = useState("All");

  // Filter students based on button selection
  const filteredStudents = students.filter((student) => {
    if (filter === "Passed") return student.score >= 50;
    if (filter === "Failed") return student.score <= 50;
    return true;
  });

  const totalStudents = students.length;
  const passedStudents = students.filter((s) => s.score >= 50).length;
  const failedStudents = students.filter((s) => s.score <=50).length;
  const passRate = (passedStudents / totalStudents) * 100;

  return (
    <div
      style={{
        maxWidth: "650px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "12px",
        backgroundColor: "#edd6e2ff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#2d9279ff" }}>📚 Student Grades</h2>

      {/* Filter buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {["All", "Passed", "Failed"].map((btn) => (
          <button
            key={btn}
            onClick={() => setFilter(btn)}
            style={{
              padding: "8px 16px",
              borderRadius: "20px",
              border: filter === btn ? "none" : "1px solid #ccc",
              backgroundColor: filter === btn ? "#03624b" : "#fff",
              color: filter === btn ? "#fff" : "#03624b",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.2s ease",
            }}
          >
            {btn}
          </button>
        ))}
      </div>

      {/* Student list */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {filteredStudents.map((student, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 15px",
              margin: "8px 0",
              background: "#ffffff",
              borderRadius: "10px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <div>
              <strong>{student.name}</strong> — {student.subject}
            </div>

            <div
              style={{
                color: student.score >= 50 ? "green" : "red",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                gap: "5px",
              }}
            >
              {student.score >= 50 ? "✅ PASS" : "❌ FAIL"}
              <span style={{ fontSize: "14px", color: "#555" }}>
                ({student.score})
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* Stats section */}
      <div style={{ marginTop: "25px", textAlign: "center" }}>
        <p>
          <strong>Total Students: {students.length} | Passed: {passedStudents} | Failed: {failedStudents}</strong>
        </p>
        

        {/* Pass rate bar */}
        <div
          style={{
            height: "14px",
            background: "#ddd",
            borderRadius: "10px",
            overflow: "hidden",
            marginTop: "10px",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${passRate}%`,
              background: passRate >= 50 ? "green" : "red",
              transition: "width 0.3s ease",
            }}
          ></div>
        </div>

        <p style={{ marginTop: "8px", fontWeight: "bold", color: "#03624b" }}>
          Pass Rate: {passRate.toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

export default StudentGrades;
