import { Circle } from '@chakra-ui/react';

export default function QuestionCircle({ question }) {
    const size = '45vmin'

    return (
        <Circle
            bg={'white'}
            size={size}
            position={'absolute'}
            top={'20%'}
            left={'20%'}
        >
            {question}
        </Circle>
    );
}