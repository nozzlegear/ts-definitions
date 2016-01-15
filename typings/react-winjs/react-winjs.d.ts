/// <reference path="./../react/react.d.ts" />
/// <reference path="./../winjs/winjs.d.ts" />


declare namespace __ReactWinJS
{
    import React = __React;
    
    /**
     * Creates a callback function that renders a piece of data with the
     * @param data
     */
    function reactRenderer(data): (data) => (data) => React.Component<any, any> | JSX.Element;

    class AppBar extends React.Component<any, any>{ }

    namespace AppBar
    {
        class Button extends React.Component<any, any>{ }

        class Toggle extends React.Component<{ selected: boolean; }, any>{ }

        class Separator extends React.Component<any, any>{ }

        /**
        Provide the custom content as the child of this element.
        */
        class ContentCommand extends React.Component<any, any> { }

        /**
        Provide the flyout content as the child of this element.
        */
        class FlyoutCommand extends React.Component<{ flyoutComponent: any; }, any>{ }
    }

    class AutoSuggestBox extends React.Component<any, any>{ }

    class BackButton extends React.Component<any, any> { }

    class ContentDialog extends React.Component<any, any> { }

    class DatePicker extends React.Component<any, any> { }

    class FlipView extends React.Component<any, any> { }

    /**
    Provide the flyout content as the child of this element.
    */
    class Flyout extends React.Component<any, any> { }

    class Hub extends React.Component<any, any> { }

    namespace Hub
    {
        class Section extends React.Component<any, any>{ }
    }

    class ItemContainer extends React.Component<any, any>{ }

    interface IListViewProps extends React.Props<any>
    {
        /**
         * The list view's header element.
         */
        headerComponent?: React.Component<any, any>;

        /**
         * The list view's footer element. 
         */
        footerComponent?: React.Component<any, any>;

        /**
         * The list view's layout type. Valid values are WinJS.UI.ListLayout or WinJS.UI.GridLayout.
         */
        layout: { type: any };

        /**
         * THe list view's observable data source. Use new WinJS.Binding.List([]).dataSource.
         */
        itemDataSource: WinJS.UI.IListDataSource<any>;

        /**
        A function that generates a React component. Use the returned function from ReactWinJS.reactRenderer().
        */
        itemTemplate: (data) => (data) => React.Component<any, any> | JSX.Element;
    }
    
    class ListView extends React.Component<IListViewProps, any> { }
    
    interface IMenuProps extends React.Props<any>
    {
        button: any;
        toggle: any;
        separator: any;
        flyoutCommand: React.ComponentClass<any>;
    }

    /**
     * Every menu command must have a key 
     */
    class Menu extends React.Component<IMenuProps, any> { }

    interface IPivotProps extends React.Props<any>
    {
        customLeftHeaderComponent: React.Component<any, any>;    
        customRightHeaderComponent: React.Component<any, any>;
    }

    /**
     * Each Pivot.Item must have a key.
     */
    class Pivot extends React.Component<any, any> { }
    
    interface IRatingProps extends React.Props<any>
    {
        maxRating: number;
        userRating: number;
    }
    
    class Rating extends React.Component<IRatingProps, any> { }
    
    class SemanticZoom extends React.Component<any, any> { }
    
    interface ISplitViewProps extends React.Props<any>
    {
        paneComponent: React.ComponentClass<any>;
        contentComponent: React.ComponentClass<any>;
    }
    
    class SplitView extends React.Component<any, any> { }
    
    interface ISplitViewPaneToggleProps extends React.Props<any>
    {
        paneOpened: boolean;
    }
    
    class SplitViewPaneToggle extends React.Component<any, any> {}
    
    class TimePicker extends React.Component<any, any> {}
    
    class ToggleSwitch extends React.Component<any, any> {}
    
    class ToolBar extends React.Component<IMenuProps, any> {}
    
    interface ITooltipProps
    {
        contentComponent: React.ComponentClass<any>;
    }
    
    class Tooltip extends React.Component<ITooltipProps, any> {}
}

declare module "react-winjs"
{
    export =  __ReactWinJS;
}