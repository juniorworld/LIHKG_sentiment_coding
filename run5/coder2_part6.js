Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '1c88a40a-0ecd-4c5a-b39a-5aa2320addff',
    surveyPostId: 'a8b12fd7-9261-4221-966e-2622e45a0106',
    surveyShowDataSaving:true
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            .textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});
