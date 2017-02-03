// men's shirt ecommerce

function goods(name,image,price){
	this.name = name
	this.image = image
	this.price = price
}

var shirt1 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt2 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt3 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt4 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt5 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt6 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt7 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt8 = new goods('shirt1', 'img/vunju.jpg', 12.99)

var goodsArray = []

goodsArray.push(shirt1)
goodsArray.push(shirt2)
goodsArray.push(shirt3)
goodsArray.push(shirt4)
goodsArray.push(shirt5)
goodsArray.push(shirt6)
goodsArray.push(shirt7)
goodsArray.push(shirt8)

for(i = 0; i < goodsArray.length; i++){
	// creteTextNode
	var shirtName = document.createTextNode(goodsArray[i].name)
	var shirtPrice = document.createTextNode(goodsArray[i].price)
	var img = goodsArray[i].image
	var cart = document.createTextNode('Add')
	var option1 = document.createTextNode('large')
	var option2 = document.createTextNode('medium')
	var option3 = document.createTextNode('small')
	var option4 = document.createTextNode('XL')
	var option5 = document.createTextNode('XXL')
	

	// create element
	var mainDiv = document.createElement('div')
	mainDiv.className = 'col-sm-3'
	var newDiv = document.createElement('div')
	newDiv.className = 'carty simpleCart_shelfItem'
	var newH2 = document.createElement('h2')
	newH2.className = 'item_name'
	var newImg = document.createElement('img')
	newImg.setAttribute('src', img )
	newImg.className = 'img-rounded img-responsive'
	var newSelect = document.createElement('select')
	newSelect.className = 'item_size'
	var newOption = document.createElement('option')
	newOption.setAttribute('value', 'large')
	var newOption1 = document.createElement('option')
	newOption1.setAttribute('value', 'medium')
	var newOption2 = document.createElement('option')
	newOption2.setAttribute('value', 'small')
	var newSpan = document.createElement('span')
	var newOption3 = document.createElement('option')
	newOption3.setAttribute('value', 'XL')
	var newOption4 = document.createElement('option')
	newOption4.setAttribute('value', 'XXL')
	newSpan.className = 'item_price'
	var newA = document.createElement('a')
	newA.setAttribute('href', 'javascript:;')
	newA.className = 'item_add btn btn-info btn-lg'
	var newSpan2 = document.createElement('span')
	newSpan2.className = 'glyphicon glyphicon-shopping-cart'

	// appending childs
	newH2.appendChild(shirtName)
	newSelect.appendChild(newOption2)
	newSelect.appendChild(newOption1)
	newSelect.appendChild(newOption)
	newSelect.appendChild(newOption3)
	newSelect.appendChild(newOption4)
	newSpan.appendChild(shirtPrice)
	newOption.appendChild(option1)
	newOption1.appendChild(option2)
	newOption2.appendChild(option3)
	newOption3.appendChild(option4)
	newOption4.appendChild(option5)
	newA.appendChild(newSpan2)
	newSpan2.appendChild(cart)

	// appending elements
	
	newDiv.appendChild(newH2)
	newDiv.appendChild(newImg)
	newDiv.appendChild(newSelect)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newSpan)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newA)
	mainDiv.appendChild(newDiv)

	// appending new Div to the main div
	document.getElementById('didi').appendChild(mainDiv)
}

// men's pants

function goods(name,image,price){
	this.name = name
	this.image = image
	this.price = price
}

var shirt1 = new goods('shirt1', 'img/men.jpg', 12.99)
var shirt2 = new goods('shirt2', 'img/men.jpg', 12.99)
var shirt3 = new goods('shirt1', 'img/men.jpg', 12.99)
var shirt4 = new goods('shirt1', 'img/men.jpg', 12.99)
var shirt5 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt6 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt7 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt8 = new goods('shirt1', 'img/vunju.jpg', 12.99)

var goodsArray = []

goodsArray.push(shirt1)
goodsArray.push(shirt2)
goodsArray.push(shirt3)
goodsArray.push(shirt4)
goodsArray.push(shirt5)
goodsArray.push(shirt6)
goodsArray.push(shirt7)
goodsArray.push(shirt8)

