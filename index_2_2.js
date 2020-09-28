Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '3e19d7aa-0370-4ccf-b6d1-0f4a17ffa866',
    surveyPostId:'87b006b7-e075-46de-a145-e2dba615b19b'
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
