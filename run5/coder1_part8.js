Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '79c1fd78-67a5-4eec-8323-e9ddc98785c7',
    surveyPostId: 'a20aaf3e-e6b3-4b8e-9376-771cb5b139fb',
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
