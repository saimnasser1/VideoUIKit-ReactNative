import React, { useContext } from 'react';
import { RtcLocalView, RtcRemoteView, VideoRenderMode } from 'react-native-agora';
import PropsContext from './PropsContext';
import { UidInterface } from './RtcContext';
import styles from './Style';

const LocalView = RtcLocalView.SurfaceView;
const RemoteView = RtcRemoteView.SurfaceView;

interface MaxViewInterface {
  user: UidInterface;
}
/**
 * MaxVideoView takes in a user and renders the video
 */
const MaxVideoView: React.FC<MaxViewInterface> = props => {
  const { styleProps } = useContext(PropsContext);
  const { maxViewStyles, videoMode } = styleProps || {};
  const renderModeProp = videoMode?.max;

  return props.user.uid === 'local' ? (
    <LocalView
      style={[{ ...styles.fullView, ...(maxViewStyles as object) }]}
      renderMode={renderModeProp ? renderModeProp : VideoRenderMode.Hidden}
    />
  ) : (
    <>
      <RemoteView
        style={{ ...styles.fullView, ...(maxViewStyles as object) }}
        uid={props.user.uid as number}
        renderMode={renderModeProp ? renderModeProp : VideoRenderMode.Hidden}
      />
    </>
  );
};

export default MaxVideoView;
