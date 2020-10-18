Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '8337281e-b31d-41f5-bff0-c0a95019224e',
    surveyPostId: '73137a8f-dfc5-4804-b8e3-f4b44dac0e87',
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
