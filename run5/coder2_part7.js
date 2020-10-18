Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '2a569a20-c0b6-4603-91ac-fecc476e8e14',
    surveyPostId: '6c799c35-3f92-4548-933a-9ad65362d932',
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
