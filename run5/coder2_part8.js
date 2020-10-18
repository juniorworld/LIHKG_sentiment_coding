Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'cee1caab-fbb3-4abb-ad18-10040a8721b0',
    surveyPostId: '890cb4aa-7950-4db7-9f1e-05b3dce2f544',
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
