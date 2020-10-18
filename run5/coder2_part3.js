Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'cbfe0297-ec05-4e26-aed9-6bf9bf1e4077',
    surveyPostId: 'e6ef278e-ce8a-45f3-a315-3e8b0faa91c6',
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
