Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'f579adbe-6b36-4805-934d-02c543b50b20',
    surveyPostId: 'bdfb9046-3462-417a-9b0e-bc94e7af4d46',
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
