Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '8229a3af-6b66-40b0-b314-c921650f309f',
    surveyPostId:'867aad4d-fd60-4e67-912e-38f3d00a11de'
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
