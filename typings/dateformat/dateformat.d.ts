declare module "dateformat"
{
    interface __DateFormat
    {
        (date: Date, format: string): string;
        
        masks: {};
    } 
    
    var dateFormat: __DateFormat;
    
    export = dateFormat;
}