for(i = 0; i < goodsArray.length; i++){
	// creteTextNode
	var shirtName = document.createTextNode(goodsArray[i].name)
	var shirtPrice = document.createTextNode(goodsArray[i].price)
	var img = goodsArray[i].image
	var cart = document.createTextNode('Add')
	var option1 = document.createTextNode('large')
	var option2 = document.createTextNode('medium')
	var option3 = document.createTextNode('small')
	

	// create element
	var mainDiv = document.createElement('div')
	mainDiv.className = 'col-sm-3'
	var newDiv = document.createElement('div')
	newDiv.className = 'carty simpleCart_shelfItem'
	var newH2 = document.createElement('h2')
	newH2.className = 'item_name'
	var newImg = document.createElement('img')
	newImg.setAttribute('src', img )
	newImg.className = 'img-rounded img-responsive'
	var newSelect = document.createElement('select')
	newSelect.className = 'item_size'
	var newOption = document.createElement('option')
	newOption.setAttribute('value', 'large')
	var newOption1 = document.createElement('option')
	newOption1.setAttribute('value', 'medium')
	var newOption2 = document.createElement('option')
	newOption2.setAttribute('value', 'small')
	var newSpan = document.createElement('span')
	newSpan.className = 'item_price'
	var newA = document.createElement('a')
	newA.setAttribute('href', 'javascript:;')
	newA.className = 'item_add btn btn-info btn-lg'
	var newSpan2 = document.createElement('span')
	newSpan2.className = 'glyphicon glyphicon-shopping-cart'

	// appending childs
	newH2.appendChild(shirtName)
	newSelect.appendChild(newOption2)
	newSelect.appendChild(newOption1)
	newSelect.appendChild(newOption)
	newSpan.appendChild(shirtPrice)
	newOption.appendChild(option1)
	newOption1.appendChild(option2)
	newOption2.appendChild(option3)
	newA.appendChild(newSpan2)
	newSpan2.appendChild(cart)

	// appending elements
	
	newDiv.appendChild(newH2)
	newDiv.appendChild(newImg)
	newDiv.appendChild(newSelect)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newSpan)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newA)
	mainDiv.appendChild(newDiv)

	// appending new Div to the main div
	document.getElementById('bubu').appendChild(mainDiv)
}

// men's sandal section

function goods(name,image,price){
	this.name = name
	this.image = image
	this.price = price
}

var shirt1 = new goods('shirt1', 'img/sandal.jpg', 12.99)
var shirt2 = new goods('shirt1', 'img/sandal.jpg', 12.99)
var shirt3 = new goods('shirt1', 'img/sandal.jpg', 12.99)
var shirt4 = new goods('shirt1', 'img/sandal.jpg', 12.99)
var shirt5 = new goods('shirt1', 'img/sandal.jpg', 12.99)
var shirt6 = new goods('shirt1', 'img/sandal.jpg', 12.99)
var shirt7 = new goods('shirt1', 'img/sandal.jpg', 12.99)
var shirt8 = new goods('shirt1', 'img/sandal.jpg', 12.99)

var goodsArray = []

goodsArray.push(shirt1)
goodsArray.push(shirt2)
goodsArray.push(shirt3)
goodsArray.push(shirt4)
goodsArray.push(shirt5)
goodsArray.push(shirt6)
goodsArray.push(shirt7)
goodsArray.push(shirt8)

