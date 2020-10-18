Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '069d4b4e-d015-4929-99f6-30b3ecbe730b',
    surveyPostId: 'ca8b29f6-d824-481d-97bc-65c9d560c2b9',
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
