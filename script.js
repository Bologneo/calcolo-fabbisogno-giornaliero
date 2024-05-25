function calculateCalories() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);

    let BMR;

    if (gender === 'male') {
        BMR = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        BMR = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const totalCalories = BMR * activity;

    document.getElementById('result').innerText = `Il tuo fabbisogno calorico giornaliero è di circa ${Math.round(totalCalories)} calorie.`;
}