for(i = 0; i < goodsArray.length; i++){
	// creteTextNode
	var shirtName = document.createTextNode(goodsArray[i].name)
	var shirtPrice = document.createTextNode(goodsArray[i].price)
	var img = goodsArray[i].image
	var cart = document.createTextNode('Add')
	var option1 = document.createTextNode('large')
	var option2 = document.createTextNode('medium')
	var option3 = document.createTextNode('small')
	var option4 = document.createTextNode('XL')
	var option5 = document.createTextNode('XXL')
	

	// create element
	var mainDiv = document.createElement('div')
	mainDiv.className = 'col-sm-3'
	var newDiv = document.createElement('div')
	newDiv.className = 'carty simpleCart_shelfItem'
	var newH2 = document.createElement('h2')
	newH2.className = 'item_name'
	var newImg = document.createElement('img')
	newImg.setAttribute('src', img )
	newImg.className = 'img-rounded img-responsive'
	var newSelect = document.createElement('select')
	newSelect.className = 'item_size'
	var newOption = document.createElement('option')
	newOption.setAttribute('value', 'large')
	var newOption1 = document.createElement('option')
	newOption1.setAttribute('value', 'medium')
	var newOption2 = document.createElement('option')
	newOption2.setAttribute('value', 'small')
	var newSpan = document.createElement('span')
	var newOption3 = document.createElement('option')
	newOption3.setAttribute('value', 'XL')
	var newOption4 = document.createElement('option')
	newOption4.setAttribute('value', 'XXL')
	newSpan.className = 'item_price'
	var newA = document.createElement('a')
	newA.setAttribute('href', 'javascript:;')
	newA.className = 'item_add btn btn-info btn-lg'
	var newSpan2 = document.createElement('span')
	newSpan2.className = 'glyphicon glyphicon-shopping-cart'

	// appending childs
	newH2.appendChild(shirtName)
	newSelect.appendChild(newOption2)
	newSelect.appendChild(newOption1)
	newSelect.appendChild(newOption)
	newSelect.appendChild(newOption3)
	newSelect.appendChild(newOption4)
	newSpan.appendChild(shirtPrice)
	newOption.appendChild(option1)
	newOption1.appendChild(option2)
	newOption2.appendChild(option3)
	newOption3.appendChild(option4)
	newOption4.appendChild(option5)
	newA.appendChild(newSpan2)
	newSpan2.appendChild(cart)

	// appending elements
	
	newDiv.appendChild(newH2)
	newDiv.appendChild(newImg)
	newDiv.appendChild(newSelect)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newSpan)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newA)
	mainDiv.appendChild(newDiv)

	// appending new Div to the main div
	document.getElementById('gugu').appendChild(mainDiv)
}

// WOMEN SECTION STARTS FROM HERE

function goods(name,image,price){
	this.name = name
	this.image = image
	this.price = price
}

var shirt1 = new goods('shirt1', 'img/womensample.gif', 12.99)
var shirt2 = new goods('shirt1', 'img/womensample.gif', 12.99)
var shirt3 = new goods('shirt1', 'img/womensample.gif', 12.99)
var shirt4 = new goods('shirt1', 'img/womensample.gif', 12.99)
var shirt5 = new goods('shirt1', 'img/womensample.gif', 12.99)
var shirt6 = new goods('shirt1', 'img/womensample.gif', 12.99)
var shirt7 = new goods('shirt1', 'img/womensample.gif', 12.99)
var shirt8 = new goods('shirt1', 'img/womensample.gif', 12.99)

var goodsArray = []

goodsArray.push(shirt1)
goodsArray.push(shirt2)
goodsArray.push(shirt3)
goodsArray.push(shirt4)
goodsArray.push(shirt5)
goodsArray.push(shirt6)
goodsArray.push(shirt7)
goodsArray.push(shirt8)

for(i = 0; i < goodsArray.length; i++){
	// creteTextNode
	var shirtName = document.createTextNode(goodsArray[i].name)
	var shirtPrice = document.createTextNode(goodsArray[i].price)
	var img = goodsArray[i].image
	var cart = document.createTextNode('Add')
	var option1 = document.createTextNode('large')
	var option2 = document.createTextNode('medium')
	var option3 = document.createTextNode('small')
	var option4 = document.createTextNode('XL')
	var option5 = document.createTextNode('XXL')

	// create element
	var mainDiv = document.createElement('div')
	mainDiv.className = 'col-sm-3'
	var newDiv = document.createElement('div')
	newDiv.className = 'carty simpleCart_shelfItem'
	var newH2 = document.createElement('h2')
	newH2.className = 'item_name'
	var newImg = document.createElement('img')
	newImg.setAttribute('src', img )
	newImg.className = 'img-rounded img-responsive'
	var newSelect = document.createElement('select')
	newSelect.className = 'item_size'
	var newOption = document.createElement('option')
	newOption.setAttribute('value', 'large')
	var newOption1 = document.createElement('option')
	newOption1.setAttribute('value', 'medium')
	var newOption2 = document.createElement('option')
	newOption2.setAttribute('value', 'small')
	var newSpan = document.createElement('span')
	var newOption3 = document.createElement('option')
	newOption3.setAttribute('value', 'XL')
	var newOption4 = document.createElement('option')
	newOption4.setAttribute('value', 'XXL')
	newSpan.className = 'item_price'
	var newA = document.createElement('a')
	newA.setAttribute('href', 'javascript:;')
	newA.className = 'item_add btn btn-info btn-lg'
	var newSpan2 = document.createElement('span')
	newSpan2.className = 'glyphicon glyphicon-shopping-cart'

	// appending childs
	newH2.appendChild(shirtName)
	newSelect.appendChild(newOption2)
	newSelect.appendChild(newOption1)
	newSelect.appendChild(newOption)
	newSelect.appendChild(newOption3)
	newSelect.appendChild(newOption4)
	newSpan.appendChild(shirtPrice)
	newOption.appendChild(option1)
	newOption1.appendChild(option2)
	newOption2.appendChild(option3)
	newOption3.appendChild(option4)
	newOption4.appendChild(option5)
	newA.appendChild(newSpan2)
	newSpan2.appendChild(cart)

	// appending elements
	
	newDiv.appendChild(newH2)
	newDiv.appendChild(newImg)
	newDiv.appendChild(newSelect)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newSpan)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newA)
	mainDiv.appendChild(newDiv)

	// appending new Div to the main div
	document.getElementById('womentops').appendChild(mainDiv)
}

