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
            {id: 0, name: "Mobile", money: 1200},
            {id: 1, name: "Bike", money: 3000},
            {id: 2, name: "Tv", money: 600},
        ],
        currentItem: null,
        totalMoney: 0
    }

    return {
        getItem: function(){
            return data.items;
        },
        addItem: function(name, money){
            // ID
            let ID;
            // Create ID
            if(data.items.length > 0){
                ID = data.items[data.items.length - 1].id + 1;
            } else {
                ID = 0;
            }
            money = parseInt(money);
            // Create A new Item
            newItem = new item(ID, name, money);

            // Add to item array
            data.items.push(newItem);

            return newItem;
        }
    }
})();

// UI Controller

const UICtrl = (function(){
    return {
        populateItemList: function(items){
            let html = "";

            items.forEach(function(item){
                html += `<li class="collection-item" id="item-${item.id}">
                <strong>${item.name} : <em>${item.money}$</em></strong>
                <a href="#" class="secondary-content">
                    <i class="fa fa-pencil"></i>
                </a>
              </li>`;
            })

            // Insert into ul
            document.querySelector(".collection").innerHTML = html;
        },
        getItemInput : function(){
            return{
                name : document.querySelector("#item-name").value,
                money: document.querySelector("#item-money").value
            }
        }
    }
})();




// App Controller

const App = (function(ItemCtrl, UICtrl){

    const loadEventListeners = function(){
        document.querySelector(".add-btn").addEventListener("click", itemAddSubmit);
    }

    // Add Item Submit

    const itemAddSubmit = function(e){

        const input = UICtrl.getItemInput();

        if(input.name !== "" && input.money !== ""){
          // Add Item 
          const newItem = ItemCtrl.addItem(input.name, input.money);
        }



        e.preventDefault();
    }

    return {
        // Intializing App
        init: function(){
            
            // Fetch items from data structure
            const items = ItemCtrl.getItem(); // array

            if(items.length === 0){
                console.log("No items");
            } else {
                UICtrl.populateItemList(items);
            }

            loadEventListeners();
        }
    }

})(ItemCtrl, UICtrl);

App.init();


