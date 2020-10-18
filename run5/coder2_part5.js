Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '54ad559f-5df7-48d2-9487-1bb1c2adfa64',
    surveyPostId: '13582f0b-513a-44f8-ae10-db6a534df06b',
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
