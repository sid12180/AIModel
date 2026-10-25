const healthForm = document.querySelector('#health-form');
const locationInput = document.querySelector('#location');
const locationOptions = Array.from(document.querySelectorAll('#location-options option'))
	.map((option) => option.value);
const formMessage = document.querySelector('#form-message');
const countryLifeExpectancy = {
	Afghanistan: 66.04,
	Albania: 79.60,
	Algeria: 76.26,
	Andorra: 84.04,
	Angola: 64.62,
	'Antigua and Barbuda': 77.60,
	Argentina: 77.40,
	Armenia: 77.47,
	Australia: 83.05,
	Austria: 81.79,
	Azerbaijan: 74.43,
	Bahamas: 74.55,
	Bahrain: 81.28,
	Bangladesh: 74.67,
	Barbados: 76.18,
	Belarus: 74.18,
	Belgium: 82.40,
	Belize: 73.57,
	Benin: 60.77,
	Bhutan: 72.98,
	Bolivia: 68.58,
	'Bosnia and Herzegovina': 77.85,
	Botswana: 69.16,
	Brazil: 75.85,
	Brunei: 75.33,
	Bulgaria: 75.76,
	'Burkina Faso': 61.09,
	Burundi: 63.65,
	'Cabo Verde': 76.06,
	Cambodia: 70.67,
	Cameroon: 63.70,
	Canada: 81.63,
	'Central African Republic': 57.41,
	Chad: 55.07,
	Chile: 81.17,
	China: 77.95,
	Colombia: 77.72,
	Comoros: 66.78,
	Congo: 65.77,
	'Costa Rica': 80.80,
	"Cote d'Ivoire": 61.94,
	Croatia: 78.47,
	Cuba: 78.08,
	Cyprus: 81.65,
	Czechia: 79.83,
	'Democratic Republic of the Congo': 61.90,
	Denmark: 81.75,
	Djibouti: 65.99,
	Dominica: 71.13,
	'Dominican Republic': 73.72,
	Ecuador: 77.39,
	Egypt: 71.63,
	'El Salvador': 72.10,
	'Equatorial Guinea': 63.71,
	Eritrea: 68.62,
	Estonia: 78.79,
	Eswatini: 64.12,
	Ethiopia: 67.32,
	Fiji: 67.32,
	Finland: 81.59,
	France: 82.83,
	Gabon: 68.34,
	Gambia: 65.86,
	Georgia: 74.50,
	Germany: 81.04,
	Ghana: 65.50,
	Greece: 81.74,
	Grenada: 75.20,
	Guatemala: 72.60,
	Guinea: 60.74,
	'Guinea-Bissau': 64.08,
	Guyana: 70.18,
	Haiti: 64.94,
	Honduras: 72.88,
	Hungary: 76.57,
	Iceland: 82.46,
	India: 72.00,
	Indonesia: 71.15,
	Iran: 77.65,
	Iraq: 72.32,
	Ireland: 82.81,
	Israel: 83.20,
	Italy: 83.35,
	Jamaica: 71.48,
	Japan: 84.04,
	Jordan: 77.81,
	Kazakhstan: 74.40,
	Kenya: 63.65,
	Kiribati: 66.47,
	Kuwait: 83.19,
	Kyrgyzstan: 72.25,
	Laos: 68.96,
	Latvia: 75.43,
	Lebanon: 77.82,
	Lesotho: 57.38,
	Liberia: 62.16,
	Libya: 69.34,
	Liechtenstein: 84.60,
	Lithuania: 77.29,
	Luxembourg: 83.31,
	Madagascar: 63.63,
	Malawi: 67.35,
	Malaysia: 76.66,
	Maldives: 81.04,
	Mali: 60.44,
	Malta: 83.36,
	'Marshall Islands': 66.94,
	Mauritania: 68.48,
	Mauritius: 73.41,
	Mexico: 75.07,
	Micronesia: 67.20,
	Moldova: 71.20,
	Monaco: 86.37,
	Mongolia: 72.12,
	Montenegro: 77.59,
	Morocco: 75.31,
	Mozambique: 63.61,
	Myanmar: 66.89,
	Namibia: 67.38,
	Nauru: 62.11,
	Nepal: 70.35,
	Netherlands: 81.86,
	'New Zealand': 81.76,
	Nicaragua: 74.95,
	Niger: 61.18,
	Nigeria: 54.46,
	'North Korea': 73.64,
	'North Macedonia': 75.32,
	Norway: 83.01,
	Oman: 80.03,
	Pakistan: 67.65,
	Palau: 69.27,
	Palestine: 65.17,
	Panama: 79.59,
	'Papua New Guinea': 66.13,
	Paraguay: 73.84,
	Peru: 77.74,
	Philippines: 69.83,
	Poland: 78.26,
	Portugal: 82.33,
	Qatar: 82.37,
	Romania: 76.40,
	Russia: 73.25,
	Rwanda: 67.78,
	'Saint Kitts and Nevis': 72.15,
	'Saint Lucia': 72.70,
	'Saint Vincent and the Grenadines': 71.23,
	Samoa: 71.70,
	'San Marino': 85.71,
	'Sao Tome and Principe': 69.72,
	'Saudi Arabia': 78.73,
	Senegal: 68.68,
	Serbia: 76.14,
	Seychelles: 75.42,
	'Sierra Leone': 61.79,
	Singapore: 83.10,
	Slovakia: 78.12,
	Slovenia: 81.93,
	'Solomon Islands': 70.53,
	Somalia: 58.82,
	'South Africa': 66.14,
	'South Korea': 83.43,
	'South Sudan': 57.62,
	Spain: 83.93,
	'Sri Lanka': 77.48,
	Sudan: 66.33,
	Suriname: 73.63,
	Sweden: 83.31,
	Switzerland: 84.16,
	Syria: 72.12,
	Tajikistan: 71.79,
	Tanzania: 67.00,
	Thailand: 76.41,
	'Timor-Leste': 67.69,
	Togo: 62.74,
	Tonga: 72.90,
	'Trinidad and Tobago': 73.49,
	Tunisia: 76.51,
	Turkey: 77.16,
	Turkmenistan: 70.07,
	Tuvalu: 67.10,
	Uganda: 68.25,
	Ukraine: 73.42,
	'United Arab Emirates': 82.91,
	'United Kingdom': 81.24,
	'United States': 78.39,
	Uruguay: 78.14,
	Uzbekistan: 72.39,
	Vanuatu: 71.48,
	'Vatican City': null,
	Venezuela: 72.51,
	Vietnam: 74.59,
	Yemen: 69.30,
	Zambia: 66.35,
	Zimbabwe: 62.78,
};

