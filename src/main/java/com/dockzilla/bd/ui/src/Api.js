 async function getAllCells() {
     const response = await fetch('/api/students');
     return await response.json();
 }
 async function deleteStudents(data) {
     const url = `/api/students` + '?' + (new URLSearchParams(data)).toString();

     const response = await fetch(url, {
         method: "DELETE",
     })
     return await response.json();

 }



 async function recStudent(data) {
    const url = `/api/students` + '?' + (new URLSearchParams(data)).toString();

     const response = await fetch(url, {
         method: "POST",
    
     })

     return await response.json();

 }

 async function deleteAllInBD(data) {
     const response = await fetch(`/api/clear`, {
         method: "POST"
     })
     return await response.json();

 }

 export {
     getAllCells,
     deleteStudents,
     recStudent,
     deleteAllInBD
 }