# Chatwoot Widget for React and NextJS
[Chatwoot](https://www.chatwoot.com/) is an open-source customer engagement suite. This library allows you to easily import and run Chatwoot widget in your React or NextJS app. 
The only required prop is your website token. You can obtain your website token from the settings of the website you defined previously.

```bash
npm i chatwoot-react
```

<br/>

![Chatwoot Token](https://raw.githubusercontent.com/canburaks/chatwoot-react/main/assets/chatwoot-token.webp)




## Chatwoot Widget (React)
The `ChatwootScript` component only takes `token` prop which is unique for your site. 


```jsx
import React from "react"
import { ChatwootScript } from "chatwoot-react"

function App() {
    return (
        <div className="App">
            {/* 
                Your existing code
            */}

            <ChatwootScript token="RzAAsV7TNQJBuSRAqD11GSnvnF" />
        </div>
    );
}
```

## Chatwoot Widget (NextJS)
The `ChatwootNextScript` component requires `token` prop which is unique for your site. Basically, it uses [next/script](https://nextjs.org/docs/api-reference/next/script) component.  

```jsx
import { ChatwootNextScript } from "chatwoot-react"

function Layout({ children }) {
    return (
        <>
            {/*
                Your existing code
            */}
            <ChatwootNextScript token="RzAAsV7TNQJBuSRAqD11GSnvnF"  />
        </>
    )
}
```


