Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'a7b8010b-11bc-4381-a55a-ae18d38e5f47',
    surveyPostId: '8071c194-1dd3-4bb3-a4e8-b2d9995f2f98',
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
