Survey
    .StylesManager
    .applyTheme("modern");

var json = {
    surveyId: '25310e32-ade8-4b04-959a-6f53a673a06f',
    surveyPostId:'26dddb88-159a-4c8b-bbdb-1397d3371874'
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
