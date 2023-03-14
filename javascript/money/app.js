// Storage Controller

const StorageCtrl = (function(){
    return {
        storeItem : function(item){
            let items;

            // Check if any item in LS
            if(localStorage.getItem("items") === null){
                items = [];
                // Push New Item
                items.push(item);

                // Set LS
                localStorage.setItem("items", JSON.stringify(items));
            } else {
                // Get the existing data from the ls
                items = JSON.parse(localStorage.getItem("items"));
                
                // Push new item to existing arr
                items.push(item);

                // Update the data to same array and push to ls
                localStorage.setItem("items", JSON.stringify(items));
            }
        },
        getItemsFromStorage: function(){
            let items;
            // Check if any item in LS
            if(localStorage.getItem("items") === null){
                items = [];
            } else {
                 // Get the existing data from the ls
                 items = JSON.parse(localStorage.getItem("items"));
            }
            return items;
        },
        updateItemStorage:function(updatedItem){
            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach(function(item, index){
                if(updatedItem.id === item.id){
                    items.splice(index,1,updatedItem);
                }
            })

            localStorage.setItem("items", JSON.stringify(items));
        },
        deleteItemStorage: function(id){
            let items = JSON.parse(localStorage.getItem("items"));

            items.forEach(function(item, index){
                if(id === item.id){
                    items.splice(index,1);
                }
            })

            localStorage.setItem("items", JSON.stringify(items));
        },
        clearItemsFromStorage: function(){
            localStorage.removeItem("items");
            // localStorage.clear();
        }
    }
})();


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
        // items: [
        //     {id: 0, name: "Mobile", money: 1200},
        //     {id: 1, name: "Bike", money: 3000},
        //     {id: 2, name: "Tv", money: 600},
        // ],
        items: StorageCtrl.getItemsFromStorage(),
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
        },
        updateItem: function(name, money){
            // Money to number
            money = parseInt(money);
            let found = null;

            data.items.forEach(function(item){
                if(item.id === data.currentItem.id){
                    item.name = name;
                    item.money = money;
                    found = item;
                }
            })
            return found;
        },
        deleteItem: function(id){
            // Get IDs 
            const ids = data.items.map(function(item){
                return item.id;
            })
            // Get Index
            const index = ids.indexOf(id);
            data.items.splice(index, 1);
        },
        clearAllItems: function(){
            data.items = [];
        }
    }
})();



// UI Controller

const UICtrl = (function () {

    const UISelectors = {
        itemList: "#item-list",
        listItems: "#item-list li",
        addBtn: ".add-btn",
        updateBtn: ".update-btn",
        deleteBtn: ".delete-btn",
        backBtn: ".back-btn",
        clearBtn: ".clear-btn",
        itemNameInput: "#item-name",
        itemNameMoney: "#item-money",
        noItem: ".no-item",
        total: ".total-money"
    }

    return {
        displayItemToUI: function (items) {
            let html = "";

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
        },
        updateListItem: function(item){
           let listItems = document.querySelectorAll(UISelectors.listItems);
           
           listItems.forEach(function(listItem){
            const itemID = listItem.getAttribute("id");
            
            if(itemID === `item-${item.id}`){
                document.querySelector(`#${itemID}`).innerHTML = `
                    <strong>${item.name} : <em>${item.money}$</em></strong>
                    <a href="#" class="secondary-content edit-item">
                        <i class="fa fa-pencil"></i>
                    </a>
                `;
            }
            
           })
        },
        deleteListItem: function(id){
            const itemID = `#item-${id}`;
            const item = document.querySelector(itemID);
            item.remove();
        },
        removeItems: function(){
            const listItems = document.querySelectorAll(UISelectors.listItems);

            listItems.forEach(function(item){
                item.remove();
            })
        }
    }
})();




// App Controller

const App = (function (ItemCtrl, UICtrl, StorageCtrl) {

    const UISelectors = UICtrl.getSelector();

    const loadEventListeners = function () {

        // Add Event
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);

        // Edit icon click event
        document.querySelector(UISelectors.itemList).addEventListener("click", itemEditClick);

        // Update Item Event

        document.querySelector(UISelectors.updateBtn).addEventListener("click", itemUpdateSubmit);

        // Delete Item Event

        document.querySelector(UISelectors.deleteBtn).addEventListener("click", itemDeleteSubmit);

        // Clear Item Event
        document.querySelector(UISelectors.clearBtn).addEventListener("click", clearAllItem);

        // Back Button Event
        document.querySelector(UISelectors.backBtn).addEventListener("click", function(e){
            e.preventDefault();
            UICtrl.clearEditState();
        })
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

            // Store to LS
            StorageCtrl.storeItem(newItem);
            
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


    // Item Update Submit

    const itemUpdateSubmit = function(e){
        //    Get Item Inout
        const input = UICtrl.getItemInput();
    
        // Update Item
        const updateItem = ItemCtrl.updateItem(input.name, input.money);
    
        // Update UI
        UICtrl.updateListItem(updateItem);
    
        // Get Total MOney
        const totalMoney = ItemCtrl.getTotalMoney();
    
        // Add today to ui money
        UICtrl.showTotalMoney(totalMoney);

        StorageCtrl.updateItemStorage(updateItem);

        UICtrl.clearEditState();
        
        UICtrl.clearInput();
    }


    // Item Delete Submit

    const itemDeleteSubmit = function(e){
        // Get Current Item
        const currentItem = ItemCtrl.getCurrentItem();
        
        // Delete From Data Structure
        ItemCtrl.deleteItem(currentItem.id);

        // Delete From UI
        UICtrl.deleteListItem(currentItem.id)

        // Get Total MOney
        const totalMoney = ItemCtrl.getTotalMoney();

        // Add today to ui money
        UICtrl.showTotalMoney(totalMoney);

        StorageCtrl.deleteItemStorage(currentItem.id);

        // Clear a Edit State
        UICtrl.clearEditState();

        // Clear Input
        UICtrl.clearInput();

        const getData = ItemCtrl.getItem();

        if(getData.length === 0){
            UICtrl.showItem();
            document.querySelector("#item-list").style.display = "none";
        }

        
    }

    const clearAllItem = function(){
        // // Data Clear
        ItemCtrl.clearAllItems();

        // // Remove From UI
        UICtrl.removeItems();

        //  // Get Total MOney
         const totalMoney = ItemCtrl.getTotalMoney();
    
        //  // Add today to ui money
         UICtrl.showTotalMoney(totalMoney);

        //  clear Storage
        StorageCtrl.clearItemsFromStorage();
         UICtrl.showItem();
         document.querySelector("#item-list").style.display = "none";
         
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

})(ItemCtrl, UICtrl, StorageCtrl);

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

