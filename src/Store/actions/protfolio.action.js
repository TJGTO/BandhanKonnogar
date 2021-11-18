
export const OPEN_DIALOG = 'OPEN_DIALOG';
export const CLOSE_DIALOG = 'CLOSE_DIALOG';

export function OpenDialog(data) {
    
	return {
		type: OPEN_DIALOG,
        payload : data
	};
}
export function CloseDialog(){
    
	return {
		type: CLOSE_DIALOG,
	};
}
