import React, { useLayoutEffect, useState } from 'react';
import { IFrame } from '../blocks/iframe';
import { IFrameContainer } from '../blocks/iframe-container';
import { GenericLayout } from './generic-layout';
import { ErrorIcon, SpeedIcon } from '../icons';

export interface EmbeddedIframeProps {
  src: string;
}

export enum LOADING_STATE {
  INITIAL = 'initial',
  LOADING = 'loading',
  LOADED = 'loaded',
  TIMEOUT = 'timeout',
}

export const EmbeddedIframeLayout: React.FC<EmbeddedIframeProps> = ({ src }) => {

  const [state, setState] = useState<LOADING_STATE>(LOADING_STATE.INITIAL);
  const [errorTimeout, setErrorTimeout] = useState<NodeJS.Timeout>();

  const onUnmount = () => {
    setState(LOADING_STATE.INITIAL);
    clearTimeout(errorTimeout);
  };

  const onLoad = () => {
    setState(LOADING_STATE.LOADED);
    clearTimeout(errorTimeout);
  };

  const onTimeout = () => {
    setState(LOADING_STATE.TIMEOUT);
  };

  useLayoutEffect(() => {
    setState(LOADING_STATE.LOADING);
    setErrorTimeout(setTimeout(onTimeout, 10000));
    return onUnmount;
  }, [src]);

  switch (state) {
    case LOADING_STATE.LOADING:
    case LOADING_STATE.LOADED:
      return (
        <>
          {state === LOADING_STATE.LOADING && (
            <GenericLayout icon={<SpeedIcon />}>
              Loading
            </GenericLayout>)
          }
          <IFrameContainer loaded={state === LOADING_STATE.LOADED}>
            <IFrame onLoad={onLoad} src={src} scrolling={'auto'} />
          </IFrameContainer>
        </>
      );

    case LOADING_STATE.TIMEOUT:
      return (
        <GenericLayout icon={<ErrorIcon />}>
          Sorry, this tab didn't load in time
        </GenericLayout>
      );

    case LOADING_STATE.INITIAL:
    default:
      return null;
  }

};
