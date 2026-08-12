export {};

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: {
              credential?: string;
            }) => void;
          }) => void;

          renderButton: (
            element: HTMLElement,
            options: {
              type?: "standard" | "icon";
              theme?: "outline" | "filled_blue" | "filled_black";
              size?: "small" | "medium" | "large";
              shape?: "rectangular" | "pill" | "circle" | "square";
              width?: number;
              text?: string;
              logo_alignment?: "left" | "center";
            },
          ) => void;

          disableAutoSelect?: () => void;
          cancel?: () => void;
        };
      };
    };
  }
}