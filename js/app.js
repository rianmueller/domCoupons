//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

disclaimer.innerHTML = finePrint;

//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.

brand1.innerHTML = 'Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 

item1.innerHTML = 'Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.

price1.innerHTML = '$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!

discount1.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.

var item2Box = document.createElement('div');
item2Box.id = 'item2';
item2Box.innerHTML = 'Hendrick\'s Gin';
brand2.appendChild(item2Box);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

var price2Box = document.createElement('div');
price2Box.id = 'price2';
price2Box.innerHTML = '$34.99';
item2.appendChild(price2Box);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

var discount3Box = document.createElement('button');
discount3Box.id = 'discount3';
discount3Box.innerHTML = '50% OFF Axe body soap!';
document.querySelector('.block3').appendChild(discount3Box);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

document.querySelector('.item').innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

var discountBox = document.createElement('button');
discountBox.id = 'discount';
discountBox.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
document.querySelector('.item').appendChild(discountBox);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

document.getElementsByClassName('brand')[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

document.getElementsByClassName('price')[1].innerHTML = '10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

var brandBox = document.createElement('div');
brandBox.className = 'brand';
brandBox.innerHTML = 'Hifiman Shangri-La';
document.getElementsByClassName('social')[5].appendChild(brandBox);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

//Final Boss 
//Create your own product for the last three sections.
