Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'b4bf9c9e-aa4a-47f5-a97d-81f30e3b6131'
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