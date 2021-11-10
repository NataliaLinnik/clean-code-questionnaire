import { getAnalysedResults, getCorrectAnswerLabel, isUserAnswerTrue, getUserAnswerLabel, calcScore, updateUserAnswers, addAdditionalOptionToAnswers } from "./utils/questionnaireLogik";

const sampleData = [
  {
    "question": "Which of these animals is a mammal?",
    "answers": [
      {
        "label": "Ant",
        "value": false
      },
      {
        "label": "Bee",
        "value": false
      },
      {
        "label": "Cat",
        "value": true
      }
    ]
  },
  {
    "question": "What is the sum of 2+3?",
    "answers": [
      {
        "label": "2",
        "value": false
      },
      {
        "label": "5",
        "value": true
      },
      {
        "label": "6",
        "value": false
      }
    ]
  },
]

const userSampleAnswers= [3, 1]

let sampleResult = {
  score: 1,
  results: [
    { question: 'Which of these animals is a mammal?', userAnswer: 'Don`t know', correctAnswer: "Cat" },
    { question: "What is the sum of 2+3?", userAnswer: "5", correctAnswer: '' }
  ]
}
  
const userAnswersList = [3, 1, 2, 0, 2, 3, 1, 0]
const updatedUserAnswersList = [3, 2, 2, 0, 2, 3, 1, 0]

const answersWithFourthOption = [
      {
        "label": "Ant",
        "value": false
      },
      {
        "label": "Bee",
        "value": false
      },
      {
        "label": "Cat",
        "value": true
      },
      {
        "label": "Don`t know",
        "value": false
      }
    ]

test('should evaluate user results', () => {
  const result = getAnalysedResults(sampleData, userSampleAnswers)
  expect(result).toStrictEqual(sampleResult);
});

test('should check for correct answer label', () => {
  const correctAnswer = getCorrectAnswerLabel(sampleData[0].answers)
  expect(correctAnswer).toStrictEqual("Cat");
});

test('should check right user answer', () => {
  const isAnswerTrue = isUserAnswerTrue(sampleData[0].answers, 2)
  expect(isAnswerTrue).toStrictEqual(true);
});

test('should check user "Don`t know" answer', () => {
  const isAnswerTrue = isUserAnswerTrue(sampleData[0].answers, 3)
  expect(isAnswerTrue).toStrictEqual(false);
});

test('should check user wrong answer', () => {
  const isAnswerTrue = isUserAnswerTrue(sampleData[0].answers, 0)
  expect(isAnswerTrue).toStrictEqual(false);
});

test('should check user answer label', () => {
  const userAnswerLabel = getUserAnswerLabel(sampleData[0].answers, 0)
  expect(userAnswerLabel).toStrictEqual("Ant");
});

test('should check user answer label "Don`t know"', () => {
  const userAnswerLabel = getUserAnswerLabel(sampleData[0].answers, 3)
  expect(userAnswerLabel).toStrictEqual('Don`t know');
});

test('should calculate score percent by 5 of 10 right questions', () => {
  const percentage = calcScore(5, 10)
  expect(percentage).toStrictEqual(50);
});

test('should calculate score percent by 0 of 10 right questions', () => {
  const percentage = calcScore(0, 10)
  expect(percentage).toStrictEqual(0);
});


test('should calculate score percent by 10 of 10 right questions', () => {
  const percentage = calcScore(10, 10)
  expect(percentage).toStrictEqual(100);
});


test('should calculate score percent by 1 of 10 right questions', () => {
  const percentage = calcScore(1, 10)
  expect(percentage).toStrictEqual(10);
});

test('should refresh user answers list', () => {
  const newUserAnswersArray = updateUserAnswers(userAnswersList, 2, 1)
  expect(newUserAnswersArray).toStrictEqual(updatedUserAnswersList);
});

test('should add additional "Don`t know" option', () => {
  const newAnswersArray = addAdditionalOptionToAnswers(sampleData[0].answers)
  expect(newAnswersArray).toStrictEqual(answersWithFourthOption);
});

test('should check additional "Don`t know" option for false value', () => {
  const newAnswersArray = addAdditionalOptionToAnswers(sampleData[0].answers)
  expect(newAnswersArray[3].value).toStrictEqual(false);
});
