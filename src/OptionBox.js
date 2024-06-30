import { Box } from '@chakra-ui/react';

export default function OptionBox({ answer }) {
    const size = '12vmin';

    return (
        <Box
            width={size}
            height={size}
            display={'flex'}
            flexDirection={'column'}
            justifyContent={'center'}
            fontSize={'small'}
            position={'absolute'}
            top={answer.optionPosition.top}
            left={answer.optionPosition.left}
        >
            {answer.option}
        </Box>
    );
}