// women pants
function goods(name,image,price){
	this.name = name
	this.image = image
	this.price = price
}

var shirt1 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt2 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt3 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt4 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt5 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt6 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt7 = new goods('shirt1', 'img/vunju.jpg', 12.99)
var shirt8 = new goods('shirt1', 'img/vunju.jpg', 12.99)

var goodsArray = []

goodsArray.push(shirt1)
goodsArray.push(shirt2)
goodsArray.push(shirt3)
goodsArray.push(shirt4)
goodsArray.push(shirt5)
goodsArray.push(shirt6)
goodsArray.push(shirt7)
goodsArray.push(shirt8)

for(i = 0; i < goodsArray.length; i++){
	// creteTextNode
	var shirtName = document.createTextNode(goodsArray[i].name)
	var shirtPrice = document.createTextNode(goodsArray[i].price)
	var img = goodsArray[i].image
	var cart = document.createTextNode('Add')
	var option1 = document.createTextNode('large')
	var option2 = document.createTextNode('medium')
	var option3 = document.createTextNode('small')
	var option4 = document.createTextNode('XL')
	var option5 = document.createTextNode('XXL')

	// create element
	var mainDiv = document.createElement('div')
	mainDiv.className = 'col-sm-3'
	var newDiv = document.createElement('div')
	newDiv.className = 'carty simpleCart_shelfItem'
	var newH2 = document.createElement('h2')
	newH2.className = 'item_name'
	var newImg = document.createElement('img')
	newImg.setAttribute('src', img )
	newImg.className = 'img-rounded img-responsive'
	var newSelect = document.createElement('select')
	newSelect.className = 'item_size'
	var newOption = document.createElement('option')
	newOption.setAttribute('value', 'large')
	var newOption1 = document.createElement('option')
	newOption1.setAttribute('value', 'medium')
	var newOption2 = document.createElement('option')
	newOption2.setAttribute('value', 'small')
	var newSpan = document.createElement('span')
	var newOption3 = document.createElement('option')
	newOption3.setAttribute('value', 'XL')
	var newOption4 = document.createElement('option')
	newOption4.setAttribute('value', 'XXL')
	newSpan.className = 'item_price'
	var newA = document.createElement('a')
	newA.setAttribute('href', 'javascript:;')
	newA.className = 'item_add btn btn-info btn-lg'
	var newSpan2 = document.createElement('span')
	newSpan2.className = 'glyphicon glyphicon-shopping-cart'

	// appending childs
	newH2.appendChild(shirtName)
	newSelect.appendChild(newOption2)
	newSelect.appendChild(newOption1)
	newSelect.appendChild(newOption)
	newSelect.appendChild(newOption3)
	newSelect.appendChild(newOption4)
	newSpan.appendChild(shirtPrice)
	newOption.appendChild(option1)
	newOption1.appendChild(option2)
	newOption2.appendChild(option3)
	newOption3.appendChild(option4)
	newOption4.appendChild(option5)
	newA.appendChild(newSpan2)
	newSpan2.appendChild(cart)

	// appending elements
	
	newDiv.appendChild(newH2)
	newDiv.appendChild(newImg)
	newDiv.appendChild(newSelect)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newSpan)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newA)
	mainDiv.appendChild(newDiv)

	// appending new Div to the main div
	document.getElementById('womenbottom').appendChild(mainDiv)
}

