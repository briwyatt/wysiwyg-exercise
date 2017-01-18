var people = [
	{title: "Samurai",
	  name: "Tomoe Gozen",
	  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1747,
	    death: 1797
	  }
	},
	{title: "King",
	  name: "Geoffrey Lear",
	  bio: "According to Geoffrey's genealogy of the British dynasty, Leir's reign would have occurred around the 8th century BC, around the time of the founding of Rome. The story was modified and retold by William Shakespeare in his Elizabethan tragedy King Lear.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: '700BC',
	    death: '600BC'
	  }
	},
	{title: "President",
	  name: "Donald Trump",
	  bio: "Donald John Trump is an American businessman, television personality, politician, and the President-elect of the United States. He is scheduled to take office as the 45th President on January 20, 2017.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1946,
	    death: 'Living'
	  }
	},
	{title: "OG",
	  name: "Tupac Amaru Shakur",
	  bio: "known by his stage names 2Pac and Makaveli, was an American rapper, record producer, actor, and poet. As of 2007, Shakur has sold over 75 million records worldwide. His double disc albums All Eyez on Me and his Greatest Hits are among the best-selling albums in the United States with All Eyez on Me selling 10,000,000 copies and Greatest Hits selling 10,200,000 units.",
	  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
	  lifespan: {
	    birth: 1971,
	    death: 1996
	  }
	}
]


for (var i = 0; i < people.length; i++) {
	var title = people[i].title
	var name = people[i].name
	var bio = people[i].bio
	var birth = people[i].lifespan.birth
	var death = people[i].lifespan.death

	var card = "<person class='card'><header class='card-header'>"+title+" - "+name+"</header><section class='card-bio'>"+bio+"</section><footer class='card-lifespan'>"+birth+"-"+death+"</footer></person>"

	var cardSection = document.getElementById("card-section")
	cardSection.innerHTML += card

}


var input = document.getElementById("input");

function handleBorder (event) {
	this.classList.toggle("dotted");
	input.focus();
	textMirror(this);
}

function textMirror (personCard) {
	input.addEventListener("keyup", function (event) {
		var inputText = document.getElementById("input").value
		if (personCard.classList.contains("dotted")) {
			personCard.childNodes[1].innerHTML = inputText
		}
	})
}

var personCard = document.getElementsByClassName("card")

for (var i = 0; i < personCard.length; i++) {
	personCard.item(i).addEventListener("click", handleBorder);
}

// input.addEventListener("keyup", function (event) {
// 	  var inputText = input.value
// 	  console.log(inputText)
// 	  cardBio = inputText;

// 	});





