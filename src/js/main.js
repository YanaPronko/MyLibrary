import $ from "./lib/lib";

/* $("#first").on("click", ()=> {
  $("div").eq(1).fadeToggle(800);
});
$("[data-count='second']").on("click", ()=> {
  $("div").eq(2).fadeToggle(800);
});
$("button").eq(2).on("click", ()=> {
  $(".w-500").fadeToggle(800);
}); */

// dropDown menu dynamic method
/* $(".wrap").html(
  `
    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle-js" id="dropdownMenuButton">DropDown Menu</button>
      <div class="dropdown__menu" data-toggle-id="dropdownMenuButton">
          <a href="#" class="dropdown-item">Main</a>
          <a href="#" class="dropdown-item">Action</a>
          <a href="#" class="dropdown-item">Side</a>
      </div>
  </div>
  `
);
$(".dropdown-toggle-js").dropdown(); */

// Modal dynamic method
/* 
$('#trigger').click(() => $('#trigger').createModal({
  text: {
    title: 'Modal title',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum minus doloremque nesciunt enim rem quam corporis? Dolorem pariatur magnam distinctio perferendis. Ratione dolorem voluptates iusto facilis odit veritatis, suscipit voluptatibus!'
  },
  btns: {
    count: 3,
    settings: [
      [
        'Close',
        ['btn-danger', 'mr-10'],
        true
      ],
      [
        'Save changes',
        ['btn-success'],
        false,
        () => {
          alert('Данные сохранены');
        }
      ],
      [
        'Another btn',
        ['btn-warning', 'ml-10'],
        false,
        () => {
          alert('Hello World');
        }
      ]
    ]
  }
}));
 */
// carousel dynamic method

/* $("#example-2")
  .createCarousel({
    width: 850,
    height: 450,
    slides: [
      {
        src: "https://tushlar.ru/wp-content/uploads/2021/02/tushda-mashina-1.jpg",
        alt: "white-car",
      },
      {
        src: "https://img1.goodfon.ru/original/1280x720/6/a1/lamborghini-aventador-1634.jpg",
        alt: "red-car",
      },
      {
        src: "https://img2.goodfon.ru/original/1280x720/7/99/lamborghini-murcielago-5124.jpg",
        alt: "yellow-car",
      },
    ],
  })
  .carousel(4000);
 */
  // Get-запрос

/* $().get('https://jsonplaceholder.typicode.com/todos/1')
  .then(res => console.log(res));
  
$().post('https://jsonplaceholder.typicode.com/posts', JSON.stringify({ title: 'foo', body: 'bar', userId: 1 }))
  .then(res=> console.log(res));
 */