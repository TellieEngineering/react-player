import { Component, ReactElement, CSSProperties } from 'react'
import ReactPlayer from './index'

interface SourceProps {
  src: string
  type: string
}

export interface BaseReactPlayerProps {
  url?: string | string[] | SourceProps[] | MediaStream
  playing?: boolean
  loop?: boolean
  controls?: boolean
  volume?: number
  muted?: boolean
  playbackRate?: number
  width?: string | number
  height?: string | number
  style?: CSSProperties
  progressInterval?: number
  playsinline?: boolean
  playIcon?: ReactElement
  pip?: boolean
  stopOnUnmount?: boolean
  light?: boolean | string
  wrapper?: any
  onReady?: (player: ReactPlayer) => void
  onStart?: () => void
  onPlay?: () => void
  onPause?: () => void
  onBuffer?: () => void
  onBufferEnd?: () => void
  onEnded?: () => void
  onClickPreview?: (event: any) => void
  onEnablePIP?: () => void
  onDisablePIP?: () => void
  onError?: (error: any, data?: any, hlsInstance?: any, hlsGlobal?: any) => void
  onDuration?: (duration: number) => void
  onSeek?: (seconds: number) => void
  onProgress?: (state: {
    played: number
    playedSeconds: number
    loaded: number
    loadedSeconds: number
  }) => void
  [otherProps: string]: any
}

export default class BaseReactPlayer<T extends BaseReactPlayerProps> extends Component<T, any> {
  static canPlay (url: string): boolean;
  static canEnablePIP (url: string): boolean;
  static addCustomPlayer (player: ReactPlayer): void;
  static removeCustomPlayers (): void;
  seekTo (amount: number, type?: 'seconds' | 'fraction'): void;
  getCurrentTime (): number;
  getSecondsLoaded (): number;
  getDuration (): number;
  getInternalPlayer (key?: string): Record<string, any>;
  showPreview (): void;
}
