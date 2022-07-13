import $ from "./lib/lib";

$("#first").on("click", ()=> {
  $("div").eq(1).fadeToggle(800);
});
$("[data-count='second']").on("click", ()=> {
  $("div").eq(2).fadeToggle(800);
});
$("button").eq(2).on("click", ()=> {
  $(".w-500").fadeToggle(800);
});

$(".wrap").html(
  `
    <div class="dropdown">
      <button class="btn btn-primary dropdown-toggle" id="dropdownMenuButton">DropDown Menu</button>
      <div class="dropdown__menu" data-toggle-id="dropdownMenuButton">
          <a href="#" class="dropdown-item">Main</a>
          <a href="#" class="dropdown-item">Action</a>
          <a href="#" class="dropdown-item">Side</a>
      </div>
  </div>
  `
);
$(".dropdown-toggle").dropdown();