Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '166c3555-ab22-4afa-bca8-3896d558ae4e',
    surveyPostId: '4bca0c77-82ac-4e0c-bfff-9c05a97f8bed',
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
