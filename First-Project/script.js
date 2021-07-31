let select = document.querySelector("#framework").addEventListener("change", (e) => {
	let items = e.target.value;
	if(items === "binary") {
		myFun(2, "Binnary");
	} else if(items === "octal") {
		myFun(8, "Octal");
	} else if(items === "hex") {
		myFun(16, "Hexadecimal");
	}
});

function myFun(val = 2, name = "Binary") {
	document.querySelector("#replace").innerHTML = "Decimal to " + name + " Convert";
	const bainaryNumber = document.querySelector("#result");
	const decimalToBinary = document.querySelector("#convert");
	decimalToBinary.addEventListener("click", (e) => {
		e.preventDefault();
		const decimalNumber = document.querySelector("#decimal").value;
		if(decimalNumber === "") {
			alert("Enter a Number");
		} else if(decimalNumber < 0) {
			alert("Enter a Positive Number");
		} else {
			bainaryNumber.style.visibility = "visible";
		}
		let toNumber = Number(decimalNumber).toString(val);
		bainaryNumber.innerText = toNumber;
	});
}
//  Clock js 
setInterval(() => {
	let date = new Date()
	let type = "AM"
	let hour = date.getHours()
	let minutes = date.getMinutes()
	let secend = date.getSeconds()
	if(hour < 12) {
		type = "AM"
	} else {
		type = "PM"
	}
	if(hour <= 12) {
		hour = hour
	} else if(hour => 12) {
		hour = hour - 12;
	} else if(hour < 10) {
		hour = "0" + hour
	}
	if(minutes < 10) {
		minutes = "0" + minutes
	}
	if(secend < 10) {
		secend = "0" + secend
	}
	let realTime = `${hour}:${minutes}:${secend} ${type}`
	document.querySelector(".time").innerHTML = realTime
}, 1000);
// Hex Color Code 
document.querySelector(".btn-color").addEventListener("click", function my() {
		let hexColorItems = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
		let firstItems = "#";
		for(let i = 0; i < 6; i++) {
			let num = Math.round(Math.random() * 15);
			console.log(num);
			let num2 = hexColorItems[num];
			firstItems += num2;
			console.log(firstItems)
			document.querySelector("body").style.backgroundColor = firstItems;
			document.querySelector(".hex-color").style.backgroundColor = firstItems;
			document.querySelector(".color").style.color = firstItems;
			document.querySelector(".color").innerHTML = firstItems;
		}
	})
	// Copy cut Paste
document.querySelector(".btn-text").addEventListener("click", () => {
	event.preventDefault()
	let text = document.querySelector("#inputText").select()
	document.execCommand("copy")
	alert(`You Copied Text`)
})
document.querySelector(".btn-cut").addEventListener("click", () => {
		event.preventDefault()
		let text = document.querySelector("#inputText").select()
		document.execCommand("cut")
		alert(`You  Cut Text`)
	})
	// Dummay Text 
