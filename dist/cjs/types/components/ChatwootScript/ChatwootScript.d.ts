/// <reference types="react" />
export interface ChatwootProps {
    token: string;
}
declare global {
    interface Window {
        chatwootSDK: any;
    }
}
declare function ChatwootScript(props: ChatwootProps): JSX.Element;
export default ChatwootScript;
