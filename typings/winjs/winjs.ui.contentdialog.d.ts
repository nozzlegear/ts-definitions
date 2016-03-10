declare module WinJS.UI
{
    export interface ContentDialogOptions
    {
        /**
        Gets the DOM element that hosts the ContentDialog.
        */
        element?: HTMLElement;

        /**
        Gets or sets whether the dialog's primary command button is disabled. 
        */
        primaryCommandDisabled?: boolean;

        /**
        Gets or sets the text of the dialog's primary command.
        */
        primaryCommandText?: string;

        /**
        Gets or sets whether the dialog's secondary command button is disabled. 
        */
        secondaryCommandDisabled?: boolean;

        /**
        Gets or sets the text of the dialog's secondary command.
        */
        secondaryCommandText?: string;

        /**
        Gets or sets the dialog's title.
        */
        title?: string;

        /**
        Raised immediately after the dialog is hidden.
        */
        onafterhide?: (event: Event) => void;

        /**
        Raised immediately after the dialog is shown.
        */
        onaftershow?: (event: Event) => void;

        /**
        Occurs before the dialog is hidden. When you call preventDefault on this event, the dialog does not hide. 
        */
        onbeforehide?: (event: Event) => void;

        /**
        Occurs before the dialog is shown. When you call preventDefault on this event, the dialog does not show and the show promise is completed with a canceled promise. 
        */
        onbeforeshow?: (event: Event) => void;
    }

    /**
    ContentDialog controls should be direct children of document.body. Otherwise, it is possible to mask event detection on the ContentDialog due to stacking context effects. 
    */
    export class ContentDialog implements ContentDialogOptions
    {
        constructor(element?: HTMLElement, options?: ContentDialogOptions);

        /**
        Gets a value that specifies the reason a dialog was dismissed. This is a static property.
        */
        DismissalResult: string;

        /**
        Gets a value that indicates whether the dialog is hidden.
        */
        hidden: boolean;

        /**
        Displays the dialog.
        */
        show();

        /**
        Dismisses the dialog. 
        */
        hide();

        /**
        Releases resources held by the ContentDialog. Call this method when the ContentDialog is no longer needed. After calling this method, the ContentDialog becomes unusable. 
        */
        dispose();

        /**
        Registers an event handler for the specified event. 
        */
        addEventListener(type: string, listener: Function, useCapture?: boolean);

        /**
        Removes an event handler registered with addEventListener.
        */
        removeEventListener(type: string, listener: Function, useCapture?: boolean);


        //#region Interface properties

        /**
        Gets the DOM element that hosts the ContentDialog.
        */
        element: HTMLElement;

        /**
        Gets or sets whether the dialog's primary command button is disabled. 
        */
        primaryCommandDisabled: boolean;

        /**
        Gets or sets the text of the dialog's primary command.
        */
        primaryCommandText: string;

        /**
        Gets or sets whether the dialog's secondary command button is disabled. 
        */
        secondaryCommandDisabled: boolean;

        /**
        Gets or sets the text of the dialog's secondary command.
        */
        secondaryCommandText: string;

        /**
        Gets or sets the dialog's title.
        */
        title: string;

        /**
        Raised immediately after the dialog is hidden.
        */
        onafterhide: (event: Event) => void;

        /**
        Raised immediately after the dialog is shown.
        */
        onaftershow: (event: Event) => void;

        /**
        Occurs before the dialog is hidden. When you call preventDefault on this event, the dialog does not hide. 
        */
        onbeforehide: (event: Event) => void;

        /**
        Occurs before the dialog is shown. When you call preventDefault on this event, the dialog does not show and the show promise is completed with a canceled promise. 
        */
        onbeforeshow: (event: Event) => void;

        //#endregion
    }
}