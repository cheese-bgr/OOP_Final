
// Get references to form elements
const btnCreate = document.getElementById("btnCreate");
const btnRead = document.getElementById("btnRead");
const btnDelete = document.getElementById("btnDelete");
const btnUpdate = document.getElementById("btnUpdate");

const fileNameInput = document.getElementById("fileName");
const fileContentsInput = document.getElementById("fileContents");

// CREATE function
btnCreate.addEventListener("click", () => {
  const fileName = fileNameInput.value;
  const fileContent = fileContentsInput.value;

  if (fileName && fileContent) {
    localStorage.setItem(fileName, fileContent);
    alert("Review created successfully!");
    clearFields();
  } else {
    alert("Please enter both name and content.");
  }
});

// READ function
btnRead.addEventListener("click", () => {
  const fileName = fileNameInput.value;

  if (fileName) {
    const content = localStorage.getItem(fileName);
    if (content) {
      fileContentsInput.value = content;
    } else {
      alert("Review not found!");
    }
  } else {
    alert("Please enter the name of the review to read.");
  }
});

// UPDATE function
btnUpdate.addEventListener("click", () => {
  const fileName = fileNameInput.value;
  const fileContent = fileContentsInput.value;

  if (fileName && fileContent) {
    if (localStorage.getItem(fileName)) {
      localStorage.setItem(fileName, fileContent);
      alert("Review updated successfully!");
      clearFields();
    } else {
      alert("Review does not exist.");
    }
  } else {
    alert("Please enter both name and new content.");
  }
});

// DELETE function
btnDelete.addEventListener("click", () => {
  const fileName = fileNameInput.value;

  if (fileName) {
    if (localStorage.getItem(fileName)) {
      localStorage.removeItem(fileName);
      alert("Review deleted successfully!");
      clearFields();
    } else {
      alert("Review not found!");
    }
  } else {
    alert("Please enter the name of the review to delete.");
  }
});

// Function to clear input fields
function clearFields() {
  fileNameInput.value = "";
  fileContentsInput.value = "";
}
