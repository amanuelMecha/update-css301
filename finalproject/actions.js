/*eslint-disable*/

function clearOut() {
   let student = library.students.get(document.getElementById("student_name").value);
    let book = library.librarybooks.get(document.getElementById("book_title").value);
    if(book === undefined){
        alert("You can't do this operation this time first checkout book ")
    }else{
        student.returnBook(book);
        displayInfo();
   }
  }
  

function returnAllBooks() {
    let student = library.students.get(document.getElementById("student_name").value);
    let books = currentStudent.libraryCard.booksOut.map(obj => obj.name);
    document.getElementById("info").innerHTML = `Hi ${currentStudent.name}, your current books are: ${books}`;

}

function add(event) {
    let book = library.librarybooks.get(event.target.parentNode.value);
    checkOut(book);
    
}

function updateBooksOut(book) {
    let table = document.getElementById("booksOut");
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = book.name;
    let td2 = document.createElement("td");
    td2.innerHTML = book.overDueFee();
    let td3 = document.createElement("td");
    td3.innerHTML = book.dueDate;
    row.append(td1);
    row.append(td2);
    row.append(td3);
    table.append(row);
}

let currentStudent;

function pullInfo() {
    let student = library.students.get(document.getElementById("student_name").value);
    if(student === undefined){
        alert("Please enter your first name")
    }  
    if (!student) {
        console.log("Not found");
        return;
    }
    currentStudent = student;
    displayInfoPull();
}
function returnBookToLibrary() {
    let student = library.students.get(document.getElementById("student_name").value);
    let book = library.librarybooks.get(document.getElementById("book_title").value);
    if(book === undefined){
        alert("You don't have anything to return checkout first");
    }else{
        displayInfoReturn();
    }
       
}
function chekOutBook() {
    displayInfo();
}
function displayInfoPull() {
    clearAllBooks();
    let books = currentStudent.libraryCard.booksOut.map(obj => obj.name);
    document.getElementById("info").innerHTML = `Hi ${currentStudent.name}, your current books are: ${books}`;

}
function displayInfo() {
    clearAllBooks();
    let books = currentStudent.libraryCard.booksOut.map(obj => obj.name);
    //document.getElementById("info").innerHTML = `Hi ${currentStudent.name}, your current books are: ${books}`;
    if (currentStudent.libraryCard.booksOut.length > 0) {
        for (let book of currentStudent.libraryCard.booksOut) {
            let table = document.getElementById("booksOut");
            let row = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = book.name;
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            td3.innerHTML = book.dueDate;
            row.append(td1);
            row.append(td2);
            row.append(td3);
            table.append(row);
        }
    }
}
function displayInfoReturn() {
    clearAllBooks();
    let books = currentStudent.libraryCard.booksOut.map(obj => obj.name);
    if (currentStudent.libraryCard.booksOut.length > 0) {
        for (let book of currentStudent.libraryCard.booksOut) {
            let table = document.getElementById("booksOut");
            let row = document.createElement("tr");
            let td1 = document.createElement("td");
            td1.innerHTML = book.name;
            let td2 = document.createElement("td");
            td2.innerHTML = book.overDueFee();
            let td3 = document.createElement("td");
            row.append(td1);
            row.append(td2);
            table.append(row);
        }
    }
}

function checkOut(book) {
    if (!currentStudent) {
        alert("Please enter your name and click on Pull Info button.")
        return;
    }
    let books_before_checkout = currentStudent.libraryCard.booksOut;
    try {
        currentStudent.checkOutBook(book);
    } catch (e) {
        if (e instanceof ApplicationError) {
            alert("Insufficient balance");
            currentStudent.libraryCard.booksOut = books_before_checkout;
            return;
        }
    }
    let books = currentStudent.libraryCard.booksOut.map(obj => obj.name);
    document.getElementById("info").innerHTML = (`welcome to library ${books}`);
}

function clearAllBooks() {
    let table = document.getElementById('booksOut');
    let rows = document.querySelectorAll('#booksOut>tr')
    for (let i = rows.length; i > 0; i--) {
        table.deleteRow(i);
    }
}
