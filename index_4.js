Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'bffce241-70af-4f92-ac6e-f38d886f9d1d',
    surveyPostId:'c055ffe6-8ed9-4054-bc72-9362408305cc'
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
