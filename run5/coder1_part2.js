Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '3aad91c0-78f5-484c-9644-ea5a48794077',
    surveyPostId: 'c372cf23-67ef-4d4d-ae9a-1d3d9e0eb0b1',
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
