type ModalState = {
    modal: boolean;
    [key: string]: string | boolean | Date | Object | Array;
}

type ModalStateWithoutModal = Omit<ModalState, 'modal'>;
