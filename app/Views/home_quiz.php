<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz App</title>
    <link rel="stylesheet" href="bootstrap-5.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="js/script.js" defer></script>
</head>
<body>
    <div class="card container-center" style="width: 40rem;" id="quiz">
        <div class="card-body question-answer">
            <h2 id="question">Question text</h2>
            <div class="answer-con">
                <div class="form-check">
                    <input class="form-check-input answer" type="radio" name="answer" id="a">
                    <label class="form-check-label" for="a" id="a_answer">
                        Answer
                    </label>

                </div>
                <div class="form-check">
                    <input class="form-check-input answer" type="radio" name="answer" id="b">
                    <label class="form-check-label" for="b" id="b_answer">
                        Answer
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input answer" type="radio" name="answer" id="c">
                    <label class="form-check-label" for="c" id="c_answer">
                        Answer
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input answer" type="radio" name="answer" id="d">
                    <label class="form-check-label" for="d" id="d_answer">
                        Answer
                    </label>
                </div>
            </div>
        </div>
        <button id="submit">Submit</button>
    </div>

</body>
</html>
