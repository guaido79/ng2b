declare function $(selector: string): $.Bootstrap;

declare namespace $ {
    
    export interface Bootstrap {
        modal(options?: modal.Options);
        modal(method: modal.Methods);
        on(event: modal.Event, func: (event: any) => void);
    }

    namespace modal {
        export interface Options {
            keyboard?: boolean;
            backdrop?: string;
            show?: boolean;
        }

        export enum Methods {
            toggle,
            show,
            hide,
            handleUpdate
        }
        export enum Event {
            'show.bs.modal',
            'shown.bs.modal',
            'hide.bs.modal',
            'hidden.bs.modal',
            'loaded.bs.modal'
        }    
    }    
}
