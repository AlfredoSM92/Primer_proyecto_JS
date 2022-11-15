let Mexico
let covidCases = document.getElementById("covidCases")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e5426a67f2msh2ab3310cf79842fp1c3102jsnacf9df3d3d82',
		'X-RapidAPI-Host': 'vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com'
	}
};

fetch('https://vaccovid-coronavirus-vaccine-and-treatment-tracker.p.rapidapi.com/api/npm-covid-data/', options)
	.then(response => response.json())
	.then(response => {
        countries = response;
        console.log(countries)
        Mexico = countries.find((el)=> el.Country =="Mexico");
        console.log(Mexico);
        let info = Mexico.ActiveCases;
        covidCases.innerHTML=`<h2 id="covidCases"> Casos Covid en México</h2>
                                                <p id="infoCovid">${info}</p>`
    })
	.catch(err => console.error(err));

