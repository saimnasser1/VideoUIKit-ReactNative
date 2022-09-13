import React, {useContext} from 'react';
import PropsContext from '../../PropsContext';
import RtcContext, {DispatchType} from '../../RtcContext';
import BtnTemplate from '../BtnTemplate';
import styles from '../../Style';
import {LocalContext} from '../../LocalUserContext';

function LocalVideoMute(props) {
  const {styleProps} = useContext(PropsContext);
  const {localBtnStyles} = styleProps || {};
  const {muteLocalVideo} = localBtnStyles || {};
  const {dispatch} = useContext(RtcContext);
  const local = useContext(LocalContext);
  const { setShowVideo } = props

  return (
    <BtnTemplate
      name={local.video ? 'videocam' : 'videocamOff'}
      style={{...styles.localBtn, ...(muteLocalVideo as object)}}
      onPress={() => {
       setShowVideo()
        setTimeout(() => {
          (dispatch as DispatchType<'LocalMuteVideo'>)({
            type: 'LocalMuteVideo',
            value: [local.video],
          });
        }, 600);
      }}
    />
  );
}

export default LocalVideoMute;


