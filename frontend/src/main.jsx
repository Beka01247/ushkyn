import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { AuthContext, AuthContextProvider } from './context/authContext.jsx'
import { TopicContextProvider } from './context/topicContext.jsx'
import { MantineProvider } from '@mantine/core'


  ReactDOM.createRoot(document.getElementById("root")).render(

      <AuthContextProvider>
        <TopicContextProvider>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <App />
          </MantineProvider>
        </TopicContextProvider>
      </AuthContextProvider>
  );

  // just comment