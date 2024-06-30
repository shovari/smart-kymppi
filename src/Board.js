import { Box, Center, Flex } from '@chakra-ui/react';
import { useState } from 'react';
import AnswerButton from './AnswerButton';
import cardsJson from './cards.json';
import OptionBox from './OptionBox';
import QuestionCircle from './QuestionCircle';
import { lerp, toPercent } from './Utils';

export default function Board() {
    const smartBoxSize = '75vmin';
    const [cards, setCards] = useState(cardsJson.cards);
    const [currentCard, setCurrentCards] = useState(getCurrentCard());
    const [answers, setAnswers] = useState(getAnswers());

    function getCurrentCard() {
        return cards[Math.floor((Math.random() * cards.length))];
    }

    function getAnswers() {
        const coordinates = getCircleCoordinates(currentCard.options.length);
        return currentCard.options.map((option, index) => ({
            id: index,
            answered: false,
            answer: "",
            answerPosition: convertCoordinateToPosition(coordinates[index], 2, 82),
            option: option.option,
            optionPosition: convertCoordinateToPosition(coordinates[index], 20, 64)
        }));
    }

    function getCircleCoordinates(n) {
        const coordinates = [];
        const radius = 1;
        for (let k = 0; k < n; k++) {
            const theta = (Math.PI / 2) + k * (2 * Math.PI / n);
            const x = radius * Math.cos(theta);
            const y = radius * Math.sin(theta);
            coordinates.push({ x: x, y: y });
        }
        
        return coordinates;
    }

    function convertCoordinateToPosition(coordinate, min, max) {
        const left = toPercent(lerp(min, max, (coordinate.x + 1) / 2));
        const top = toPercent(lerp(min, max, (coordinate.y + 1) / 2));

        return { left: left, top: top };
    }

    const onAnswerClicked = (answer) => {
        const index = answers.findIndex(a => answer.id === a.id);
        const answersDeepCopy = JSON.parse(JSON.stringify(answers));
        answersDeepCopy[index].answered = true;
        answersDeepCopy[index].answer = currentCard.options[index].answer;
        setAnswers(answersDeepCopy);
    }

    return (
        <Box textAlign={'center'} fontSize={'xl'} bg={'#282828'}>
            <Flex width={'100vw'} height={"100vh"} alignContent={"center"} justifyContent={"center"}>
                <Center>
                    <Box bg={'orange'} rounded={'md'} width={smartBoxSize} height={smartBoxSize} position={'relative'} boxShadow='dark-lg'>
                        {answers.map((answer, index) =>
                            <AnswerButton
                                answer={answer}
                                onAnswerClicked={onAnswerClicked}
                                key={"answer-button-" + index}
                            />
                        )}
                        <QuestionCircle
                            question={currentCard.question}
                        />
                        {answers.map((answer, index) =>
                            <OptionBox
                                answer={answer}
                                key={"answer-button-" + index}
                            />
                        )}
                    </Box>
                </Center>
            </Flex>
        </Box>
    );
}
