declare module'*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const className: IClassNames;
    export = className;
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.ttf';
declare module '*.svg' {
    import React from 'react';

    const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
    export default SVG;
}