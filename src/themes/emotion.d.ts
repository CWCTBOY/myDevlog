import "@emotion/react";
declare module "@emotion/react" {
  export interface Theme {
    colors: {
      bgColor: {
        primary: string;
        transparent: string;
      };
      btnColor: {
        primary: string;
        onHover: string;
      };
      txtColor: {
        primary: string;
        accent: string;
        transparent: string;
      };
    };
    styles: {
      fontSize: {
        m: string;
        x: string;
        xl: string;
        xxl: string;
        title: string;
      };
      border: string;
      borderRadius: {
        semi: string;
        bold: string;
        circle: string;
      };
      boxShadow: string;
      transition: string;
      padding: string;
    };
  }
}
