Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'fdae8bf8-ef7f-4042-8138-96915c4c8eca',
    surveyPostId: '56ff73ce-31c1-43e6-af85-def769c8a17e',
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
