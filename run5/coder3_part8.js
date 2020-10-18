Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '0a030cc5-264d-44ac-9f27-fe5a6e1a37b1',
    surveyPostId: '2c2c0c7c-db55-40a3-87d9-f87e3e03787e',
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
