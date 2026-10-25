const healthForm = document.querySelector('#health-form');
const locationInput = document.querySelector('#location');
const locationOptions = Array.from(document.querySelectorAll('#location-options option'))
	.map((option) => option.value);
const formMessage = document.querySelector('#form-message');

function validateLocation() {
	const selectedLocation = locationOptions.find(
		(option) => option.toLowerCase() === locationInput.value.trim().toLowerCase()
	);

	locationInput.setCustomValidity(
		locationInput.value.trim() && !selectedLocation
			? 'Choose a location from the suggestions.'
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

	const currentAge = Number(healthForm.elements.age.value);
	const sex = healthForm.elements.sex.value;
	const activityLevel = healthForm.elements.activityLevel.value;
	const weightLbs = Number(healthForm.elements.weight.value);
	const heightFeet = Number(healthForm.elements.heightFeet.value);
	const heightInches = Number(healthForm.elements.heightInches.value);
	const totalHeightInches = heightFeet * 12 + heightInches;
	const bmi = (weightLbs / (totalHeightInches ** 2)) * 703;
	const smokingFrequency = healthForm.elements.smokingFrequency.value;
	const drinkingFrequency = healthForm.elements.drinkingFrequency.value;
	const incomeUsd = Number(healthForm.elements.income.value);
	const location = locationOptions.find(
		(option) => option.toLowerCase() === locationInput.value.trim().toLowerCase()
	);
	const familyHistory = {
		heartDisease: {
			parents: healthForm.elements['familyHistory.heartDisease.parents'].value,
			grandparents: healthForm.elements['familyHistory.heartDisease.grandparents'].value,
		},
		cancer: {
			parents: healthForm.elements['familyHistory.cancer.parents'].value,
			grandparents: healthForm.elements['familyHistory.cancer.grandparents'].value,
		},
		diabetes: {
			parents: healthForm.elements['familyHistory.diabetes.parents'].value,
			grandparents: healthForm.elements['familyHistory.diabetes.grandparents'].value,
		},
		highBloodPressure: {
			parents: healthForm.elements['familyHistory.highBloodPressure.parents'].value,
			grandparents: healthForm.elements['familyHistory.highBloodPressure.grandparents'].value,
		},
	};

	window.healthProfile = {
		currentAge,
		sex,
		activityLevel,
		weightLbs,
		heightFeet,
		heightInches,
		bmi: Number(bmi.toFixed(1)),
		smokingFrequency,
		drinkingFrequency,
		incomeUsd,
		location,
		familyHistory,
	};

	formMessage.removeAttribute('data-error');
	formMessage.textContent = `Profile saved. Your BMI is ${window.healthProfile.bmi}.`;
});
