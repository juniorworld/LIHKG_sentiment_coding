Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '5bdd446b-37a9-459c-a9c9-9eb17794808e',
    surveyPostId: '1472f861-5cbd-4a5b-a309-76806fc7891e',
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
