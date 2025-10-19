    async function getStudentDetails() {
        try {
            let response = await fetch("http://127.0.0.1:8080/students_details");
            
            if (!response.ok) {
                throw new Error('Failed to load student details');
            }
            
            let details = await response.json();
            return details;
            
        } catch (error) {
            console.log('Error:', error);
            return [];
        }
    }
        