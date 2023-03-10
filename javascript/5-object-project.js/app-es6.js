class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


class Store {
    static getBooks(){
        let books;

        if(localStorage.getItem("books") === null){
            books = [];
        } else {
            books = JSON.parse(localStorage.getItem("books"));
        }
        return books;
    }

    static addBook(book){
        const books = Store.getBooks();

        books.push(book);

        localStorage.setItem("books", JSON.stringify(books));
    }

    static displayBooks(){
        const books = Store.getBooks();
        
        books.forEach(function(book){
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
        })
    }

    static removeBook(isbn){
        const books = Store.getBooks();
        books.forEach(function(book, index){
          if(book.isbn === isbn){
            books.splice(index, 1);
          }
        });

        localStorage.setItem("books", JSON.stringify(books));

    }
   
}

class UI{
    // Add Book
    addBooktoList = function(book){
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

    showAlert = function(message, className){
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

    deleteBook = function(target){
        if(target.className === "delete"){
          target.parentElement.parentElement.remove();
        }
    }

    clearFields = function(){
        document.querySelector('#title').value = "";
        document.querySelector('#author').value = "";
        document.querySelector('#isbn').value = "";
    }

}


document.addEventListener("DOMContentLoaded", Store.displayBooks);


// Event Listener for Add Book

document.getElementById("book-form").addEventListener("submit", function(e){
    e.preventDefault();
   
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    const ui = new UI();

    const book = new Book(title,author, isbn);

    if(title === "" || author === "" || isbn === ""){
       // show Error
       ui.showAlert("Please Fill the fields", "alert-error");
      return;
    } else {
        ui.addBooktoList(book);

        // Add To LS
        Store.addBook(book);

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

        Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

        ui.showAlert("Book Deleted", "alert-success");
    }
})

// run();



// function run(){
//     const name = "jagan";
//     console.log(name)
// }
// console.log(greet());

// const greet = function(){
//     const name = "jagan";
//     return`hello ${name}`;
// }                                           


// var arr = [1,2,3,4,5];


// var arrToString = JSON.stringify(arr);

// var stringToArr = JSON.parse(arrToString);

// console.log(stringToArr);
// console.log(typeof stringToArr);

// const arr = [1,2,3,4,5];
// const arr2 = [6,7,8,9,10];

// const result = [...arr,...arr2];

// console.log(result);