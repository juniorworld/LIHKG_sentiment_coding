Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'd87f96a6-ebcc-4421-bb12-770a1c90cde8',
    surveyPostId: '08ad3a50-d449-4467-8da7-dd587e43eaada',
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
