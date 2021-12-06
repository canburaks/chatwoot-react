import React from "react"
import { useEffect, Fragment, SyntheticEvent } from "react"

export interface ChatwootProps {
    token: string;
}
declare global {
    interface Window {
        chatwootSDK: any;
    }
}
function ChatwootScript(props: ChatwootProps) {
    const { token } = props
    const BASE_URL = "https://app.chatwoot.com";
    const SCRIPT_URL = BASE_URL + "/packs/js/sdk.js"
    //const status = useScript(SCRIPT_URL)

    //console.log("status", status)

    function onLoadHandler(e:Event) {
        (e.target as HTMLScriptElement).setAttribute("data-status", "ready")
        if (!token) {
            console.error("Chatwoot SDK requires token.")
        }
        if (!window.chatwootSDK) {
            console.error("Chatwoot SDK didn't load from the source and will not be initialized.")
        }
        window.chatwootSDK.run({
            websiteToken: token,
            baseUrl: BASE_URL
        })
    }
    function onErrorHandler(e:Event) {
        (e.target as HTMLScriptElement).setAttribute("data-status", "error")
    }
    const checkExistingScript = ():HTMLScriptElement | null => document.querySelector(`script[src="${SCRIPT_URL}"]`)

    useEffect(() => {
        if (typeof token !== "string") {
            console.error("Chatwoot SDK requires token.")
        }
        // Check if it is attached to DOM before
        let existingScriptEl:HTMLScriptElement | null = checkExistingScript();

        if (!existingScriptEl) {
            let scriptEl: HTMLScriptElement = document.createElement("script")
            scriptEl.id = "chatwoot-script"
            scriptEl.src = SCRIPT_URL
            scriptEl.async = true
            scriptEl.defer = true
            scriptEl.addEventListener("load", onLoadHandler)
            scriptEl.addEventListener("error", onErrorHandler)
            document.body.appendChild(scriptEl)
            return () => scriptEl.removeEventListener("load", onLoadHandler)
        }

    }, [])
    return (
        <Fragment />
    )
}

export default ChatwootScript;
