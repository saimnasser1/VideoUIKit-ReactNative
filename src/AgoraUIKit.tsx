/* eslint-disable */
/**
 * @module AgoraUIKit
 */
 import React from 'react';
 import { View } from 'react-native';
 import RtcConfigure from './RTCConfigure';
 import { PropsProvider, PropsInterface, layout } from './PropsContext';
 import LocalControls from './Controls/LocalControls';
 import GridVideo from './GridVideo';
 import PinnedVideo from './PinnedVideo';
 
 /**
  * High level component to render the UI Kit
  * @param props {@link PropsInterface}
  */
 const AgoraUIKit: React.FC<PropsInterface> = props => {
   return (
     <PropsProvider value={props}>
       <View style={props.styleProps?.UIKitContainer}>
         <RtcConfigure>
           {props.rtcProps?.layout === layout.grid ? <GridVideo /> : <PinnedVideo />}
           <LocalControls
             encounterData={props.encounterData}
             showButton={props.rtcProps.layout !== layout.grid}
             renderMessageButton={props.renderMessageButton}
             showBottomButtons={props.showBottomButtons}
             countDownUntil={props.countDownUntil}
           />
         </RtcConfigure>
       </View>
     </PropsProvider>
   );
 };
 
 export default AgoraUIKit; 