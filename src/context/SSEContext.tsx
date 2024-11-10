"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

interface SSEContextType {
  sseSource: EventSource | null;
}

const SSEContext = createContext<SSEContextType>({sseSource: null });

const SSEContextProvider = (props: any) => {
  const [eventSource, setEventSource] = useState<EventSource | null>(null);

  useEffect(() => {
    const sseSource = new EventSource(
      `${String(process.env.NEXT_PUBLIC_API_URL)}/stream`,
      { withCredentials: true,  }
    );
    setEventSource(sseSource);

    sseSource.addEventListener('message', (ev) => {
      console.log("Client is connected to server stream ~ ", ev.data);
    });

    sseSource.addEventListener('ping', (ev) => {
      console.log("Server heatbeat ~ ping ", ev.data);
    });
    // log error connection
    sseSource.onerror = (ev) => {
      console.log("Server heatbeat ", ev);
    };

    return () => {
      sseSource.close();
    };
  }, []);


  return (
    <SSEContext.Provider value={{ sseSource: eventSource}}>
      {props.children}
    </SSEContext.Provider>
  );
};

export const useSSEContext = (): SSEContextType => useContext(SSEContext);

export default SSEContextProvider;
