Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'b72689a2-5744-4359-8188-1f38c644108a',
    surveyPostId: '33d43bf7-be61-47b5-a2fa-7a940f64d71f',
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
