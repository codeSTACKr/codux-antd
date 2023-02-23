import { createBoard } from '@wixc3/react-board';
import { AlertMessage } from '../../../components/alert-message/alert-message';

export default createBoard({
    name: 'AlertMessage',
    Board: () => <AlertMessage />,
    environmentProps: {
        canvasWidth: 777,
    },
});
