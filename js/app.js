//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

let finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'

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

let item2Box = document.createElement('div');
item2Box.id = 'item2';
item2Box.innerHTML = 'Hendrick\'s Gin';
brand2.appendChild(item2Box);

//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.

let price2Box = document.createElement('div');
price2Box.id = 'price2';
price2Box.innerHTML = '$34.99';
item2.appendChild(price2Box);

//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.

let block1Class = document.getElementsByClassName('block1');
let block2Class = document.getElementsByClassName('block2');
let block3Class = document.getElementsByClassName('block3');

let discount3Box = document.createElement('button');
discount3Box.id = 'discount3';
discount3Box.innerHTML = '50% OFF Axe body soap!';
block3Class[0].appendChild(discount3Box);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.

let itemClass = document.getElementsByClassName('item');
itemClass[0].innerHTML = 'Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.

let discountBox = document.createElement('button');
discountBox.className = 'discount';
discountBox.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
block1Class[1].appendChild(discountBox);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.

let brandClass = document.getElementsByClassName('brand')
brandClass[1].innerHTML = 'Uniqlo';

//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 

let priceClass = document.getElementsByClassName('price')
priceClass[1].innerHTML = '¥10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 

//let socialClass = document.getElementsByClassName('social');

let brandBox = document.createElement('div');
brandBox.className = 'brand';
brandBox.innerHTML = 'Hifiman Shangri-La';
block3Class[1].appendChild(brandBox);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 

let itemBox = document.createElement('div');
itemBox.className = 'item';
itemBox.innerHTML = 'Electronstatic Headphones';
block3Class[1].appendChild(itemBox);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.

let priceBox = document.createElement('div');
priceBox.className = 'price';
priceBox.innerHTML = '$18,000';
block3Class[1].appendChild(priceBox);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.

let discount4Box = document.createElement('button');
discount4Box.className = 'discount';
discount4Box.innerHTML = 'Free Barry Manilow CD with purchase!';
block3Class[1].appendChild(discount4Box);

//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

brandClass[3].innerHTML = 'H&M';
itemClass[3].innerHTML = 'Unicorn-Head Slippers';
priceClass[3].innerHTML = '$21.99';
let discountClass = document.getElementsByClassName('discount');
discountClass[3].innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

brandClass[4].innerHTML = 'Frito Lay';
itemClass[4].innerHTML = 'Poppin\' Jalapeno Doritos';
priceClass[4].innerHTML = '$7.77';
discountClass[4].innerHTML = '33% OFF any 6 pack Budweiser Bud Light';

//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

brandClass[5].innerHTML = 'Any Dog Breeder';
itemClass[5].innerHTML = 'Baby Buggy';
priceClass[5].innerHTML = 'Priceless';
discountClass[5].innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.

brandClass[6].innerHTML = 'Gray Buckets';
itemClass[6].innerHTML = 'Grocery Bucket';
priceClass[6].innerHTML = '$19.99';
discountClass[6].innerHTML = '0% off with purchase of both other buckets on the right!';

let middleBrandBox = document.createElement('div');
middleBrandBox.className = 'brand';
middleBrandBox.innerHTML = 'Gray Buckets, Inc.';
block2Class[3].appendChild(middleBrandBox);

let middleItemBox = document.createElement('div');
middleItemBox.className = 'item';
middleItemBox.innerHTML = 'Funny Shapes Bucket';
block2Class[3].appendChild(middleItemBox);

let middlePriceBox = document.createElement('div');
middlePriceBox.className = 'price';
middlePriceBox.innerHTML = '$29.99';
block2Class[3].appendChild(middlePriceBox);

let middleButtonBox = document.createElement('button');
middleButtonBox.className = 'discount';
middleButtonBox.innerHTML = '0% off with purchase of both other buckets on either side!';
block2Class[3].appendChild(middleButtonBox);

let rightBrandBox = document.createElement('div');
rightBrandBox.className = 'brand';
rightBrandBox.innerHTML = 'Gray Buckets, Ltd.';
block3Class[3].appendChild(rightBrandBox);

let rightItemBox = document.createElement('div');
rightItemBox.className = 'item';
rightItemBox.innerHTML = 'Clip Art Bucket';
block3Class[3].appendChild(rightItemBox);

let rightPriceBox = document.createElement('div');
rightPriceBox.className = 'price';
rightPriceBox.innerHTML = '$499.99';
block3Class[3].appendChild(rightPriceBox);

let rightButtonBox = document.createElement('button');
rightButtonBox.className = 'discount';
rightButtonBox.innerHTML = '0% off with purchase of both other buckets on the left!';
block3Class[3].appendChild(rightButtonBox);