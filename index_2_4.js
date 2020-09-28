Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '835ab087-903a-460f-91e6-05cef1aca2e9',
    surveyPostId:'8d932294-753b-444c-8b45-55893e936b6d'
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
