// Storage Controller

// const StorageCtrl = (function(){
//     return {

//     }
// })


// Item Controller

const ItemCtrl = (function(){
    // Item Constructor
    const item = function(id, name, money){
        this.id = id;
        this.name = name;
        this.money = money;
    }

    // Data Structure / State
    const data = {
        items: [
            // {id: 0, name: "Mobile", money: 1200},
            // {id: 1, name: "Bike", money: 3000},
            // {id: 2, name: "Tv", money: 600},
        ],
        currentItem: null,
        totalMoney: 0
    }

    return {
        getItem: function(){
            return data.items;
        },
        addItem: function(name, money){
            let ID;
            // Create ID

            if(data.items.length > 0){
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

        }
    }
})();


// UI Controller

const UICtrl = (function(){

    const UISelectors = {
        itemList:"#item-list",
        addBtn: ".add-btn",
        updateBtn: ".update-btn",
        deleteBtn: ".delete-btn",
        backBtn: ".back-btn",
        itemNameInput: "#item-name",
        itemNameMoney: "#item-money",
        noItem: ".no-item"
    }

    return {
        displayItemToUI: function(items){
            let html;

            items.forEach(function(item){
              html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name} : <em>${item.money}$</em></strong>
                <a href="#" class="secondary-content">
                    <i class="fa fa-pencil"></i>
                </a>
              </li>`
            })

            // Insert List items
            document.querySelector(UISelectors.itemList).innerHTML = html;
        },
        clearEditState: function(){
            document.querySelector(UISelectors.addBtn).style.display = "inline";
            document.querySelector(UISelectors.updateBtn).style.display = "none";
            document.querySelector(UISelectors.deleteBtn).style.display = "none";
            document.querySelector(UISelectors.backBtn).style.display = "none";
        },
        getItemInput: function(){
            return {
                name: document.querySelector(UISelectors.itemNameInput).value,
                money: document.querySelector(UISelectors.itemNameMoney).value,
            }
        },
        addListItem: function(item){
          // Create li element
          const li = document.createElement("li");

          // Add class to li
          li.className = "collection-item";

          // Add ID
          li.id = `item-${item.id}`;

         // Add HTML
         li.innerHTML = `
                <strong>${item.name} : <em>${item.money}$</em></strong>
                <a href="#" class="secondary-content">
                    <i class="fa fa-pencil"></i>
                </a>
           `;
        
        // Insert Item
        document.querySelector(UISelectors.itemList).appendChild(li);   
        },
        clearInput: function(){
            document.querySelector(UISelectors.itemNameInput).value = "";
            document.querySelector(UISelectors.itemNameMoney).value = "";
        },
        showItem: function(){
            document.querySelector(UISelectors.noItem).style.display = "block";
            document.querySelector(UISelectors.noItem).style.textAlign = "center";
        },
        hideItem: function(){
            document.querySelector(".no-item").style.display = "none";
            document.querySelector(UISelectors.noItem).style.textAlign = "center";
        }
        
    }
})();




// App Controller

const App = (function(ItemCtrl,UICtrl){

    const loadEventListeners = function(){
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);
        
    }


    // Add item submit
    const itemAddSubmit = function(e){

        e.preventDefault();
        
        const input = UICtrl.getItemInput();

        if(input.name !== "" & input.money !== ""){
            document.querySelector("#item-list").style.display = "block";
            // Add Item
            const newItem = ItemCtrl.addItem(input.name, input.money);

            // Add item to ui list
            UICtrl.addListItem(newItem);

            UICtrl.clearInput();

            UICtrl.hideItem();
        }
    }


    return {
        // Intializing App
        init: function(){
            
            UICtrl.clearEditState();

            // Fetch items from data structure
            const items = ItemCtrl.getItem(); // array

            if(items.length === 0){
                UICtrl.showItem();
                document.querySelector("#item-list").style.display = "none";
            } else {
                document.querySelector("#item-list").style.display = "block";
                UICtrl.hideItem();
                UICtrl.displayItemToUI(items);
            }

            loadEventListeners();
        }
    }

})(ItemCtrl,UICtrl);

App.init();




// const test = (function(){
//     const test = "Your test"
//     return { 
//          test:test
//     }
// })();

// console.log(test);]

