import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { IFrame } from '../blocks/iframe';
import { IFrameContainer } from '../blocks/iframe-container';
import { GenericLayout } from './generic-layout';
import { ErrorIcon, SpeedIcon } from '../icons';

export interface EmbeddedIframeProps {
  url: string;
  timeout: number;
}

export enum LOADING_STATE {
  INITIAL = 'initial',
  LOADING = 'loading',
  LOADED = 'loaded',
  TIMEOUT = 'timeout',
}

export const EmbeddedIframeLayout: React.FC<EmbeddedIframeProps> = ({ url, timeout }) => {

  const [state, setState] = useState<LOADING_STATE>(LOADING_STATE.INITIAL);
  const errorTimeout = useRef<NodeJS.Timeout>(null);

  const onUnmount = useCallback(() => {
    setState(LOADING_STATE.INITIAL);
    clearTimeout(errorTimeout.current);
  }, [setState, errorTimeout]);

  const onLoad = () => {
    setState(LOADING_STATE.LOADED);
    clearTimeout(errorTimeout.current);
  };

  const onTimeout = () => {
    setState(LOADING_STATE.TIMEOUT);
  };

  useLayoutEffect(() => {
    setState(LOADING_STATE.LOADING);
    errorTimeout.current = setTimeout(onTimeout, timeout);
    return onUnmount;
  }, [onUnmount, setState, errorTimeout, timeout]);

  switch (state) {
    case LOADING_STATE.LOADING:
    case LOADING_STATE.LOADED:
      return (
        <>
          {state === LOADING_STATE.LOADING && (
            <GenericLayout data-test-id={'loading'} icon={<SpeedIcon />}>
              Loading
            </GenericLayout>)
          }
          <IFrameContainer loaded={state === LOADING_STATE.LOADED}>
            <IFrame
              data-test-loaded={state === LOADING_STATE.LOADED}
              onLoad={onLoad}
              scrolling={'auto'}
              src={url}
            />
          </IFrameContainer>
        </>
      );

    case LOADING_STATE.TIMEOUT:
      return (
        <GenericLayout data-test-id={'error'} icon={<ErrorIcon />}>
          Sorry, this tab didn't load in time
        </GenericLayout>
      );

    case LOADING_STATE.INITIAL:
    default:
      return null;
  }

};
