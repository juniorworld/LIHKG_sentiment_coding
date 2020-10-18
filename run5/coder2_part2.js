Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'd5c1dc49-06a2-45d4-9f6d-30481f232d20',
    surveyPostId: '54b3b51f-0de3-497d-a303-237d9aebf881',
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
