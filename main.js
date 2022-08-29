// countries list

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];


// get all global buttons  and the selectors
const countriesContainer = document.getElementsByClassName('country-container')[0]
const input = document.getElementById('searchCountries')
const searchIcons = document.getElementById('searchIcons')
const search = document.getElementById('search')
const btns = document.querySelectorAll('button')
const searchWord = document.getElementById('searchWord')
const startingWord = document.getElementById('startingWord')
const sorter = document.getElementById('sorter')

//  Dom ready function
window.addEventListener("DOMContentLoaded",function(){
displayCountries(countryList);
// searchByWord()
})


// scroll to top  button function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
	let mybutton = document.getElementsByClassName("backToTop")[0];
if (document.body.scrollTop > 500|| document.documentElement.scrollTop >500 ) {
	mybutton.style.display = "block";
	//   mybutton.classList.add('top')
} else {
    mybutton.style.display = "none";
    }
}



// function to display the countries onto the screen
function displayCountries(country){
	country.map(function(item){
		let div = document.createElement('div')
		div.classList.add('country-container-item')
		div.innerHTML = item
	countriesContainer.appendChild(div)
})
}



// sorter
	sorter.addEventListener("click",function(e){
			let currentBtn = e.target
			
			
			let reversedState=countryList.reverse()
			countriesContainer.innerHTML = ''
			displayCountries(reversedState) 
		
		})




// the function to set the mode for searching by country's name
let searchWordClick = searchWord.addEventListener('click', ()=>{
	searchWord.style.backgroundColor = 'rgba(88, 75, 136, 0.932)'
	startingWord.style.backgroundColor = 'rgba(159, 132, 255, 0.952)'
	searchIcons.innerHTML = `<i class="fa-solid fa-magnifying-glass" id='search'>`
	const search = document.getElementById('search')
	search.addEventListener('click', function(){
		searchByWord()
		return
	})
})

// the function to set the mode for searching by starting word

let startingWordClick = startingWord.addEventListener('click', ()=>{

	searchWord.style.backgroundColor = 'rgba(159, 132, 255, 0.952)'
	startingWord.style.backgroundColor = 'rgba(88, 75, 136, 0.932)'
	searchIcons.innerHTML = `<i class="fa-solid fa-magnifying-glass" id = 'startingWordSearch'>`
	const startingWordSearch = document.getElementById('startingWordSearch')

	startingWordSearch.addEventListener('click', function(){
		startingWordState()
		return
	})
})




//  function to search by country's name
function searchByWord(){
		countryList.map(function(item){
		
		if(input.value.toLowerCase() == item.toLowerCase()){
			console.log(item)
			let div = document.createElement('div')
			div.classList.add('country-container-item')
			div.innerHTML = item
			countriesContainer.innerHTML = ''
			countriesContainer.appendChild(div)

			let startingWith = document.getElementsByClassName('startingWith')[0]
			startingWith.innerHTML = input.value
			let startingWithNum = document.getElementsByClassName('startingWithNum')[0]
			startingWithNum.innerHTML = 1;

			return
		}
	})
					
}

//  function to search by countries' starting word

function startingWordState(){
	let result = countryList.filter(element => {
		let elementLowerCase = element.toLowerCase();
		if(elementLowerCase.startsWith(input.value.toLowerCase())){
			return true
		}
	})
	console.log(result)
	countriesContainer.innerHTML = ''

	let startingWith = document.getElementsByClassName('startingWith')[0]
	startingWith.innerHTML = input.value
	let startingWithNum = document.getElementsByClassName('startingWithNum')[0]
	startingWithNum.innerHTML = result.length
	displayCountries(result)
	return
}


// mode toggler function starts
let modeToggle = document.getElementById('modeToggle').addEventListener('click', function(){
	document.body.classList.toggle('body')
})


// modeLight.addEventListener('click', changeLightMode)


window.addEventListener("keypress", function (e) {
	if (e.key == "Enter") {
	alert("Hello World");
}
});







