Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: 'e2272807-fa14-4691-a39d-5a545a2a889f',
    surveyPostId:'ef7d21ff-4772-464d-b5a4-598e99f82eb0'
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
