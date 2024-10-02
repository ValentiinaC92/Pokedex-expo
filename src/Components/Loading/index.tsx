import React from 'react';
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native';


type LoadingProps = ActivityIndicatorProps & {
  size?: 'small' | 'large';
  color?: string;
};

const Loading = ({ ...rest }: LoadingProps) => {
  return <ActivityIndicator size={"small"} color={"grey"} {...rest} />;
};

export default Loading;
