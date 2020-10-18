Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'd0a72f24-ff5a-47ce-bf55-33e2f2a9c5b3',
    surveyPostId: 'a481bffd-9450-44ac-b855-7cb7fd39c06a',
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
