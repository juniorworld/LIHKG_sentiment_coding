
Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '27c0ae0d-3462-435e-9053-42c822e77592';
    surveyPostId:'2bf1d12d-7661-45cd-9897-10de39432e85'
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
