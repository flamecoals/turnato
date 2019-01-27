import * as React from 'react';
import Notification from 'react-web-notification';
import { GameMode } from './GameModePicker';
import AlertLayer from './AlertLayer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { GameSharing } from '../../App/Game/GameSharing';
import { IGameDef, GAMES_MAP } from '../../games';

export interface IGameArgs {
  gameCode: string;
  mode: GameMode;
  matchCode?: string;
  playerID?: string;
}

export function gameBoardWrapper(args: IGameArgs) {
  class Board extends React.Component<any, {}> {
    state = { dismissedSharing: false };
    render() {
      const props: any = {
        ...this.props,
        gameArgs: args,
      };
      let alert = this._getGameSharing();
      if (!this.props.isConnected) {
        alert = this._getConnectionLost();
      }
      const gameDef: IGameDef = GAMES_MAP[args.gameCode];
      const child = React.createElement(gameDef.bgioBoard, props);
      if (!alert) {
        return child;
      }
      const notification = this._getNotification();
      return (
        <div style={{ width: '100%', height: '100%' }}>
          {notification}
          {child}
          <MuiThemeProvider>
            {alert}
          </MuiThemeProvider>
        </div>
      );
    }

    _dismissSharing = () => {
      this.setState({ dismissedSharing: true });
    }

    _getGameSharing() {
      if (!this.state.dismissedSharing && args.matchCode &&
        args.playerID === '0') {
        return (
          <AlertLayer>
            <GameSharing
              gameCode={args.gameCode}
              matchCode={args.matchCode}
              playerID={args.playerID}
              onDismiss={this._dismissSharing}
            />
          </AlertLayer>
        );
      }
      return null;
    }

    _getConnectionLost() {
      return (
        <AlertLayer>
          <h1>Connection lost</h1>
          Trying to connect...
        </AlertLayer>
      );
    }
    _getNotification() {
      if (args.playerID === this.props.ctx.currentPlayer) { // && this.props.ctx.phase === 'play') // doesn't work?
        return (<Notification title={'Your Turn!'} />);
      }
    }
  }
  return Board;
}
