Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '55b803b0-c0c3-4e53-bcad-7e237ee48d04',
    surveyPostId: 'e69bdbfb-ebc7-477f-818a-b0b4055bce1c',
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
