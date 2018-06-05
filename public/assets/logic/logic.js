$(function(){
  const $burgers = $("#burgers #notDevoured ol");

  $('#submit').on('click', function(event){
    event.preventDefault();
    const burgerNameInput = $("#burgerNameInput")
    const burgerName = burgerNameInput.val();

    if (burgerName === '') {
      alert("You must enter a burger name");
      burgerNameInput.css({ border: "3px solid red" });
      return;
    }

    // make ajax request to backend post route `/api/burgers` to retrieve data
    $.ajax({
      url: "/api/burgers",
      method: "POST",
      data: {
        burger_name: burgerName
      }
    }).then(function(data) {
      // retrieve data thats sent from backend route via `res.json(...)`
      const burgerHtml = `
        <div class="burger">
          <li>
            <h3>${data.burger_name}</h3>
            <button class="devoured-burger" data-id="${data.id}">Devour!</button>
          </li>
        </div>
      `;
      $burgers.append(burgerHtml);
      burgerNameInput.val("")
    });
  });

  $(document).on('click', '.devoured-burger', function(e){ //listening to click event on doc when its updated/refreshed rather than using $(.devoured-burger).on('click) becuase this only listens elements current in doc. wont listen for future burgers
    const burger = $(e.target).parent().parent();
    const burgerName = $(e.target).siblings("h3").text();
    
    const id = $(this).data("id")
    $.ajax({
      url: "/api/burgers/" + id, 
      method: "PUT",
      data: {
        devoured: true 
      } 
    }).then(function(data){
      console.log(data)
      burger.remove();
      const burgerHtml = `
        <div class="burger">
          <li>
            <h3>${burgerName}</h3>
          </li>
        </div>
      `;
      $("#burgers #devoured ol").append(burgerHtml);
    })
  })
});