Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'fb15e5a5-56d2-407a-9c6c-0b39eae1ef1f',
    surveyPostId: '45cdcbac-5f66-4833-8858-6da75a86b528',
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
