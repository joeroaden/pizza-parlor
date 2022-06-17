// Business Logic
function TicketsSold() {
  this.tickets = {};
  this.currentId = 0;
}

TicketsSold.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
}

TicketsSold.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


function Ticket(title, rating, age, time, day, isStudent, isMember) {
  this.title = title;
  this.rating = rating;
  this.age = age;
  this.time = time;
  this.day = day;
  this.isStudent = isStudent;
  this.isMember = isMember;
  this.priceMsg = this.calculateTicketPrice();
}

/*
  extended goal(?)
  change price based on size of screen (IMAX 3D, IMAX 2D, 4D, REALD 3D, Digital Cinema)
*/
Ticket.prototype.calculateTicketPrice = function() {
  const basePrice = 8;
  let output = [basePrice, ""];
  if (this.age <= 8 || this.age >= 60) {
    output[0] -= 2;
    output[1] = "Congratulations, you get a discount due to your age!";
  }
  if (this.isStudent) {
    output[0] -= 1;
    output[1] = "Congratulations, you get a student discount!";
  }  
  if (this.isMember) {
    output[0] -= 1;
    output[1] = "Congratulations, you get a membership discount!";
  }
  if (this.isMember && this.isStudent) {
    output[0] += 1;
    output[1] = "Sorry you can't qualify for both of these discounts."
  }
  if (basePrice - 3 === output[0]) {
    output[1] = "Congratulations, you qualify for two discounts!";
  }
  if (basePrice - 4 === output[0] && this.isMember) {
    output[0] += 5;
    output[1] = "Are you really a member, student, and " + this.age + " years old?";
  }
  return output;
};

function MovieList() {
  this.movies = {};
  this.currentId = 0;
}

MovieList.prototype.addMovie = function(movie) {
  movie.id = this.assignId();
  this.movies[movie.id] = movie;
}

MovieList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

MovieList.prototype.findMovie = function(id) {
  if (this.movies[id] != undefined) {
    return this.movies[id];
  }
  return false;
}

function Movie(title, rating) {
  this.title = title;
  this.rating = rating;
}

// User Interface Logic

let movieList = new MovieList();
let ticketsSold = new TicketsSold();

$(document).ready(function() {
  // creating movies and adding them to movieList
  let drStrange = new Movie('Dr. Strange in the Multiverse of Madness', 'PG-13');
  movieList.addMovie(drStrange);

  let lightyear = new Movie('Lightyear', 'PG');
  movieList.addMovie(lightyear);

  let jurassicWorld = new Movie('Jurassic World: Dominion', 'PG-13');
  movieList.addMovie(jurassicWorld);

  let blackPhone = new Movie('The Black Phone', 'R');
  movieList.addMovie(blackPhone);

  // when movie posters are clicked
  $('.movie-poster img').click(function() {
    let poster = this;
    if ($('form#ticketForm').is(':visible')) {
      $('form#ticketForm').slideUp(function() {
        fillTicketInfo(poster);
      });
    } else {
      fillTicketInfo(poster);
    } 
  });

  $('#howmuch-button').click(function(event) {
    event.preventDefault();
    const ticket = getTicket();
    // print in ticketReturn the price and the msg
    $('#ticket-price').text("$ " + ticket.priceMsg[0]);
    $('#ticket-price-msg').text(ticket.priceMsg[1]);
    $('.ticketReturn').toggle();
    // enable ticket buy button
    $('#buy-button').removeAttr('disabled');
  });
  
  $('form#ticketForm').submit(function(event) {
    event.preventDefault();
    const ticket = getTicket();
    ticketsSold.addTicket(ticket);
    attachSoldTickets(ticket);
    // clear fields and disable ticket buy button
    $('#buy-button').prop('disabled', true);
    clearTicketInformation();
  });
});

function fillTicketInfo(poster) {
  const movie = movieList.findMovie(parseInt(poster.parentElement.id));
  $('#movie-title').text(movie.title);
  $('#rating').text(movie.rating);
  $('#movieId').text(movie.id);
  $('form#ticketForm').slideToggle();
}

function attachSoldTickets(ticket) {
  const title = document.createElement('ul');
  title.innerHTML = ticket.title;
  const age = document.createElement('li');
  age.innerHTML = ticket.age;
  const dayTime = document.createElement('li');
  dayTime.innerHTML = ticket.day + " " + ticket.time;
  const isStudent = ticket.isStudent;
  const isMember = ticket.isMember;
  const price = document.createElement('li');
  price.innerHTML = "$ " + ticket.priceMsg[0];
  let discounts = "";
  if (ticket.isStudent) {
    discounts += 'Student Discount ';
  }
  if (ticket.isMember) {
    discounts += 'Membership Discount ';
  } 
  if (ticket.age <= 8 || ticket.age >= 60) {
    if (ticket.isStudent && ticket.isMember) {
      discounts = "Can't Use ALL Discounts"
    } else {
      discounts += 'Age Discount';
    }
  } else {
    discounts = 'No discount applied';
  }
  const discountLI = document.createElement('li');
  discountLI.innerHTML = discounts;
  title.appendChild(age);
  title.appendChild(dayTime);
  title.appendChild(price);
  title.appendChild(discountLI);
  $('#tickets-sold-list').append(title);
  $('#tickets-sold h5').show();
}

function getTicket() {
  const title = $('#movie-title').text();
  const rating = $('#rating').text();
  const age = parseInt($('#age').val());
  const movieTime = $('#time').val();
  const day = $('#day').val();
  let isStudent = $('input:checkbox[name=student-discount-checkbox]:checked').val();
  if (isStudent === 'on') {
    isStudent = true;
  } else {
    isStudent = false;
  }
  let isMember = $('input:checkbox[name=member-discount-checkbox]:checked').val();
  if (isMember === 'on') {
    isMember = true;
  } else {
    isMember = false;
  }
  return new Ticket(title, rating, age, movieTime, day, isStudent, isMember);
}

function clearTicketInformation() {
  $('#age').val("");
  $('input:checkbox[name=student-discount-checkbox]').prop('checked', false);
  $('input:checkbox[name=member-discount-checkbox]').prop('checked', false);
  $('.ticketReturn').toggle();
}
