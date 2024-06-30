import { Circle } from '@chakra-ui/react';

export default function AnswerButton({ answer, onAnswerClicked }) {
    const size = '12vmin';

    return (
        <Circle
            bg={ answer.answered ? 'white' : 'black' }
            onClick={(event) => onAnswerClicked(answer)}
            size={size}
            fontSize={'small'}
            position={'absolute'}
            top={answer.answerPosition.top}
            left={answer.answerPosition.left}
        >
            { answer.answered ? answer.answer : ""}
        </Circle>
    );
}