function validateLocation() {
	const selectedLocation = locationOptions.find(
		(option) => option.toLowerCase() === locationInput.value.trim().toLowerCase()
	);
	const locationAvg = selectedLocation ? countryLifeExpectancy[selectedLocation] : undefined;

	locationInput.setCustomValidity(
		!locationInput.value.trim()
			? ''
			: !selectedLocation
				? 'Choose a location from the suggestions.'
				: locationAvg == null
					? 'Life expectancy data is unavailable for this country.'
					: ''
	);
}

locationInput.addEventListener('input', validateLocation);

healthForm.addEventListener('submit', (event) => {
	event.preventDefault();
	validateLocation();

	if (!healthForm.reportValidity()) {
		formMessage.textContent = '';
		return;
	}

	const sex = { male: 0, female: 1 }[healthForm.elements.sex.value];
	const activityLevel = {
		sedentary: 0,
		'lightly-active': 1,
		'moderately-active': 2,
		'very-active': 3,
	}[healthForm.elements.activityLevel.value];
	const weightLbs = Number(healthForm.elements.weight.value);
	const heightFeet = Number(healthForm.elements.heightFeet.value);
	const heightInches = Number(healthForm.elements.heightInches.value);
	const totalHeightInches = heightFeet * 12 + heightInches;
	const bmi = (weightLbs / (totalHeightInches ** 2)) * 703;
	let smokingFrequency = healthForm.elements.smokingFrequency.value;
    if (smokingFrequency == "Never") {
        smokingFrequency = 0;
    } else if (smokingFrequency == "Rarely") {
        smokingFrequency = 1;
    } else if (smokingFrequency == "Occasionally") {
        smokingFrequency = 2;
    } else if (smokingFrequency == "Regularly") {
        smokingFrequency = 3;
    } else if (smokingFrequency == "Daily") {
        smokingFrequency = 4;
    } else {
        smokingFrequency = 5;
    }
    let drinkingFrequency = healthForm.elements.drinkingFrequency.value;
    if (drinkingFrequency == "Never") {
        drinkingFrequency = 0;
    } else if (drinkingFrequency == "Rarely") {
        drinkingFrequency = 1;
    } else if (drinkingFrequency == "Occasionally") {
        drinkingFrequency = 2;
    } else if (drinkingFrequency == "Regularly") {
        drinkingFrequency = 3;
    } else if (drinkingFrequency == "Daily") {
        drinkingFrequency = 4;
    } else {
        drinkingFrequency = 5;
    }
	const incomeUsd = Number(healthForm.elements.income.value);
	const selectedLocation = locationOptions.find(
		(option) => option.toLowerCase() === locationInput.value.trim().toLowerCase()
	);
	const locationAvg = countryLifeExpectancy[selectedLocation];
	const getFamilyHistoryScore = (condition) => {
		const parents = healthForm.elements[`familyHistory.${condition}.parents`].value;
		const grandparents = healthForm.elements[`familyHistory.${condition}.grandparents`].value;

		if (parents === 'Yes') return 1;
		if (grandparents === 'Yes') return 0.5;
		return 0;
	};
	const familyHistory = {
		heartDisease: getFamilyHistoryScore('heartDisease'),
		cancer: getFamilyHistoryScore('cancer'),
		diabetes: getFamilyHistoryScore('diabetes'),
		highBloodPressure: getFamilyHistoryScore('highBloodPressure'),
	};

	window.healthProfile = {
		sex,
		activityLevel,
		weightLbs,
		heightFeet,
		heightInches,
		bmi: Number(bmi.toFixed(1)),
		smokingFrequency,
		drinkingFrequency,
		incomeUsd,
		locationAvg,
		familyHistory,
	};
	window.showLifeExpectancyResult(locationAvg);
});

const pageHeader = document.querySelector('#page-header');
const introSection = document.querySelector('#top');
const resultView = document.querySelector('#result-view');
const lifeExpectancyValue = document.querySelector('#life-expectancy-value');
const resultNote = document.querySelector('#result-note');

window.showLifeExpectancyResult = (years, note = 'Starting estimate based on the average life expectancy in your selected country.') => {
	lifeExpectancyValue.textContent = Number(years).toFixed(1);
	resultNote.textContent = note;
	pageHeader.hidden = true;
	introSection.hidden = true;
	healthForm.hidden = true;
	resultView.hidden = false;
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

document.querySelector('#back-button').addEventListener('click', () => {
	resultView.hidden = true;
	pageHeader.hidden = false;
	introSection.hidden = false;
	healthForm.hidden = false;
	window.scrollTo({ top: 0, behavior: 'smooth' });
});
