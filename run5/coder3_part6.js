Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '3f0224b0-75e3-4a57-91ea-62a41749a122',
    surveyPostId: 'd000ae0b-83dc-4f04-b339-ca952a0e6ce7',
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
