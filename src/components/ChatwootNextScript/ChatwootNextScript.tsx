import React from "react"
import Script from 'next/script'

export interface ChatwootNextProps {
    token: string
    lazyOnLoad: true | undefined
    beforeInteractive: true | undefined
    afterInteractive: true | undefined
    async: true | undefined
    defer: true | undefined
}
declare global {
    interface Window {
        chatwootSDK: any;
    }
}
function ChatwootNextScript(props: ChatwootNextProps) {
    const { token, ...restProps } = props
    const BASE_URL = 'https://app.chatwoot.com'
    const SCRIPT_URL = BASE_URL + '/packs/js/sdk.js'

    function onLoadHandler() {
        if (!token) {
            console.error('Chatwoot SDK requires token.')
        }
        if (!window.chatwootSDK) {
            console.error("Chatwoot SDK didn't load from the source and will not be initialized.")
        }
        window.chatwootSDK.run({
            websiteToken: token,
            baseUrl: BASE_URL,
        })
    }

    return <Script id="chatwood-script" src={SCRIPT_URL} onLoad={onLoadHandler} {...restProps} />
}

export default ChatwootNextScript;
