Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'dcfbf625-6d48-4191-86fd-543ddce6e73b',
    surveyPostId: '2438dff5-2559-495a-9b03-f1337e1a94ae',
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
