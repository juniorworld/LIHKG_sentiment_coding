Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'a5b3dac6-ca0a-4e2f-a762-f4833850ae4c',
    surveyPostId:'e1ed9075-9f1a-441a-855a-d5a5200e08f5'
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
