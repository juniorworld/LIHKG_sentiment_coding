Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '3e6e1c2f-4a2f-44ae-8a28-68188dd9501f',
    surveyPostId: 'af33fa16-3a5a-4574-a263-9f12ad1e606a',
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
