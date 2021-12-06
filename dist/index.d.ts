/// <reference types="react" />
interface ChatwootProps {
    token: string;
}
declare global {
    interface Window {
        chatwootSDK: any;
    }
}
declare function ChatwootScript(props: ChatwootProps): JSX.Element;

interface ChatwootNextProps {
    token: string;
    lazyOnLoad: true | undefined;
    beforeInteractive: true | undefined;
    afterInteractive: true | undefined;
    async: true | undefined;
    defer: true | undefined;
}
declare global {
    interface Window {
        chatwootSDK: any;
    }
}
declare function ChatwootNextScript(props: ChatwootNextProps): JSX.Element;

export { ChatwootNextScript, ChatwootScript };
