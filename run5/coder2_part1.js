Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '575c7702-bc49-46fd-80bb-e5e9e56024d1',
    surveyPostId: '36c543bf-02f8-406b-96c0-163b47d3c2d6',
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
