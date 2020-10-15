Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'f337c060-a304-42c7-aaf8-87702780bb44',
    surveyPostId:'8e440497-cdc8-4208-a618-114dfea323ec'
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
