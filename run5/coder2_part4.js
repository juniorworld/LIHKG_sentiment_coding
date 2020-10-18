Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '90bb1b1f-5318-4d53-acf7-edb2dde2f335',
    surveyPostId: '9a920678-75ca-4fbe-811d-b81809ae5e44',
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
