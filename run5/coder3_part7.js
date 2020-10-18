Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'a384ce07-8e4e-4867-b9f7-9e7c939db3fa',
    surveyPostId: 'f3c6df5a-3f78-40f4-8812-c181e8ed3a51',
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
