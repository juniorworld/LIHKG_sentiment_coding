Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'c5823224-9dbd-4c81-8f65-4a479957e6e5',
    surveyPostId: '210e9fd3-f651-415c-a5de-94e31a8f35da',
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
