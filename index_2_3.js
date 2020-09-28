Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'fbe2160b-29f1-4fe6-9bf5-ef37a779fb7d',
    surveyPostId:'090d819a-5e95-4be3-8dbe-79b84a4f36cb'
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
