Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '9494d563-2cb9-45ee-8107-3e64ff36e832',
    surveyPostId: '28d29925-fb6c-4e2d-83e4-fad76e4bfef7',
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
