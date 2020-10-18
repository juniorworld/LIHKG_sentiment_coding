Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '752bfab4-c12b-48d7-af20-3b399bab1103',
    surveyPostId: '486dcf82-007f-44d0-963e-e79601c02058',
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