let textArray = ["Liquorice pastry I love cotton candy lemon drops pastry marzipan marzipan. I love croissant sugar plum I love icing cookie sweet roll chocolate cake cake. Gummi bears macaroon tootsie roll pudding lemon drops sweet roll.", "I love gingerbread I love chocolate bar I love sesame snaps. Gummies soufflé toffee candy bonbon. Sesame snaps candy jelly macaroon bonbon donut wafer I love. Cheesecake powder candy canes halvah wafer sugar plum.", "Carrot cake pudding cotton candy jelly beans liquorice powder caramels tart cotton candy. Liquorice candy canes wafer cotton candy I love. Apple pie bonbon croissant icing I love dessert chocolate bar muffin.", "Wafer cake sugar plum I love chocolate chocolate lollipop. Croissant chocolate chupa chups cake croissant I love jujubes. Liquorice caramels tart dessert lollipop sweet roll marzipan cotton candy pudding.", "Cheesecake pastry cake chocolate cake marzipan sweet roll fruitcake. I love halvah sugar plum tart macaroon sweet I love macaroon. Croissant wafer cake I love jujubes soufflé jelly-o cake.", "Candy donut jelly-o powder candy canes. Jelly muffin cookie brownie chocolate candy canes gummies. Pudding marshmallow I love toffee candy cupcake soufflé.", "Croissant chocolate cupcake gingerbread lollipop liquorice. Ice cream cake wafer sesame snaps ice cream I love fruitcake jelly beans liquorice. Icing donut candy oat cake danish sesame snaps. I love cake I love cake fruitcake I love.", "Tootsie roll candy canes jelly beans candy soufflé. Lollipop sesame snaps jujubes shortbread liquorice liquorice shortbread gingerbread. Jelly beans lollipop icing wafer cookie jelly lemon drops chocolate cake toffee. Cookie tiramisu cookie I love cookie carrot cake topping jelly beans cheesecake.", "Topping danish candy sweet roll powder. Tootsie roll sugar plum chocolate bar gingerbread I love marshmallow chocolate cake. I love sugar plum croissant croissant tart ice cream.", "Tart I love jujubes fruitcake oat cake jelly-o liquorice powder. Cupcake I love cheesecake donut jelly beans cookie croissant I love. Lollipop toffee cookie pie apple pie I love marzipan I love. Macaroon cake I love lemon drops I love lollipop cheesecake chocolate cookie.", "Pudding tootsie roll candy canes donut sweet roll jelly pastry I love. Biscuit macaroon bear claw cupcake I love. Donut I love gummies carrot cake I love tiramisu.", "Cake cookie cotton candy pastry I love pastry soufflé bear claw chocolate cake. Halvah ice cream gummies sesame snaps cheesecake. Powder caramels fruitcake marshmallow caramels shortbread cotton candy soufflé.", "Dessert sweet roll liquorice topping icing chocolate bar jelly lemon drops. Candy tart tart sweet halvah oat cake. Gummies bonbon icing dragée brownie I love dessert. Sweet oat cake jujubes tiramisu tiramisu fruitcake soufflé.", "Marzipan cake soufflé halvah powder. Bonbon toffee cookie muffin chupa chups sugar plum cupcake jujubes ice cream. Biscuit cake topping cupcake lemon drops. Apple pie topping danish bonbon I love jelly beans toffee liquorice ice cream.", "Gummi bears cheesecake I love brownie powder. Liquorice chocolate fruitcake wafer lollipop bear claw lemon drops fruitcake cookie. I love brownie pudding I love toffee cake jelly lemon drops."]
let form = document.querySelector("#text-dammy")
let numberText = document.querySelector("#pra-number")
let btndammy = document.querySelector(".pra-number")
let dammyResult = document.querySelector(".dammy-text-result")
form.addEventListener("submit", (e) => {
		e.preventDefault()
		let value = Number(numberText.value)
		let randomValue = Math.floor((Math.random()) * textArray.length)
		if(value <= 0 || isNaN(value) || value > textArray.length) {
			dammyResult.innerHTML = ` <p>${textArray[randomValue]} `
		} else {
			let sliceArray = textArray.slice(0, value)
			let final = sliceArray.map((element) => {
				return `<p>${element}</p>`
			}).join("")
			dammyResult.innerHTML = final
		}
	})
	// tip
document.querySelector("#tip-form").addEventListener("change", () => {
	let valueTip = document.querySelector("#tip-value").value
	let ValueTip = Number(valueTip)
	let tipValue = Math.ceil(document.querySelector("#tip-percent").value / 10)
	let tipPer = document.querySelector("#quality");
	tipPer.innerHTML = `${tipValue}Quanty`
	let display = document.querySelector(".result-hide").style.display = "block"
	let productFirstPrice = (ValueTip * tipValue)
	console.log(productFirstPrice);
	let vat = (productFirstPrice * 5) / 100
	document.querySelector("#tip-result").innerHTML = `Total Price Without vat ${productFirstPrice.toFixed(2)}TK`
	document.querySelector("#total-result").innerHTML = `Total Price With Vat ${(productFirstPrice + vat).toFixed(2)}TK`
	document.querySelector("#try").addEventListener("click", (e) => {
		e.preventDefault()
		let coopon = document.querySelector("#copon").value
		if(coopon === "20FREE") {
			productFirstPrice = (productFirstPrice * 80) / 100
			let newvat = vat * 80 / 100
			document.querySelector("#tip-result").innerHTML = `Total Price With Coupon  ${productFirstPrice.toFixed(2)}TK`
			document.querySelector("#total-result").innerHTML = `Total Price With Coupon and vat Vat ${(productFirstPrice + newvat).toFixed(2)}TK`
		}
	})
})