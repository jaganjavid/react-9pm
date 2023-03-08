// Storage Controller

// const StorageCtrl = (function(){
//     return {

//     }
// })


// Item Controller

const ItemCtrl = (function () {
    // Item Constructor
    const item = function (id, name, money) {
        this.id = id;
        this.name = name;
        this.money = money;
    }

    // Data Structure / State
    const data = {
        items: [
            {id: 0, name: "Mobile", money: 1200},
            {id: 1, name: "Bike", money: 3000},
            {id: 2, name: "Tv", money: 600},
        ],
        currentItem: null,
        totalMoney: 0
    }

    return {
        getItem: function () {
            return data.items;
        },
        getCurrentItem:function(){
          return data.currentItem;
        },
        getTest: function () {
            return data.totalMoney;
        },
        addItem: function (name, money) {
            let ID;
            // Create ID
            if (data.items.length > 0) {
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            money = parseInt(money);
            // Create new Item
            newItem = new item(ID, name, money);
            // Add to Item array
            data.items.push(newItem);
            return newItem;
        },
        getTotalMoney: function () {
            let total = 0;

            if (data.items.length > 0) {
                data.items.forEach(function (item) {
                    total += item.money;
                    data.totalMoney = total;
                })
                return data.totalMoney;
            } else {
                return data.totalMoney = 0;
            }
        },
        getItemById: function(id){
            let found = null;
            // Loop through Items
            data.items.forEach(function(item){
               if(item.id === id){
                  found = item;
               }
            })
            return found;
        },
        setCurrentItem: function(item){
            data.currentItem = item;
        }
    }
})();



// UI Controller

const UICtrl = (function () {

    const UISelectors = {
        itemList: "#item-list",
        addBtn: ".add-btn",
        updateBtn: ".update-btn",
        deleteBtn: ".delete-btn",
        backBtn: ".back-btn",
        itemNameInput: "#item-name",
        itemNameMoney: "#item-money",
        noItem: ".no-item",
        total: ".total-money"
    }

    return {
        displayItemToUI: function (items) {
            let html;

            items.forEach(function (item) {
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name} : <em>${item.money}$</em></strong>
                <a href="#" class="secondary-content edit-item">
                    <i class="fa fa-pencil"></i>
                </a>
              </li>`
            })

            // Insert List items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        clearEditState: function () {
            document.querySelector(UISelectors.addBtn).style.display = "inline";
            document.querySelector(UISelectors.updateBtn).style.display = "none";
            document.querySelector(UISelectors.deleteBtn).style.display = "none";
            document.querySelector(UISelectors.backBtn).style.display = "none";
        },
        getItemInput: function () {
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                money: document.querySelector(UISelectors.itemNameMoney).value,
            }
        },
        addListItem: function (item) {
            // Create li element
            const li = document.createElement("li");

            // Add class to li
            li.className = "collection-item";

            // Add ID
            li.id = `item-${item.id}`;

            // Add HTML
            li.innerHTML = `
                <strong>${item.name} : <em>${item.money}$</em></strong>
                <a href="#" class="secondary-content edit-item">
                    <i class="fa fa-pencil"></i>
                </a>
           `;

            // Insert Item
            document.querySelector(UISelectors.itemList).appendChild(li);
        },
        showTotalMoney: function (total) {
            document.querySelector(UISelectors.total).textContent = total;
        },
        clearInput: function () {
            document.querySelector(UISelectors.itemNameInput).value = "";
            document.querySelector(UISelectors.itemNameMoney).value = "";
        },
        showItem: function () {
            document.querySelector(UISelectors.noItem).style.display = "block";
            document.querySelector(UISelectors.noItem).style.textAlign = "center";
        },
        hideItem: function () {
            document.querySelector(UISelectors.noItem).style.display = "none";
            document.querySelector(UISelectors.noItem).style.textAlign = "center";
        },
        getSelector: function () {
            return UISelectors;
        },
        showEditState: function(){
            document.querySelector(UISelectors.addBtn).style.display = "none";
            document.querySelector(UISelectors.updateBtn).style.display = "inline";
            document.querySelector(UISelectors.deleteBtn).style.display = "inline";
            document.querySelector(UISelectors.backBtn).style.display = "inline";
        },
        addItemToForm: function(){
           document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
           document.querySelector(UISelectors.itemNameMoney).value = ItemCtrl.getCurrentItem().money;
        },
        changeLabelClass: function(){
            let label = document.querySelectorAll(".input-field label");
           label.forEach(function(item){
                item.classList.add("active");
           })
        }
    }
})();




// App Controller

const App = (function (ItemCtrl, UICtrl) {

    const UISelectors = UICtrl.getSelector();

    const loadEventListeners = function () {
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);
    }


    // Add item submit
    const itemAddSubmit = function (e) {

        e.preventDefault();

        const input = UICtrl.getItemInput();

        if (input.name !== "" & input.money !== "") {
            document.querySelector(UISelectors.itemList).style.display = "block";
            // Add Item
            const newItem = ItemCtrl.addItem(input.name, input.money);

            // Add item to ui list
            UICtrl.addListItem(newItem);

            // Get Input Money
            const total = ItemCtrl.getTotalMoney();

            // Show Total
            UICtrl.showTotalMoney(total);

            
            UICtrl.clearInput();

            UICtrl.hideItem();
        }
    }

    // Edit Icon Click

    function itemEditClick(e) {
        if (e.target.parentElement.classList.contains("edit-item")) {
           const listId = e.target.parentElement.parentElement.id;

            // Break into Array
            const listArr = listId.split("-");

            // Get the Actual id
            const id = parseInt(listArr[1]);
            
            // Get item
            const itemToEdit = ItemCtrl.getItemById(id);

            // Set Current Item
            ItemCtrl.setCurrentItem(itemToEdit);

            // Show All btn but not add btn
            UICtrl.showEditState();

            // Add Class to label
            UICtrl.changeLabelClass();

            // Add Item to form
            UICtrl.addItemToForm();
        }
    }

    return {
        // Intializing App
        init: function () {

            UICtrl.clearEditState();

            // Fetch items from data structure
            const items = ItemCtrl.getItem(); // array

            if (items.length === 0) {
                UICtrl.showItem();
                document.querySelector("#item-list").style.display = "none";
            } else {
                document.querySelector("#item-list").style.display = "block";
                UICtrl.hideItem();
                UICtrl.displayItemToUI(items);
                // Get Input Money
                const total = ItemCtrl.getTotalMoney();
                UICtrl.showTotalMoney(total);
            }

            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl);

App.init();





// const test = (function(){

//     // Function
//     function getName(){
//         return `My name is jagan`;
//     }
  
//     return {
//         // Methode
//         name: getName
//     }

// })();

// console.log(test.name());