// WOMEN'S ACCESSORIES

function goods(name,image,price){
	this.name = name
	this.image = image
	this.price = price
}

var shirt1 = new goods('shirt1', 'img/acce.jpg', 12.99)
var shirt2 = new goods('shirt1', 'img/acce.jpg', 12.99)
var shirt3 = new goods('shirt1', 'img/acce.jpg', 12.99)
var shirt4 = new goods('shirt1', 'img/acce.jpg', 12.99)
var shirt5 = new goods('shirt1', 'img/acce.jpg', 12.99)
var shirt6 = new goods('shirt1', 'img/acce.jpg', 12.99)
var shirt7 = new goods('shirt1', 'img/acce.jpg', 12.99)
var shirt8 = new goods('shirt1', 'img/acce.jpg', 12.99)

var goodsArray = []

goodsArray.push(shirt1)
goodsArray.push(shirt2)
goodsArray.push(shirt3)
goodsArray.push(shirt4)
goodsArray.push(shirt5)
goodsArray.push(shirt6)
goodsArray.push(shirt7)
goodsArray.push(shirt8)

for(i = 0; i < goodsArray.length; i++){
	// creteTextNode
	var shirtName = document.createTextNode(goodsArray[i].name)
	var shirtPrice = document.createTextNode(goodsArray[i].price)
	var img = goodsArray[i].image
	var cart = document.createTextNode('Add')
	var option1 = document.createTextNode('large')
	var option2 = document.createTextNode('medium')
	var option3 = document.createTextNode('small')
	var option4 = document.createTextNode('XL')
	var option5 = document.createTextNode('XXL')

	// create element
	var mainDiv = document.createElement('div')
	mainDiv.className = 'col-sm-3'
	var newDiv = document.createElement('div')
	newDiv.className = 'carty simpleCart_shelfItem'
	var newH2 = document.createElement('h2')
	newH2.className = 'item_name'
	var newImg = document.createElement('img')
	newImg.setAttribute('src', img )
	newImg.className = 'img-rounded img-responsive'
	var newSelect = document.createElement('select')
	newSelect.className = 'item_size'
	var newOption = document.createElement('option')
	newOption.setAttribute('value', 'large')
	var newOption1 = document.createElement('option')
	newOption1.setAttribute('value', 'medium')
	var newOption2 = document.createElement('option')
	newOption2.setAttribute('value', 'small')
	var newSpan = document.createElement('span')
	var newOption3 = document.createElement('option')
	newOption3.setAttribute('value', 'XL')
	var newOption4 = document.createElement('option')
	newOption4.setAttribute('value', 'XXL')
	newSpan.className = 'item_price'
	var newA = document.createElement('a')
	newA.setAttribute('href', 'javascript:;')
	newA.className = 'item_add btn btn-info btn-lg'
	var newSpan2 = document.createElement('span')
	newSpan2.className = 'glyphicon glyphicon-shopping-cart'

	// appending childs
	newH2.appendChild(shirtName)
	newSelect.appendChild(newOption2)
	newSelect.appendChild(newOption1)
	newSelect.appendChild(newOption)
	newSelect.appendChild(newOption3)
	newSelect.appendChild(newOption4)
	newSpan.appendChild(shirtPrice)
	newOption.appendChild(option1)
	newOption1.appendChild(option2)
	newOption2.appendChild(option3)
	newOption3.appendChild(option4)
	newOption4.appendChild(option5)
	newA.appendChild(newSpan2)
	newSpan2.appendChild(cart)

	// appending elements
	
	newDiv.appendChild(newH2)
	newDiv.appendChild(newImg)
	newDiv.appendChild(newSelect)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newSpan)
	newDiv.appendChild(document.createElement('br'))
	newDiv.appendChild(newA)
	mainDiv.appendChild(newDiv)

	// appending new Div to the main div
	document.getElementById('accessories').appendChild(mainDiv)
}

// SMOOTH SCROLL JQUERY
$('.nabi').localScroll()




