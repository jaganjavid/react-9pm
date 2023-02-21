// Book Constructor

function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

// UI Constructor

function UI(){


    UI.prototype.addBooktoList = function(book){
        const list = document.querySelector("#book-list");
        
        // Create tr element
        const row = document.createElement('tr');

        // Insert Cols
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }


    // ShowAlert

    UI.prototype.showAlert = function(message, className){
        // Create Div

        const div = document.createElement("div");

        // Add Class
        div.className = `alert ${className}`;

        // Add text 
        div.appendChild(document.createTextNode(message));

        // Get Parent
        const container = document.querySelector(".container");

        // Get Form
        const form = document.querySelector("#book-form");

        // insert Alert
        container.insertBefore(div, form);

        // Timeout after 3 sec
        setTimeout(function(){
            document.querySelector(".alert").remove();
        }, 3000)

    }

    // Delete Books
    UI.prototype.deleteBook = function(target){
        if(target.className === "delete"){
          target.parentElement.parentElement.remove();
        }
    }

    // Clear Fields
    UI.prototype.clearFields = function(){
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }

}


// Event Listener for Add Book

document.getElementById("book-form").addEventListener("submit", function(e){
    e.preventDefault();
   
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const ui = new UI();

    const book = new Book(title,author, isbn);

    if(title === "" || author === "" || isbn === ""){
       // show Success
       ui.showAlert("Please Fill the fields", "alert-error");
      return;
    } else {
        ui.addBooktoList(book);

        // show Success
        ui.showAlert("Book Added", "alert-success");
        ui.clearFields();
    }
})

// Event Listener for Delete

document.getElementById("book-list").addEventListener("click", function(e){
    e.preventDefault();

    if(e.target.className === "delete"){
        // Instantiate UI
        const ui = new UI();

        // Delete Book
        ui.deleteBook(e.target);
    }
})


