Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'edfb9c2e-4083-4154-baad-be4b6bf9e5c3',
    surveyPostId: '37db0769-7233-4905-bf52-9e11cee20b38',
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
