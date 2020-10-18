Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '54cd11a0-29e2-417d-8928-be50631360df',
    surveyPostId: '2ad821df-5c2b-41a5-91f1-91bd91805b9b',
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
