function findHighestMarks() {
    const marksInput = document.getElementById("marks").value;
    const marksArray = marksInput.split(",");
    let highestMarks = 0;
  
    for (let i = 0; i < marksArray.length; i++) {
      const marks = parseFloat(marksArray[i]);
  
      if (marks > highestMarks) {
        highestMarks = marks;
      }
    }
  
    const student = marksArray.indexOf(highestMarks.toString()) + 1;
    const message = "The highest marks scored by a student is " + highestMarks + " (Student " + student + ")";
  
    document.getElementById("result").innerHTML = message;
  }
  