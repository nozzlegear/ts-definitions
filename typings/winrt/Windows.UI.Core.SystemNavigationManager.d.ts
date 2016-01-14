declare namespace Windows.UI.Core
{
    /**
    An enum representing the visibility of the back button.
    */
    export enum AppViewBackButtonVisibility
    {
        visible = 0,
        collapsed = 1,
    }

    export class SystemNavigationManager
    {
        /**
        Returns an instance of the current SystemNavigationManager. Must be used to set appViewBackButtonVisibility and onbackrequested.
        */
        static getForCurrentView(): SystemNavigationManager;

        /**
        Controls the visibility of the back button in a Windows 10 app.
        */
        appViewBackButtonVisibility: AppViewBackButtonVisibility;

        /**
        A function that's fired when the back button is clicked.
        */
        onbackrequested: (event) => void;
    }
}