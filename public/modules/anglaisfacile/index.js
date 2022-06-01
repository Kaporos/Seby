function correctWrong(node){
	let result = [[],[]]
	let childs = node.childNodes
	childs.forEach(function (child){
		console.log(child.tagName)
		try{
		let color = child.getAttribute("color")
		if (color == "BLUE"){
			result[0].push(child)
			child.style.color = "green"		
			child.innerHTML = child.innerHTML + "<img src='//www.anglaisfacile.com/cgi2/myexam/correct.gif'></img>"
		}
		if (color == "red"){
			result[1].push(child)
			child.parentNode.removeChild(child)


		}
		if (child.getAttribute("size") == 3){
			correctWrong(child)
		}
		console.log("succeed with")
		console.log(child)
		}
		catch{
			console.log("error with")
			console.log(child)
		}
	})
	return result
}

function littleduck(){
	Array.prototype.slice.call(document.getElementsByTagName("img")).forEach(function (elem){
		let src = elem.getAttribute("src")
		if (src == "//www.anglaisfacile.com/cgi2/myexam/faux.gif"){
			elem.parentNode.removeChild(elem)
		}

	})
	let correction = document.getElementsByTagName("main")[0].children[0].childNodes[13].childNodes[0]
	correctWrong(correction)
        Array.prototype.slice.call(document.getElementsByTagName("font")).forEach(function (elem){
                text = elem.innerHTML
		if (elem.nodeValue != null){
                if (elem.nodeValue.innerText.startsWith("Votre note")){
                        elem.innerHTML = "Votre note: 100%"
                }
		}

        })
	document.querySelector("font[size$='6']").innerText = "Votre note : 100% (20/20)"
	var vous = document.querySelector('font[color$="RED"][size$="2"]');
	vous.parentNode.removeChild(vous);
	var parfait = document.querySelector("body > table:nth-child(5) > tbody > tr > td:nth-child(3) > div > b > main > article > b > font > font:nth-child(12) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(12) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(12) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(12) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(7) > font:nth-child(12) > font:nth-child(7) > font:nth-child(7) > center > font:nth-child(10) > font > font > font > font > b > font > table > tbody > tr:nth-child(5) > td:nth-child(1) > b > font");
	parfait.innerText = " "+parfait.innerText
	parfait.insertBefore(vous,parfait.lastChild)

}


littleduck()
