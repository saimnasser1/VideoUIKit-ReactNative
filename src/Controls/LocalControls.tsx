import React, { useContext } from 'react';
import { View } from 'react-native';
import LocalUserContextComponent from '../LocalUserContext';
import PropsContext, { role } from '../PropsContext';
import styles from '../Style';
import EndCall from './Local/EndCall';
import LocalAudioMute from './Local/LocalAudioMute';
import LocalVideoMute from './Local/LocalVideoMute';
import SwitchCamera from './Local/SwitchCamera';

function Controls(props) {
  const { styleProps, rtcProps } = useContext(PropsContext);
  const { localBtnContainer, maxViewRemoteBtnContainer } = styleProps || {};
  const { showButton, encounterData, renderMessageButton, showBottomButtons, patientCard } = props;

  return (

    <LocalUserContextComponent>

      {showButton && showBottomButtons ? (
        <View
          style={{
            ...styles.Controls,
            bottom: styles.Controls.bottom + 70,
            ...(maxViewRemoteBtnContainer as object),
          }}>
          {encounterData.userRole === 'ROLE_DOCTOR' && patientCard?.()}
        </View>
      ) : (
        <></>
      )}

      <View style={{ ...styles.Controls, ...(localBtnContainer as object) }}>
        {rtcProps.role === role.Audience ? (
          <EndCall />
        ) : showBottomButtons ? (
          <>
            <LocalAudioMute />
            <LocalVideoMute />
            <EndCall />
            <SwitchCamera />
            {renderMessageButton?.()}
          </>
        ) : (<></>)}
      </View>
      {/* {showButton ? (
        <MaxUidConsumer>
          {(users) => (
            <View
              style={{
                ...styles.Controls,
                bottom: styles.Controls.bottom + 70,
                ...(maxViewRemoteBtnContainer as object),
              }}>
              <RemoteControls user={users[0]} showRemoteSwap={false} />
            </View>
          )}
        </MaxUidConsumer>
      ) : (
        <></>
      )} */}
    </LocalUserContextComponent>
  );
}

export default Controls;