Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'da36fbd5-907e-45b4-a57e-b5222ffeb668'
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
