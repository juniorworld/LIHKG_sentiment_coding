Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'df096753-a8cd-41c1-85cb-6ba346ff6b96',
    surveyPostId:'399c5c91-9c32-46e0-b799-a20fc989a001'
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
